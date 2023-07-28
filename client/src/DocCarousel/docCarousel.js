import { useState } from 'react';
import Docelement from './docelement.js';
import { Carousel } from '@trendyol-js/react-carousel';

function Doccarousel() {
    const carContent = [
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-1"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-2"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-3"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-4"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-4"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-4"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-4"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-4"
        },
        {
            imgsrc: require("../assets/images/deep_icpc_1.jpeg"),
            name: "Deep Prajapati",
            spec: "Spec-5"
        }
    ];

    
    const content = carContent.map((ele)=>{
        return <Docelement imgsrc={ele.imgsrc} name={ele.name} spec={ele.spec} />
    })
    return (
        <>
        {content?<Carousel show={4.5} slide={2} swiping={true}>{content}</Carousel>:<></>}
        </>
    );
}
export default Doccarousel;