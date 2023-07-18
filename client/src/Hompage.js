import Navbar from "./NavComponents/Navbar";
import CatagorySec from "./HomepageComponents/CatagorySec";
import "./HomepageComponents/style.css";


function Homepage(){
    return(
        <>
            <Navbar />
            <div className="catTitle">Choose your Consultant</div>
            <CatagorySec />
        </>
    )
}
export default Homepage;