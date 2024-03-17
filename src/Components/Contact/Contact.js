import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <section className="section contact" aria-label="contact me" id="contact">
            <div className="container">

                <h2 className="title h2 section-title">Get In Touch</h2>

                <div className="contact-content row">

                    <div className='col-md-4 col-12 contactInfoDiv firstDiv'>
                        <form onSubmit={handleSubmit} className="contact-form">

                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full name" autoComplete="off" required className="input-field" />

                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" autoComplete="off" required className="input-field" />

                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" autoComplete="off" className="input-field" />

                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter messages" required className="input-field"></textarea>

                            <button type="submit" className="formBtn">
                                <span className="span">Get A Quote ➜</span>
                            </button>

                        </form>
                    </div>

                    <div className='col-md-4 col-12 contactInfoDiv'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d898.4329239267093!2d-73.91493787358391!3d40.76299026683699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1671529019371!5m2!1sen!2sbd"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="map"></iframe>


                    </div>
                    <div className='col-md-4 col-12 contactInfoDiv'>
                        <ul className="contact-list">

                            <li className="contact-item">

                                <div className="item-icon">
                                    <img src="./Images/contact-icon-1.png" width="50" height="50" loading="lazy" alt="contact icon" />
                                </div>

                                <div>
                                    <span className="contactInfo h6">869. 368. 456. 56</span>
                                    <span className="contactInfo h6">789 (569) 126 35</span>
                                </div>

                            </li>

                            <li className="contact-item">

                                <div className="item-icon">
                                    <img src="./Images/contact-icon-2.png" width="50" height="50" loading="lazy" alt="contact icon" />
                                </div>

                                <div>
                                    <address className="contactInfo h6">
                                        30- 24 Newtown Rd, Queens,
                                        NY 11103, USA
                                    </address>
                                </div>

                            </li>

                            <li className="contact-item">

                                <div className="item-icon">
                                    <img src="./Images/contact-icon-3.png" width="50" height="50" loading="lazy" alt="contact icon" />
                                </div>

                                <div>
                                    <span className="contactInfo h6">info@drew.com</span>
                                    <span className="contactInfo h6">jobs@drew.com</span>
                                </div>

                            </li>

                        </ul>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
