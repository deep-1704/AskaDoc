import "./style.css";
import heart from "../assets/images/heart-svgrepo-com.svg"

function CatListItem({ Pimgsrc, name, spec, fees, rep }) {
    return (
        <div className="category-list-item">
            <div className="profile-name-spec">
                <div className="profile-img"><img src={Pimgsrc} alt="Profile-pic" style={{ width: "100%" }} /></div>
                <div className="name-spec">
                    <div className="name">{name}</div>
                    <div className="spec">{spec}</div>
                </div>
            </div>
            <div className="fees">₹{fees}/consult</div>
            <div className="rep"><img src={heart} alt="heart" style={{ width: "16px" }} /> {nFormatter(rep,0)}</div>
        </div>
    );
}
function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
export default CatListItem;