import React from "react";
import { Row, Col, Grid } from "antd";
import { Wrapper } from "../../../common/globalStyle";
import styled from "styled-components";

const Heading = styled.div`
  font-size: 4.4rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  color: #E30022;
  padding-inline: 1rem;

  font-family: inter;
  @media (max-width: 1000px) {
    font-size: 3.9rem;
  }

  @media (max-width: 575) {
    font-size: 2.9rem;
  }
`;
const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: #E30022;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
  }
`;

const { useBreakpoint } = Grid;

const AdditionalContent = ({
  title,
  Content1,

  bgColor = "#F6F6F6",
}) => {
  const screens = useBreakpoint();

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: bgColor, paddingBottom: "0rem" }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex"
          }}
          justify={"center"}
        >
          <Col span={12} align="center">
            <Heading style={{ textAlign: "left" }}>{title}</Heading>

            <SubHeading> {Content1}</SubHeading>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default AdditionalContent;
