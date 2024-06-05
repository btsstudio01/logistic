import React from "react";
import Slider from "react-slick";
// import ProductCard from "./product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import styled from "styled-components";

import Freight from "../../assets/KeySectorImages/freight.jpg";
import Technology from "../../assets/KeySectorImages/technology.jpg";
import ecommerce from "../../assets/KeySectorImages/ecommerce.jpg";

import { Row, Col, Grid } from "antd";
import { Colors } from "../../constant/theme/theme";
import { HeroHeading, Line, Wrapper } from "../globalStyle";

import "./styles.css";

// import { EffectCoverflow, Pagination } from "swiper/modules";

const { useBreakpoint } = Grid;

const ImageWrapper = styled.div`
  position: relative;

  background-color: black;
  color: white;
  // font-size: 1.5rem;
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

const CardHeading = styled.span`
  font-size: 3rem;
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
  font-size: 1.5rem;
  font-weight: 300;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;

  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;

const ProductSlider = () => {
  const slides = [
    {
      img: Technology,
      title: "Technolgy",
    },
    {
      img: Freight,
      title: "Logistics",
    },
    {
      img: ecommerce,
      title: "Ecommerce",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    initialSlide: 1,
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
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: screens?.md ? "85px" : "50px",
        paddingBottom: screens?.md ? "85px" : "50px",
        backgroundColor: "white",
      }}
    >
      <Row
        justify={"center"}
        style={{
          width: "100%",
        }}
      >
        <Col>
          <Row justify={"center"}>
            <HeroHeading style={{ textAlign: "center" }}>
              {"Our Key sectors"}
            </HeroHeading>
          </Row>
          <Row style={{ marginBottom: "60px" }} justify={"center"}>
            <Line />
          </Row>
          {screens.xl ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px"
              }}
            >
              {slides?.map((slide, index) => {

                if (index === 0) {
                  return (
                    <div key={index} style={{ zIndex: 1, left: 100, position: 'relative' }}>
                      <ImageWrapper>
                        <img
                          src={slide?.img}
                          alt="dummy image"
                          // width="100%"
                          // height="100%"
                          style={{ height: "220px" }}
                        />
                        <ImageText>
                          <CardSubHeading>MORE ABOUT</CardSubHeading>
                          <CardHeading>{slide?.title}</CardHeading>
                        </ImageText>
                      </ImageWrapper>
                    </div>
                  );
                }

                if (index === 1) {
                  return (
                    <div key={index} style={{ zIndex: 3 }}>
                      <ImageWrapper>
                        <img
                          src={slide?.img}
                          alt="dummy image"
                          width="100%"
                          height="100%"
                          style={{ height: "250px" }}
                        />
                        <ImageText>
                          <CardSubHeading>MORE ABOUT</CardSubHeading>
                          <CardHeading>{slide?.title}</CardHeading>
                        </ImageText>
                      </ImageWrapper>
                    </div>
                  );
                }

                if (index === 2) {
                  return (
                    <div key={index} style={{ zIndex: 1, right: 100, position: 'relative' }}>
                      <ImageWrapper>
                        <img
                          src={slide?.img}
                          alt="dummy image"
                          // width="100%"
                          // height="100%"
                          style={{ height: "220px" }}
                        />
                        <ImageText>
                          <CardSubHeading>MORE ABOUT</CardSubHeading>
                          <CardHeading>{slide?.title}</CardHeading>
                        </ImageText>
                      </ImageWrapper>
                    </div>
                  );
                }

                return (
                  <div key={index} style={{ zIndex: 1 }}>
                    <ImageWrapper>
                      <img
                        src={slide?.img}
                        alt="dummy image"
                        // width="100%"
                        // height="100%"
                        style={{ height: "220px" }}
                      />
                      <ImageText>
                        <CardSubHeading>MORE ABOUT</CardSubHeading>
                        <CardHeading>{slide?.title}</CardHeading>
                      </ImageText>
                    </ImageWrapper>
                  </div>
                );
              })}
              <div style={{ backgroundColor: '#fff', width: 1100, height: 300, opacity: 0.6, position: 'absolute', zIndex: 2 }}></div>
            </div>
          ) : (
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
                        style={{ height: "220px" }}
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
          )}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ProductSlider;
