import Navbar from "../NavComponents/Navbar";
import styles from  "./loginStyle.module.css";
import illus from "../assets/images/miscellaneous/Login-bro.svg";
import pCheck from "../assets/images/miscellaneous/person-blond-hair-svgrepo-com.svg";
import dCheck from "../assets/images/miscellaneous/health-worker-svgrepo-com.svg";
import { useState } from "react";
function Login() {
    let [user, setUser] = useState(NaN);
    
    function handlePClick(e) {
        let e1 = document.getElementById("patientCheckBox");
        let e2 = document.getElementById("doctorCheckBox");
        e1.style = "background-color: var(--h3)";
        e2.style = "background-color: var(--h1)"
        setUser("patient");
    }
    function handleDClick(e) {
        let e1 = document.getElementById("patientCheckBox");
        let e2 = document.getElementById("doctorCheckBox");
        e2.style = "background-color: var(--h3)";
        e1.style = "background-color: var(--h1)";
        setUser("doctor");
    }
    function show(){
        alert(user);
    }

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <img src={illus} alt="Illustrator" style={{ width: "40%", backgroundColor: "var(--bg)" }} />
                <div className={styles.LoginContainer}>
                    <div className={styles.loginTitle}>Login</div>
                    <div className={styles.loginForm}>
                        <div className={styles.checkUser}>
                            <div className={styles.PatCheck}>
                                <img src={pCheck} alt="Patient" style={{ width: "70px" }} />
                                <div className={styles.patCheckBox} id="patientCheckBox" onClick={handlePClick}></div>
                            </div>
                            <div className={styles.DocCheck}>
                                <img src={dCheck} alt="Doctor" style={{ width: "70px" }} />
                                <div className={styles.patCheckBox} id="doctorCheckBox" onClick={handleDClick}></div>
                            </div>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formFieldTitle}>Username</div>
                            <input type="text" name="Username" className={styles.InputField}/>
                        </div>
                        <div className={styles.formField}>
                            <div className={styles.formFieldTitle}>Password</div>
                            <input type="password" name="Password" className={styles.InputField}/>
                        </div>
                        <div className={styles.submitBtndiv}><button className={styles.submitBtn} onClick={show}>Login</button></div>
                    </div>
                    <div className={styles.signinOption}>Don't have an account? <a href="#">Signup</a></div>
                </div>
            </div>
        </>
    );
}

export default Login;