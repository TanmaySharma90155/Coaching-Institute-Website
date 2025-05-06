import React from "react";
import "./contacts.css";
import logo from "../../assets/unnamed.jpg";

const Contacts = () => {
    return (
        <section id="contacts" data-aos="fade-up">
            <div className="contacts__container">
                <div className="contacts__header">Get In Touch</div>
                <div className="contacts__align">
                    <div className="contacts__columns">
                        {/* Column 1 - About */}
                        <div className="contacts__column">
                            <img
                                className="contacts__logo"
                                src={logo}
                                alt="Virmani Tutorials Logo"
                            />
                            <div className="contacts__title">
                                Virmani Tutorials
                            </div>
                            <div className="contacts__thought">
                                <i>Empowering students with the clarity and confidence to excel in mathematics through expert coaching and personalized attention.</i>
                            </div>
                        </div>

                        {/* Column 2 - Contact Info */}
                        <div className="contacts__column">
                            <div className="contacts__row">
                                <div className="contacts__title">Location:</div>
                                <div className="contacts__thought">
                                    3A/161, 2nd floor, NIT Faridabad Haryana 121001
                                </div>
                            </div>
                            <div className="contacts__row">
                                <div className="contacts__title">Phone:</div>
                                <div className="contacts__thought">
                                    <a href="tel:+919873756914">+91-9873756914</a>
                                </div>
                            </div>
                        </div>

                        {/* Column 3 - Social & Feedback */}
                        <div className="contacts__column">
                            <div className="contacts__row">
                                <div className="contacts__title">Email:</div>
                                <div className="contacts__thought">
                                    <a href="mailto:tanmaysharma90155@gmail.com">example.com</a>
                                </div>
                            </div>
                            <div className="contacts__row">
                                <div className="contacts__title">Follow Us:</div>
                                <div className="contacts__thought">
                                    Linkedin, Youtube, Instagram
                                </div>
                            </div>
                            <div className="contacts__row">
                                <div className="contacts__title">Feedback:</div>
                                <div className="contacts__thought">Share your thoughts!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;