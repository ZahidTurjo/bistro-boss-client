/* eslint-disable react/prop-types */


import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item
  const { user } = useAuth();
  const Navigate = useNavigate()
  const location = useLocation()
  const axiosSecure=useAxiosSecure()
  const[,refetch]=useCart()

  const handleAddToCart =()=> {

    if (user && user.email) {
      // todo: send cart item to the databse
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,image,price

      }
      axiosSecure.post('/carts', cartItem)
      .then(res=>{
       
        if(res.data.insertedId){
          
          Swal.fire(`"${name}added to the cart successsfully"`);
           // refetch cart to update the cart items
      refetch()
        }
      })
     
  
    }

    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate to login
          Navigate('/login', { state: { from: location } })
        }
      });
    }

  }
  return (
    <div className="card bg-base-100 ">
      <figure><img src={image} alt="Shoes" /></figure>
      <p className="bg-zinc-800 absolute right-0 mr-10 mt-6 text-white p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={ handleAddToCart}

            className="btn  bg-white text-yellow-600 border-0 border-b-4 border-cyan-950">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;