import React from "react";
import "./about.css";
import percent from "../../assets/discount.png";

const Aboutbox = () => {
    return (
        <div className="about__stats">
            <div className="about__boxes">
                <div className="about__box">
                    <i className="about__icon fa-solid fa-person-chalkboard"></i>
                    <div className="about__info">
                        <h3 className="about__t">10+</h3>
                        <span className="about__subtitle">Years Experience</span>
                    </div>
                </div>
                
                <div className="about__box">
                    <i className="about__icon fa-solid fa-user"></i>
                    <div className="about__info">
                        <h3 className="about__t">3000+</h3>
                        <span className="about__subtitle">Students Mentored</span>
                    </div>
                </div>
                
                <div className="about__box">
                    <img 
                        className="about__icon" 
                        src={percent} 
                        alt="Percentage Icon"
                        style={{width: '35px', height: 'auto'}}
                    />
                    <div className="about__info">
                        <h3 className="about__t">95%</h3>
                        <span className="about__subtitle">Students achieve 90+</span>
                    </div>
                </div>
                
                <div className="about__box">
                    <i className="about__icon fa-solid fa-users-line"></i>
                    <div className="about__info">
                        <h3 className="about__t">20</h3>
                        <span className="about__subtitle">Batch Size</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutbox;