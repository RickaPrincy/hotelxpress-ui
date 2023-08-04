import { useEffect, useState } from "react";
import CountList from "./CountList";
import InformationList from "./InformationList";
import axios from "axios";

function UserProfile() {
    const [userInfo, setUserInfo] = useState();
    
    // useEffect(()=>{
    //     axios.get("http://localhost:5000/user",)

    // },[]);

    return (
        <div className="w-[calc(100% - 270px)] ml-[250px] ">
            <div className="bg-gray-100 p-5 mt-[0px] flex gap-[10px]">
                <div className="rounded-[15px] p-5 bg-white w-[400px]">
                    <div className="w-full">
                        <img src="/profile.jpg" alt="Your photo" className="w-full h-[250px] mx-auto" />
                    </div>
                    <h2 className="font-bold text-center mt-3 text-[16px]">John Doe</h2>
                </div>
                <div className="bg-white rounded-[15px] p-5 w-full">
                    <h2 className="font-bold text-[20px]">My information</h2>
                    <hr className="bg-gray-500 mt-1 mb-5" />
                    <InformationList />
                </div>
            </div>
            <CountList />
        </div>
    );
}

export default UserProfile;