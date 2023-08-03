import { AuthProvider } from "react-auth-kit";
import { BrowserRouter} from "react-router-dom";
import { createContext, useState } from "react";
import Router from "./Router/Router";
import NavbarCheck from "./components/Navbar/NavbarCheck";
import "../src/assets/css/init.css";

export const SearchFilter = createContext();

function App() {
    const [search,setSearch ] = useState({
        location: null,
        interval: [],
        room_type:null 
    });

    const onChangeSearch = (values)=>{
        setSearch(values);
    };

    return (
        <>
            <AuthProvider authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
            >
                <BrowserRouter>
                    <SearchFilter.Provider  value={{...search, onChange: onChangeSearch}}>
                        <NavbarCheck/>
                        <Router/>
                    </SearchFilter.Provider>
                </BrowserRouter>
            </AuthProvider>
        </>
    );

}
    

export default App;