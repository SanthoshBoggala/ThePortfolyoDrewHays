import React from 'react'
import { Tilt } from 'react-tilt'

const SingleExhibi = ({ url }) => {
    return (
        <div className="exhibition-card col-md-4 col-12">
            <Tilt options={{ max: 10, scale: 1 }} >
                <figure className="card-banner exhibi img-holder" data-tilt>
                    <img src={url} width="376" height="200" loading="lazy" alt="image"
                        className="img-cover" />
                </figure>
            </Tilt>
            <div className="card-icon">
                <img
                    src='./Images/gallary.png'
                    alt='gallary'
                />
            </div>
        </div>
    )
}

export default SingleExhibi
