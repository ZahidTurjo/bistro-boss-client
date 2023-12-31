import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import orderImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu]=useMenu()
   

    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
             <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover img={orderImg} title='would u like to the dish' coverTitle='OUR SHOP'></Cover>
            <Tabs  defaultIndex={tabIndex} onSelect={(initialIndex) => setTabIndex(initialIndex)}>
               <div className="flex mt-6 justify-center">
               <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drink</Tab>
                   
                </TabList>
               </div>
                <TabPanel>
                    
                 <OrderTab items={salad}></OrderTab>
                 
                  
                </TabPanel>
                <TabPanel>
              
                <OrderTab items={pizza}></OrderTab>
                 
                </TabPanel>
                <TabPanel>
               
                <OrderTab items={soup}></OrderTab>
                 
                </TabPanel>
                <TabPanel>
                
                <OrderTab items={dessert}></OrderTab>
                 
                </TabPanel>
                <TabPanel>
                    
                 <OrderTab items={drinks}></OrderTab>
                 
                </TabPanel>
            </Tabs>


        </div>
    );
};

export default Order;