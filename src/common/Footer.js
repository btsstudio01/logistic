import React from "react";
import { Wrapper } from "./globalStyle";
import { Row, Col, Grid } from "antd";
import { Colors } from "../constant/theme/theme";
import Logo from "../assets/aboutlogo.png";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { useState } from "react";
const { useBreakpoint } = Grid;

const Para1 =
  "As July 25,2022 Logistic has completed the acquisition of GEFCO. World expert in supply chain solutions and European leader in a automotive logistics";
const Para2 =
  "Together we have a global workface of more than 110,000 people across 1,300 sites and more than 170 countries, delivering responsive logistics solutions for our customers.";
const StlyedHeading = styled.h1`
  color: white;
  font-size: 2rem;
  @media (max-width: 1278px) {
    font-size: 1.6rem;
  }
`;
const StlyedPara = styled.p`
  color: #7e7e7e;
  font-size: 1.7rem;
  &:hover {
    color: white;
  }
  @media (max-width: 1278px) {
    font-size: 1.7rem;
    font-weight: 300;
  }
`;
const Footer = ({ removeSpace }) => {
  const screens = useBreakpoint();
  const [iconColor1, setIconColor1] = useState("gray");
  const [iconColor2, setIconColor2] = useState("gray");
  const [iconColor3, setIconColor3] = useState("gray");
  const [iconColor4, setIconColor4] = useState("gray");
  let iconSize = 30;
  let SocialNetworkData = [
    {
      icon: (
        <AiFillFacebook
          onMouseOver={() => setIconColor1("white")}
          onMouseOut={() => setIconColor1("gray")}
          color={iconColor1}
          size={iconSize}
        />
      ),
      href: "/about",
    },
    {
      icon: (
        <AiFillInstagram
          onMouseOver={() => setIconColor2("white")}
          onMouseOut={() => setIconColor2("gray")}
          color={iconColor2}
          size={iconSize}
          style={{ marginLeft: "10px" }}
        />
      ),
      href: "/about",
    },
    {
      icon: (
        <AiFillTwitterCircle
          onMouseOver={() => setIconColor3("white")}
          onMouseOut={() => setIconColor3("gray")}
          color={iconColor3}
          size={iconSize}
          style={{ marginLeft: "10px" }}
        />
      ),
      href: "/about",
    },
    {
      icon: (
        <AiFillLinkedin
          onMouseOver={() => setIconColor4("white")}
          onMouseOut={() => setIconColor4("gray")}
          color={iconColor4}
          size={iconSize}
          style={{ marginLeft: "10px" }}
        />
      ),
      href: "/about",
    },
  ];
  let NavigationData = [
    { title: "Find Us", href: "/contact" },
    { title: "Careers", href: "/careers" },
    { title: "About", href: "/about" },
  ];
  let OurServicesData = [
    { title: "Air Freight", href: "/airfreight" },
    { title: "Land Freight", href: "/landfreight" },
    { title: "Ocean Freight", href: "/oceanfreight" },
    { title: "Contract Logistic", href: "/contract-logistic" },
    {
      title: "Warehousing & Distribution",
      href: "/warehousing-and-distribution",
    },
    { title: "Relocation", href: "/reloctaion" },
    { title: "Project Cargo", href: "/projectcargo" },
  ];
  let GetinTouchData = ["Zulfiqar Ali", "+92 339774 422", "zulf@gmail.com"];
  return (
    <Wrapper
      style={{
        marginTop: removeSpace ? "0px" : screens?.md ? "85px" : "50px",
        paddingLeft: screens?.lg ? "50px" : "25px",
        paddingRight: screens?.lg ? "0" : "25px",
        paddingTop: screens?.md ? "85px" : "50px",
        paddingBottom: screens?.md ? "85px" : "50px",
        backgroundColor: Colors.main,
      }}
    >
      <Row justify={"center"}>
        <Col span={24} lg={8} xl={7}>
          <Row>
            <a href={"/"}>
              <img
                src={Logo}
                style={{
                  paddingInline: "1rem",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                alt="logo"  
                height={60}
              />
            </a>
          </Row>
          <Row style={{ color: "#7E7E7E" }}>
            <StlyedPara>{Para1}</StlyedPara>
            <StlyedPara>{Para2}</StlyedPara>
          </Row>
        </Col>
        <Col
          span={24}
          xl={5}
          lg={4}
          md={8}
          sm={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: screens?.lg ? "center" : "start",
          }}
        >
          <div>
            <Row>
              <StlyedHeading>Navigations</StlyedHeading>
            </Row>
            {NavigationData.map((item, e) => (
              <a href={item.href}>
                <StlyedPara>{item.title}</StlyedPara>
              </a>
            ))}
          </div>
        </Col>
        <Col
          span={24}
          xl={5}
          lg={4}
          md={8}
          sm={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: screens?.lg ? "center" : "start",
          }}
        >
          <div>
            <Row>
              <StlyedHeading>Our Services</StlyedHeading>
            </Row>
            {OurServicesData.map((item, e) => (
              <a href={item.href}>
                <StlyedPara>{item.title}</StlyedPara>
              </a>
            ))}
          </div>
        </Col>
        <Col
          span={24}
          sm={12}
          md={8}
          lg={4}
          xl={5}
          justify="center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: screens?.lg ? "center" : "start",
          }}
        >
          <div>
            <Row>
              <StlyedHeading>Get in Touch</StlyedHeading>
            </Row>
            {GetinTouchData.map((item, e) => (
              <StlyedPara>{item}</StlyedPara>
            ))}
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Footer;
