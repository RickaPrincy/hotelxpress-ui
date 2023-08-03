const partnerLogos = [
    'https://upload.wikimedia.org/wikipedia/en/5/50/Hotel_Ibis_logo_2012.png',
    'https://logos-download.com/wp-content/uploads/2019/11/Novotel_Logo.png',
    'https://cthrmadagascar.com/wp-content/uploads/2021/06/Le-Louvre-logo.png',
    'https://palmbeach-nosybe.com/wp-content/uploads/2021/11/logo-palm-beach-nosy-be-web.png',
    'https://upload.wikimedia.org/wikipedia/fr/thumb/e/ef/Radisson_Blu_logo.svg/1280px-Radisson_Blu_logo.svg.png',
    'https://www.mantasaly.com/app/themes/mantasaly/assets/images/logo.png',
    'https://www.sainte-marie-hotel.com/wp-content/uploads/2018/05/logo-lakana-hotel-sainte-marie.png',
    'https://www.zomatel-madagascar.com/static/media/logo.3f7cc167a0bfa657d072.png',
    
];
const LogoHotel = () => {
    return (
        <div className="bg-gray-200 py-4 mt-4">
            <div className="container mx-auto flex justify-center items-center space-x-10 h-32">
                {partnerLogos.map((logoUrl, index) => (
                    <div
                        key={index}
                        className="w-30 h-20 flex items-center justify-center"
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
