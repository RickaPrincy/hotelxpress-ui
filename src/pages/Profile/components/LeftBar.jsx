import { ArrowLeftOutlined, CalendarFilled, HeartFilled, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import LeftLink from "./LeftLink";
import { useSignOut } from "react-auth-kit";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserInfo } from "../../../Context/UserInformation";

function LeftBar() {
    const singOut = useSignOut();
    const navigate = useNavigate();
    const user = useContext(UserInfo);

    const handlerSignOut = ()=>{
        Cookies.remove("token");
        user.toggleUser(null);
        singOut();
        navigate("/");
    }

    return (
        <nav className="fixed top-0 flex items-center justify-between flex-col bg-orange-800 h-screen left-0 w-[250px]">
            <div className="flex items-center justify-between w-full p-5">
                <Link to={"/"}><ArrowLeftOutlined className="text-[30px] font-bold text-white" /></Link>
                <h2 className="font-bold text-[20px] text-white">HotelXPress</h2>
            </div>
            <ul className="flex flex-col gap-5 w-full p-3 ">
                <LeftLink to={"/profile"} text={"Profile"}>
                    <UserOutlined className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/reservation"} text={"Reservations"}>
                    <CalendarFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/favoris"} text={"Favoris"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/hotels"} text={"Hotels"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
                <LeftLink to={"/profile/rooms"} text={"Chambres"}>
                    <HeartFilled className="m-0 font-[500]" />
                </LeftLink>
            </ul>
            <div className="flex items-center text-white gap-4 mb-5 cursor-pointer " onClick={handlerSignOut}>
                <h2 className="m-0">
                    <LogoutOutlined />
                </h2>
                <h2 className="mt-2">Déconnecter</h2>
            </div>
        </nav>
    );
}

export default LeftBar;