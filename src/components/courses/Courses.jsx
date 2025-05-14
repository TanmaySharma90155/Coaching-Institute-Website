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
            <div className="batches__mar" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
  
  {/* CLASS 6-8 */}
  <div className="batches__card" style={{ width: '200px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className="batches__card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p className="batches__heading" style={{ marginBottom: '0.5rem' }}>CLASS 6-8</p>
      <p className="batches__heading" style={{ marginBottom: '2rem' }}>Subjects:</p>
      <p className="batches__sub" style={{ marginBottom: '4rem' }}>Maths, Science</p>
      <p className="push" style={{ marginTop: 'auto' , marginLeft: '2.3rem' }}><a href="#contacts">Enroll now</a></p>
    </div>
  </div>

  {/* CLASS 9-10 */}
  <div className="batches__card" style={{ width: '200px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className="batches__card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p className="batches__heading" style={{ marginBottom: '0.5rem' }}>CLASS 9-10</p>
      <p className="batches__heading" style={{ marginBottom: '2rem' }}>Subjects:</p>
      <p className="batches__sub" style={{ marginBottom: '4rem' }}>Maths, Science</p>
      <p className="push" style={{ marginTop: 'auto' , marginLeft: '2.3rem' }}><a href="#contacts">Enroll now</a></p>
    </div>
  </div>

  {/* CLASS 11-12 */}
  <div className="batches__card" style={{ width: '200px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className="batches__card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p className="batches__heading" style={{ marginBottom: '0.5rem' }}>CLASS 11-12</p>
      <p className="batches__heading" style={{ marginBottom: '2rem' }}>Subjects:</p>
      <p className="batches__sub" style={{ marginBottom: '1rem' }}>Core Maths, Applied Maths, CUET,</p>
      <p className="batches__sub" style={{ marginBottom: '0rem' }}>JEE</p>
      <p className="push" style={{ marginTop: 'auto', marginLeft: '2.3rem' }}><a href="#contacts">Enroll now</a></p>
    </div>
  </div>

  {/* OLYMPIAD */}
  <div className="batches__card" style={{ width: '200px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div className="batches__card-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <p className="batches__heading" style={{ marginBottom: '0.5rem' }}>OLYMPIAD</p>
      <p className="batches__heading" style={{ marginBottom: '2rem' }}>Subjects:</p>
      <p className="batches__sub" style={{ marginBottom: '1rem' }}>NTSE, IMO,</p>
      <p className="batches__sub" style={{ marginBottom: '3.3rem' }}>Foundational Maths</p>
      <p className="push" style={{ marginTop: 'auto' , marginLeft: '2.3rem'}}><a href="#contacts">Enroll now</a></p>
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

