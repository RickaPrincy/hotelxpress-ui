import Navbar from '../../components/Navbar/Navbar';
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from './Header'; 
import LogoHotel from './LogoHotel';
import PopularHotel from './PopularHotel';
import Promotion from './Promotion';
import Testimonials from './Testimonial';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <Header/>
            <SearchBar/>
            <Promotion/>
            <PopularHotel/>
            <LogoHotel/>
            <Testimonials/>
        </div>
    );
};

export default Home;
