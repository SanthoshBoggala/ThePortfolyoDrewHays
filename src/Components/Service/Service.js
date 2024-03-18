
import React from 'react';
import Card from './Card';
import './service.css';

const Service = ({ services }) => {

  let activeServices = services && services.filter(one => one.enabled === true);

  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="services-container">
        <ul className="service-list">
          {activeServices && activeServices.length !== 0 && (
            activeServices.map((one, index) => {
              return (
                <li key={index} className="service-item">
                  <Card iconSrc={one.image.url} title={one.name} charge={one.charge} />
                </li>
              )
            })
          )}
        </ul>
      </div>
    </section>
  );
};

export default Service;
