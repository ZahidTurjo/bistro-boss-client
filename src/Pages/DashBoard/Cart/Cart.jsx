import { RiDeleteBin6Fill } from "react-icons/ri";

import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
    const [cart, refetch]=useCart()

    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure=useAxiosSecure()
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
                axiosSecure.delete(`/carts/${id}`)
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
        


// axiosSecure.delete(`/bashboard/cart/:${id}`)
// .then(res=>{
//     console.log(res.data);
// })
    }
    return (
<div>



        <div className="flex justify-evenly ">
            <h2 className="text-4xl font-extrabold ">Items:{cart.length}</h2>
            <h2 className="text-4xl font-extrabold ">Total Price:{totalPrice}$</h2>
            <button className="btn btn-neutral">PAY</button>
        </div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-xl">
        <th>
          Name
        </th>
        <th>Price</th>
        <th>Action</th>
        
      
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map(item=>
                <tr key={item._id}>
              
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      
                    </div>
                  </div>
                </td>
                <td>
                  
                  <br/>
                  <span className="text-xl ">{item.price}$</span>
                </td>
                
                <th>
                  <button
                  onClick={()=>handleDelete(item._id)}
                  className="btn btn-ghost ">
                  < RiDeleteBin6Fill className="text-3xl text-red-600 font-bold" />
                  </button>
                </th>
              </tr>
                )
        }
      {/* row 1 */}
   
    
    </tbody>
    {/* foot */}

    
  </table>
</div>
        </div>
        
    );
};

export default Cart;