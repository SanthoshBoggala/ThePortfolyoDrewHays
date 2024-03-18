import React from 'react';
import './exhibition.css';
import SingleExhibi from './SingleExhibi';

const Exhibition = () => {
    const exhibiData = [
        {
            url: "https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/Portfolyo/exhibition-1.jpg",

        },
        {
            url: "https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/Portfolyo/exhibition-2.jpg",

        },
        {
            url: "https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/Portfolyo/exhibition-3.jpg",

        },
        {
            url: "https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/Portfolyo/exhibition-4.jpg",

        },
        {
            url: "https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/Portfolyo/exhibition-1.jpg",

        },
    ]
    return (
        <div className="exhibition" data-tab-content="exhibition">
            <div className="grid-list row">
                { exhibiData && exhibiData.length !== 0 && (
                    exhibiData.map((one,index)=>  <SingleExhibi key={index}  {...one}/>)
                ) }
            </div>
        </div>
    );
};

export default Exhibition;
