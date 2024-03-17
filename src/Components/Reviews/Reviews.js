import React from 'react';
import './reviews.css'
import SingleReview from './SingleReview';

const Reviews = ({ testimonials }) => {
    return (
        <div className="tab-content">
            {(testimonials && testimonials.length !== 0) ? (
                <div className='row reviews'>
                    {testimonials.map((one, index) => {
                        return (
                            <SingleReview key={index} {...one} />
                        )
                    })}
                </div>
            ) : (
                <h4>No testimonials available...</h4>
            )}
        </div>
    )
}

export default Reviews;
