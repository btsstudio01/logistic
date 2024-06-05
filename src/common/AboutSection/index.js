import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../constant/theme/theme";
import {
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  StyledImg,
  Wrapper,
} from "../globalStyle";

import { useLocation } from "react-router-dom";

const { useBreakpoint } = Grid;

const CompanyOverview = ({
  Content1,
  Content2,
  Content3,
  title,
  freightTitle,
  Image,
  bgColor,
  href = "#",
  showButton = true,
  marginTop = "2rem",
}) => {
  const screens = useBreakpoint();
  const location = useLocation();
  const isAirfreightPath = location.pathname === "/airfreight";

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: bgColor }}
        justify={"center"}>
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            marginTop: "2rem",
          }}>
          {!screens.lg && (
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              xxl={12}
              style={{
                paddingRight: screens?.lg ? "20px" : "20px",
                paddingLeft: screens?.lg ? "0px" : "20px",
              }}>
              <StyledImg
                src={Image}
                preview={false}
                height={screens.xl ? 500 : screens.lg ? 400 : 300}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Col>
          )}

          {screens.lg && (
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <StyledImg
                src={Image}
                preview={false}
                height={screens.xl ? 500 : screens.lg ? 400 : 300}
                width={"100%"}
                style={{ objectFit: "cover" }}
              />
            </Col>
          )}
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Row
              align={"middle"}
              style={{
                paddingRight: screens?.lg ? "20px" : "20px",
                paddingLeft: screens?.lg ? "45px" : "20px",
              }}>
              <HeroHeading
                style={{ textAlign: "left", marginTop: "0px"}}>
                {title}
              </HeroHeading>

              <Row>
                <HeroSubHeading> {Content1}</HeroSubHeading>
                <HeroSubHeading>{Content2}</HeroSubHeading>{" "}
                {isAirfreightPath && (
                  <>
                    <HeroHeading style={{ textAlign: "left" }}>
                      {freightTitle}
                    </HeroHeading>
                    <HeroSubHeading>{Content3}</HeroSubHeading>{" "}
                  </>
                )}
              </Row>
              {showButton && (
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "100%",
                    marginTop: "20px",
                    paddingRight: screens?.lg ? "20px" : "0px",
                  }}>
                  <a href={href}>
                    <HeroButton>Learn More</HeroButton>
                  </a>
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default CompanyOverview;
