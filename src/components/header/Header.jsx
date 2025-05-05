import React from "react";
import "./header.css";
import yt from "../../assets/youtube.png";
import lk from "../../assets/linkedin.png";
import ig from "../../assets/instagram.png";

const Header = () => {
    return (
    <div className="header__box">
        <div className="header__nav">
        <span className="header__items" style={{marginLeft: '-0.2rem'}}><a href="#home">HOME</a></span>
        <span className="header__items"><a href="#batches">BATCHES</a></span>
        <div className="header__items"><a href="#about">ABOUT</a></div>
        <span className="header__items"><a href="#students">STUDENTS</a></span>
        <span className="header__items"><a href="/assign" target="_blank">ASSIGNMENTS</a></span>
        <span className="header__items"><a href="#contacts">CONTACT US</a></span>
        </div>
        <div className="header__icon">
        <img className = "icon" style={{ width: '20px', height: '20px', marginTop: '2px'}} src = {lk} alt = "" />
        <img className = "icon" style={{ width: '20px', height: '20px', marginTop: '2px'}} src = {yt} alt = "" />
        <img className = "icon" style={{ width: '20px', height: '20px', marginTop: '2px'}} src = {ig} alt = "" />
        </div>

    </div>
    );
};

export default Header;