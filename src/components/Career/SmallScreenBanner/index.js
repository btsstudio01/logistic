import React from "react";
import styled from "styled-components";
import { Row, Col, Image } from "antd";

// const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  width: 100%;
`;

const Heading = styled.h1`
color: #021d49;
font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1.5rem;
  font-weight: 900;
    text-transform: uppercase;
    color:primary
 
`;

const Text = styled.p`
  
  font-size: 1rem;
  font-weight: 700;
  color: #021d49;
    font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const BannerSmallScreen = ({ bgImage, heading, text }) => {
    return (
        <MyComponent>
            <Image src={bgImage} style={{ width: "100%", marginTop: "4.5rem" }} />
            <Row justify="center">
                <Col span={22} style={{ textAlign: "center", height: "max-content", padding: "0" }}>
                    <Heading>{heading}</Heading>
                    <Text>{text}</Text>
                </Col>
            </Row>
        </MyComponent>
    );
};

export default BannerSmallScreen;
