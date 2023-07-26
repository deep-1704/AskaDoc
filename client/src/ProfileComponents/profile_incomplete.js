import styles from "./style.module.css";
import defaultImg from "../assets/images/miscellaneous/defaultProfile.svg";
import PhoneInput from 'react-phone-number-input/input';
import Select from 'react-select';
import { useState } from "react";

function SpecOptions() {
    const option = [
        {
            value: 'cardiologist',
            label: 'Cardiologist'
        },
        {
            value: 'dermatologist',
            label: 'Dermatologist'
        },
        {
            value: 'endocrinologist',
            label: 'Endocrinologist'
        },
        {
            value: 'gynecologist',
            label: 'Gynecologist'
        },
        {
            value: 'nephrologist',
            label: 'Nephrologist'
        },
        {
            value: 'neurologist',
            label: 'Neurologist'
        },
        {
            value: 'oncologist',
            label: 'Oncologist'
        },
        {
            value: 'orthopedic',
            label: 'Orthopedic'
        },
        {
            value: 'pediatric',
            label: 'Pediatric'
        },
        {
            value: 'psychiatrist',
            label: 'Psychiatrist'
        },
        {
            value: 'urologist',
            label: 'Urologist'
        },
        {
            value: 'radiologist',
            label: 'Radiologist'
        }
        
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <Select defaultValue={selectedOption} onChange={setSelectedOption} options={option} required/>
    )
}

function ProfileIncomplete({ username }) {
    let [pImage, setpImage] = useState(defaultImg);
    let [value,setValue] = useState(null);
    function updateImage(event) {
        if(event.target.files[0] )setpImage(URL.createObjectURL(event.target.files[0]));
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
                    <input type="file" name="profilepic" accept="image/*" onChange={updateImage} required/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Specialization<br />
                    {/* <input type="text" name="spec" /> */}
                    <SpecOptions />
                </label><br />
                <label className={styles.profileinputfields}>
                    Qualification<br />
                    <input type="text" name="qualification" required/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Years of experience<br />
                    <input type="number" name="experience" required/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Languages(put ',' if more than 1)<br />
                    <input type="text" name="languages" required/>
                </label><br />
                <label className={styles.profileinputfields}>
                    Phone no.<br />
                    <PhoneInput country="In" onChange={setValue} name="phonenumber" required/>
                </label><br />
                <label className={styles.profileinputfields}>
                    E-mail<br />
                    <input type="email" name="email" required/>
                </label>
                <button style={{ width: "25%", marginTop: "10px" }}>Submit</button>
            </form>
        </>
    );
}
export default ProfileIncomplete;