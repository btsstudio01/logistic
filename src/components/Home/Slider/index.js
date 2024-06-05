import React from "react";
import Slider from "react-slick";
import { Row, Col, Image,Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Office1 from "../../../assets/lessdobusiness.jpg";

const FixedComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  background-color: transparent;
  z-index: 9999;
  border-bottom: 1px solid #808080;
 margin:0;
 padding:0;
 @media (max-width:992px) {
    border-bottom: 0px solid #808080;
  }
`;
const MWButton = styled(Button)`
 display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #01497C;
  color:white;
  
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  opacity: 1;
  border:0;
  text-decoration: none;
 padding-inline: 4rem;
height:60px;
border-radius: 60px;

margin-top: 3rem;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    color: white !important;
    text-decoration: none;


  }
`;
const CustomRow = styled(Row)`
  height: 100vh;
  overflow: hidden;
`;

const CustomSlider = styled(Slider)`
  .custom-dots {
    position: absolute;
    bottom: 7vh;
    left: 50%;
    transform: translateX(-50%);
    overflow-x: hidden;
  }
  .custom-dots .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }
  .custom-dots .dot.slick-active {
    opacity: 1;
    background-color: red;
  }
  .slick-next {
    display: none;
  }
  .slide-content {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff;
    text-align: center;
  }
 
`;
const BoldHeading = styled.div`
  text-align: center;
  font-size: 7rem;
  font-weight: 600;
  color:white;

  font-family: inter, sans-serif;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;
const BoldSubHeading = styled.div`
  text-align: center;
  font-family: inter, sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: white;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Slide = ({ key,src, caption, desc }) => {
  return (
    <div style={{ position: "relative" }} key={key}>
      <Image
        src={src}
        width={"100vw"}
        height={"100vh"}
        preview={false}
        style={{ filter: "brightness(.4)", objectfit: "contain" }}
      />


      {/* <div className="slide-content" >
       
        <BoldHeading
        >
          {caption}
        </BoldHeading>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'150px',border:'2px solid #01497C',marginTop:'1rem',marginBottom:'1rem'}}></div>
        </div>
        <BoldSubHeading
        >
          {desc}
        </BoldSubHeading>
          <div style={{display:'flex',justifyContent:'center'}}>

          <MWButton>More Information</MWButton>

          </div>
      </div> */}
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: function (i) {
      return <div className="dot" />;
    },
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    nextArrow: null,
  };
  

  return (
    <div >
    <CustomRow  >

   <Row>
   <Col span={24}>
        <CustomSlider {...settings}>
          <Slide
          key={1}
            src={Office1}
            caption="CREATIVE. IDEA"
            desc="Delivering Bespoke, Measurable and value added Digital Internet Marketing services with focus on PPC, SEO, social media services with animated, professional videos and voice over with audio effects that empower your business growth."
          />
          <Slide
          key={2}
            src={Office1}
            caption="LEADERSHIP."
            desc="Delivering Bespoke, Measurable and value added Digital Internet Marketing services with focus on PPC, SEO, social media services with animated, professional videos and voice over with audio effects that empower your business growth."
          />
          <Slide
          key={3}
            src={Office1}
            caption="IT. SOLUTIONS"
            desc="Delivering Bespoke, Measurable and value added Digital Internet Marketing services with focus on PPC, SEO, social media services with animated, professional videos and voice over with audio effects that empower your business growth."
          />
        </CustomSlider>
      </Col>
   </Row>
    </CustomRow></div>
  );
};

export default Carousel;
