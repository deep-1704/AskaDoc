import "./style.css";

function Card({imgsrc,spec, specinfo}){
    return(
        <div className="cardContainer">
            <div className="cardImg"><img src={imgsrc} alt={spec} style={{height:"100%"}}/></div>
            <div className="cardTitle">{spec}</div>
            <div className="cardInfo">{specinfo}</div>
        </div>
    );
}
export default Card;