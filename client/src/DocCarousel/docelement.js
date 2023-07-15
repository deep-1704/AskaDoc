import "./style.css";
function Docelement({imgsrc,name,spec}){
    return(
        <div className="cardcontainer">
            <div className="imgContainer"><img className="docImage" src={imgsrc} alt={name}/></div>
            <div className="docName"><strong>{name}</strong></div>
            <div className="docSpec">{spec}</div>
        </div>
    )
}
export default Docelement;