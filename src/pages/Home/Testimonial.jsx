import { Carousel, Avatar } from 'antd';
import { GitlabOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Testimonial(){

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/testimonials")
            .then(response => setTestimonials(response.data))
            .catch(error => console.log(error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
  
    return (
        <div className="py-6 mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-1 font-serif">What People Say</h2>
                <div className="flex items-center justify-center mb-4">
                    <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]"/>
                    <GitlabOutlined className="text-2xl text-gray-500" />
                    <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]"/>
                </div>
                <Carousel {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id_give_hotel_feedback} className="px-4 py-8 ">
                            <div className="bg-white p-4 shadow-xl rounded-lg flex border border-gray-200">
                                <div className="mr-6 flex-shrink-0">
                                    <Avatar size={120} src={testimonial.user.profile_url_img} 
                                        className="border-dashed border-orange-500 border-4 rounded-full"                               
                                    />
                                    <p className="mt-6 text-black-600 font-semibold text-center">
                                        {testimonial.user.first_name}
                                    </p>
                                    <p className="text-gray-600 text-center">{testimonial.note}</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="text-lg mb-4 italic">
                                        {testimonial.text_body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
  
export default Testimonial;
    