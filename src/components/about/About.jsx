import React from "react";
import "./about.css";
import Aboutbox from "./Aboutbox.jsx";
import pic from "../../assets/sir.jpg";

const About = () => {
    return (
    <section className="about__container" id="about">
        <div className="about__title" data-aos="fade-down">
            About
        </div>
        
        <div className="about__content" data-aos="fade-up" delay="300">
            <div className="profile__image">
                <img src={pic} alt="Instructor Profile" className="instructor__image" />
            </div>
            
            <div className="about__description">
                <div className="boxi">
                    <h2 className="boxi__title">Why choose Virmani Tutorials?</h2>
                    <p className="boxi__text">
                        With over 10 years of experience in mathematics education, Virmani Tutorials has established itself as a premier coaching center that transforms students' relationship with mathematics. Our mission is to develop mathematical thinking that extends beyond exams, creating a foundation for logical reasoning and problem-solving skills that benefit students throughout their academic and professional careers.
                    </p>
                </div>
            </div>
        </div>
        
        <Aboutbox />
    </section>
    );
};

export default About;