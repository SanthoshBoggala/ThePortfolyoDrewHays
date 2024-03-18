import React from 'react';
import './skillSet.css';

const SingleSkill = ({ image, name, percentage }) => {
    return (
        <div className='singleSkill col-lg-2 col-md-3 col-sm-4 col-6'>
            <div className='skillImg'>
                <img src={image.url} alt={name} className='img-fluid' />
            </div>
            <div className='skillName'>{name}</div>
            <div className='badge'>{percentage + " %"}</div>
        </div>
    )
};

export default SingleSkill;
