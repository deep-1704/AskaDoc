import styles from  "./style.module.css";
import defaultImg from "../assets/images/miscellaneous/defaultProfile.svg";
import PhoneInput from 'react-phone-number-input/input';
import { useState } from "react";

function ProfileIncomplete({ username }) {
    let [pImage,setpImage] = useState(defaultImg);
    function updateImage(event){
        setpImage(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <>
            <div className={styles.picnamespec}>
                <div className={styles.pic}><img src={pImage} alt="Default" style={{ height: "100%" }} /></div>
                <div className={styles.namespec}>
                    <div className={styles.name}>{username}</div>
                    <div className={styles.spec}></div>
                </div>
            </div>
            <form className={styles.profileform}>
                <label className={styles.profileinputfields}>
                    Upload Profile Picture<br /> 
                    <input type="file" name="profilepic" accept="image/*" onChange={updateImage}/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Specialization<br /> 
                    <input type="text" name="spec"/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Qualification<br />
                    <input type="text" name="qualification"/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Years of experience<br />
                    <input type="number" name="experience"/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Languages(put ',' if more than 1)<br />
                    <input type="text" name="languages"/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Phone no.<br />
                    <PhoneInput country="Ind" name="phonenumber"/>
                </label><br />
                <label className={styles.profileinputfields}>
                    E-mail<br />
                    <input type="email" name="email"/>
                </label>
                <button style={{width:"25%",marginTop:"10px"}}>Submit</button>
            </form>
        </>
    );
}
export default ProfileIncomplete;