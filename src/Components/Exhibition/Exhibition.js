import React from 'react';
import './exhibition.css';
import SingleExhibi from './SingleExhibi';

const Exhibition = () => {
    const exhibiData = [
        {
            url: "./Images/exhibition-1.jpg",

        },
        {
            url: "./Images/exhibition-2.jpg",

        },
        {
            url: "./Images/exhibition-3.jpg",

        },
        {
            url: "./Images/exhibition-4.jpg",

        },
        {
            url: "./Images/exhibition-1.jpg",

        },
    ]
    return (
        <div className="tab-content exhibition" data-tab-content="exhibition">
            <div className="grid-list row">
                { exhibiData && exhibiData.length !== 0 && (
                    exhibiData.map((one,index)=>  <SingleExhibi key={index}  {...one}/>)
                ) }
            </div>
        </div>
    );
};

export default Exhibition;
