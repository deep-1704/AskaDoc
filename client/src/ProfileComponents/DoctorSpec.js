import "./style.css";
function DoctorSpec({ field,icon,value }) {
    return (
        <div className="DoctorSpec">
            <div className="spec-title">
                <div className="title-icon"><img src={icon} alt="icon" style={{height:"100%"}}/></div>
                <div className="title-content">{field}</div>
            </div>
            <div className="spec-content">{value}</div>
        </div>
    );
}
export default DoctorSpec;