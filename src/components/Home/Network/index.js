import React from "react";
import { Row, Col, Grid, Image, Button } from "antd";
import styled from "styled-components";
import { Colors } from "../../../constant/theme/theme";
import globeimg from "../../../assets/globe.jpg";

const { useBreakpoint } = Grid;

const NetworkBanner = styled.div`
  background-color: ${Colors?.primary};
  // @media (min-width: 1440px) {
  //   height: 35rem;
  // }
  // @media (min-width: 2560px) {
  //   height: 45rem;
  // }
`;

const Heading = styled.span`
  font-size: 4.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  padding-inline: 1rem;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 3.9rem;
  }
`;

const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: white;
  @media (max-width: 1278px) {
    font-size: 1.4rem;
  }
`;

const MWButtonTwo = styled(Button)`
  && {
    background-color: transparent;
    marginbottom: 20px;
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 50px;
    font-weight: 600;
    padding-inline: 4rem;
    border: 2px solid white;
    text-transform: uppercase;
      border-radius:0;
    &:hover {
      color: white;
    }
  }
`;

const CustImg = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform.5s;
  align-self: flex-end;
  &:hover {
    transform: scale(1.01);
  }
`;

const Network = ({ data, imgFirst }) => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        paddingInline: screens?.lg ? "0px" : "2rem",
      }}>
      {data.map((item, index) => (
        <Row align={"middle"} key={index} style={{ position:"relative", marginBottom: "2rem" }} id={item.id}>
        <div style={{position:"absolute", height:screens.xs ? "8px" : "100%",width:screens.xs ? "100%" : "8px",backgroundColor:"#e1261c",top:"0" , left:"0",zIndex:1}}>
        </div>
          <Col span={24}>
            <NetworkBanner>
              <Row align={"middle"}>
                {item.imgFirst ? (
                  <>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Row justify={"center"}>
                        <CustImg src={item.image} preview={false} />
                      </Row>
                    </Col>
                    <Col
                      xs={24}
                      sm={24}
                      md={12}
                      lg={12}
                      xl={12}
                      xxl={12}
                      style={{ paddingTop: "1rem" }}>
                      <Row align={"middle"} style={{ padding: 10 }}>
                        <Col span={24} style={{padding:"0 5rem"}}>
                          <Heading>{item.heading}</Heading>
                          <SubHeading>{item.subHeading1}</SubHeading>
                          {/* <SubHeading>{item.subHeading2}</SubHeading> */}
                          {item.showButton && <MWButtonTwo>{item.buttonText}</MWButtonTwo>}
                        </Col>
                      </Row>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Row align={"middle"} style={{ padding: 10 }}>
                        <Col span={24} style={{padding:"0 5rem"}}>
                          <Heading id={item.id}>{item.heading}</Heading>
                          <SubHeading >{item.subHeading1}</SubHeading>

                          <SubHeading>{item.subHeading2}</SubHeading>
                          {item.showButton && <MWButtonTwo>{item.buttonText}</MWButtonTwo>}
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                      <Row justify={"center"}>
                        <CustImg src={item.image} preview={false} />
                      </Row>
                    </Col>
                  </>
                )}
              </Row>
            </NetworkBanner>
          </Col>
        </Row>
      ))}
    </div>
  );
};
export default Network;
