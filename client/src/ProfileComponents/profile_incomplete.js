import "./style.css";
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
            <div className="pic-name-spec">
                <div className="pic"><img src={pImage} alt="Default" style={{ height: "100%" }} /></div>
                <div className="name-spec">
                    <div className="name">{username}</div>
                    <div className="spec"></div>
                </div>
            </div>
            <form className="profile-form">
                <label className="profile-input-fields">
                    Upload Profile Picture<br /> 
                    <input type="file" name="profilepic" accept="image/*" onChange={updateImage}/>
                </label><br />
                <label className="profile-input-fields">
                    Specialization<br /> 
                    <input type="text" name="spec"/>
                </label><br />
                <label className="profile-input-fields">
                    Qualification<br />
                    <input type="text" name="qualification"/>
                </label><br />
                <label className="profile-input-fields">
                    Years of experience<br />
                    <input type="number" name="experience"/>
                </label><br />
                <label className="profile-input-fields">
                    Languages(put ',' if more than 1)<br />
                    <input type="text" name="languages"/>
                </label><br />
                <label className="profile-input-fields">
                    Phone no.<br />
                    <PhoneInput country="Ind" name="phonenumber"/>
                </label><br />
                <label className="profile-input-fields">
                    E-mail<br />
                    <input type="email" name="email"/>
                </label>
                <button style={{width:"25%",marginTop:"10px"}}>Submit</button>
            </form>
        </>
    );
}
export default ProfileIncomplete;