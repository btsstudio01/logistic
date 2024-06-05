import React from 'react'
import { Row, Col, Image,Button } from "antd";
import styled from 'styled-components';
import Airfreight from "../../../assets/airfreight.png";
import Seafreight from "../../../assets/seafreight.png";
import LandFreight from "../../../assets/landfreight.png";
import Warehousing from "../../../assets/warehouse.png";
import Relocation from "../../../assets/relocation.png";
import Cargo from "../../../assets/cargo.png";
import Contact from "../../../assets/contract.png";
import Support from "../../../assets/support.png";
const CardHead = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: inter;
  text-align: center;
`;
const WhatWeDo = () => {
  return (
    <Row>
        <Col span={24}>
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
                  title: "All Over The World",
                  para:'8700',
                  imgsrc: Airfreight,
                  height: 58,
                  width: 58,
                  path:'/airfreight'
                },
                {
                  id: 2,
                  title: "All Over The World",
                  para:'8700',
                  imgsrc: Cargo,
                  height: 58,
                  width: 58,
                  path:'/projectcargo'
                },
                {
                  id: 3,
                  title: "All Over The World",
                  para:'8700',
                  imgsrc: Contact,
                  height: 58,
                  width: 58,
                  path:'partner'
                },
                {
                  id: 4,
                  title: "All Over The World",
                  para:'8700',
                  imgsrc: Relocation,
                  height: 64,
                  width: 64,
                  path:'/reloaction'
                },

               
              ].map((service) => (
          

            
                <Col
                  xs={24}
                  sm={10}
                  md={10}
                  lg={5}
                  xl={5}
                  xxl={5}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
                    borderRadius: "8px",
                    paddingInline: "2rem",
                    paddingBottom:'1rem',
                    paddingTop:'1rem',
                    margin: "1rem",
                    backgroundColor:'white'
                  }}
                >
                  <Row justify={"center"} >
                    <Col span={24}>
                      <Row justify={"center"}>
                        <Image
                          src={`${service.imgsrc}`}
                          width={service?.width}
                          height={service?.height}
                          preview={false}
                        />                        <CardHead>{service.title}</CardHead> 

                      </Row>
                    </Col>
                    <Col span={24}>
                      <Row justify={"center"} style={{ marginTop: "2rem" }}>
              
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
  )
}

export default WhatWeDo