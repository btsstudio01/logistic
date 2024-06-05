import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Grid, Breadcrumb } from "antd";
import { SubHeading, Wrapper } from "../../../../common/globalStyle";
import { CaretRightOutlined } from "@ant-design/icons";
import DynamicBreadcrumb from "../../BreadCrumb";


const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  height: 90vh;
  // padding-left: 0px;

  @media (max-width: 768px) {
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
  top: 40%;
  left: 0;
  z-index: 1;
  padding-inline: 2rem;
  
  @media (max-width: 700px) {
  top:18%
  }
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

  const breadcrumbItemStyle = {
    color: 'white', // Change this color to your desired color
  };

  return (
  
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingBottom: "0px",
        paddingTop: "0px",
        height:"100vh"
      }}
    >
      <Row
        justify={"center"}
        style={{
          width: "100%",
          height: "80vh",
          height: screens.md ? "90vh" : "100vh",
          position: "relative",
        }}
      >
        <Col span={24}>
          <MyComponent bgImage={bgImage} />
        </Col>
        <BoxContent >
          <BannerText>{title}</BannerText>
          <BannerSubText> {desc}</BannerSubText>
        </BoxContent>
        <BoxContent style={{zIndex:"10" , top:screens.md? "70%" : "70%"}}>
      <DynamicBreadcrumb/>
    </BoxContent>
      </Row>
      <Row><Col span={24}><SubHeading>navbar here</SubHeading></Col></Row>
    </Wrapper>
  );
};

export default Banner;
