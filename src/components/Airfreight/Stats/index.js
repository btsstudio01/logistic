import React from "react";
import CenterHeading from "../../../common/CenterHeading";
import IconBlue from '../../../assets/Air freight Images/iconblue.webp'
import planeflyblue from '../../../assets/Air freight Images/planeflyblue.webp'
import styled from "styled-components";
import Navbar from "../../../constant/Navbar";
import { Row, Col, Image, Grid } from "antd";
import AboutBannerImg from "../../../assets/aboutbanner.png";
import bannerVideo from "../../../assets/Banner.png";

import plane from "../../../assets/Air freight Images/plane_Vector.png";
import Graph from "../../../assets/bar-chart.png";
import { Colors } from "../../../constant/theme/theme";
import useScreenWidth from "../../../hooks/useScreenWidth";
const { useBreakpoint } = Grid;

const Box = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
  left: 0;
  z-index: 1;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  top: 20%;
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
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-top: 1rem;
`;
const SmallHeading = styled.div`
  font-size: 1rem;
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
const CardHead = styled.div`
  font-size: 4.4rem;
  font-weight: 700;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 3.9rem;
    padding-inline: 0rem;
  }

  @media (max-width: 475px) {
    font-size: 1.7rem;
    padding-inline: 0rem;
  }
`;
const CardPara = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
  font-family: inter;
  text-align: left;
  text-transform: uppercase;

  @media (max-width: 475px) {
    font-size: 0.8rem;
    padding-inline: 0rem;
  }
`;
const CardParaTwo = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: left;
  text-transform: uppercase;
`;
const Heading = styled.span`
  font-size: 4.4rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: ${Colors?.primary};
  padding-inline: 1rem;
  text-align: start;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 3.9rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  text-transform: lowercase;
  text-align: start;

  color: ${Colors?.primary};
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
const Stats = () => {
    const screens = useBreakpoint();
    const { screenWidth } = useScreenWidth();

    return (
        <div
            style={{
                marginLeft: screenWidth <= 768 ? "0px" : "90px",
                marginTop: "5vh",
                marginBottom: "5vh",
                position: "relative"
            }}
        >
            {/* <Row justify={"center"} style={{ marginTop: '2rem', marginBottom: '5rem' }}>
        <Col xs={22} sm={22} md={16} lg={16} xl={16} xxl={16}>
          <Video src={bannerVideo} autoPlay loop muted />
        </Col>
      </Row> */}
            <CenterHeading Heading={"Facts & Figures"} color={"#e1261c"}  />

            <Row justify={"center"} style={{ marginTop: 50 }}>
                <Col style={{ position: "relative" }} span={20} sm={20} md={24} xl={16} xxl={14}>
                    <div style={{ width: "15rem", height: "5px", display: "flex", position: "absolute", top: "-20px", left: "-8px" }}>
                        <div style={{ flex: "70%", backgroundColor: "#e1261c", height: "100%" }}>
                        </div>
                        <div style={{ flex: "30%", backgroundColor: "darkblue", height: "100%" }}>
                        </div>
                    </div>
                    <div style={{ width: "15rem", height: "5px", display: "flex", position: "absolute", bottom: "-20px", right: "-8px" }}>
                        <div style={{ flex: "70%", backgroundColor: "#e1261c", height: "100%" }}>
                        </div>
                        <div style={{ flex: "30%", backgroundColor: "darkblue", height: "100%" }}>
                        </div>
                    </div>
                    <Row style={{ flexWrap: "wrap" }} gutter={[20, 5]} justify={"space-between"}>
                        {[
                            {
                                id: 1,
                                title: "520,000",
                                para: "VALUES",
                                paraTwo: "Tons of Air Freight annually",
                                imgScr: IconBlue,
                            },
                            {
                                id: 2,
                                title: "14",
                                para: "VALUES",
                                paraTwo: "International gateways",
                                imgScr: planeflyblue,
                            },
                        ].map((val) => {
                            return (
                                <Col
                                
                                    xs={24}
                                    sm={24}
                                    md={10}
                                    lg={24}
                                    xl={24}
                                    xxl={11}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        // borderRadius: "8px",
                                        // paddingInline: "2rem",
                                        paddingBottom: "3rem",
                                        paddingTop: "3rem",
                                        paddingLeft: "5rem",
                                        paddingRight: "0rem",
                                        backgroundColor: "transparent",
                                        border: "1px solid #3333",
                                    }}
                                >
                                    <Row className="insideRow" align={"middle"} justify={"start"}>
                                        <Col className="insideCol" span={24}>
                                            <Row className="insideInsideRow" align={"middle"}>
                                                <Row
                                                    style={{
                                                        // backgroundColor: "#edf0f3",
                                                        // borderRadius: "50%",
                                                        width: screenWidth <= 425 ? 60 : 80,
                                                        height: screenWidth <= 425 ? 60 : 80,
                                                    }}
                                                >
                                                    <Image
                                                        src={`${val.imgScr}`}
                                                        width={screenWidth <= 425 ? 60 : 80}
                                                        height={screenWidth <= 425 ? 60 : 80}
                                                        preview={false}
                                                    />
                                                </Row>
                                                <Row
                                                    justify={"start"}
                                                    style={{ paddingInline: "1rem" }}
                                                    gutter={{ sm: 0 }}
                                                >
                                                    <Col span={24}>
                                                        <p style={{ margin: "0", color: "#e1261c" }}>
                                                            VOLUME
                                                        </p>
                                                        <CardHead>{val?.title}</CardHead>
                                                        <CardPara>{val?.para}</CardPara>
                                                    </Col>
                                                </Row>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Stats;
