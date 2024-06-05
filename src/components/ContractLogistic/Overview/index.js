import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import Comp from "../../../assets/contractlogisticoverview.jpeg";
import { Colors } from "../../../constant/theme/theme";

const { useBreakpoint } = Grid;

const Spacing = styled.div`
  margin-top: 50vh;
  @media (max-width: 992px) {
    margin-top: 100vh;
  }
  @media (max-width: 576px) {
    margin-top: 180vh;
  }
`;
const Since = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: inter;
  color: ${Colors?.primary};
`;

const Heading = styled.span`

  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 3rem;
  font-weight: 600;
  color: #1e455d;
  margin-left: 1rem;

  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;

const MWButton = styled(Button)`
  && {
    background-color: #1e455d;
    border: 0;
    color: white;

    height: 40px;

    &:hover {
      color: white;
    }
  }
`;
const StyledImg = styled(Image)`
align-self: center;
  height: 100%;
  object-fit: cover;

  @media (max-width: 992px) {
    margin-bottom: 2rem;
    width: 100%;

    object-fit: contain;
  }
`;

const Overview = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.md ? "90px" : "0px", marginTop: "5vh" }}>
      <Row justify={"center"} >
        <Col span={22}>
          <Row justify={"center"} align={"middle"}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={10}
              xxl={10}
              style={{height:'100%' }}
            >

<StyledImg src={Comp} preview={false} />

         </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={14}
              xxl={14}
            >
              <Row justify={"start"} align={"middle"}>
            
              </Row>
              <Row>
                <Heading>A FULL SPECTRUM OF SERVICES AND INTEGRATED SOLUTIONS
</Heading>
              </Row>
              <Row style={{ backgroundColor: "#f7f7f7", padding: "1rem" }}>
                <SubHeading>
                  {" "}
                  As a recognized 4PL logistics expert and thanks to more than 750 warehouses worldwide, CEVA Logistics offers and manages end-to-end supply chain solutions. Our dedicated Contract Logistics organization uses technology and innovation to deliver optimized and reliable solutions. Whatever the complexity and the geographical scope, we will design, execute and monitor your supply chain strategy to help you keep your promises to your customers.


                </SubHeading>
              
                <Heading style={{fontSize:'1rem',marginLeft:0}}>Customer Engagement
</Heading>
<SubHeading>
We believe that operational excellence is a continuous journey and our aim is to always support our customers as they move up in the value chain. We do that through design principles and process standardization, controlling all project implementation, site & transport classification assessment and our continuous improvement culture.


                </SubHeading>{" "}

              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
