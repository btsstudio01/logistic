import React from "react";
import styled from "styled-components";
import { Typography, Button, Grid, Row, Col } from "antd";
import EssentialImg from "../../../assets/HomePagePics/Essential/essential-banner4.webp";
import { ArrowRightOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

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

const BannerContent = styled.div`
  max-width: 540px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
const SingleEssential = ({
  FirstHeading,
  MainHeading,
  Description,
  BtnLabelText,
  BtnWidth = 255,
}) => {
  const screens = useBreakpoint();

  return (
    <>
      <div
        style={{ marginLeft: screens?.md ? "90px" : "0px", marginTop: "5vh" }}
      >
        <BannerWrapper>
          <BannerContent>
            <SubHeading>{FirstHeading}</SubHeading>
            <Heading>{MainHeading}</Heading>
            <SubHeading>{Description}</SubHeading>
            <CustomButtom
              defaultBgColor={"transparent"}
              defaultTextColor={"#fff"}
              icon_color="#fff"
              labelTitle={BtnLabelText}
              buttonWidth={BtnWidth}
              borderColor="#fff"
            />
          </BannerContent>
        </BannerWrapper>
      </div>
    </>
  );
};

export default SingleEssential;

const CustomButtom = ({
  defaultBgColor = "#1F3E7B",
  defaultTextColor = "#fff",
  labelTitle,
  icon_color = "red",
  buttonWidth,
  borderColor = "#1F3E7B",
}) => {
  return (
    <div
      style={{
        maxWidth: buttonWidth,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "3rem",
      }}
    >
      <StyledButton
        style={{
          backgroundColor: defaultBgColor,
          color: defaultTextColor,
          width: buttonWidth,
          borderColor,
        }}
      >
        {labelTitle}
        <IconWrapper>
          <ArrowRightOutlined style={{ color: icon_color }} />
        </IconWrapper>
      </StyledButton>
    </div>
  );
};
