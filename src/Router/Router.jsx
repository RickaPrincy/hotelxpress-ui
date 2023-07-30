import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import SearchRequire from "../pages/Search/SearchRequire";
import Home from "../pages/Home/Home";

function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/search" element={<SearchRequire />}/>
        </Routes>
    );
}

export default Router;