import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Chitral Tourism Guide</h2>
            <p className="section-intro">
                Have a question or need help planning your trip to Chitral? Get in touch with us.
            </p>
            <div className="contact-container">
                {/* Location */}
                <div className="contact-card">
                    <div className="contact-icon">•</div>
                    <h3>Location</h3>
                    <p>Chitral, Khyber Pakhtunkhwa, Pakistan</p>
                </div>

                {/* Email */}
                <div className="contact-card">
                    <div className="contact-icon">•</div>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:ainee8117@gmail.com">ainee8117@gmail.com</a>
                    </p>
                </div>

                {/* Contact Number */}
                <div className="contact-card">
                    <div className="contact-icon">•</div>
                    <h3>Contact Number</h3>
                    <p>
                        <a href="tel:+923402727074">0340 2727074</a>
                    </p>
                </div>

                {/* Travel Assistance */}
                <div className="contact-card">
                    <div className="contact-icon">•</div>
                    <h3>Travel Assistance</h3>
                    <p>
                        Get helpful information about hotels, festivals, attractions, transportation, and travel tips.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;