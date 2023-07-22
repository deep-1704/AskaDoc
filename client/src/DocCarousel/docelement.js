import styles from "./style.module.css";
function Docelement({imgsrc,name,spec}){
    return(
        <div className={styles.cardcontainer}>
            <div className={styles.imgContainer}><img className={styles.docImage} src={imgsrc} alt={name}/></div>
            <div className={styles.docName}><strong>{name}</strong></div>
            <div className={styles.docSpec}>{spec}</div>
        </div>
    )
}
export default Docelement;