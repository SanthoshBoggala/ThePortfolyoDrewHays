import React, { useState } from 'react';
import './sections.css';
import About from '../About/About';
import SkillSet from '../SkillSet/SkillSet';
import Experience from '../Experience/Experience';

const Sections = ({user}) => {
    const [tab, setTab] = useState(0)

    const data = [
        {
            text: "About Me",
            compo: <About user={user}/>
        },
        {
            text: "Skillset",
            compo: <SkillSet skills={user.skills}/>
        },
        {
            text: "Experiance",
            compo: <Experience experiences={user.timeline} img={user.about.avatar.url}/>
        },
        {
            text: "Reviews",
            compo: <About />
        },
        {
            text: "Exhibition",
            compo: <About />
        }
    ]
    return (
        <section className="section about" aria-label="about-me" id="about">
            <div className="container">
                <div className="tab-container">

                    <ul className="tab-btn-list">

                        {data && data.length !== 0 && (
                            data.map((one, index) => (
                                <li className="tab-btn-item" key={index}>
                                    <button className={`tab-btn  ${tab === index ? "active" : ""}`} onClick={() => setTab(index)}>{one.text}</button>
                                </li>
                            ))
                        )}

                    </ul>

                    { data && data[tab].compo }
                </div>
            </div>
        </section>
    )
}

export default Sections;
