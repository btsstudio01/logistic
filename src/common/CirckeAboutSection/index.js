import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import {
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  StyledImg,
  Wrapper,
  StyledCircle,
} from "../globalStyle";
import { Colors } from "../../constant/theme/theme";
const { useBreakpoint } = Grid;

const CirckeAboutSection = ({ Content1, title, bgColor }) => {
  const screens = useBreakpoint();

  return (
    <>
      <Wrapper
        screens={screens}
        style={{
          backgroundColor: bgColor,
          paddingBottom: "6vh",
        }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          {screens.md && (
            <Col xs={24} sm={24} md={14}>
              <Row
                align={"middle"}
                style={{
                  paddingRight: screens?.lg ? "20px" : "20px",
                  paddingLeft: screens?.lg ? "0px" : "20px",
                }}
              >
                <Row>
                  <HeroSubHeading> {Content1}</HeroSubHeading>
                </Row>
              </Row>
            </Col>
          )}
          <Col
            xs={24}
            sm={24}
            md={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledCircle bgColor={Colors.main}>
              <HeroHeading
                style={{
                  color: "white",
                  fontSize: screens.lg ? "72px" : screens.md ? "50px" : "38px",
                }}
              >
                {title.slice(0, 8)}
              </HeroHeading>
              <HeroHeading
                style={{
                  color: Colors.main,
                  fontSize: screens.lg ? "72px" : screens.md ? "50px" : "38px",
                }}
              >
                {title.slice(8)}
              </HeroHeading>
            </StyledCircle>
          </Col>
          {!screens.md && (
            <Col xs={24} sm={24} md={14}>
              <Row
                align={"middle"}
                style={{
                  paddingRight: screens?.lg ? "20px" : "20px",
                  paddingLeft: screens?.lg ? "0px" : "20px",
                }}
              >
                <Row>
                  <HeroSubHeading> {Content1}</HeroSubHeading>
                </Row>
              </Row>
            </Col>
          )}
        </Row>
      </Wrapper>
    </>
  );
};

export default CirckeAboutSection;
