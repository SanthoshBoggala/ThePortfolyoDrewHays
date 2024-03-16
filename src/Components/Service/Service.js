
import React from 'react';
import Card from './Card';
import './service.css';

const Service = () => {
  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="services-container">
        <ul className="service-list">
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-1.svg" title="Web Development" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-2.svg" title="Digital Marketing" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-3.svg" title="Graphics Design" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-4.svg" title="Mobile Application" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-1.svg" title="Web Development" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-2.svg" title="Digital Marketing" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-3.svg" title="Graphics Design" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-4.svg" title="Mobile Application" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-1.svg" title="Web Development" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-2.svg" title="Digital Marketing" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-3.svg" title="Graphics Design" />
          </li>
          <li className="service-item">
            <Card iconSrc="./Images/service-icon-4.svg" title="Mobile Application" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
