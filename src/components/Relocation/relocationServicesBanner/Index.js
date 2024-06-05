import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../../constant/theme/theme";
import {
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  StyledImg,
  Wrapper,
} from "../../../common/globalStyle";
import img from "../../../assets/careers/CAREER (1).png";

const { useBreakpoint } = Grid;

const RelocationServiceBanner = ({
  Content1,
  items,
  title,
  Image,
  bgColor,
  point,
}) => {
  const screens = useBreakpoint();

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
          }}
        >
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <StyledImg
              src={Image}
              preview={false}
              // height={500}
              height={screens.xl ? 500 : screens.lg ? 400 : 300}
              width={"100%"}
              style={{
                objectFit: "cover",
                boxShadow: "8px 6px 17px -5px rgba(0,0,0,0.75)",
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Row
              align={"middle"}
              style={{
                paddingLeft: screens?.lg ? "60px" : "20px",
                paddingTop: screens?.lg ? "0px" : "40px",
                paddingRight: screens?.lg ? "0px" : "20px",
              }}
            >
              <HeroHeading style={{ marginTop: 0 }}>{title}</HeroHeading>

              <Row>
                <HeroSubHeading> {Content1}</HeroSubHeading>
              </Row>
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
                        fontSize: screens?.md ? "1.15rem" : "1rem",
                        margin: 0,
                        fontWeight: "bold",
                        padding: 0,
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
                          height={screens?.md ? 30 : 40}
                          width={screens?.md ? 30 : 40}
                        />
                      )}
                      {e.label}
                    </p>
                  </Row>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default RelocationServiceBanner;
