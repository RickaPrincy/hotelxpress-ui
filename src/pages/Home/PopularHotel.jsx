import { Card, Col, Image, Row } from 'antd';
import { HeartOutlined, EnvironmentOutlined, GitlabOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PopularHotel(){
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/find/room/6")
            .then(response => setRooms(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center font-serif mt-3 mb-1">Chambres les plus populaires</h1>
            <div className="flex items-center justify-center mb-4">
                <hr className="flex-grow border-t border-gray-500 mr-1 max-w-[20px]" />
                <GitlabOutlined className="text-2xl text-gray-500" />
                <hr className="flex-grow border-t border-gray-500 ml-1 max-w-[20px]" />
            </div>
            <Row gutter={[16, 16]}>
                {rooms.map(el => (
                    <Col key={el.id_room} xs={24} sm={12} md={8} lg={8} xl={8}>
                        <Card
                            cover={<Image src={el.room_url_img} height={200} />}
                            className="bg-white h-[450px] p-2 shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">{el.room_name}</h2>
                                <HeartOutlined className="text-orange-500 cursor-pointer text-2xl" />
                            </div>
                            <div className="flex items-center mt-2">
                                <EnvironmentOutlined className="text-blue-500 mr-2" />
                                <p className="text-gray-600">{el.hotel.city}</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <p className="text-gray-600">{el.description}</p>
                            </div>
                            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md border hover:bg-transparent hover:text-black hover:border-black">Voir disponibilités</button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PopularHotel;