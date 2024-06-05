import React from "react";

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
import { Row, Col, Grid, Carousel, Button } from "antd";
import { Colors } from "../../../constant/theme/theme";
import { ArrowRightOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

const ImageWrapper = styled.div`
  position: relative;
  background-color: white;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width: 775px) {
    border-radius: 0px;
  }

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
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  text-align: center;

  @media (max-width: 1320px) {
    width: 80%;
  }

  @media (max-width: 775px) {
    width: 70%;
  }
`;
const CardHeading = styled.span`
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  padding-inline: 1rem;
  font-family: inter;
  text-transform: uppercase;
  @media (max-width: 1000px) {
    font-size: 1.8rem;
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
  font-size: 4.4rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  co#E30022;
  padding-inline: 1rem;

  font-family: inter;
  @media (max-width: 1000px) {
    font-size: 3.9rem;
  }

  @media (max-width: 575) {
    font-size: 2.9rem;
  }
`;
const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: #E30022;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
  }
`;

const MoreAboutText = styled.p`
  margin: 0px;
  font-size: 1.8rem;

  @media (max-width: 990px) {
    font-size: 1.4rem;
  }
`;

const CaroselImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;

  @media (max-width: 1320px) {
    width: 80%;
    height: 80%;

    border-radius: 20px;
  }

  @media (max-width: 775px) {
    width: 70%;
    height: 70%;
    border-radius: 10px;
  }

  @media (max-width: 425px) {
    border-radius: 30px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 255px;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: ${({ defaultBgColor }) => defaultBgColor};
  color: ${({ defaultTextColor }) => defaultTextColor};
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  &:hover {
    gap: 25px; /* Visible on hover */
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
  }
`;

const AirfreightServices = ({
  ServiceArray,
  headingText,
  subHeadingText = "Providing the right solutions to the right business.",
  showButton = true,
}) => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        marginTop: "5vh",
        marginBottom: "3rem",
      }}
    >
      <Row justify={"center"} style={{ margin: 10 }}>
        <Col span={24}>
          <Row justify={screens.md ? "center" : "left"}>
            <Heading>{headingText}</Heading>
          </Row>
        </Col>
        <Col span={24}>
          <Row justify={screens.md ? "center" : "left"}>
            <SubHeading>
              {subHeadingText}.
            </SubHeading>
          </Row>
        </Col>
      </Row>
      <Carousel
        swipe={true}
        autoplay
        slidesToShow={4}
        initialSlide={0}
        infinite={true}
        dots={{ className: "dotsStyle" }}
        responsive={[
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: false,
              initialSlide: 0
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: true,
            },
          },
        ]}
      >
        {ServiceArray.map((slide, index) => {
          return (
            <div key={index} style={{ paddingLeft: 10 }}>
              <ImageWrapper>
                <CaroselImage src={slide?.img} alt="dummy image" />
                <ImageText>
                  {/* <CardSubHeading>MORE ABOUT</CardSubHeading> */}
                  <MoreAboutText>MORE ABOUT</MoreAboutText>
                  <CardHeading>{slide?.title}</CardHeading>
                </ImageText>
              </ImageWrapper>
            </div>
          );
        })}
      </Carousel>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        {showButton && (
          <CustomButtom labelTitle={"LERN MORE"} icon_color="#fff" buttonWidth={200} />
        )}
      </div>
    </div>
  );
};

export default AirfreightServices;

const CustomButtom = ({ defaultBgColor = "#1F3E7B", defaultTextColor = "#fff", labelTitle, icon_color = "red", buttonWidth = 255, borderColor = "#1F3E7B" }) => {
  return <div style={{ maxWidth: buttonWidth, marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
    <StyledButton
      style={{ backgroundColor: defaultBgColor, color: defaultTextColor, width: buttonWidth, borderColor }}
    >
      {labelTitle}
      <IconWrapper>
        <ArrowRightOutlined style={{ color: icon_color }} />
      </IconWrapper>
    </StyledButton>
  </div>
}
