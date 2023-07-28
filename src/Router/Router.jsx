import { Route, Routes } from "react-router-dom";

function Router() {
    return ( 
        <Routes>
            <Route path="/" element={<h1>Hello</h1>}/>
        </Routes>
    );
}

export default Router;