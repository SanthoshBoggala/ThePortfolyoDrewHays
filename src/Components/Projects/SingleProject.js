import React from 'react';
import './projects.css';

const SingleProject = ({ image, techStack, title, gethuburl }) => {
  return (
    <li className="slider-item">
      <div className="project-card text-center">
        <div className="card-banner img-holder has-before" style={{ '--width': 1000, '--height': 763 }}>
          <img
            src={image.url}
            width="1000"
            height="763"
            loading="lazy"
            alt="Project poster: Creative & experienced digital design studio"
            className="img-cover"
          />
          <a href={(gethuburl && gethuburl.length !== 0 )? "#" : gethuburl} className="btn btn:hover">
            <span className="span">Project Details</span>
          </a>
        </div>
        <div className="projectCardInfo">
          <p className="projectSubtitle">
            { techStack && techStack.length !== 0 && (
                techStack.map(one => one)
            ) }
          </p>
          <h3 className="projectTitle title">
            <a href='#' className="card-title">{title}</a>
          </h3>
        </div>
      </div>
    </li>
  );
};

export default SingleProject;
