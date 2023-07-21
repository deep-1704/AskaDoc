import "./style.css";
import ProfileIncomplete from "./profile_incomplete";
import ProfileComplete from "./profiole_complete";
function ProfileSec({username}){
    return(
        <div className="profile-sec-container">
            {true?<ProfileComplete username={username}/>:<ProfileIncomplete username={username} />}
        </div>
    )
}

export default ProfileSec;