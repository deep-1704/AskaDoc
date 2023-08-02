import { Route, Routes } from "react-router-dom";
import Landing_page from "./LandingPageComponents/Landing_page";
import Login from "./AuthComponents/login_page";
import Signup from "./AuthComponents/signup_page";
import Homepage from "./HomepageComponents/Hompage";
import Profile from "./ProfileComponents/profile";
import CatagorySec from "./HomepageComponents/CatagorySec";
import CategoryList from "./HomepageComponents/CategoryList";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homepage />}>
                <Route index element={<h1 style={{color:"#65CCB8", margin:"auto",width:"fit-content"}}>Page not found</h1>} />
                <Route path="categories" element={<CatagorySec />} />
                <Route path="categories/:category" element={<CategoryList />} />
            </Route>
            <Route path="/profile/:username" element={<Profile />} />
            {/* Not found page :: */}
            <Route path="*" element={<h1 style={{color:"#65CCB8", margin:"auto",width:"fit-content"}}>Page not found</h1>} />
        </Routes>
    );
}

export default Router;