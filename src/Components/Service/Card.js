
import React from 'react';
import './service.css';

const Card = ({ iconSrc, title }) => {

    return (
        <div className='cardMulti'>
            <div className="service-card">
                {title && (
                    <>
                        <div className="service-icon">
                            <img src={iconSrc} width="80" height="80" loading="lazy" alt="service icon" />
                        </div>
                        <h3 className="card-title">{title}</h3>
                    </>
                )}
            </div>
        </div>

    );
};

export default Card;
