import React from 'react';
import './projects.css';
import SingleProject from './SingleProject';

const Projects = ({projects}) => {
    const activeProjects = projects && projects.filter(one => one.enabled === true)
    return (
        <section className="section project" aria-label="my latest projects" id="project">

            <ul className="slider-list">
                { (activeProjects &&  activeProjects.length !== 0) ? (
                    activeProjects.map((one,index) => <SingleProject key={index} {...one}/>)
                ) : (
                    <h4>Not Projects Available</h4>
                )}
            </ul>
        </section>
    )
}

export default Projects;
