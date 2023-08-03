import { Carousel } from 'antd';

const Header = () => {
    
    const carouselImages = [
        { id: 1, imageUrl: 'https://www.booking-hotel-madagascar.com/wp-content/uploads/2018/01/Le-Grand-Hotel-1-1108x600.jpg' },
        { id: 2, imageUrl: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/65/28/6528066.jpeg' },
        { id: 3, imageUrl: 'https://www.sainte-marie-hotel.com/wp-content/uploads/2018/05/lakana-ponton-de-nuit.jpg' },
     
    ];
  
    return (
        <div className="w-full h-[50vh]">
            <Carousel autoplay>
                {carouselImages.map((image) => (
                    <div key={image.id} className="w-full h-auto flex items-center justify-center">
                        <img src={image.imageUrl} alt={`Image ${image.id}`} className="h-[50vh] w-full"/>
                    </div>
                ))}
            </Carousel>
        </div> 
    );
};
  
export default Header;
  


