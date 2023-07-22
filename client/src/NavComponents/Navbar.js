import styles from './style.module.css';
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn';
import UserProfileBtn from './usrProfileBtn';

export default function Navbar() {
    let ls = <div className={styles.NavEnd}><LoginBtn /><SignupBtn /></div>
    let up = <div className={styles.NavEnd}><UserProfileBtn username="Deep"/></div>
    return (
        <div className={styles.Navbar}>
            <div className={styles.logo}><h1>AskaDoc</h1></div>
            <div className={styles.restStuff}>
                {false ? up:ls}
            </div>
        </div>
    )
}