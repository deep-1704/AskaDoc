import styles from "./style.module.css";
import DoctorSpec from "./DoctorSpec";
import qualification_icon from "../assets/images/icons/qualification-icon.svg";
import experience_icon from "../assets/images/icons/experience-icon.svg";
import language_icon from "../assets/images/icons/language-icon.svg";
import phone_icon from "../assets/images/icons/phone-icon.svg";
import email_icon from "../assets/images/icons/email-icon.svg";

function ProfileComplete({ username }) {

    let doctor = {
        ProfilePic: "deep_icpc_1.jpeg",
        username: username,
        spec: "Psychiatrist",
        qual: "MBBS,MD @ AIIMS Delhi",
        experience: 22,
        lang: "English, Hindi, Gujarati",
        PhNum: 7436005772,
        email: "dp124551634@gmail.com"
    }
    const pImage = require(`../assets/images/${doctor.ProfilePic}`);
    return (
        <>
            <div className={styles.picnamespec}>
                <div className={styles.pic}><img src={pImage} alt={doctor.username} style={{ height: "100%" }} /></div>
                <div className={styles.namespec}>
                    <div className={styles.name}>{doctor.username}</div>
                    <div className={styles.spec}>{doctor.spec}</div>
                </div>
            </div>
            <div className={styles.profiletitle}>Profile</div>
            <DoctorSpec field="Qualification" icon={qualification_icon} value={doctor.qual} />
            <DoctorSpec field="Experience" icon={experience_icon} value={doctor.experience + " years"} />
            <DoctorSpec field="Languages" icon={language_icon} value={doctor.lang} />
            <div className={styles.profiletitle}>Contact</div>
            <DoctorSpec field="Phone" icon={phone_icon} value={doctor.PhNum} />
            <DoctorSpec field="E-mail" icon={email_icon} value={doctor.email} />
        </>
    );
}

export default ProfileComplete;