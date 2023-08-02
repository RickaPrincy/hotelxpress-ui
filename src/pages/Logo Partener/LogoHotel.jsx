const partnerLogos = [
    'https://www.hotel-restaurant-colbert.com/wp-content/uploads/2012/08/logo-colbert-200x200.jpg',
    'https://agoralink.fr/web/wp-content/uploads/2017/06/logo-novotel.png',
    'https://cthrmadagascar.com/wp-content/uploads/2021/06/Le-Louvre-logo.png',
    
];
const LogoHotel = () => {
    return (
        <div className="bg-gray-200 py-6 mt-4">
            <div className="container mx-auto flex justify-center items-center space-x-10 h-32"> {/* Ajoutez la classe h-32 pour définir la hauteur */}
                {partnerLogos.map((logoUrl, index) => (
                    <div
                        key={index}
                        className="w-20 h-20 flex items-center justify-center"
                    >
                        <img
                            src={logoUrl}
                            alt={`Logo partenaire ${index + 1}`}
                            className="w-full h-full object-contain transition-opacity duration-300 hover:opacity-50"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
  

export default LogoHotel;
