
import React from 'react';
import './about.css';

const About = ({ user }) => {

    return (
        <div className="tab-content active" data-tab-content="about">
            <div className="row">

                <figure className="about-banner col-md-6 col-12" data-tilt>
                    <img src={user.about.avatar.url}  loading="lazy" alt="about banner"
                        className="img-cover img-holder img-fluid" />
                </figure>

                <div className="about-content col-md-6 col-12">

                    <h2 className="h4 title section-title">
                        {user.about.quote}
                    </h2>

                    <p className="section-text">
                        {user.about.subTitle}
                    </p>

                    <p className="section-text">
                        {user.about.description}
                    </p>

                    <ul className="profileInfo row">

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Name</p>

                            <span className="span h5">{user.about.name}</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Phone Number</p>

                            <span className="span h5">{user.about.phoneNumber}</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Email Address</p>

                            <span className="span h5">{user.email}</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Social Network</p>

                            <div className="social-list">
                                { (user.social_handles && user.social_handles.length !== 0) ? (
                                    user.social_handles.map(one=>{
                                        return (
                                            <a key={one.platform} href="#" className="social-link h6" title={one.platform}>
                                                <img src={one.image.url} alt="socialmedia image"/>
                                            </a> 
                                        )
                                    })
                                ) : (
                                    <p>Not Available</p>
                                )}
                            </div>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default About;
