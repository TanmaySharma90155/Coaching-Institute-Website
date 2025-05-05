import React from "react";
import "./bar.css";
import Logo from "../../assets/unnamed.jpg";
import Header from "../header/Header";
import About from "../about/About";
import Courses from "../courses/Courses";
import Students from "../students/Students";
import Contacts from "../contacts/Contacts";




const Bar = () => {
    return (
    <>
    <div className="big__container" id = "home">
        <div className="home__title"> 
            <img src={Logo} alt = "Logo" width='50px' height = '50px' style={{borderRadius:'15%', marginBottom: '-0.5rem' }} />  Virmani Tutorials
        </div>
        <Header />

        <div className="small__container">
            WELCOME TO VIRMANI TUTORIALS!
        </div>
        <div style={{fontFamily: 'Rubik', fontSize: '50px', color: 'white', textAlign: 'left', marginLeft: '4.5rem ', marginTop: '1.5rem'}}>Learn with the Best</div>
        <div style={{fontFamily: 'Rubik', fontSize: '15px', color: 'white', textAlign: 'left', marginLeft: '4.5rem ', marginTop: '1.5rem'}}>
            Are you afraid of maths ? Not anymore, 
        </div>
        <div style={{fontFamily: 'Rubik', fontSize: '15px', color: 'white', textAlign: 'left', marginLeft: '4.5rem '}}>
        Virmani Tutorials is here to make your mathematics concepts crystal clear.
        </div>

        
        <div className="btn">
        <a href = "#batches">
            Get Started ->
            </a>
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