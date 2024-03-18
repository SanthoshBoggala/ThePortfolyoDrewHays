import React from 'react';
import { Tilt } from 'react-tilt';

const SingleAward = ({ url }) => {
    return (
        <div className="award-card col-md-4 col-12">
            <Tilt options={{ max: 10, scale: 1 }} >

                <figure className="card-banner award img-holder">
                    <img src={url} width="534" height="383" loading="lazy" alt="certificate"
                        className="img-cover" />
                </figure>
            </Tilt>
        </div>
    )
};

export default SingleAward;
