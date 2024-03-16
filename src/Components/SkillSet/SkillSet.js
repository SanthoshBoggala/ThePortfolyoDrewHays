import React from 'react';
import './skillSet.css';

const SkillSet = ({skills}) => {
    return (
        <div className="tab-content" data-tab-content="skillset">
            <div className="row skillDiv">

                <div className="skill-content col-md-6 col-12">

                    <h3 className="h4 title section-title">
                        We help to create visual strategies.
                    </h3>

                    <p className="section-text">
                        A very small stage in a vast cosmic arena great turbuslent clouds encyclo-paedia galactica star
                        stuff harvesting star light
                    </p>

                    <ul className="skill-list">
                        <li>
                            <div className="skill-wrapper">
                                <span className="">Website Development</span>

                                <span className="value">95%</span>
                            </div>

                            <div className="progress-bar">
                                <div className="progress-fill" style={{"width": "95%"}}></div>
                            </div>
                        </li>

                        <li>
                            <div className="skill-wrapper">
                                <span className="span">Design UI & UX</span>

                                <span className="value">85%</span>
                            </div>

                            <div className="progress-bar">
                                <div className="progress-fill" style={{"width": "85%"}}></div>
                            </div>
                        </li>

                    </ul>

                </div>

                <div className='skill-banner col-12 col-md-6'>
                    <div className="img-holderDiv" data-tilt>
                        <img src="./Images/skill-banner.jpg"  loading="lazy" alt="skill banner"
                            className="img-cover img-fluid" />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SkillSet
