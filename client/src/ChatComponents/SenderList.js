import styles from './style.module.css';
import titleIcon from '../assets/images/miscellaneous/chatTitle.svg';
import SenderListItem from './SenderListItem';
import sampleImg from '../assets/images/miscellaneous/defaultProfile.svg';

function SenderList(){
    return(
        <>
            <div className={styles.titleChat}>
                <div className={styles.chatIcon}><img src={titleIcon} alt='Chat icon' style={{width:'100%'}}/></div>
                <div className={styles.chatTitleText}>Messages</div>
            </div>
            <SenderListItem profileImg={sampleImg} username='Deep'/>
            <SenderListItem profileImg={sampleImg} username='Deep'/>
            <SenderListItem profileImg={sampleImg} username='Deep'/>
            <SenderListItem profileImg={sampleImg} username='Deep'/>
            <SenderListItem profileImg={sampleImg} username='Deep'/>
            {/* <h1 style={{color:"var(--h3)",textAlign:'center',fontFamily:'Ubuntu, sans-serif'}}>No messages yet!</h1> */}
        </>
    );
}

export default SenderList;