import Navbar from "../NavComponents/Navbar";
import CatagorySec from "./CatagorySec";
import CategoryList from "./CategoryList";
import styles from "./style.module.css";

function Homepage() {
    return (
        <>
            <Navbar />
            <div className={styles.catTitle}>Choose your Consultant</div>
            {/* <CatagorySec /> */}
            <CategoryList category="abc" />
        </>
    )
}
export default Homepage;