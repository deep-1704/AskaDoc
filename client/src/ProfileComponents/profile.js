import { useParams } from "react-router-dom";
import Navbar from "../NavComponents/Navbar";
import ProfileSec from "./ProfileSec";
import styles from "./style.module.css";

function Profile(){
    const { username }= useParams();
    return(
        <>
            <Navbar />
            <div className={styles.profilechatcontainer}>
                <ProfileSec username={username} />
            </div>
        </>
    );
}
export default Profile;