import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Grid, Breadcrumb } from "antd";
import { SubHeading, Wrapper } from "../../../../common/globalStyle";
import { CaretRightOutlined } from "@ant-design/icons";
import DynamicBreadcrumb from "../../BreadCrumb";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  bottom: 3rem;
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
    max-width: 650px;
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

const Boxx = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #1d4289;
  margin-top: 10rem;
  gap: 2rem;
  padding: 1.5rem;`

const Banner = ({ title, bgImage, desc, height = "60vh" }) => {
  const screens = useBreakpoint();
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric'
});

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "90px" : "0px",
        paddingBottom: "0px",
        paddingTop: "0px",
        height:screens.lg? height : '90vh'
      }}
    >
      <Col
        style={{
          width: "100%",
          height: height,
          position: "relative",
          backgroundColor: "#021d49",
        }}
        align={"middle"}
        justify={"center"}
      >
        <Row style={{ width: "100%"}}>
          <MyComponent
            style={{ height:screens.lg? height:'90vh', width: "100%" }}
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
            <BannerSubText style={{fontWeight:"300"}}>INTERVIEW</BannerSubText>
            <BannerText>{title}</BannerText>
            <BannerSubText>{desc}</BannerSubText>
            <BannerSubText style={{fontWeight:"200" , fontSize:'1.5rem'}}>{formattedDate}</BannerSubText>
            <Row>
                <Col lg={16} md={14}> <DynamicBreadcrumb  /></Col>
                <Col lg={8} md={10}>
                <Boxx><BannerSubText style={{fontWeight:"500" , fontSize:"1.5rem"}}>SHARE THIS</BannerSubText>
                <a><FaFacebookF style={{color:"white"}} size={23} /></a>
                <a><FaXTwitter style={{color:"white"}} size={23} /></a>
                <a><FaLinkedinIn style={{color:"white"}} size={23} /></a></Boxx></Col>
           
            </Row>
          </BoxContent>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default Banner;
