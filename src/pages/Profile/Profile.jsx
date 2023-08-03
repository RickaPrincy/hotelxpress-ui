import { Route, Routes } from "react-router-dom";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import UserProfile from "./UserProfile/UserProfile";

function Profile() {
    return (  
        <div>
            <LeftBar/>
            <TopBar/>
            <Routes>
                <Route path="/" element={<UserProfile />} />
            </Routes>
            
        </div>
    );
}

export default Profile;