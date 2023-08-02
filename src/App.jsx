import { AuthProvider } from "react-auth-kit";
import { BrowserRouter} from "react-router-dom";
import "../src/assets/css/init.css";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useState } from "react";
import Home from "./pages/Home/Home";

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

    const isNull= ()=>{
        if( 
            search.location === null || 
            search.interval.length === 0 ||
            search.room_type === null 
        ){
            return true;
        }
        return false;
    };

    return (
        <>
            <AuthProvider authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
            >
                <BrowserRouter>
                    <SearchFilter.Provider  value={{...search,onChange: onChangeSearch, isNull: isNull}}>
                        <Navbar />
                        <Home/>
                    </SearchFilter.Provider>
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;