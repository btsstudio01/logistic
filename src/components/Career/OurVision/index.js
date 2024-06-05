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
  OurVisionImage,
  Wrapper1
} from "../../../common/globalStyle";
import img from "../../../assets/careers/CAREER (1).png";

const { useBreakpoint } = Grid;

const OurVision = ({ Content1, items, title, Image, bgColor, point }) => {
  const screens = useBreakpoint();

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: "#F6F6F6" }}
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
            <Row
              align={"middle"}
              style={{
                paddingLeft: screens?.lg ? "30px" : "20px",
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
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {point ? (
                        <img
                          src={e.icon}
                          style={{ marginRight: "10px" }}
                          height={screens?.md ? 10 : 6}
                          width={screens?.md ? 10 : 6}
                        />
                      ) : (
                        <img
                          src={e.icon}
                          style={{ marginRight: "0px" }}
                          height={screens?.md ? 50 : 40}
                          width={screens?.md ? 50 : 40}
                        />
                      )}
                      {e.label}
                    </p>
                  </Row>
                ))}
              </Col>
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


            {/* <div style={{height:"200px",width:"200px",borderRadius:"100px",backgroundColor:"green",postion:"relative"}}>
                <p style={{postion:"absolute",bottom:"0",right:"0"}}>Our  Vision</p>

            </div> */}
            <OurVisionImage
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

export default OurVision;
