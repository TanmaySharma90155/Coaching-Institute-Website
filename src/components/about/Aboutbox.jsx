import React from "react";
import "./about.css";
import percent from "../../assets/discount.png";
const Aboutbox = () => {

return (

<div className="about__img" >
<div className="about__boxes grid">

<div className="about__box">
        <i style = {{fontSize: '35px'}} class="fa-solid fa-person-chalkboard"></i>
            <div style={{marginTop: '-0.2rem'}}>
                <h3 className="about__t">10+</h3>
                <span className="about__subtitle">Years Experience</span>
            </div>

    </div>
    <div className="about__box">
        <i class="fa-solid fa-user" style={{fontSize: '30px'}}></i>
            <div>
                <h3 className="about__t">3000+</h3>
                <span className="about__subtitle">Students Mentored</span>
            </div>

    </div>

    <div className="about__box">
        <img className="about__icon" style={{width: '40px', height: '40px'}} src = {percent} alt = ""></img>
            <div style={{marginTop: '-0.2rem'}}>
                <h3 className="about__t">95%</h3>
                <span className="about__subtitle">Students achieve 90+</span>
            </div>

    </div>

    

    

    <div className="about__box">
        <i class="fa-solid fa-users-line" style={{fontSize: '40px',marginRight: '2rem' }}></i>
            <div style={{marginTop: '-0.2rem'}}>
                <h3 className="about__t">20</h3>
                <span className="about__subtitle">Batch Size</span>
            </div>

    </div>

</div>

</div>

);

};

export default Aboutbox;