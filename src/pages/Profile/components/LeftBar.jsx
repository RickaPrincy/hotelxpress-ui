import { ArrowLeftOutlined, CalendarFilled, HeartFilled, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LeftLink from "./LeftLink";

function LeftBar() {
    return (
        <nav className="fixed top-0 flex items-center justify-between flex-col bg-orange-800 h-screen p-5 left-0 w-[250px]">
            <div className="flex items-center justify-between w-full px-2">
                <Link to={"/"}><ArrowLeftOutlined className="text-[30px] font-bold text-white" /></Link>
                <h2 className="font-bold text-[20px] text-white">HotelXPress</h2>
            </div>
            <ul className="flex flex-col gap-5">
                <LeftLink to={"/profile"} text={"Mon Profile"}>
                    <UserOutlined className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/reservation"} text={"Mes Reservations"}>
                    <CalendarFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/favoris"} text={"Mes Favoris"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/hotels"} text={"Hotels"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/rooms"} text={"Chambres"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
            </ul>
            <div className="flex items-center gap-4 text-white">
                <h2 className="m-0">
                    <LogoutOutlined />
                </h2>
                <h2 className="mt-2 cursor-pointer">Déconnecter</h2>
            </div>
        </nav>
    );
}

export default LeftBar;