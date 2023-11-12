/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, img, title,coverTitle}) => {
    return (
        <div className="mt-8">
         { title &&  <Cover img={img} title={title} coverTitle={coverTitle} ></Cover>}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 my-16">
                {
                    items.map( item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${coverTitle}`}>
            <button className="btn  btn-outline mt-2 border-0 border-b-4 bg-slate-400">Order Now</button>

            </Link>
        </div>
    );
};

export default MenuCategory;