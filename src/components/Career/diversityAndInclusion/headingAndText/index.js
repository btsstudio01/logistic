import React from "react";
import { Row, Col, Image } from "antd";
import styled from "styled-components";
import { div } from "numeric";
import useScreenWidth from "../../../../hooks/useScreenWidth";





const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  @media (max-width: 575.98px) {
    width: 100%;
    margin: 0;
  }
  
`;

const Heading = styled.h1`
  font-size: 3.7rem;
  font-weight: 600;
  color: #021d49;
  text-align: center;
  @media (max-width: 991.98px)
 {
    font-size: 3rem;
   
}
@media (max-width: 575.98px)
{
    font-size: 2.3rem;
}
`;

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #021d49;
  text-align: left;
  
  @media (max-width: 575.98px)
{
    font-size: 1.4rem;
    padding:10px
}
`;

const ComponentTitleParagraphHorizontal = ({ heading, text }) => {
    const { screenWidth } = useScreenWidth();
  return (
    <div style={{marginLeft:(screenWidth > 1023 ?90:0)}}>

    <Container >
      <Row justify="center" gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Heading>{heading}</Heading>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Paragraph>{text}</Paragraph>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ComponentTitleParagraphHorizontal;




//ComponentTitleParagraphHorizontal