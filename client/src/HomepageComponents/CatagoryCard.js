import styles from "./style.module.css";

function Card({imgsrc,spec, specinfo}){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardImg}><img src={imgsrc} alt={spec} style={{height:"100%"}}/></div>
            <div className={styles.cardTitle}>{spec}</div>
            <div className={styles.cardInfo}>{specinfo}</div>
        </div>
    );
}
export default Card;