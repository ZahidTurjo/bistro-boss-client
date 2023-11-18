import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Fill, RiUser3Fill } from "react-icons/ri";
import Swal from "sweetalert2";


const AllUsers = () => {
   const axiosSecure=useAxiosSecure()
    
    const {refetch,data :users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await axiosSecure.get('/users')
           return res.data
        }
    })
const handleMakeAdmin=(id,name)=>{
    axiosSecure.patch(`users/admin/${id}`)
    .then(res=>{
        if(res.data.modifiedCount>0){
           refetch()
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} is admin now`,
  showConfirmButton: false,
  timer: 1500
});
        }
    })
}

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res=>{
                   if(res.data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
                   }
                })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        
      

    }

    
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All users :{users.length}</h2>
                <h2 className="text-3xl">Total users</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=> <tr key={user._id} >
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                
           { user.role==='admin'?'admin': <button
                  onClick={()=>handleMakeAdmin(user._id,user.name)}
                  className="btn btn-ghost ">
                  < RiUser3Fill className="text-3xl text-red-600 font-bold" />
                  </button>}
            </td>
            <td>
            <button
                  onClick={()=>handleDelete(user._id)}
                  className="btn btn-ghost ">
                  < RiDeleteBin6Fill className="text-3xl text-red-600 font-bold" />
                  </button>
            </td>
            
          </tr>
         )
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;