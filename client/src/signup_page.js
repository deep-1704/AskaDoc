import Navbar from "./NavComponents/Navbar";
import "./LoginComponents/loginStyle.css";
import illus from "./assets/images/miscellaneous/Signup-amico.svg";
import pCheck from "./assets/images/miscellaneous/person-blond-hair-svgrepo-com.svg";
import dCheck from "./assets/images/miscellaneous/health-worker-svgrepo-com.svg";
import { useState } from "react";
function Signup() {
    let [user, setUser] = useState(NaN);
    
    function handlePClick(e) {
        let e1 = document.getElementsByClassName("patCheckBox")[0];
        let e2 = document.getElementsByClassName("patCheckBox")[1];
        e1.classList.add("select");
        e2.classList.remove("select");
        setUser("patient");
    }
    function handleDClick(e) {
        let e1 = document.getElementsByClassName("patCheckBox")[0];
        let e2 = document.getElementsByClassName("patCheckBox")[1];
        e2.classList.add("select");
        e1.classList.remove("select");
        setUser("doctor");
    }
    function submit(){
        
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <img src={illus} alt="Illustrator" style={{ width: "40%", backgroundColor: "var(--bg)" }} />
                <div className="LoginContainer">
                    <div className="loginTitle">Signup</div>
                    <div className="loginForm">
                        <div className="checkUser">
                            <div className="PatCheck">
                                <img src={pCheck} alt="Patient" style={{ width: "70px" }} />
                                <div className="patCheckBox" onClick={handlePClick}></div>
                            </div>
                            <div className="DocCheck">
                                <img src={dCheck} alt="Doctor" style={{ width: "70px" }} />
                                <div className="patCheckBox" onClick={handleDClick}></div>
                            </div>
                        </div>
                        <div className="formField">
                            <div className="formFieldTitle">Username</div>
                            <input type="text" name="Username" className="InputField"/>
                        </div>
                        <div className="formField">
                            <div className="formFieldTitle">Password</div>
                            <input type="password" name="Password" className="InputField"/>
                        </div>
                        <div className="submitBtndiv"><button className="submitBtn" onClick={submit}>Signup</button></div>
                    </div>
                    <div className="signinOption">Already a member? <a href="#">Login</a></div>
                </div>
            </div>
        </>
    );
}

export default Signup;