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

const ReverseCircleAboutSection = ({
  Content1,
  Content2,
  title,
  Image,
  bgColor,
}) => {
  const screens = useBreakpoint();

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: bgColor, paddingBottom: "6vh" }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={10}
            style={{
              display: "flex",
              justifyContent: screens.lg ? "start" : "center",
              alignItems: "center",
              paddingLeft: screens.lg ? "40px" : "0px",
            }}
          >
            <StyledCircle bgColor={"#F6F6F6"}>
              <HeroHeading
                style={{
                  color: Colors.main,
                  fontSize: screens.lg ? "72px" : screens.md ? "50px" : "38px",
                }}
              >
                {title.slice(0, 7)}
              </HeroHeading>
              <HeroHeading
                style={{
                  color: "#A2A2A2",
                  fontSize: screens.lg ? "72px" : screens.md ? "50px" : "38px",
                }}
              >
                {title.slice(7)}
              </HeroHeading>
            </StyledCircle>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Row
              align={"middle"}
              style={{
                paddingRight: screens?.lg ? "20px" : "20px",
                paddingLeft: screens?.lg ? "0px" : "20px",
              }}
            >
              <Row style={{marginLeft:"20px"}}>
                <HeroSubHeading> {Content1}</HeroSubHeading>
              </Row>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default ReverseCircleAboutSection;
