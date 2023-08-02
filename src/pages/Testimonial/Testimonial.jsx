
import { Carousel } from 'antd';

const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        position: 'client',
        comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum odio metus, vitae faucibus sapien pellentesque quis. Donec vel nunc augue. Suspendisse potenti. Sed eu justo in nunc faucibus volutpat sit amet nec velit. Nam eu erat ipsum.",
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'client',
        comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum odio metus, vitae faucibus sapien pellentesque quis. Donec vel nunc augue. Suspendisse potenti. Sed eu justo in nunc faucibus volutpat sit amet nec velit. Nam eu erat ipsum.",
    },

];

const Testimonials = () => {
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
        <div className=" py-6 mt-6">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">What People Say</h2>
                <Carousel {...settings}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="px-4 py-8">
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <p className="text-lg mb-4">{testimonial.comment}</p>
                                <p className="text-gray-600 font-semibold">
                                    {testimonial.name}
                                </p>
                                <p className="text-gray-500">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonials;
