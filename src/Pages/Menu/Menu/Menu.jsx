import { Helmet } from 'react-helmet-async';

import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')



    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Would you like to try a dish?" coverTitle="OUR MENU"></Cover>
            <SectionTitle subheading='Dont miss' heading="Today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts item */}
            <MenuCategory
                img={
                    dessertImg
                }
                title="Would you like to try a dish?"
                coverTitle="Desserts"
                items={dessert}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                img={
                    pizzaImg
                }
                title="Would you like to try a dish?"
                coverTitle="pizzas"
                items={pizza}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
                img={
                    saladImg
                }
                title="Would you like to try a dish?"
                coverTitle="salads"
                items={salad}
            ></MenuCategory>
            {/* soup items */}
            <MenuCategory
                img={
                    soupImg
                }
                title="Would you like to try a dish?"
                coverTitle="Soups"
                items={soup}
            ></MenuCategory>


        </div>
    );
};

export default Menu;