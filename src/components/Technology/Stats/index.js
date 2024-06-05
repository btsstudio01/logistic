import React from "react";
import styled from "styled-components";
import Navbar from "../../../constant/Navbar";
import { Row, Col, Image, Grid } from "antd";
import AboutBannerImg from "../../../assets/aboutbanner.png";
import bannerVideo from "../../../assets/Banner.png";

import AboutOne from "../../../assets/aboutone.jpg";
import Graph from "../../../assets/bar-chart.png";
import { Colors } from "../../../constant/theme/theme";
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
  font-size: 2.5rem;
  font-weight: 600;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: left;
  text-transform: uppercase;
`;
const CardPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: black;
  font-family: inter;
  text-align: left;
  text-transform: uppercase;
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
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${Colors?.primary};
  padding-inline: 1rem;
  text-align: start;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
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

  return (
    <div style={{ marginLeft: screens?.md ? "90px" : "0px", marginTop: "5vh" ,marginBottom:'5vh'}}>


      <Row justify={"center"}>
        <Heading>FACTS & FIGURES</Heading>
      </Row>

      <Row justify={"center"}>
        <Col span={16}>
          <Row
            style={{ flexWrap: "wrap" }}
            gutter={[20, 20]}
            justify={"center"}
          >
            {[
              { id: 1, title: "363,000", para: "volume",paraTwo:'Tons of Air Freight annually', imgScr: Graph },
              {
                id: 2,
                title: "14",
                para: "GATEWAYS AT KEY GLOBAL HUBS",
                paraTwo:'International gateways',
                imgScr: Graph,
              },
            ].map((val) => {
              return (
                <Col
                  xs={24}
                  sm={24}
                  md={10}
                  lg={10}
                  xl={10}
                  xxl={10}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    borderRadius: "8px",
                    paddingInline: "2rem",
                    paddingBottom: "2rem",
                    paddingTop: "2rem",
                    backgroundColor: "transparent",
                    margin: "20px",
                    border: "1px solid #3333",
                  }}
                >
                  <Row align={"middle"} justify={"start"} >
                    <Col span={24}>

            
                   <Row>
                   <div
                      style={{
                        backgroundColor: "#edf0f3",
                        borderRadius: "50%",
                        width: "68px",
                        height: "68px",
                      }}
                    >
                      <Image
                        src={`${val.imgScr}`}
                        width={64}
                        height={64}
                        preview={false}
                      />
                    </div>
                    <Row
                      justify={"start"}
                      style={{ paddingInline: "2rem",  }}
                    >
                      <Col span={24} >
                       <Row justify={"start"}>
                       <Col span={24}> <CardPara>{val?.para}</CardPara>
                       <CardHead>{val?.title}</CardHead>
                       <CardParaTwo>{val?.paraTwo}</CardParaTwo>

                       </Col>
                       </Row>

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
