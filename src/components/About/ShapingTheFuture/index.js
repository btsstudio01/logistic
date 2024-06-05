import React from "react";
import {Row,Col,Image,Button} from 'antd'
import styled from "styled-components";
import { Link } from "react-router-dom";
const BusinessText = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color: white;
  margin-inline: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const BusinessSubText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  font-family: inter;
  color: white;
  margin-inline: 1rem;
  margin-bottom: 0.25rem;
`;
const MWButton = styled(Button)`
  margin-top: 1rem;
  && {
    background-color: white;
    border: 0;
    color: #1e455d;
    font-weight: bold;
    padding-inline: 3rem;
    height: 40px;
    margin-right: 1rem;
    &:hover {
      color: #1e455d;
    }
  }
`;
const MWButtonTwo = styled(Button)`
  margin-top: 1rem;
  && {
    background-color: transparent;
    border: 2px solid 1e455d;
    color: white;
    font-weight: bold;
    padding-inline: 3rem;
    height: 40px;
    margin-right: 1rem;
    &:hover {
      color: white;
    }
  }
`;
const ShapingTheFuture=()=>{
    return(
        <>
        <Row justify={"center"}>
              <Col span={22}>
                <Row>
                  <Col span={24}>
                    <BusinessText>Shaping the future of Logistics.</BusinessText>

                  </Col>
                  <Col span={16}>
                    <BusinessSubText>
                      We are represented internationally with 263 offices in 56 countries. More than 20.500 people work for us within our Worldwide Network in 173 countries and 489 offices. Join the FAMILY:
                    </BusinessSubText>
                  </Col>

                </Row>
                <Row>
                  <Col span={24} style={{ marginInline: '1rem' }}>
                    <Link to={'/about'}>

                      <MWButton>ABOUT US</MWButton></Link>
                    <Link to={'/careers'}>
                      <MWButtonTwo >CAREERS</MWButtonTwo>

                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
        </>
    )
}
export default ShapingTheFuture