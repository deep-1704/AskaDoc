import styles from './style.module.css';

function SenderListItem({profileImg, username}){
    return(
        <div className={styles.SLIContainer}>   
            <div className={styles.ChatuserImage}><img src={profileImg} alt='Profile picture' style={{width:'100%'}}/></div>
            <div className={styles.ChatUsername}>{username}</div>
        </div>
    );
}

export default SenderListItem;