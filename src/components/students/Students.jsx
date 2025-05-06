import React from "react";
import "./students.css";
import photo from "../../assets/WhatsApp Image 2025-04-27 at 12.13.40_8a6ccce1.jpg";
import photo2 from "../../assets/kritika.jpg";
import photo3 from "../../assets/mridul.jpg";

const Students = () => {
    return (
    <div className="students__container" id="students">
        <div className="students__part">
            <div className="students__title" data-aos="fade-down">
                Student Testimonials
            </div>
            
            <div className="students__test">
                {/* Row 1 - Image Left */}
                <div className="testimonial-row" data-aos="fade-left" data-aos-delay="300">
                    <img src={photo} alt="Student Tanmay" className="testimonial-img" />
                    <div className="testimonial-text">
                        <div className="students__name">Tanmay Sharma - Engineering Student</div>
                        <p>The advanced mathematics course prepared me thoroughly for my engineering entrance exams. The problem-solving techniques I learned were invaluable, and I secured admission to my dream college.</p>
                    </div>
                </div>

                {/* Row 2 - Image Right */}
                <div className="testimonial-row" data-aos="fade-right" data-aos-delay="300">
                    <img src={photo2} alt="Student Kritika" className="testimonial-img" />  
                    <div className="testimonial-text">
                        <div className="students__name">Kritika Nagpal - MBA Student</div>
                        <p>Virmani Tutorials transformed my relationship with mathematics. I went from dreading math to scoring 95% in my board exams! The way complex concepts are broken down made all the difference.</p>
                    </div>
                    
                </div>

                {/* Row 3 - Image Left */}
                <div className="testimonial-row" data-aos="fade-left" data-aos-delay="300">
                    <img src={photo3} alt="Student Mridul" className="testimonial-img" />
                    <div className="testimonial-text">
                        <div className="students__name">Mridul Sharma - CA Aspirant</div>
                        <p>My experience at Virmani Tutorials was exceptional. They don't just teach formulas but focus on building a deep understanding of mathematical principles. This approach has helped me excel.</p>
                    </div>
                </div>
            </div>  
        </div>

        <div className="students__align" data-aos="fade-up" data-aos-delay="300">
            <div className="students__card">
                <div className="students__card-content">
                    <p className="students__heading">Conceptual Clarity</p>
                    <p className="students__sub-title">We focus on building strong foundations and deep conceptual understanding rather than mere memorization</p>
                </div>
            </div>

            <div className="students__card">
                <div className="students__card-content">
                    <p className="students__heading">Problem Solving</p>
                    <p className="students__sub-title">We train students to approach complex problems with confidence through proven techniques</p>
                </div>
            </div>

            <div className="students__card">
                <div className="students__card-content">
                    <p className="students__heading">Structured Curriculum</p>
                    <p className="students__sub-title">Our systematically designed curriculum covers all aspects of mathematics from basic to advanced levels</p>
                </div>
            </div>

            <div className="students__card">
                <div className="students__card-content">
                    <p className="students__heading">Exam Excellence</p>
                    <p className="students__sub-title">Our specialized coaching techniques prepare students to excel in competitive exams and school mathematics</p>
                </div>
            </div>
        </div>                 
    </div>
    );
};

export default Students;