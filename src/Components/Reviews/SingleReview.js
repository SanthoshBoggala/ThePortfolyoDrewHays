import React from 'react';
import './reviews.css';

const SingleReview = ({image, name, position, review}) => {
  return (
    <div className='col-md-4 col-sm-6 col-12 singleReview'>
      <div className='reviewInfo'>
        <div className='userImage'>
            <img src={image.url} alt='image' className='img-fluid'/>
        </div>
        <div className='name title'>{name}</div>
        <div className='position'>{position}</div>
      </div>
      <div className='content'>
        {review}
      </div>
    </div>
  )
}

export default SingleReview;
