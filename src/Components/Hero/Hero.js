import React from 'react';
import './hero.css';
import { Tilt } from 'react-tilt';
import { IonIcon } from '@ionic/react';
import { cloudDownloadOutline } from 'ionicons/icons'; 


const Hero = ({ img }) => {

  return (
    <div className="hero text-center" id="home">
      <div className="container profileShow">
        <div className='row'>
          <div className="col-md-6 hero-content d-none d-md-block">
            <h1 className="h1 title">Get Your Product Identity From Me.</h1>
            <div className="wrapper">
              <a href="#" className="btn btn:hover">
                <span className="span">Download CV</span>
                <IonIcon icon={cloudDownloadOutline} />
              </a>
              <p className="hero-text">
                From device to cloud to edge Innovate from anywhere with secure
              </p>
            </div>
          </div>
          <div className='extraSpaceProfileLarge col-md-6 d-none d-md-block'>

          </div>

          <div className="banner-outline has-after col-md-6">
              <div className="hero-banner has-after" >
                <Tilt options={{ max: 10, scale: 1 } } >
                  <img src={img} alt="Drew Hays" className="hero-cover" />
                </Tilt>
              </div>
              <span className="span title">Drew Hays</span>
          </div>


          <div className="hero-content mt-5 col-md-6 d-md-none">
            <h1 className="h1">Get Your Product Identity From Me.</h1>
            <div className="wrapper">
              <a href="#" className="btn btn:hover">
                <span className="span">Download CV</span>
                <IonIcon icon={cloudDownloadOutline} />              </a>
              <p className="hero-text">
                From device to cloud to edge Innovate from anywhere with secure
              </p>
            </div>
          </div>
          <div className='extraSpaceProfile col-md-6 d-md-none'>

          </div>
        </div>

        <img src="./Images/hero-shape-1.png" width="559" height="232" alt="shape" className="shape shape-1" />
        <img src="./Images/hero-shape-2.png" width="1358" height="497" alt="shape" className="shape shape-2" />
      </div>
    </div>
  );
};

export default Hero;
