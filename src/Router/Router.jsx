import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import Search from "../pages/Search/Search";
import Login from "../pages/Login/Login";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}

export default Router;