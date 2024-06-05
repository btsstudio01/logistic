import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Grid, Breadcrumb } from "antd";
import { SubHeading, Wrapper } from "../../../../common/globalStyle";
import { CaretRightOutlined } from "@ant-design/icons";
import DynamicBreadcrumb from "../../BreadCrumb";

const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url(${(props) => props.bgImage || ""});
  background-size: cover;
  background-position: center;
  background-color: blue;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 4rem;
  z-index: 1;
  max-width: 1140px;
  padding-inline: 2rem;

  @media (max-width: 1200px) {
    max-width: 960px;
  }
  
  @media (max-width: 992px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 700px) {
    bottom: 2rem;
  }

`;

const BannerSubText = styled.div`
  font-size: 2.3rem;
  font-weight: 700;
  font-family: inter;
  color: white;
  text-align: left;
  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const BannerText = styled.div`
  font-size: 6rem;
  font-weight: 900;
  font-family: inter;
  color: whitesmoke;
  text-shadow: 0 0 2px black;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;
const Banner = ({ title, bgImage, desc, height = "90vh" }) => {
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "90px" : "0px",
        paddingBottom: "0px",
        paddingTop: "0px",
        height: height,
      }}
    >
      <Col
        style={{
          width: "100%",
          height: height,
          position: "relative",
          backgroundColor: "#E30022",
        }}
        align={"middle"}
        justify={"center"}
      >
        <Row style={{ width: "100%" }}>
          <MyComponent
            style={{ height: height, width: "100%" }}
            bgImage={bgImage}
          />
        </Row>

        <Row
          style={{
            position: "relative",
            width: "100%"
          }}
          align={"middle"}
          justify={"center"}
        >
          <BoxContent>
            <BannerText>{title}</BannerText>
            <BannerSubText>{desc}</BannerSubText>
            <DynamicBreadcrumb />
          </BoxContent>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default Banner;
