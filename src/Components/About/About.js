
import React from 'react';
import './about.css';

const About = () => {
    return (
        <section className="section about" aria-label="about-me" id="about">
            <div className="container">
                <div className="tab-container">
                    <ul class="tab-btn-list row">
                        <li class="tab-btn-item col-md-2 col-3">
                            <button class="tab-btn h6 active" data-tab-btn="about">About Me</button>
                        </li>

                        <li class="tab-btn-item col-md-2 col-3">
                            <button class="tab-btn h6" data-tab-btn="skillset">Skillset</button>
                        </li>

                        <li class="tab-btn-item col-md-2 col-3">
                            <button class="tab-btn h6" data-tab-btn="interview">Interview</button>
                        </li>

                        <li class="tab-btn-item col-md-2 col-3">
                            <button class="tab-btn h6" data-tab-btn="awward">Awwards</button>
                        </li>

                        <li class="tab-btn-item col-md-2 col-3">
                            <button class="tab-btn h6" data-tab-btn="exhibition">Exhibition</button>
                        </li>

                    </ul>

                    <div class="tab-content active" data-tab-content="about">
                        <div class="grid-list">

                            <figure class="about-banner img-holder" style={{ "--width": "", "--height": "" }} data-tilt>
                                <img src="./Images/about-banner.jpg" width="570" height="420" loading="lazy" alt="about banner"
                                    class="img-cover" />
                            </figure>

                            <div class="about-content">

                                <h2 class="h4 title section-title">
                                    A very small stage in a vast cosmic.
                                </h2>

                                <p class="section-text">
                                    A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
                                    stuff harvesting star light the carbon in our apple pies realm of the galaxies
                                </p>

                                <ul class="about-list">

                                    <li class="about-item">
                                        <p class="list-title">Name</p>

                                        <span class="span title h5">Drew Hays</span>
                                    </li>

                                    <li class="about-item">
                                        <p class="list-title">Phone Number</p>

                                        <span class="span title h5">123. 456. 789. 01</span>
                                    </li>

                                    <li class="about-item">
                                        <p class="list-title">Email Address</p>

                                        <span class="span title h5">info@drew.com</span>
                                    </li>

                                    <li class="about-item">
                                        <p class="list-title">Social Network</p>

                                        <div class="social-list">

                                            <a href="#" class="social-link h6" title="Facebook">Fb.</a>
                                            <a href="#" class="social-link h6" title="Behance">Be.</a>
                                            <a href="#" class="social-link h6" title="Linkedin">Ln.</a>
                                            <a href="#" class="social-link h6" title="Dribbble">Dr.</a>

                                        </div>
                                    </li>

                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
