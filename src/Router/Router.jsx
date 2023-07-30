import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Search from "../pages/Search/Search";

function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<h1>Hello</h1>}/>
            <Route path="/signin" element={<Login/>}/>
            <Route path="/search" element={<Search/>}/>
        </Routes>
    );
}

export default Router;