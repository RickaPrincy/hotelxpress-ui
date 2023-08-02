
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from '../Header/Header'; // Le carrousel d'images
import LogoHotel from '../Logo Partener/LogoHotel';
import PopularHotel from '../PopularHotel/PopularHotel';
import Promotion from '../Promotion/Promotion';
import Testimonials from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Navbar />
            </div>

            {/* Conteneur du Header */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <Header />
            </div>

            {/* Conteneur du SearchBar */}
            <div className="flex justify-center bg-orange-400 p-2 mt-8 mb-8">
                <SearchBar />
            </div>
            <div>
                <Promotion/>
            </div>
            <div>
                <PopularHotel/>
            </div>
            <div className='h-32'>
                <LogoHotel/>
            </div>
            <div>
                <Testimonials/>
            </div>
           
        </div>
    );
};

export default Home;
