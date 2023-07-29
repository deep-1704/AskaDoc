import { useEffect, useState } from 'react';
import Docelement from './docelement.js';
import { Carousel } from '@trendyol-js/react-carousel';

function Doccarousel() {
    let [CarContent, setCarContent] = useState([]);
    let [dataLoaded, setDataLoaded] = useState(false);
    let fetchData = () => {
        fetch("http://localhost:4000/getCarouselInfo")
            .then(response => {
                return response.json();
            }).then(data => {
                // console.log(data);
                // return data;
                setCarContent(data);
                setDataLoaded(true);
            })
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <>
            {dataLoaded?(<Carousel show={4.5} slide={2} swiping={true}>
                {CarContent.map((ele) => {
                    let profileImage = require(`../assets/images/profileImages/${ele.imgsrc}.jpeg`);
                    return <Docelement imgsrc={profileImage} name={ele.name} spec={ele._id} />
                })}
            </Carousel>) : <div>Please wait</div>}
        </>
    );
}
export default Doccarousel;