import "./style.css";
import CatListItem from "./CategoryListItem";

function CategoryList({ DoctorsList }) {

    let docList = DoctorsList.map(val => {
        return <li><CatListItem Pimgsrc={val.Pimgsrc} name={val.name} spec={val.spec} fees={val.fees} rep={val.rep} /></li>
    })

    return (
        <>
            <ul className="render-list">
                {docList}
            </ul>
        </>
    );
}
export default CategoryList;