import React from 'react'
import { Row, Col, Image, Button } from "antd";

import Plane from "../../../assets/plane.png";
import styled from 'styled-components';
const BusinessText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color: white;
  margin-inline: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const CardHead = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  color: white;
  font-family: inter;
  text-align: center;
  text-transform: uppercase;
`;
const BusinessSubText = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  font-family: inter;
  color: white;
  margin-inline: 1rem;
  margin-bottom: 0.25rem;
`;

const MWButton = styled(Button)`
  margin-top: 1rem;
  && {
    background-color: white;
    border: 0;
    color: #1e455d;
    font-weight: bold;
    padding-inline: 3rem;
    height: 40px;
    margin-right: 1rem;
    &:hover {
      color: #1e455d;
    }
  }
`;
const ColHover = styled(Col)`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;
const LetsdobusinessContent = () => {
  return (
   <>
   <Row justify={"center"}>
              <Col xs={21} sm={21} md={16} lg={16} xl={16} xxl={16}>
                <BusinessText>Let's do Business!</BusinessText>
                <BusinessSubText>YOUR LOGISTICS NEED</BusinessSubText>
              </Col>
            </Row>
            <Row justify={"center"}>
              <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={20}>
                <Row justify={"center"} style={{ flexWrap: "wrap" }}>
                  {[
                    {
                      id: 1,
                      title: "Air",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "/airfreight",
                    },
                    {
                      id: 2,
                      title: "Sea",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "/projectcargo",
                    },
                    {
                      id: 3,
                      title: "Road",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "partner",
                    },
                    {
                      id: 4,
                      title: "Rail",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "/reloaction",
                    },

                    {
                      id: 5,
                      title: "Contract ",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "/warehousing-and-distribution",
                    },
                    {
                      id: 6,
                      title: "Others ",
                      imgsrc: Plane,
                      height: 42,
                      width: 42,
                      path: "/warehousing-and-distribution",
                    },
                  ].map((val) => {
                    return (
                      <ColHover
                        xs={6}
                        sm={3}
                        md={6}
                        lg={3}
                        xl={3}
                        xxl={3}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                          borderRadius: "8px",
                          paddingInline: "1rem",
                          paddingBottom: "1rem",
                          paddingTop: "1.5rem",
                          paddingBottom: "1.5rem",
                          margin: "0.25rem",
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                          border: "2px solid white",
                          width: 120,
                          height: 120,
                        }}
                      >
                        <div>
                          <Row justify={"center"}>
                            <Col span={24}>
                              <Row justify={"center"}>
                                <Image
                                  src={`${val.imgsrc}`}
                                  width={val?.width}
                                  height={val?.height}
                                  preview={false}
                                />{" "}
                              </Row>
                            </Col>
                            <Col span={24}>
                              <Row justify={"center"}>
                                <CardHead>{val.title}</CardHead>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </ColHover>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            {/* <Row justify={"center"}>
              <Col xs={19} sm={20} md={15} lg={16} xl={14} xxl={16}>
                <Row justify={"center"}>
                  <MWButton>Next Step</MWButton>
                </Row>
              </Col>
            </Row> */}
            </>
  )
}

export default LetsdobusinessContent