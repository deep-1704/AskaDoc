import styles from  './style.module.css';

export default function LoginBtn(){
    function changeLocation(){
        window.location.href = "./login";
    }
    return (
        <button className={styles.loginBtn} onClick={changeLocation}>Login</button>
    )
}