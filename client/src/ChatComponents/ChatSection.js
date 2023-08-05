import styles from './style.module.css';
// import SenderList from './SenderList';
import MessagePanel from './MessagePanel';
import samplePic from '../assets/images/miscellaneous/defaultProfile.svg';

function ChatSection(){
    return(
        <div className={styles.ChatSectionContainer}>
            {/* <SenderList /> */}
            <MessagePanel senderPic={samplePic} senderUsername='Deep Prajapati'/>
        </div>
    );
}

export default ChatSection;