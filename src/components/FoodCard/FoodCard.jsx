/* eslint-disable react/prop-types */


const FoodCard = ({item}) => {
    const {image, price, recipe, name}=item
    return (
        <div className="card bg-base-100 ">
        <figure><img src={image}alt="Shoes" /></figure>
        <p className="bg-zinc-800 absolute right-0 mr-10 mt-6 text-white p-2">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn  bg-white text-yellow-600 border-0 border-b-4 border-cyan-950">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;