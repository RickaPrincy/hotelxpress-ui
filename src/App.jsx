import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import "../src/assets/css/init.css";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useState } from "react";

export const SearchFilter = createContext();

function App() {
    const [search,setSearch ] = useState({
        location: null,
        interval: [],
        room_type:null 
    });

    const onChangeSearch = (values)=>{
        setSearch(values);
    }
    
    return (
        <>
            <AuthProvider authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
            >
                <BrowserRouter>
                    <SearchFilter.Provider  value={{...search,onChange: onChangeSearch}}>
                        <Navbar />
                        <Router />
                    </SearchFilter.Provider>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;