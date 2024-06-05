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
   

   

      <Row justify={"center"} style={{marginBottom:'3vh'}}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={16} xl={18} xxl={14}>
              <Row align={"middle"}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <ImgBanner bgImage={ImgTwo} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Heading>Innovation across the supply chain
</Heading>
                  <SubHeading>
                  We work with renowned partners to implement the most advanced technologies in order to ensure the best service level for our customer's thanks to automated equipment dedicated to key tasks in our warehousesrdized replicable processes & systems on
                    global scale.
                  </SubHeading>
                  {[
                    {
                      id: 1,
                      title:
                        "Support start-ups to develop supply chain technologies",
                    },

                    {
                      id: 2,
                      title: "Partner with emerging and established brands",
                    },

                    {
                      id: 3,
                      title:
                        "Drones for more reliable and accurate inventories.",
                    },
                    {
                      id: 4,
                      title: "Partner with emerging and established brands",
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
                </Col>

               
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      {/*  */}
      <Row justify={"center"} style={{marginBottom:'3vh'}}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={16} xl={18} xxl={14}>
              <Row align={"middle"}>
             
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <Heading>Sustainability

</Heading>
                  <SubHeading>
                  As a global logistics company, CEVA Logistics pays particular attention to its role in the protection of the environment and its responsibility to the community.
                  </SubHeading>
                  {[
                    {
                      id: 1,
                      title:
                        "Consolidation Hubs - taking away city centre deliveries                        ",
                    },

                    {
                      id: 2,
                      title: "Recycling solutions- zero landfill initiatives",
                    },

                    {
                      id: 3,
                      title:
                        "Electric vehicles - Clean fuel drives our vehicles",
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
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                  <ImgBanner bgImage={ImgThree} />
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
