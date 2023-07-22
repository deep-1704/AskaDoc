import styles from './style.module.css';

function UserProfileBtn({username}){
    return(
        <button className={styles.usrProfilebtn}>Hii {username}</button>
    );
}
export default UserProfileBtn;