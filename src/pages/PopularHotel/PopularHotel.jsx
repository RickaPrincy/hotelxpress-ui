import { Card, Col, Row } from 'antd';
import { HeartOutlined, EnvironmentOutlined, GitlabOutlined } from '@ant-design/icons';

const PopularHotel = () => {
    const hotels = [
        {
            id: 1,
            name: 'Bakoba Lodge',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/200544407.jpg?k=40b53ab27785b36ff27420457d382cc12748250a036b4eadfd2de50760a5c57c&o=&hp=1',
            location: 'Tulear',
            description: 'Description de l\'hôtel 1',
        },
        {
            id: 2,
            name: 'Colbert',
            image: 'https://w4x5t4z2.stackpathcdn.com/wp-content/uploads/2018/12/Bakuba-Hotel-web-8.jpg',
            location: 'Antananrivo',
            description: 'Description de l\'hôtel 2',
        },
        {
            id: 1,
            name: 'Bakoba Lodge',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/200544407.jpg?k=40b53ab27785b36ff27420457d382cc12748250a036b4eadfd2de50760a5c57c&o=&hp=1',
            location: 'Tulear',
            description: 'Description de l\'hôtel 1',
        },
        {
            id: 2,
            name: 'Colbert',
            image: 'https://w4x5t4z2.stackpathcdn.com/wp-content/uploads/2018/12/Bakuba-Hotel-web-8.jpg',
            location: 'Antananrivo',
            description: 'Description de l\'hôtel 2',
        },
        {
            id: 1,
            name: 'Bakoba Lodge',
            image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/200544407.jpg?k=40b53ab27785b36ff27420457d382cc12748250a036b4eadfd2de50760a5c57c&o=&hp=1',
            location: 'Tulear',
            description: 'Description de l\'hôtel 1',
        },
        {
            id: 2,
            name: 'Colbert',
            image: 'https://w4x5t4z2.stackpathcdn.com/wp-content/uploads/2018/12/Bakuba-Hotel-web-8.jpg',
            location: 'Antananrivo',
            description: 'Description de l\'hôtel 2',
        },
    ];
      
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center font-serif mb-1">The most popular hotel</h1>
            <div className="flex items-center justify-center mb-4">
                <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]"/>
                <GitlabOutlined className="text-2xl text-gray-500" />
                <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]"/>
            </div>
            <Row gutter={[16, 16]}>
                {hotels.map((hotel) => (
                    <Col key={hotel.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card
                            cover={<img src={hotel.image} alt={`Hôtel ${hotel.id}`} />}
                            className="bg-white p-2 shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">{hotel.name}</h2>
                                <HeartOutlined className="text-orange-500 cursor-pointer text-2xl" />
                            </div>

                            <div className="flex items-center mt-2">
                                <EnvironmentOutlined className="text-blue-500 mr-2" />
                                <p className="text-gray-600">{hotel.location}</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <p className="text-gray-600">{hotel.description}</p>
                            </div>
                            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md border hover:bg-transparent hover:text-black hover:border-black">Voir disponibilité</button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};
      
export default PopularHotel;
      
  