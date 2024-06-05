import React from "react";
import { Row, Col, Image } from "antd";
import styled from "styled-components";
// import logo from ''
import Airfreight from "../../../assets/airfreight.png";
import Seafreight from "../../../assets/seafreight.png";
import LandFreight from "../../../assets/landfreight.png";
import Warehousing from "../../../assets/warehouse.png";
import Relocation from "../../../assets/relocation.png";
import Cargo from "../../../assets/cargo.png";
import Contact from "../../../assets/contract.png";
import Support from "../../../assets/support.png";
import { Link } from "react-router-dom";
const Heading = styled.div`
  font-size: 4rem;
  font-weight: 900;
  font-family: inter;
  @media (max-width: 475px) {
    font-size: 3rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: inter;
  color: white;
`;
const CardHead = styled.div`
  font-size: 0.7rem;
  font-weight: 500;
  font-family: inter;
  text-align: center;
  text-transform: uppercase;
`;
const Services = () => {
  return (
    <>
      <Row justify={"center"} align={"middle"}>
        <Col span={6}>
          <Row>
            <div style={{ border: "0.5px solid #eee", width: "100%" }}></div>
          </Row>
        </Col>

        <Col span={4}>
          <Row justify={"center"}>
            <SubHeading> FAST NAVIGATION</SubHeading>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <div style={{ border: "0.5px solid #eee", width: "100%" }}></div>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} sm={24} md={22} lg={22} xl={20} xxl={20}>
          <Row justify={"center"} style={{ marginTop: "3rem" }}>
            <Col span={20}>
              {" "}
              <Row
                justify={"center"}
                gutter={[16, 16]}
                style={{ flexWrap: "wrap" }}
              >
                {[
                  {
                    id: 1,
                    title: "Let's Do Business",
                    imgsrc: Airfreight,
                    height: 58,
                    width: 58,
                    poath: "/airfreight",
                  },
                  {
                    id: 2,
                    title: "Project Cargo",
                    imgsrc: Cargo,
                    height: 58,
                    width: 58,
                    path: "/projectcargo",
                  },
                  {
                    id: 3,
                    title: "Contract Logistics",
                    imgsrc: Contact,
                    height: 58,
                    width: 58,
                    path: "partner",
                  },
                  {
                    id: 4,
                    title: "Relocation",
                    imgsrc: Relocation,
                    height: 64,
                    width: 64,
                    path: "/reloaction",
                  },

                  {
                    id: 5,
                    title: "Warehousing ",
                    imgsrc: Warehousing,
                    height: 56,
                    width: 52,
                    path: "/warehousing-and-distribution",
                  },
                  {
                    id: 6,
                    title: "Sea Freight",
                    imgsrc: Seafreight,
                    height: 64,
                    width: 64,
                    path: "/seafreight",
                  },
                ].map((service) => (
                  <Col
                    xs={24}
                    sm={10}
                    md={10}
                    lg={3}
                    xl={3}
                    xxl={3}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                      borderRadius: "8px",
                      paddingInline: "2rem",
                      paddingBottom: "1rem",
                      paddingTop: "1rem",
                      margin: "1rem",
                      backgroundColor: "white",
                    }}
                  >
                    <Row justify={"center"}>
                      <Col span={24}>
                        <Row justify={"center"}>
                          <Image
                            src={`${service.imgsrc}`}
                            width={service?.width}
                            height={service?.height}
                            preview={false}
                          />{" "}
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row justify={"center"} style={{ marginTop: "2rem" }}>
                          <CardHead>{service.title}</CardHead>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Services;
