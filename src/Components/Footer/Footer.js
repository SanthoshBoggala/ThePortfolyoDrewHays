import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          Copyright & Design By @codewithsadee - 2022
        </p>
        <a href="#top" className="back-top-btn">
          <span className="span">Back To Top ⬆</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
