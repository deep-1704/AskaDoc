import styles from './style.module.css';
import LoginBtn from './LoginBtn';
import SignupBtn from './SignupBtn';
import UserProfileBtn from './usrProfileBtn';

export default function Navbar({username} = null) {
    let ls = <div className={styles.NavEnd}><LoginBtn /><SignupBtn /></div>
    let up = <div className={styles.NavEnd}><UserProfileBtn username={username}/></div>
    return (
        <div className={styles.Navbar}>
            <div className={styles.logo}><h1>AskaDoc</h1></div>
            <div className={styles.restStuff}>
                {username ? up:ls}
            </div>
        </div>
    )
}