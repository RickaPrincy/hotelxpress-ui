import { ClockCircleFilled, EnvironmentFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Image, Rate } from "antd";

function Room({ room }) {
    return (
        <div className="p-0 border-[1px] mb-3 border-solid border-gray-500 overflow-hidden rounded-[5px] mb-2 mx-0 mt-0">
            <div className="py-2 px-5 gap-5 bg-gradient-to-r flex items-center to-orange-500 from-orange-900">
                <ClockCircleFilled className="text-white text-[25px] font-bold" />
                <h1 className="font-bold text-white">{room.room_type.type}</h1>
            </div>
            <div className="flex m-0 p-0">
                <Image src={room.room_url_img} width={400} height={230} />
                <div className="p-4 m-0 w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <h1 className="font-semibold text-[22px]">{room.room_name}</h1>
                            <EnvironmentFilled className="text-[18px] ms-3 me-1 text-orange-700" />
                            <p className="text-orange-700">{room.hotel.city}</p>
                        </div>
                        <HeartOutlined className="me-2 text-[25px] text-orange-400 cursor-pointer" />
                    </div>
                    <p className="text-[15px]">{room.room_category}</p>
                    <Rate count={5} style={{ color: "orangered" }} allowHalf defaultValue={2.5} />
                    <p className="text-[14px]">{room.description}</p>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold m-0 p-0 text-orange-700 text-[25px]">{room.price_per_night}$/nuit</p>
                        <div className="flex items-center gap-5">
                            <Button className="mx-0 p-0 font-semibold text-orange-700" type="link">Plus d'info</Button>
                            <Button type="primary" className="bg-orange-500 hover:bg-orange-600">Reservation</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Room;