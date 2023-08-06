import { Route, Routes } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import UserProfile from "./UserProfile/UserProfile";
import AdminProfile from "./AdminProfle/AdminProfile";
import AddRoom from "./AdminProfle/AddRoom";
import AddHotels from "./AdminProfle/AddHotels";

function Profile() {
    return (
        <div>
            <LeftBar />
            <TopBar />
            <div className="w-[calc(100%-270px) ms-[250px] p-5">
                <Routes>
                    <Route path="/" element={<UserProfile />} />
                    <Route path="/admin" element={<AdminProfile />} />
                    <Route path="/rooms" element={<AddRoom />} />
                    <Route path="/Hotels" element={<AddHotels />} />
                </Routes>
            </div>

        </div>
    );
}

export default Profile;