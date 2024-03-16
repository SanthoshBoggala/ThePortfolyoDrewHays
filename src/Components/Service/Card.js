
import React from 'react';
import './service.css';

const Card = ({ iconSrc, title }) => {
    const data = {
        charge : "$300",
        desc : "Design direction for business. Get your business on the next level. We help to create great experiences.",
        enabled :  true,
        image :  {
            public_id: 'portfolio3/1710364293287-4q1ngo.webp', 
            url: 'https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1710364293287-4q1ngo.webp'
        },
        name : "App Development"
        }
        
    return (
        <div className="service-card">
            <div className="card-icon">
                <img src={data.image.url} width="80" height="80" loading="lazy" alt="service icon" />
            </div>
            <h3 className="card-title">{data.name}</h3>
        </div>
    );
};

export default Card;
