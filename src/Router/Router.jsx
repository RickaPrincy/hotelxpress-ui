import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from '../pages/Home/Home';
import Search from "../pages/Search/Search";

function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login />}/>
            <Route path="/search" element={<Search />}/>
        </Routes>
    );
}

export default Router;