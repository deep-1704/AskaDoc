import { Outlet } from "react-router-dom";
import Navbar from "../NavComponents/Navbar";
import styles from "./style.module.css";

function Homepage() {
    return (
        <>
            <Navbar />
            <div className={styles.catTitle}>Choose your Consultant</div>
            <Outlet />
        </>
    )
}
export default Homepage;