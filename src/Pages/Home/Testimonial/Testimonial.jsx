import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
  
    return (
        <section>
            <SectionTitle heading="Testimonial" subheading='---What Our Clients Say---'>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id} >



                        <div>
                            <div className="flex justify-center mb-5">
                                <Rating style={{ maxWidth: 250 }} value={review.rating} />
                            </div>
                            <p className="text-center">{review.details}</p>
                            <p className="text-3xl italic font-bold mt-5 text-center text-yellow-600">{review.name}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Testimonial;