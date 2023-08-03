import { Carousel, Avatar } from 'antd';
import { GitlabOutlined } from '@ant-design/icons';
const testimonialsData = [
    {
        id: 1,
        name: 'Albert Einstein',
        position: 'Client',
        comment:
            "Ses théories et découvertes dans le domaine de la physique se multiplièrent au fil des décennies. Il est celui qui a su expliquer le mouvement brownien des molécules. Il a contribué au développement de la théorie quantique et a exploré les propriétés thermiques de la lumière à faible densité de rayonnement. Ses théories ont été utilisées dans la fondation de la théorie des photons de lumière.",
        avatar: 'https://parade.com/.image/t_share/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.jpg',
    },
    {
        id: 2,
        name: 'Marie Curie',
        position: 'Client',
        comment:
            "L’une des scientifiques les plus célèbres de l’histoire, Marie Curie est devenue la première femme à avoir reçu un prix Nobel de physique en 1903, et la première à recevoir un prix Nobel de chimie en 1911. Ses recherches en radioactivité, ainsi que sa découverte du radium et du polonium, ont été à l’origine des méthodes modernes de radiographie. Ses recherches ont grandement contribué à de multiples inventions et découvertes.",
        avatar: 'https://www.lesamazonesparisiennes.com/wp-content/uploads/sites/70/2020/04/marie-curie.jpg',
    },
    {
        id: 3,
        name: 'Alan Turing',
        position: 'Partnership',
        comment:
            "Le domaine de l'intelligence artificielle et de l'informatique n'aurait jamais pu voir le jour sans le travail d'Alan Turing. Ce dernier a prouvé en 1936 qu'il n'existait pas de méthode algorithmique universelle pour déterminer la vérité dans les mathématiques. Celles-ci contiennent toujours des propositions indécidables. Mais c'est sa fameuse machine, ancêtre des premiers ordinateurs, qui a ouvert la voie au calcul et à la calculabilité que nous connaissons aujourd'hui.",
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg',
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
        <div className="py-6 mt-20">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-1 font-serif">What People Say</h2>
                <div className="flex items-center justify-center mb-4">
                    <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]"/>
                    <GitlabOutlined className="text-2xl text-gray-500" />
                    <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]"/>
                </div>
                <Carousel {...settings}>
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="px-4 py-8 ">
                            <div className="bg-white p-4 shadow-xl rounded-lg flex border border-gray-200">
                                <div className="mr-6 flex-shrink-0">
                                    <Avatar size={120} src={testimonial.avatar} 
                                        className="border-dashed border-orange-500 border-4 rounded-full"                               
                                    />
                                    <p className="mt-6 text-black-600 font-semibold text-center">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-600 text-center">{testimonial.position}</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className="text-lg mb-4 italic">
                                        {testimonial.comment}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};
  
export default Testimonials;
    