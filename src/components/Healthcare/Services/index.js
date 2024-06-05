import React from "react";
import Slider from "react-slick";
// import ProductCard from "./product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import styled from "styled-components";
import Consumercard from "../../../assets/consumercard.jpg";
import Energycard from "../../../assets/energycard.jpg";
import Healthcare from "../../../assets/healthcard.jpg";
import Industrycard from "../../../assets/industrycard.jpg";
import Techcard from "../../../assets/techcard.jpg";
import Showfreighthcard from "../../../assets/showfreightcard.jpg";
import Ecomcard from "../../../assets/ecomcard.jpg";
import { Row, Col, Grid } from "antd";
import { Colors } from "../../../constant/theme/theme";
const { useBreakpoint } = Grid;

const ImageWrapper = styled.div`
  position: relative;

  background-color: black;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    div {
      transform: translateY(-20%);
    }
  }
`;

const ImageText = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  text-align: center;
`;
const CustomPrevArrow = styled.div`
  background-color: red;
  &:before {
    content: "<";
    color: red;
    font-size: 2rem;
  }
`;

const CustomNextArrow = styled.div`
  &:before {
    content: ">";
    color: red;
    font-size: 2rem;
  }
`;
const CardHeading = styled.span`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
  padding-inline: 1rem;
  font-family: inter;
  text-transform: uppercase;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const CardSubHeading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;

  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color:white;
  padding-inline: 1rem;

  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color:white;
  @media (max-width: 1278px) {
    font-size: 0.8rem;
  }
`;
const Services = () => {
  const slides = [
    {
      img: Consumercard,
      title: "Consumer Retail",
    },
    {
      img: Energycard,
      title: "Energy",
    },
    {
      img: Healthcare,
      title: "Health Care",
    },
    {
      img: Industrycard,
      title: "Industrial & Aerospace",
    },
    {
      img: Techcard,
      title: "Technology",
    },
    {
      img: Showfreighthcard,
      title: "Showfreight",
    },
    {
      img: Ecomcard,
      title: "E-commerce",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.lg ? "90px" : "0px", marginTop: "5vh",backgroundColor:`${Colors?.primary}`,paddingTop:'3rem',paddingBottom:'3rem' }}>
      <Row justify={"center"} >
        <Col span={24}>
          <Row justify={"center"}>
          <Heading>OUR SERVICES
</Heading>
          </Row>
        </Col>
        <Col span={24}>
        <Row justify={"center"}>
          <SubHeading>
            Providing the right solutions to the right business.
          </SubHeading></Row>
        </Col>
      </Row>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <ImageWrapper>
                <img
                  src={slide?.img}
                  alt="dummy image"
                  width="100%"
                  height="100%"
                />
                <ImageText>
                  <CardSubHeading>MORE ABOUT</CardSubHeading>
                  <CardHeading>{slide?.title}</CardHeading>
                </ImageText>
              </ImageWrapper>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Services;
