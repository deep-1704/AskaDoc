import styles from "./style.module.css";
import DoctorSpec from "./DoctorSpec";
import qualification_icon from "../assets/images/icons/qualification-icon.svg";
import experience_icon from "../assets/images/icons/experience-icon.svg";
import language_icon from "../assets/images/icons/language-icon.svg";
import phone_icon from "../assets/images/icons/phone-icon.svg";
import email_icon from "../assets/images/icons/email-icon.svg";
import Whiteheart_icon from "../assets/images/miscellaneous/Whiteheart-svgrepo-com.svg";
import Redheart_icon from "../assets/images/miscellaneous/Redheart-svgrepo-com.svg";
import { useEffect, useState } from "react";

function ProfileComplete({ username }) {

    let [dataArrived, setDataArrived] = useState(false);
    let [heart, setHeart] = useState(Whiteheart_icon);
    let [doctor, setDoctor] = useState({});

    function handleLike(e) {
        if (heart === Whiteheart_icon) {
            setHeart(Redheart_icon);
        }
        else{
            setHeart(Whiteheart_icon);
        }
    }

    async function fetchInfo() {
        let info = await fetch(`http://localhost:4000/getProfile/${username}`, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                return res.json();
            })
        setDoctor(info);
        setDataArrived(true);
    }
    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <>
            {dataArrived ? (<>
                <div className={styles.picnamespec}>
                    <div className={styles.pic}><img src={require(`../assets/images/profileImages/${doctor.ProfileImg}`)} alt={doctor.username} style={{ height: "100%" }} /></div>
                    <div className={styles.namespec}>
                        <div className={styles.name}>{doctor.username}</div>
                        <div className={styles.spec}>{doctor.specialization}</div>
                        <button className={styles.likeBtn} onClick={(e) => handleLike(e)}><span>Repute </span><img src={heart} alt="Heart" style={{ width: "25px" }} /></button>
                    </div>
                </div>
                <div className={styles.profiletitle}>Profile</div>
                <DoctorSpec field="Qualification" icon={qualification_icon} value={doctor.qualification} />
                <DoctorSpec field="Experience" icon={experience_icon} value={doctor.experience + " years"} />
                <DoctorSpec field="Languages" icon={language_icon} value={doctor.languages} />
                <div className={styles.profiletitle}>Contact</div>
                <DoctorSpec field="Phone" icon={phone_icon} value={doctor.tel} />
                <DoctorSpec field="E-mail" icon={email_icon} value={doctor.email} />
            </>) : <h1 style={{ color: 'var(--st)' }}>Please wait!</h1>}
        </>
    );
}

export default ProfileComplete;