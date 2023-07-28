import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";

function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<h1>Hello</h1>}/>
            <Route path="/signin" element={<Login/>}/>
        </Routes>
    );
}

export default Router;