import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

// const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  width: 100%;
`;

const Heading = styled.h1`
color: #021d49;
font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 2.5rem;
  font-weight: 900;
    text-transform: uppercase;
    color:primary
 
`;
const Boxx = styled.div`
width: 100%;
background-color:#1d4289;
display:flex;
justify-content:center;
align-items:center;
gap:2rem;`

const Text = styled.p`
  
  font-size: 1.8rem;
  font-weight: 700;
  color: #021d49;
    font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const BannerSmallScreen = ({ bgImage, heading, text }) => {
    return (
        <MyComponent>
            <Row justify="center">
                <Col span={22} style={{ textAlign: "center", height: "max-content", padding: "0" , marginTop:"10rem" }}>
                    <Heading>{heading}</Heading>
                    <Text>{text}</Text>
                </Col>
            </Row>
            <Row><Boxx><p style={{color:"white" , fontWeight:"700" , fontSize:'1.5rem'}}>SHARE THIS</p>
            <a><FaFacebookF style={{color:"white"}} size={23} /></a>
                <a><FaXTwitter style={{color:"white"}} size={23} /></a>
                <a><FaLinkedinIn style={{color:"white"}} size={23} /></a></Boxx></Row>
        </MyComponent>
    );
};

export default BannerSmallScreen;
