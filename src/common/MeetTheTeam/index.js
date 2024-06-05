import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import {
  Heading,
  HeroButton,
  HeroHeading,
  HeroSubHeading,
  StyledImg,
  Wrapper,
} from "../globalStyle";
import img from "../../assets/Air freight Images/airport.jpg";
import { Colors } from "../../constant/theme/theme";
import Item from "antd/es/list/Item";
const { useBreakpoint } = Grid;

const MeetTheTeam = ({ title, TeamData, bgColor, rounded }) => {
  const screens = useBreakpoint();
  const Line = styled.div`
    background-color: ${Colors.main};
    width: 120px;
    height: 5px;
    margin-top: 10px;
    border-radius: 20px;
  `;
  const StyledTeamImage = styled.img`
    width: 230px;
    height: 230px;
    border-radius: ${({ rounded }) => (rounded ? "999px" : "10px")};
  `;
  const TeamMemberName = styled.p`
    color: ${Colors.main};
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 13px;
    padding: 0;
  `;

  return (
    <>
      <Wrapper
        screens={screens}
        style={{
          backgroundColor: bgColor,
          paddingBottom: "6vh",
          paddingRight: !screens?.lg && "20px",
          paddingLeft: !screens?.lg && "20px",
        }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Col span={24}>
            <Row justify={"center"}>
              <HeroHeading>{title}</HeroHeading>
            </Row>
            <Row justify={"center"}>
              <Line />
            </Row>
            <Row
              style={{
                padding: "20px",
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                flexWrap: "wrap",
              }}
            >
              {TeamData.length > 0 &&
                TeamData.map((item, i) => {
                  return (
                    <Col>
                      <Row style={{ borderRadius: "20px" }}>
                        <StyledTeamImage src={item.img} rounded={rounded} />
                      </Row>
                      <Row
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <TeamMemberName>{item.name}</TeamMemberName>
                        <HeroSubHeading style={{ margin: 0, padding: 0 }}>
                          {item.post}
                        </HeroSubHeading>
                      </Row>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default MeetTheTeam;
