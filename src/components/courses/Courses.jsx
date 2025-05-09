import React from "react";
import "./courses.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Courses = () => {
    return (
    <div className="batches__container" id = "batches">
        <div className = "batches__title"  data-aos="fade-down">
            Batches
        </div>

        <div className="batches__align"data-aos="fade-up" data-aos-delay="300">
            <div className = "batches__mar">
                
                    <div className="batches__card">
                        <div className="batches__card-content">
                            <p className="batches__heading">CLASS 6-8</p>
                            <p className="batches__heading" >Subjects: </p>
                            <p className="batches__sub"style={{marginBottom: '3rem'}}>Maths, Science</p>
                            <p className="push" style={{marginLeft: '0.5rem'}}><a href="#contacts">Enroll now</a></p>
                        </div>
                    </div>        

                     <div className="batches__card">
                        <div className="batches__card-content">
                            <p className="batches__heading"style={{}}>CLASS 9-10</p>
                            <p className="batches__heading" style={{marginTop: '1rem'}}>Subjects: </p>
                            <p className="batches__sub" style={{marginBottom: '1rem'}}>Foundational Maths, Vedic Maths</p>
                            <p className="push" style={{marginLeft:'4rem', marginTop: '2rem'}}><a href="#contacts">Enroll now</a></p>
                        </div>
                    </div>        

                     <div className="batches__card">
                        <div className="batches__card-content">
                            <p className="batches__heading" style={{}}>CLASS 11-12</p>
                            <p className="batches__heading"style={{marginTop:  '1rem'}}>Subjects: </p>
                            <p className="batches__sub">Applied Maths, CUET</p>
                            <p className="batches__sub" style={{marginBottom: '1rem'}}>JEE</p>
                            <p className="push" style={{marginLeft:'2.5rem', marginTop: '2rem'}}><a href="#contacts">Enroll now</a></p>
                        </div>
                    </div>        

                     <div className="batches__card">
                        <div className="batches__card-content">
                            <p className="batches__heading" style={{}}>OLYMPIAD</p>
                            <p className="batches__heading" >Subjects: </p>
                            <p className="batches__sub" style={{marginBottom: '3rem'}}>NTSE, IMO, etc</p>
                            <p className="push" style={{marginLeft: '0.5rem', marginTop: '1.5rem'}}><a href="#contacts">Enroll now</a></p>
                        </div>
                    </div>          
                
            </div>

        </div>
        <div className="extra__batches" data-aos="fade-up" delay = "300">
            <div className="extra__text" style={{fontSize: '20px'}}>
            Need a Custom Learning Plan ?
            <div style={{marginTop: '1rem', }}>We also offer personalized one-on-one coaching tailored to your specific learning goals and challenges.</div>
            </div>

        </div>


    </div>

    );
};

export default Courses;

