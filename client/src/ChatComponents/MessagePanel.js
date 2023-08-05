import styles from './style.module.css';

function MessagePanel({ senderPic, senderUsername }) {

    function showBottom(e){
        let body = e.target;
        body.scrollTop = body.scrollHeight - body.clientHeight;
        console.log('Reach');
    }
    return (
        <>
            <div className={styles.senderInfo}>
                <div className={styles.senderDP} style={{ backgroundImage: `url(${senderPic})`, backgroundSize: "cover" }}></div>
                <div className={styles.senderUsername}>{senderUsername}</div>
            </div>
            <div className={styles.MessageContainer} onChange={(e) => showBottom(e)} onAfterPrint={(e) => showBottom(e)}>
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
                <SenderMessageObj username='Deep1' content='Hii there! How are you' />
                <UserMessageObj content="I'm fine. How about you!" />
            </div>
            <form className={styles.MessageForm}>
                <input type='text' className={styles.MessageInput} placeholder='Message..' />
                <button type='submit' className={styles.MessageSendBtn}>Send</button>
            </form>
        </>
    );
}

function SenderMessageObj({ username, content }) {
    return (
        <div className={styles.SenderMO}>
            <div className={styles.SenderUsername}>{username}</div>
            <div className={styles.SenderContent}>{content}</div>
        </div>
    );
}

function UserMessageObj({ content }) {
    return (
        <div className={styles.UserMO}>
            <div className={styles.UserUsername}>You</div>
            <div className={styles.Usercontent}>{content}</div>
        </div>
    );
}

export default MessagePanel;