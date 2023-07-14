import "./style.css";
export default function docelement(imgsrc,name,spec){
    return(
        <div className="container">
            <div className="imgContainer"><img src={imgsrc} alt={name}/></div>
            <div></div>
            <div></div>
        </div>
    )
}