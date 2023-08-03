import { useIsAuthenticated } from "react-auth-kit";
import Profile from "./Profile";
import { Navigate } from "react-router-dom";

function ProfilePrivate() {
    const isAuthentificate = useIsAuthenticated();

    return (  
        <>
            {isAuthentificate ? <Profile /> : <Navigate to={"/signin"}/>} 
        </>
    );
}

export default ProfilePrivate;