import React, { useState } from "react";
import { Card, Col, Grid, Row } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import { HeroHeading, HeroSubHeading, Wrapper } from "../globalStyle";

export const TransparentCard = styled(Card)`
  background-color: transparent;
  border: none;
  width: 100%;
  box-shadow: none;
  z-index: 100;
  padding: 20px;
  text-align: center;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-inline: 0.15rem;
  transition: background-color 0.3s ease;
  background-color: rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;
    backdrop-filter: blur(10px);
  }
`;
export const StyledRowApp = styled(Row)`
  margin-top: 0;
`;
export const Content = styled.div`
  opacity: 0;
  transform: translateY(0%);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${TransparentCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
  }
`;
export const AdditionalContent = styled.div`
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  color: white;
  font-size: 16px;
  ${TransparentCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  background-image: ${(props) => props.bgImg};
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 70vh;
  @media (max-width: 768px) {
    margin-bottom: 0vh;
  }
`;

export const BoldHeading = styled.div`
  text-align: left;
  font-size: 13px;
  font-weight: 900;
  color: #333;
  text-transform: uppercase;
  font-family: inter;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

export const SubHeading = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-family: inter;
  margin-bottom: 1rem;
  color: #333;
`;
export const SubHeadinggg = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  font-family: inter;
  margin-bottom: 10rem;
  padding-inline: 0.5rem;
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
  width: 100%;
  transition: transform 0.3s ease;
  color: white;
  text-transform: uppercase;

  ${TransparentCard}:hover & {
    transform: translate(-50%, -200%);

    @media (max-width: 992px) {
      transform: translate(-50%, -200%);
    }
    @media (max-width: 810px) {
      transform: translate(-50%, -150%);
    }
    @media (max-width: 576px) {
      transform: translate(-50%, -100%);
    }
  }
`;
const { useBreakpoint } = Grid;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const App = ({ Options, title, desc, BgImage }) => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(1);
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: 0,
        paddingBottom: 0,
      }}
    >
      <div style={{ padding: "15px" }}>
        <HeroHeading>{title}</HeroHeading>
        <HeroSubHeading>{desc}</HeroSubHeading>
      </div>

      {screens.lg ? (
        <Container bgImg={`url(${BgImage})`}>
          <Row>
            {Options.map((item, index) => (
              <Col
                lg={6}
                key={index}
                style={
                  item.img && {
                    backgroundImage: `url(${item.img})`,
                    backgroundPostion: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }
                }
              >
                <a href={item.href}>
                  <TransparentCard
                    onMouseEnter={() => setHoveredCardIndex(index + 1)}
                    onMouseLeave={() => setHoveredCardIndex(1)}
                  >
                    <SubHeadinggg>{item.title}</SubHeadinggg>
                    <Content>
                      <AdditionalContent>{item.desc}</AdditionalContent>
                    </Content>
                  </TransparentCard>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container>
          <Slider {...settings}>
            {Options.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={BgImage ? BgImage : item.img}
                  style={{
                    height: "70vh",
                    // width: "100%",
                    objectFit: "fill",
                    position: "absolute",
                  }}
                />
                <a href={item.href}>
                  <TransparentCard
                    style={{ width: "104%" }}
                    onMouseEnter={() => setHoveredCardIndex(index + 1)}
                    onMouseLeave={() => setHoveredCardIndex(1)}
                  >
                    <SubHeadinggg>{item.title}</SubHeadinggg>
                    <Content>
                      <AdditionalContent>{item.desc}</AdditionalContent>
                    </Content>
                  </TransparentCard>
                </a>
              </div>
            ))}
          </Slider>
        </Container>
      )}
    </Wrapper>
  );
};

export default App;
