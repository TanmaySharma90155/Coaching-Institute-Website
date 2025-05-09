import React, { useState, useEffect } from "react";
import "./header.css";
import yt from "../../assets/youtube.png";
import lk from "../../assets/linkedin.png";
import ig from "../../assets/instagram.png";

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home');
    
    useEffect(() => {
        const handleScroll = () => {
            // Get current scroll position
            const scrollPosition = window.scrollY;
            
            // Get all sections
            const sections = ['home', 'batches', 'about', 'students', 'contacts'];
            
            // Find the current section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop - 100 && 
                        scrollPosition < offsetTop + offsetHeight - 100) {
                        setActiveNav(`#${section}`);
                        break;
                    }
                }
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="header__box">
            <div className="header__nav">
                <span className={`header__items ${activeNav === '#home' ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setActiveNav('#home')}>HOME</a>
                </span>
                <span className={`header__items ${activeNav === '#batches' ? 'active' : ''}`}>
                    <a href="#batches" onClick={() => setActiveNav('#batches')}>BATCHES</a>
                </span>
                <div className={`header__items ${activeNav === '#about' ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setActiveNav('#about')}>ABOUT</a>
                </div>
                <span className={`header__items ${activeNav === '#students' ? 'active' : ''}`}>
                    <a href="#students" onClick={() => setActiveNav('#students')}>STUDENTS</a>
                </span>
                <span className="header__items">
                    <a href="/assign" target="_blank">ASSIGNMENTS</a>
                </span>
                <span className={`header__items ${activeNav === '#contacts' ? 'active' : ''}`}>
                    <a href="#contacts" onClick={() => setActiveNav('#contacts')}>CONTACT US</a>
                </span>
            </div>
            <div className="header__icon">
                <a href="https://www.linkedin.com/in/shobhit-virmani-953aa320/" className="social-link">
                    <img className="icon" src={lk} alt="LinkedIn" />
                </a>
                <a href="https://youtube.com/@shobhitvirmani?feature=shared" className="social-link">
                    <img className="icon" src={yt} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/shobhitvirmani?igsh=ZGMxZjlkZmM3OWs3" className="social-link">
                    <img className="icon" src={ig} alt="Instagram" />
                </a>
            </div>
        </div>
    );
};

export default Header;