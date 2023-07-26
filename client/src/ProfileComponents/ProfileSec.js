import styles from  "./style.module.css";
import ProfileIncomplete from "./profile_incomplete";
import ProfileComplete from "./profiole_complete";
function ProfileSec({username}){
    return(
        <div className={styles.profileseccontainer}>
            {false?<ProfileComplete username={username}/>:<ProfileIncomplete username={username} />}
        </div>
    )
}

export default ProfileSec;