/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    const {image, price, recipe, name}=item
    return (
        <div className="flex gap-2 mt-6">
    <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={image} />
  </div>
</div>
      <div>
        <h3 className="uppercase font-medium my-2">{name} ------</h3>
        <p className="text-gray-600">{recipe}</p>
      </div>
      <p className="text-yellow-600 font-medium">{price}$</p>
        </div>
    );
};

export default MenuItem;