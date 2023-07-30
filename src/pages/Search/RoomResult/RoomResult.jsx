import { ClockCircleFilled, EnvironmentFilled, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button, Image, Rate } from "antd";
import { useContext, useEffect } from "react";
import { SearchFilter } from "../../../App";
import axios from "axios";

function RoomResult({ list }) {
    const search = useContext(SearchFilter);
    
    useEffect(()=>{
        const data = {
            location: search.location,
            interval: search.interval.map(el=>el.format()),
            room_type: search.room_type ,
            list: [...list].filter(el=>el.checked).map(el=>el.id_room_content)
        }

        console.log(data);

    },[list, search]);

    return (
        <div className="w-full p-5 shadow">
            <div className="p-0 border-[1px] border-solid border-gray-500 overflow-hidden rounded-[5px] mb-2 mx-0 mt-0">
                <div className="py-2 px-5 gap-5 bg-gradient-to-r flex items-center to-orange-500 from-orange-900">
                    <ClockCircleFilled className="text-white text-[25px] font-bold" />
                    <h1 className="font-bold text-white">VIP</h1>
                    <p className="text-white text-[14px]">Lorem ipsum dolor sit amet</p>
                </div>
                <div className="flex m-0 p-0">
                    <Image src="hotel.webp" width={400} height={230} />
                    <div className="p-4 m-0 w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <h1 className="font-semibold text-[22px]">Hotel B</h1>
                                <EnvironmentFilled className="text-[18px] ms-3 me-1 text-orange-700" />
                                <p className="text-orange-700">Los Angeles</p>
                            </div>
                            <HeartOutlined className="me-2 text-[25px] text-orange-400 cursor-pointer" />
                        </div>
                        <p className="text-[15px]">Special pour Famille</p>
                        <Rate count={5} style={{ color: "orangered" }} allowHalf defaultValue={2.5} />
                        <p className="text-[14px]">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Ex fugiat, ad dolorum incidunt quo fugit reiciendis enim
                            reprehenderit culpa, itaque quos perferendis corporis.
                        </p>
                        <div className ="flex items-center justify-between">
                            <p className ="font-semibold m-0 p-0 text-orange-700 text-[25px]">$500/nuit</p>
                            <div className ="flex items-center gap-5">
                                <Button className ="mx-0 p-0 font-semibold text-orange-700" type="link">Plus d'info</Button>
                                <Button type ="primary" className="bg-orange-500 hover:bg-orange-600">Reservation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomResult;