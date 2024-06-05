import React from "react";
import styled from "styled-components";
import Navbar from "../../../constant/Navbar";
import { Row, Col, Image, Tabs, Form, Input, Button, Grid } from "antd";
import AboutBannerImg from "../../../assets/aboutbanner.png";
import Location from "../../../assets/location.png";
import AboutOne from "../../../assets/aboutone.jpg";
import Graph from "../../../assets/bar-chart.png";
import Phone from "../../../assets/phone-call.png";
import Email from "../../../assets/email.png";
import { Colors } from "../../../constant/theme/theme";
import { ContactData, GetInTouchData } from "../../../Data/Contact";
import {
  BoxHeading,
  Boxx,
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  Wrapper,
} from "../../../common/globalStyle";
import MainLayout from "../../../common/Layout";
import Banner from "../../../common/Banner";
const { useBreakpoint } = Grid;

const Box = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
  left: 0;
  z-index: 1;
`;

const MyComponent = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImage || ""});
  background-size: cover;
  background-position: center;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0;
  z-index: 1;
  padding-inline: 2rem;
`;

const BannerSubText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: inter;
  color: white;

  padding-inline: 5rem;
  @media (max-width: 576px) {
    font-size: 1.25rem;
    padding-inline: 2rem;
  }
`;
const BoldSmallHeading = styled.div`
  font-size: 3rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-top: 1rem;
`;
const SmallHeading = styled.div`
  font-size: 1.2rem;
  font-weight: 100;
  font-family: inter;
  color: black;
`;
const BannerText = styled.div`
  font-size: 5.5rem;
  font-weight: 900;
  font-family: inter;
  color: whitesmoke;
  text-shadow: 0 0 2px black;
  padding-inline: 5rem;

  @media (max-width: 580px) {
    font-size: 5rem;
    padding-inline: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 4rem;
    padding-inline: 2rem;
  }
`;
const HeadText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors?.primary};
  font-family: inter;
  text-transform: uppercase;
`;

const Card = styled.div`
  width: 70%;
  height: 8rem;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const CardHeading = styled.h1`
  font-size: 1rem;
  font-family: inter;
  font-weight: 1000;
`;
const CardPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: center;
  text-transform: uppercase;
`;
const CustInput = styled(Input)`
  padding: 0.8rem;
`;
const CustTextArea = styled(Input.TextArea)`
  padding: 0.8rem;
`;
const LocPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: left;
`;

const CareerBanner = () => {
  const screens = useBreakpoint();

  const [form] = Form.useForm();
  const onFinish = () => {};

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Wrapper screens={screens} justify={"center"}>
      <Row justify={"center"} style={{ height: "100vh", paddingTop: "10rem" }}>
        <Col span={24}>
          <Row>
            <Col
              span={10}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginLeft: "50px",
              }}
            >
              <HeadText>
                <span style={{ backgroundColor: "black", color: "white" }}>
                  Get{" "}
                </span>{" "}
                In Touch
              </HeadText>
              <BoldSmallHeading>{GetInTouchData.title} </BoldSmallHeading>
              <SmallHeading>{GetInTouchData.desc}</SmallHeading>
              <Col span={6}>
                <HeroButton>Learn More</HeroButton>
              </Col>
            </Col>
            <Col
              span={10}
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                marginRight: "50px",
                gap: "30px",
              }}
            >
              <Row gutter={[16, 24]}>
                <Col span={24}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {ContactData.map((item, index) => (
                      <Card key={index}>
                        <Row justify={"between"}>
                          <Col span={6} style={{ padding: "20px" }}>
                            {" "}
                            {item.icon}
                          </Col>
                          <Col span={12} style={{ padding: "20px" }}>
                            <CardHeading>{item.title}</CardHeading>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            span={12}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                              width: "100%",
                            }}
                          >
                            <CardPara>{item.contact}</CardPara>
                          </Col>
                        </Row>
                      </Card>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CareerBanner;
