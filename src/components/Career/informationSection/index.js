import React from "react";
import { Row, Col, Grid, Image, Button } from "antd";
import styled from "styled-components";
import { Colors } from "../../../constant/theme/theme";
import globeimg from "../../../assets/globe.jpg";
import useScreenWidth from "../../../hooks/useScreenWidth";

const { useBreakpoint } = Grid;

const NetworkBanner = styled.div`
  background-color: white;
  // Adjust width and margin based on screen size
  width: ${props => props.isLargeScreen ? '70%' : '100%'};
  margin: 0 auto; /* Center the content */
`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: primary;
margin-left: 1rem;
@media (max-width: 1024px)
{
   font-size: 3.7rem;
}
@media (max-width: 575.98px)
 {
    font-size: 2.3rem;
}
  
`;

const SubHeading = styled.p`

  font-size: 1.5rem;
  font-weight: 400;
  
  font-weight: 400;
  line-height: 1.625;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: #021d49;
    font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    @media (max-width: 1024px)
    {
       font-size: 1.3rem;
   }
     
`;

const MWButtonTwo = styled(Button)`
  && {
    background-color: transparent;
    marginbottom: 20px;
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 40px;
    font-weight: 600;
    padding-inline: 3rem;
    border: 2px solid white;
    text-transform: uppercase;
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

const InfortmationSection = ({ data, imgFirst }) => {
  const { screenWidth } = useScreenWidth();
  const screens = useBreakpoint();

  return (
    <div style={{marginLeft:(screenWidth > 1023 ?90:0), height:screenWidth>350?"":"130vh"}}>
      {data.map((item, index) => (
        <Row align={"middle"} key={index} style={{ marginBottom: "2rem" ,marginTop:"20px"}} id={item.id} >
          <Col span={24}>
            <NetworkBanner isLargeScreen={screens?.lg}>
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
                        <Col span={24}>
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
                        <Col span={24}>
                          <Heading id={item.id}>{item.heading}</Heading>
                          <SubHeading>{item.subHeading1}</SubHeading>
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
export default InfortmationSection;
