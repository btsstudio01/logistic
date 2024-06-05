import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../../constant/theme/theme";
import {
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  StyledImg,
  OurVisionImage,
  Wrapper,
} from "../../../common/globalStyle";
import img from "../../../assets/careers/CAREER (1).png";
import useScreenWidth from "../../../hooks/useScreenWidth";

const { useBreakpoint } = Grid;

const WhyWorkWithUs = ({ Content1, items, title, Image, bgColor, point }) => {
  const screens = useBreakpoint();
  const { screenWidth } = useScreenWidth();

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: bgColor }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            padding: 10,
          }}
        >
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Row
              align={"middle"}
              style={{
                paddingLeft: screens?.lg ? "30px" : "20px",
                paddingTop: screens?.lg ? "0px" : "40px",
                paddingRight: screens?.lg ? "0px" : "20px",
              }}
            >
              <Col>
                <HeroHeading style={{ marginTop: 0 }}>{title}</HeroHeading>
                <HeroSubHeading>{Content1}</HeroSubHeading>
                <Col style={{ marginTop: "25px" }}>
                  {items.map((e, i) => (
                    <Row
                      key={i}
                      style={{
                        display: "flex",
                        gap: "30px",
                        marginTop: "10px",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontSize: screenWidth > 1278 ? "1.2rem" : "1rem",
                          margin: 0,
                          fontWeight: "bold",
                          padding: 0,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {point ? (
                          <img
                            src={e.icon}
                            style={{ marginRight: "20px" }}
                            height={screens?.md ? 10 : 6}
                            width={screens?.md ? 10 : 6}
                          />
                        ) : (
                          <img
                            src={e.icon}
                            style={{ marginRight: "20px" }}
                            height={screens?.md ? 50 : 40}
                            width={screens?.md ? 50 : 40}
                          />
                        )}
                        {e.label}
                      </p>
                    </Row>
                  ))}
                </Col>
              </Col>
            </Row>
            <Row
              justify={"center"}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <HeroButton>Learn More</HeroButton>
            </Row>
          </Col>

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
            }}
          >
            <StyledImg
              src={Image}
              preview={false}
              height={screens.xl ? 250 : screens.lg ? 200 : 300}
              width={"90%"}
            />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default WhyWorkWithUs;
