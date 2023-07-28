import { AuthProvider } from "react-auth-kit";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import "../src/assets/init.css";

function App() {
    return (
        <>
            <AuthProvider authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
            >
                <BrowserRouter>
                    {/* <Navbar /> */}
                    <Router />
                </BrowserRouter>
            </AuthProvider>
        </>
    );
}

export default App;