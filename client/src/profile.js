import Navbar from "./NavComponents/Navbar";
import ProfileSec from "./ProfileComponents/ProfileSec";
import "./ProfileComponents/style.css";

function Profile({username}){

    return(
        <>
            <Navbar />
            <div className="profile-chat-container">
                <ProfileSec username={username} />
            </div>
        </>
    );
}
export default Profile;