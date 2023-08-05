import { useContext } from "react";
import { UserInfo } from "../../../Context/UserInformation";

function TopBar() {
    const user = useContext(UserInfo);

    return (
        <div className="w-[calc(100% - 250px) flex items-center justify-between ms-[250px] p-3 bg-orange-900 ">
            <div>
                <h1 className="text-[20px] text-white font-semibold">Bienvenue Ches HotelXpress</h1>
                <h2 className="text-white">Alors qu'est ce que tu veux faire aujourd'hui ?</h2>
            </div>
            <div className="d-c-c cursor-pointer p-1 bg-orange-800 bg-overflow-hidden rounded-[50%]">
                <img src={user.user.profil_url_img} className="rounded-[50%] w-[60px] h-[60px]" alt="Your profile" />
            </div> 
        </div>
    );
}

export default TopBar;