import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Grid } from "antd";
import { Wrapper } from "../globalStyle";

const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  height: 60vh;
  // padding-left: 0px;
  @media (min-width: 768px) {
    height: 100vh;
  }
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImage || ""});
  background-size: cover;
  background-position: center;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  bottom: 10%;
  left: 0;
  z-index: 1;
  padding-inline: 2rem;
`;

const BannerSubText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: inter;
  color: white;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const BannerText = styled.div`
  font-size: 3rem;
  font-weight: 900;
  font-family: inter;
  color: whitesmoke;
  text-shadow: 0 0 2px black;

  @media (max-width: 580px) {
    font-size: 3.5rem;
  }

  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;
const Banner = ({ title, bgImage, desc }) => {
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingBottom: "0px",
        paddingTop: "0px",
      }}
    >
      <Row
        justify={"center"}
        style={{
          width: "100%",
          height: "80vh",
          height: screens.md ? "100vh" : "60vh",
          position: "relative",
        }}
      >
        <Col span={24}>
          <MyComponent bgImage={bgImage} />
        </Col>
        <BoxContent>
          <BannerText>{title}</BannerText>
          <BannerSubText> {desc}</BannerSubText>
        </BoxContent>
      </Row>
    </Wrapper>
  );
};

export default Banner;
