
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
        
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
           
       
            
          
        </div>
    );
};

export default Home;