import React from "react";
import styled from "styled-components";
import { Typography, Button, Grid, Row, Col } from "antd";
import EssentialImg from "../../../assets/essential.jpg";
import { Colors } from "../../../constant/theme/theme";
import PartnerImg from "../../../assets/partnerheader.jpg";
import Supply from "../../../assets/supply.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

const { Title } = Typography;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 255px;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: ${({ defaultBgColor }) => defaultBgColor};
  color: ${({ defaultTextColor }) => defaultTextColor};
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  &:hover {
    gap: 25px; /* Visible on hover */
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
  }
`;

const BannerWrapper = styled.div`
  height: 500px;
  position: relative;
  background-image: url(${EssentialImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const BannerWrapperTwo = styled.div`
  height: 500px;
  position: relative;
  background-image: url(${PartnerImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const BannerWrapperThree = styled.div`
  height: 500px;
  position: relative;
  background-image: url(${Supply});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BannerContent = styled.div`
  max-width: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const BannerText = styled(Title)`
  color: white;
`;
const Heading = styled.p`
  font-size: 4.4rem;
  font-weight: 900;
  margin: 1rem 0rem 2.5rem 0rem;
  color: white;
  padding-inline: 1rem;
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SubHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: white;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
const MWButton = styled(Button)`
  && {
    background-color: "white";
    border: 0;
    color: ${Colors?.primary};
    margin-inline: 1rem;
    height: 40px;
    font-weight: 700;
    font-size: 1.6rem;
    padding-inline: 3rem;
    &:hover {
      color: ${Colors?.primary};
    }
  }
`;
const MWButtonTwo = styled(Button)`
  && {
    background-color: transparent;
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 40px;
    font-weight: 600;
    padding-inline: 3rem;
    border: 1px solid white;
    &:hover {
      color: white;
    }
  }
`;
const Essential = () => {
  const screens = useBreakpoint();

  return (
    <>
      <div
        style={{ marginLeft: screens?.md ? "90px" : "0px", marginTop: "5vh" }}
      >
        <BannerWrapper>
          <BannerContent>
            <SubHeading>LOGISTIC CONNECTS THE DOTS</SubHeading>
            <Heading>LIFE'S ESSENTIALS</Heading>
            <SubHeading>
              Follow our journey across the world! Discover the new face of MAC
              Logistics, our transformation, our global dimension and how our
              values align with those of the CMA CGM Group.
            </SubHeading>
            <CustomButtom defaultBgColor={"#1F3E7B"} defaultTextColor={"#fff"} icon_color="#fff" labelTitle={"WATCH THE FILM"} buttonWidth={215} />
          </BannerContent>
        </BannerWrapper>

        {/* //second */}
        <BannerWrapperTwo>
          <BannerContent>
            <SubHeading>YOUR DIGITAL FREIGHT PARTNER</SubHeading>
            <Heading>Logistic</Heading>
            <SubHeading>
              Instant quote, fast booking, full visibility and assistance all
              the way. Make your shipment more sustainable through our different
              Green Solutions.
            </SubHeading>
            <CustomButtom icon_color="#fff" labelTitle={"LERN MORE"} buttonWidth={200} />
          </BannerContent>
        </BannerWrapperTwo>

        {/* //three */}
        <BannerWrapperThree>
          <BannerContent>
            <SubHeading>MAC SUPPLY SOLUTION</SubHeading>
            <Heading>SUPERCHARGE YOUR BATTERY SUPPLY CHAIN</Heading>
            <SubHeading>
              We provide you with a complete set of secured, efficient and
              compliant battery logistics services, specially designed to meet
              the challenges of your global end-to-end battery supply chain.
            </SubHeading>

            <CustomButtom icon_color="#fff" labelTitle={"LERN MORE"} borderColor="#fff" buttonWidth={200} />
          </BannerContent>
        </BannerWrapperThree>
      </div>
    </>
  );
};

export default Essential;

const CustomButtom = ({ defaultBgColor = "#1F3E7B", defaultTextColor = "#fff", labelTitle, icon_color = "red", buttonWidth = 255, borderColor = "#1F3E7B" }) => {
  return <div style={{ maxWidth: buttonWidth, marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
    <StyledButton
      style={{ backgroundColor: defaultBgColor, color: defaultTextColor, width: buttonWidth, borderColor }}
    >
      {labelTitle}
      <IconWrapper>
        <ArrowRightOutlined style={{ color: icon_color }} />
      </IconWrapper>
    </StyledButton>
  </div>
}
