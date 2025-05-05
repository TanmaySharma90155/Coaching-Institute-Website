    import React from "react";
    import "./contacts.css";
    import logo from "../../assets/unnamed.jpg";

    const Contacts = () => {
        return (
            <section id="contacts" data-aos="fade-up">
  <div className="contacts__container">
    <div style={{fontFamily: 'Rubik', fontSize: 'var(--h1-font-size)', color: 'black', marginLeft: '4rem', marginBottom: '1rem'}}>Get In Touch</div>
    <div className="contacts__align">
    <div className="contacts__columns">
      {/* Column 1 */}
      <div className="contacts__column">
        <img
          style={{
            borderRadius: '20px',
            borderStyle: 'solid',
            marginLeft: '4rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            width: '100px',
            height: '100px'
          }}
          src={logo}
          alt="logo"
        />
        <div className="contacts__title">
            Virmani Tutorials
        </div>
        <div className="contacts__thought">
          <i>Empowering students with the clarity and confidence to excel in mathematics through expert coaching and personalized attention.</i>
        </div>
      </div>

      {/* Column 2 */}
      <div className="contacts__column">
        <div className="contacts__row">
          <div className="contacts__title">Location:</div>
          <div className="contacts__thought">3A/161, 2nd floor, NIT Faridabad Haryana 121001
          </div>
        </div>
        <div className="contacts__row">
          <div className="contacts__title">Phone:</div>
          <div className="contacts__thought">+91-9873756914</div>
        </div>
      </div>

      {/* Column 3 */}
      <div className="contacts__column">
        <div className="contacts__row">
          <div className="contacts__title">Email:</div>
          <a href = "" ><div className="contacts__thought">tanmaysharma90155@gmail.com</div></a>
        </div>
        <div className="contacts__row">
          <div className="contacts__title">Follow Us:</div>
          <div className="contacts__thought">Linkedin, Youtube, Instagram</div>
        </div>
        <div className="contacts__row">
          <div className="contacts__title">Feedback:</div>
          <div className="contacts__thought">Share your thoughts!</div>
        </div>
      </div>

    </div>
    </div>
  </div>
</section>

        );
    };

    export default Contacts;