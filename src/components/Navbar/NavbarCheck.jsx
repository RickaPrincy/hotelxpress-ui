import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function NavbarCheck() {
    const location = useLocation();

    return (
        <>
            { !location.pathname.includes("profile") ? <Navbar /> : null }
        </>
    );
}

export default NavbarCheck;