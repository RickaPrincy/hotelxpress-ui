import { Carousel } from 'antd';

const Header = () => {
    
    const carouselImages = [
        { id: 1, imageUrl: 'https://www.luxurylifestylemag.co.uk/wp-content/uploads/2019/10/Anjajavy-LHotel-swimming-pool-Credit-David-Rogers-Copy.jpg' },
        { id: 2, imageUrl: 'https://twomonkeystravelgroup.com/wp-content/uploads/2017/02/ultimate-list-of-best-luxury-or-backpacker-hotels-or-hostels-in-Antananarivo-Madagascar-Relais-des-Plateaux.jpg' },
        { id: 3, imageUrl: 'https://www.hoteldeluxe.info/wp-content/uploads/2014/01/Amporaha-Resort-Madagascar.png' },
     
    ];
  
    return (
        <div className="w-full">
            <Carousel autoplay>
                {carouselImages.map((image) => (
                    <div key={image.id} className="w-full h-auto">
                        <img src={image.imageUrl} alt={`Image ${image.id}`} className="w-full" />
                    </div>
                ))}
            </Carousel>
        </div> 
    );
};
  
export default Header;
  


