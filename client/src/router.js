import { Route, Routes } from "react-router-dom";
import Landing_page from "./LandingPageComponents/Landing_page";
import Login from "./AuthComponents/login_page";
import Signup from "./AuthComponents/signup_page";
import Homepage from "./HomepageComponents/Hompage";
import  Profile from "./ProfileComponents/profile";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Landing_page/>}/>
        </Routes>
    );
}

export default Router;