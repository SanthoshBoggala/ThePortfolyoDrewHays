import React from 'react';
import './skillSet.css';
import { Tilt } from 'react-tilt';
import SingleSkill from './SingleSkill';

const SkillSet = ({ skills }) => {
    const activeSkills = skills && skills.filter((one) => one.enabled === true)
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
                </div>

                <div className='skill-banner col-12 col-md-6'>
                    <div className="img-holderDiv">
                        <Tilt options={{ max: 10, scale: 1 }} >
                            <img src="./Images/skill-banner.jpg" loading="lazy" alt="skill banner"
                                className="img-cover img-fluid" />
                        </Tilt>
                    </div>
                </div>

            </div>
            <div className='skills row'>
                {activeSkills && activeSkills.length !== 0 && (
                    activeSkills.map((one, index) => <SingleSkill key={index} {...one} />)
                )}
            </div>
        </div>

    )
}

export default SkillSet
