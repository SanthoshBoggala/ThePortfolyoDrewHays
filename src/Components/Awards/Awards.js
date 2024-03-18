import React from 'react';
import './awards.css';
import SingleAward from './SingleAward';


const Awards = () => {
    const awardsData = [
        {
            url: "./Images/awward-1.jpg"
        },
        {
            url: "./Images/awward-2.jpg"
        },
        {
            url: "./Images/awward-3.jpg"
        },
        {
            url: "./Images/awward-2.jpg"
        },
        {
            url: "./Images/awward-1.jpg"
        },
    ]
    return (
        <div className="tab-content awards" data-tab-content="awward">
            <h3 className="h4 title section-title">
                We’re a team of creatives who are excited about unique ideas and help IT-tech companies to make identity by
                crafting UI/UX.
            </h3>
            <div className="row">
                { awardsData && awardsData.length !== 0 && (
                    awardsData.map((one,index) => <SingleAward key={index} {...one} />)
                ) }
            </div>
        </div>
    );
};

export default Awards;
