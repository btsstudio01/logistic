
import React from "react";
import styled from "styled-components";
import Navbar from "../../../constant/Navbar";
import { Row, Col, Image, Grid } from "antd";
import AirfreightBannerImg from "../../../assets/relocationbanner.jpg";


const { useBreakpoint } = Grid;

const Box = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
  left: 0;
  z-index: 1;
`;

const MyComponent = styled.div`
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImage || ""});
  background-size: cover;
  background-position: center;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  top: 30%;
  left: 0;
  z-index: 1;
  padding-inline: 2rem;
`;

const BannerSubText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: inter;
  color: white;

  padding-inline: 5rem;
`;
const BoldSmallHeading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-top: 1rem;
`;
const SmallHeading = styled.div`
  font-size: 1rem;
  font-weight: 100;
  font-family: inter;
  color: black;
`;
const BannerText = styled.div`
  font-size: 5.5rem;
  font-weight: 900;
  font-family: inter;
  color: whitesmoke;
  text-shadow: 0 0 2px black;
  padding-inline: 5rem;

  @media (max-width: 580px) {
    font-size: 5rem;
    padding-inline: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 4rem;
    padding-inline: 2rem;
  }
`;
const Warehousebanner = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.md ? "90px" : "0px" }}>
    
      <Col span={24}>
        <MyComponent bgImage={AirfreightBannerImg} />
      </Col>
      <BoxContent>
        <BannerText>RELOCATION



</BannerText>
        <BannerSubText>
          {" "}
          MAC offers complete and professional relocation services and solutions for domestic (within U.A.E.) and international move..


        </BannerSubText>
      </BoxContent>
     
       
    </div>
  );
};

export default Warehousebanner;
