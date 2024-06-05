import React from "react";
import { Row, Col, Image, Button, Grid } from "antd";
import styled from "styled-components";
import ImgOne from "../../../assets/smallimgone.jpg";
import ImgTwo from "../../../assets/smallimgtwo.jpg";

import ImgThree from "../../../assets/smallimgthree.jpg";

import { Colors } from "../../../constant/theme/theme";

const { useBreakpoint } = Grid;
const Heading = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
  color: #1e455d;
  padding-inline: 1rem;

  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inter;
  margin-bottom: 1rem;
  padding-inline: 1rem;

  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
const Point = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inter;
  margin-bottom: 1rem;
  padding-inline: 1rem;

  @media (max-width: 1278px) {
    font-size: 1rem;
  }
  :before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${Colors?.primary};
    margin-right: 8px;
    border: 1px solid ${Colors?.primary};
  }
`;
const ImgBanner = styled.div`
  background-image: url(${(props) => props.bgImage || ""});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 500px;
  @media (max-width: 768px) {
    height: 300px;
  }
`;
const Project = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.md ? "90px" : "0px", marginTop: "5vh" }}>
      <Row justify={"center"} style={{ marginBottom: '3vh' }}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={16} xl={18} xxl={14}>
              <Row align={"middle"}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Heading>Keeping your company ahead of the curve
                  </Heading>
                  <SubHeading>
                    With our SMART SOLUTIONS we provide Standardized “Best
                    Practice” options with proven concepts so that we can
                    address your needs with up-to-date, innovative best practice
                    based on standardized replicable processes & systems on
                    global scale.
                  </SubHeading>
                  <SubHeading>
                    SMART Solutions are designed to drive a high level of
                    service quality. Documentation includes process
                    descriptions, standard system configuration, including
                    materials & data flows, layout, flow decision tree,
                    productivity benchmark and training material.
                  </SubHeading>
                  <SubHeading>
                    We can make them sector specific and using automation,
                    robotization & digital solutions we seek to drive down cost
                    and make SMART Solutions the most cost effective approach
                    for our customers
                  </SubHeading>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <ImgBanner bgImage={ImgOne} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* /second */}

      <Row justify={"center"} style={{ marginBottom: '3vh' }}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={16} xl={18} xxl={14}>
              <Row align={"middle"}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <ImgBanner bgImage={ImgTwo} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Heading>MAC Services
                  </Heading>
                  <SubHeading>
                    Our Automotive Products/Services include:
                  </SubHeading>
                  {[
                    {
                      id: 1,
                      title:
                        "CEVA Lead Logistics (LLP/4PL)",
                    },

                    {
                      id: 2,
                      title: "I2M Road Transportation (Milk Run, Drayage, FTL, LTL)",
                    },

                    {
                      id: 3,
                      title:
                        "Global Air and Ocean Management",
                    },
                    {
                      id: 4,
                      title: "Value Added Assembly",
                    },
                    {
                      id: 5,
                      title: "Kitting and sub-assembly",
                    },
                    {
                      id: 6,
                      title: "Line-feeding",
                    },
                  ].map((val) => {
                    return (
                      <>
                        <Row>
                          <Point> {val?.title}</Point>
                        </Row>
                      </>
                    );
                  })}
                  <SubHeading>
                    We also provide services for Finished Vehicles for:
                  </SubHeading>
                  {[
                    {
                      id: 1,
                      title:
                        "CEVA Lead Logistics (LLP/4PL)",
                    },
                    {
                      id: 2,
                      title: "I2M Road Transportation (Milk Run, Drayage, FTL, LTL)",
                    }
                  ].map((val) => {
                    return (
                      <>
                        <Row>
                          <Point> {val?.title}</Point>
                        </Row>
                      </>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
