import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Search from "../pages/Search/Search";
import Signin from "../pages/Signin/Signin";
import ProfilePrivate from "../pages/Profile/ProfilePrivate";
import Signup from "../pages/Signup/Signup";
import ContactUs from "../pages/ContactUs";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/search" element={<Search />} />
            <Route path="/profile/*" element={<ProfilePrivate />} />
            <Route path="/contactUs" element={<ContactUs />} />

        </Routes>
    );
}

export default Router;