import React from "react";
import "./assign.css";
import Logo from "../../assets/unnamed.jpg";

const Assign = () => {
    return (
        <div className="assign__container" id="assignments">
            <div className="assign__title"> 
                <img src={Logo} alt="Virmani Tutorials Logo" className="logo__image" />  
                <span className="title__text">Virmani Tutorials</span>
            </div>
            
            <div className="assign__head">
                Assignments
            </div>
            
            <div className="assign__classes">
                <div className="assign_center">
                    <a href="">CLASS 6</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 7</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 8</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 9</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 10</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 11</a>
                </div>
                
                <div className="assign_center">
                    <a href="">CLASS 12</a>
                </div>
            </div>
        </div>
    );
};

export default Assign;