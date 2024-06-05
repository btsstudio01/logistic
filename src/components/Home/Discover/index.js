import React from "react";
import styled from "styled-components";
import { Button, Grid, Row, Col, Image } from "antd";
import { Colors } from "../../../constant/theme/theme";
import DescTwo from "../../../assets/careerbannerimg.jpg";
import { ButtonWithIcon, IconWrapper } from "../../../common/globalStyle";
import { ArrowRightOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;

const Heading = styled.span`
  font-size: 4.4rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: white;
  display: block;
  margin-left: 4rem;
  font-family: inter;
  @media (max-width: 991px) {
    font-size: 3.9rem;
  }
  
  @media (max-width: 786px) {
    font-size: 2.8rem;
  }
`;

const SubHeadingWithLine = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  @media (max-width: 991px) {
    text-align: center;
    width: 50%;
  }

  &:before {
    background-color: hsla(0, 0%, 40%, 0.502);
    content: "";
    display: block;
    height: 150px;
    margin-bottom: 3rem;
    width: 1px;

    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const Description = styled.div`
  font-size: 2rem;
  font-weight: 500;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  margin-bottom: 1rem;
  margin-left: 4rem;
  display: block;
  color: white;
`;

const StyledImg = styled.img`
  width: 45vw;
  object-fit: cover;
  position: absolute;

  @media (max-width: 1000px) {
    position: relative;
  }

  @media (max-width: 992px) {
    width: 54%;
    margin-bottom: 2rem;
    object-fit: cover;
  }
`;

const QuoteText = styled.p`
  font-size: 2.1rem;
  font-weight: 400;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding-inline: 1rem;
  margin: 1rem 5rem;
  color: ${Colors.primary};

  &:before {
    content: "“";
    font-family: Abhaya Libre, serif;
    font-size: 351px;
    top: -70px;
    left: -10px;
    line-height: 1;
    opacity: 0.16;
    position: absolute;
  }

  &:after {
    content: "“";
  }
`;

const Box = styled.div`
  bottom: 0px;
  background-color: #ff8674;
  height: 400px;
  width: 1050px;
  z-index: 1;

  @media (max-width: 1600px) {
    width: 820px;
  }
  @media (max-width: 1300px) {
    width: 700px;
    // height: 350px;
    // bottom: -30px;
  }
  @media (max-width: 834px) {
    width: 557px;
  }
  @media (max-width: 768px) {
    width: 557px;
  }
  @media (max-width: 590px) {
    display: none;
  }
`;

const OrangeBoxContainer = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Discover = () => {
  const screens = useBreakpoint();

  return (
    <>
      <div
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          marginTop: "5vh",
          paddingInline: screens?.lg ? "0px" : "2rem",
        }}
      >
        <Wrapper>
          <Row
            justify={"center"}
            style={{
              marginLeft: screens?.lg ? "90px" : "0px",
              marginTop: "5vh",
            }}
          >
            <Col span={24}>
              <Row justify={"center"} align={"top"}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Row style={{ marginLeft: "18%", marginBottom: 40 }}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                      <SubHeadingWithLine
                        style={{
                          color: "black",
                          paddingInline: "0",
                        }}
                      >
                        CAREERS
                      </SubHeadingWithLine>{" "}
                    </Col>
                    <Col span={20}>
                      <Heading style={{ color: "rgb(255, 134, 116)" }}>
                        LIFE AT MWL LOGISTICS
                      </Heading>
                    </Col>
                    <Col span={20}>
                      <Description style={{ color: "black" }}>
                        {" "}
                        Join the largest logistic service providers in the world
                      </Description>
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Row justify={{ lg: "end", sm: "center" }}>
                    <StyledImg
                      src={DescTwo}
                      preview={false}
                      // height={500}
                      // height={screens.xl ? 500 : screens.lg ? 400 : 300}
                      // width={"80%"}
                      style={{ objectFit: "cover" }}
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <OrangeBoxContainer>
            <Box>
              <Row
                align={"middle"}
                style={{ height: "100%" }}
                justify={"start"}
              >
                <Col span={24} xl={14} lg={20} md={24}>
                  <QuoteText style={{ fontWeight: "bold" }}>
                    People have always been supported and given opportunities.
                    If ever I mention anything, it is always picked up and acted
                    on.
                  </QuoteText>
                  <div style={{ margin: "10rem 0rem 0rem 6rem" }}>
                    <ButtonWithIcon
                      style={{
                        backgroundColor: "rgb(255, 134, 116)",
                        color: "#E30022",
                        width: 255,
                        borderColor: "#E30022",
                      }}
                    >
                      READ THE FULL STORY
                      <IconWrapper>
                        <ArrowRightOutlined style={{ color: "#fff" }} />
                      </IconWrapper>
                    </ButtonWithIcon>
                  </div>
                </Col>
              </Row>
            </Box>
          </OrangeBoxContainer>
        </Wrapper>
      </div>
    </>
  );
};

export default Discover;
