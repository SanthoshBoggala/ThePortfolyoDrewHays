import SingleExp from './SingleExp';
import './experience.css';
import React from 'react'

const Experience = ({experiences,img}) => {
    return (
        <div className="tab-content">
            { (experiences && experiences.length !== 0) ? (
                <div className='row experiences'>
                    { experiences.map((one, index)=> <SingleExp key={index} {...one} url={img}/>) }
                </div>
            ) : (
                <h5>
                    No prior Experience Until Now!
                </h5>
            )}
        </div>

    )
}

export default Experience
