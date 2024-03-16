
import React from 'react';
import './about.css';

const About = () => {

    return (
        <div className="tab-content active" data-tab-content="about">
            <div className="row">

                <figure className="about-banner col-md-6 col-12" data-tilt>
                    <img src="./Images/about-banner.jpg"  loading="lazy" alt="about banner"
                        className="img-cover img-holder img-fluid" />
                </figure>

                <div className="about-content col-md-6 col-12">

                    <h2 className="h4 title section-title">
                        A very small stage in a vast cosmic.
                    </h2>

                    <p className="section-text">
                        A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
                        stuff harvesting star light the carbon in our apple pies realm of the galaxies
                    </p>

                    <ul className="profileInfo row">

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Name</p>

                            <span className="span h5">Drew Hays</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Phone Number</p>

                            <span className="span h5">123. 456. 789. 01</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Email Address</p>

                            <span className="span h5">info@drew.com</span>
                        </li>

                        <li className="about-item col-md-6 col-12">
                            <p className="list-title">Social Network</p>

                            <div className="social-list">

                                <a href="#" className="social-link h6" title="Facebook">Fb.</a>
                                <a href="#" className="social-link h6" title="Behance">Be.</a>
                                <a href="#" className="social-link h6" title="Linkedin">Ln.</a>
                                <a href="#" className="social-link h6" title="Dribbble">Dr.</a>

                            </div>
                        </li>

                    </ul>

                </div>

            </div>
        </div>
    );
};

export default About;
