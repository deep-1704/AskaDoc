import styles from "./style.module.css";
import ProfileIncomplete from "./profile_incomplete";
import ProfileComplete from "./profiole_complete";
import { useEffect, useState } from "react";
function ProfileSec({ username }) {
    let [isComplete, setIsComplete] = useState(false);
    let [checkDone, setCheckDone] = useState(false);

    async function checkProfile(username) {
        let state = await fetch(`http://localhost:4000/checkProfile/${username}`, { method: 'GET' }).then(res => res.json());
        if (state === "Invalid") {
            alert('Invalid request');
            window.location.href = "http://localhost:3000/home/categories";
        }
        setIsComplete(state);
        setCheckDone(true);
    }

    useEffect(() => {
        checkProfile(username);
    }, [])

    return (
        <>
            {checkDone ? (<div className={styles.profileseccontainer}>
                {isComplete ? <ProfileComplete username={username} /> : <ProfileIncomplete username={username} />}
            </div>) : <h1 style={{ color: 'var(--st)' }}>Please wait!</h1>}
        </>
    )
}

export default ProfileSec;