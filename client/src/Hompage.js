import Navbar from "./NavComponents/Navbar";
// import CatagorySec from "./HomepageComponents/CatagorySec";
import CategoryList from "./HomepageComponents/CategoryList";
import Select from 'react-select';
import { useEffect, useState } from "react";
import "./HomepageComponents/style.css";

function SortOptions({setSortBasis}) {
    const option = [
        {
            value: 'rep',
            label: 'By Reputation'
        },
        {
            value: 'fees',
            label: 'By Fees'
        }
    ]
    const [selectedOption, setSelectedOption] = useState(option[0]);
    useEffect(()=>{
        setSortBasis(selectedOption.value);
    },[selectedOption])
    return (
        <div className="sort-sec">
            <div className="sort-title">Sort</div>
            <Select className="sort-select" defaultValue={selectedOption} onChange={setSelectedOption} options={option} />
        </div>
    )
}

function Homepage() {
    let arr = [
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 1500,
            rep: 1000000
        },
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 200,
            rep: 20000
        },
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 2000,
            rep: 20003240
        },
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 1000,
            rep: 2000200
        },
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 1500,
            rep: 2000000
        },
        {
            Pimgsrc: require("./assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Psychologist",
            fees: 1500,
            rep: 2000000
        },
    ]
    let [finalArr,setFinalArr] = useState(arr);
    let [sortBasis,setSortBasis] = useState('rep');

    useEffect(()=>{
        let arr2 = finalArr.map(val=>val);
        if(sortBasis === 'fees'){
            arr2.sort((a,b)=>{
                return (a.fees-b.fees);
            })
        }
        else{
            arr2.sort((a,b)=>{
                return (b.rep - a.rep);
            })
        }
        setFinalArr(arr2);
    },[sortBasis])

    return (
        <>
            <Navbar />
            <div className="catTitle">Choose your Consultant</div>
            {/* <CatagorySec /> */}
            <SortOptions setSortBasis={setSortBasis}/>
            <CategoryList DoctorsList={finalArr} />
        </>
    )
}
export default Homepage;