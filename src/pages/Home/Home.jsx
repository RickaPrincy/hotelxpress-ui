import Navbar from '../../components/Navbar/Navbar';
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from './Footer';
import Header from './Header';
import LogoHotel from './LogoHotel';
import PopularHotel from './PopularHotel';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Header />
            <div className="bg-orange-800 py-1 mb-4 w-full">
                <SearchBar />
            </div>
            <PopularHotel />
            <LogoHotel />
            <Testimonial />
            <Footer/>
        </div>
    );
};

export default Home;
