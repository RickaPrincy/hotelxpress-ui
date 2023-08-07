import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

function Header() {
    const carouselImages = [
        {
            id: 1,
            imageUrl: "http://localhost:5000/public/carrousel1.jpg",
            title: { h1: "Bienvenue chez", span: "HotelXpress" },
            subtitle: "Vous verrez ici tous vos hôtels et chambres préférés",
            button: "Rechercher",
            link: "/search"
        },
        {
            id: 2,
            imageUrl: "http://localhost:5000/public/carrousel2.jpg",
            title: { h1: "Devenez un membre", span: "Fidèle" },
            subtitle: "Inscrivez-vous maintenant et recevez des réductions de prix",
            button: "S'inscrire",
            link: "/signup"
        },
        {
            id: 3,
            imageUrl: "http://localhost:5001/public/carrousel3.jpg",
            title: { h1: "Visiter nos chambres par", span: "Catégories" },
            subtitle: "Sélection exquise de vos hôtels et chambres favoris",
            button: "Contacter",
            link: "/contact"
        }
    ];

    return (
        <div className="w-full h-[75vh]">
            <Carousel autoplay pauseOnHover={false} autoplaySpeed={5000} speed={1500}>
                {carouselImages.map(el => (
                    <div
                        key={el.id}
                        className={`w-full h-[75vh]`}
                    >
                        <div style={{ backgroundImage: `url(${el.imageUrl}` }} className="bg-cover p-0 w-sreen h-[75vh] ">
                            <div className="d-c-c w-full h-[75vh] bg-hidden flex-col">
                                <h1 className="text-[35px] text-center m-0 text-white font-bold">
                                    {el.title.h1}
                                    <span className="text-orange-600 ms-2">{el.title.span}</span>
                                </h1>
                                <p className="text-gray-200 text-[25px] m-0 text-center">{el.subtitle}</p>
                                <button className="px-5 py-2 rounded mt-3 text-white font-bold text-[18px] bg-orange-700">
                                    <Link to={el.link}>{el.button}</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Header;



