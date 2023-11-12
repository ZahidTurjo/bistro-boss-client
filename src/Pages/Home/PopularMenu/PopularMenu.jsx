
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter( items => items.category === "popular")
    //             setMenu(popularItems)
    //         })
       
    // }, [])
    const [menu]=useMenu();
    const popular = menu.filter(item => item.category === 'popular' )
 
   
    return (
        <section className="mt-20">
            <SectionTitle subheading='---Check it out---' heading="FROM OUR MENU">
            </SectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10">
                {
                    popular.map( item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
<div className="text-center mt-6">
    <button className="btn btn-outline mt-2 border-0 border-b-4">See All Menu</button>
</div>
        </section>
    );
};

export default PopularMenu;