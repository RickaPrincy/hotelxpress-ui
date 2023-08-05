import { useContext } from "react";
import StatGrid from "../components/StatGrid"
import InformationList from "./InformationList";
import { UserInfo } from "../../../Context/UserInformation";

function UserProfile() {
    const user = useContext(UserInfo);

    return (
        <div className="w-[calc(100% - 270px)] ml-[250px] ">
            <div className="bg-gray-100 p-5 mt-[0px] flex gap-[10px] ">
                <div className="rounded-[15px] p-5 bg-white w-[400px] shadow-lg">
                    <div className="w-full">
                        <img src={ user.user.profil_url_img } alt="Your photo" className="w-full h-[250px] mx-auto" />
                    </div>
                    <h2 className="font-bold text-center mt-3 text-[16px]">{user.user.first_name}</h2>
                </div>
                <div className="bg-white rounded-[15px] p-5 w-full shadow-lg">
                    <h2 className="font-bold text-[20px]">My information</h2>
                    <hr className="bg-gray-500 mt-1 mb-5" />
                    <InformationList />
                </div>
            </div>
            <div className="bg-gray-100 p-5">
                <StatGrid />
            </div>
        </div>
    );
}
export default UserProfile;