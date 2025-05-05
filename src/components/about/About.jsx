import React from "react";
import "./about.css";
import Aboutbox from "../about/Aboutbox.jsx";
import pic from "../../assets/sir.jpg";

const About = () => {
    return (
    <section className="about__container" id = "about">
        <div className="about__title" data-aos="fade-down">
        About
        </div>
        <div data-aos="fade-up" delay = "300">
            <div className="cards">
                <img src={pic} style={{width: '300px', height: 'auto', border: '2px solid black', borderRight: '5px solid black', borderBottom: '5px solid black', marginRight: '30rem', borderRadius: '15px'}} />
            </div>
            <div className="cards">
                 <div className="boxi">
                    <div style={{fontSize: '25px', marginBottom: '1.5rem', color: 'var(--title-color)'}}>Why choose Virmani Tutorials ?</div>
                    <span>With over 10 years of experience in mathematics education, Virmani Tutorials has established itself as a premier coaching center that transforms students' relationship with mathematics. Our mission is to develop mathematical thinking that extends beyond exams, creating a foundation for logical reasoning and problem-solving skills that benefit students throughout their academic and professional careers.</span>
                 </div>
            </div>

        </div>
        
          <Aboutbox />
    </section>
    );
};

export default About;