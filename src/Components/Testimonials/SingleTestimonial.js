import React from 'react';
import './testimonials.css';

const SingleTestimonial = ({name, position, image, review}) => {
  return (
    <div className="testi-content">
      <blockquote className="title reviewContent">
        &ldquo; {review} 
    </blockquote>
      <div className="profile-card">
        <figure className="reviewImg">
          <img
            src={image.url}
            width="70"
            height="70"
            loading="lazy"
            alt="Alexis browni JR."
            className="img-cover"
          />
        </figure>
        <div>
          <p className="title card-title">{name}</p>
          <p className="card-subtitle">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
