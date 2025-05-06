import React, { useState } from "react";
import "./bar.css";
import Logo from "../../assets/unnamed.jpg";
import Header from "../header/Header";
import About from "../about/About";
import Courses from "../courses/Courses";
import Students from "../students/Students";
import Contacts from "../contacts/Contacts";

const Bar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
    <>
    <div className="big__container" id="home" style={{maxWidth: '100%'}}>
        <div className="nav__container">
            <div className="home__title"> 
                <img src={Logo} alt="Logo" className="logo__image" />  
                <span className="title__text" style={{color: 'white'}}>Virmani Tutorials</span>
            </div>
            
            <div className="mobile__menu__toggle" onClick={toggleMenu}>
                {menuOpen ? (
                    <div className="hamburger-icon close-icon">✕</div>
                ) : (
                    <div className="hamburger-icon">☰</div>
                )}
            </div>
        </div>

        <div className={`header__wrapper ${menuOpen ? 'menu-open' : ''}`}>
            <Header />
        </div>

        <div className="hero__content">
            <div className="small__container">
                WELCOME TO VIRMANI TUTORIALS!
            </div>
            <h1 className="hero__heading">Learn with the Best</h1>
            <div className="hero__description">
                <p>Are you afraid of maths? Not anymore,</p>
                <p>Virmani Tutorials is here to make your mathematics concepts crystal clear.</p>
            </div>
            
            <div className="btn">
                <a href="#batches">
                    Get Started -&gt;
                </a>
            </div>
        </div>
    </div>
    <About />
    <Courses />
    <Students />
    <Contacts />
    </> 
    );
};

export default Bar;