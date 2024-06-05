import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import Comp from "../../../assets/oceanoverview.webp";
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
      <Row justify={"center"}>
        <Col span={22}>
          <Row justify={"center"} align={"middle"}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={10}
              xxl={10}
              style={{ height: "100%" }}
            >
              <StyledImg src={Comp} preview={false} />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={14} xxl={14}>
              <Row justify={"start"} align={"middle"}></Row>
              <Row>
                <Heading>OVERVIEW</Heading>
              </Row>
              <Row style={{ backgroundColor: "#f7f7f7", padding: "1rem" }}>
                <SubHeading>
                  {" "}
                  Fast moving, challenging and constantly changing – airfreight
                  spurs us on to be creative and flexible as we seek to deliver
                  the most appropriate services to you. Global capacity and
                  demand can change in the blink of an eye and we are committed
                  to providing stable, reliable services which maintain your
                  supply chain’s integrity. Whether your shipments fly in the
                  bellies of commercial aircraft or require specialist freighter
                  aircraft to move them our team of air freight experts will
                  deliver tailor-made solutions to solve your business
                  challenges.
                </SubHeading>
                <Heading style={{ fontSize: "1rem", marginLeft: 0 }}>
                  OUR DIFFERENCE
                </Heading>
                <SubHeading>
                  Our teams of experienced and skilled expert in airfreight
                  ensure fast and reliable solutions in every circumstances. At
                  the peak of planetary COVID-19 crisis, Logistic was
                  able to organize several intercontinental air bridges
                  representing more than 280 chartered flights to meet urgent
                  needs for various industries and governments.
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
