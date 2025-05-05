import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import class1 from "../../assets/class1.jpg";
import class2 from "../../assets/class2.jpeg";
import class3 from "../../assets/class3.jpeg";

const Img = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,   // 3 seconds
    arrows: true,
    fade: true,
    lazyLoad: 'ondemand'
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", marginTop: '2rem'}}>
      <Slider {...settings}>
        <div><img src={class1} alt="Slide 1" style={{ width: "1200px", height: "400px" }} /></div>
        <div><img src={class2} alt="Slide 2" style={{ width: "1200px", height: "400px" }} /></div>
        <div><img src={class3} alt="Slide 3" style={{ width: "1200px", height: "400px" }} /></div>
      </Slider>
    </div>  
  );
};

export default Img;
