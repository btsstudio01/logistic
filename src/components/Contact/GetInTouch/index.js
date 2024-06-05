import React from "react";
import styled from "styled-components";

import { Row, Col, Image, Tabs, Form, Input, Button, Grid } from "antd";

import { Colors } from "../../../constant/theme/theme";
import { ContactData, GetInTouchData } from "../../../Data/Contact";
import useScreenWidth from "../../../hooks/useScreenWidth";

import Money_Img from "../../../assets/contact/Request-a-quote-49-68.webp";
import Money_Img1 from "../../../assets/contact/Submit-a-claim-67-60.webp";
import Money_Img2 from "../../../assets/contact/Track-shipment-61-62.webp";
import GlobeImage from "../../../assets/contact/micro-globe.6f6126b.png";

import Filter_DropDown from "../../Career/JobFilters/FilterField";

import {
  Box,
  BoxContent,
  BoxHeading,
  Boxx,
  HeroButton,
  LabelTitle,
  Wrapper,
} from "../../../common/globalStyle";

import FilterField from "../../Career/JobFilters/FilterField";
import { ArrowRightOutlined } from "@ant-design/icons";

const reasonitems = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    danger: true,
    disabled: true,
  },
];

const { useBreakpoint } = Grid;

const BoldSmallHeading = styled.div`
  font-size: 3rem;
  font-weight: 600;
  font-family: inter;
  color: black;
  margin-top: 1rem;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
const SmallHeading = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  font-family: inter;
  color: black;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;

const HeadText = styled.div`
  font-size: 4.4rem;
  font-weight: 300;
  color: ${Colors?.primary};
  font-family: inter;
  text-transform: uppercase;
  @media (max-width: 1278px) {
    font-size: 2.4rem;
  }
`;

const Card = styled.div`
  width: 90%;
  height: 8rem;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const CardHeading = styled.h1`
  font-size: 1rem;
  font-family: inter;
  font-weight: 1000;
`;
const CardPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${Colors?.primary};
  font-family: inter;
  padding: 0px 100px 50px 100px;
  text-transform: uppercase;
`;

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

  &:hover {
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  // ${StyledButton}:hover & {
  //   visibility: visible;
  // }
`;

const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 0;
  height: 55px;
  width: 255px;
  padding: 0px 25px 0px 25px;
`;

const Label = styled.p`
  color: #021d49;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 2rem;
  height: 3rem;
  font-weight: 400;
  text-transform: none;
  margin: 0px 0px 3px 0px;
`;

const GetInTouch = () => {
  const screens = useBreakpoint();
  const { screenWidth } = useScreenWidth();

  return (
    <Wrapper screens={screens} justify={"center"}>
      <Row
        justify={"center"}
        gutter={50}
        style={{
          paddingTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: screenWidth <= 768 ? "center" : "unset",
          flexDirection: screenWidth <= 768 ? "row" : "column",
          height: screenWidth >= 1024 ? "570px" : "auto",
        }}
      >
        <Row style={{ marginBottom: "2rem" }}>
          <HeadText style={{ color: "#e1261c" }}>HOW CAN WE HELP YOU?</HeadText>
        </Row>
        <Col
          lg={12}
          md={20}
          xs={20}
          sm={20}
          style={{
            // marginLeft: "50px",
            padding: "10px",
          }}
        >
          <Row style={{ marginBottom: "1rem" }}>
            {/* <BoldSmallHeading
            // style={{ fontSize: screens?.xs ? "2rem" : "3rem" }}
            >
              {GetInTouchData.title}{" "}
            </BoldSmallHeading> */}
            <div
              style={{
                border: "1px solid gray",
                position: "relative",
                padding: "50px 0px",
                width:
                  screenWidth <= 425
                    ? "370px"
                    : screenWidth <= 768
                    ? "100%"
                    : "600px",
                position: "relative",
                display: "flex",
                flexDirection: useScreenWidth <= 425 ? "column" : "row",
                justifyContent: useScreenWidth >= 425 ? "start" : "center",
                // justifyContent: "start",
              }}
            >
              <div style={{ width: "0px", position: "relative" }}>
                <p
                  style={{
                    // marginTop: "-60px",
                    marginTop: "-60px",
                    background: "white",
                    height: "20px",
                    width: "105px",
                    position: "absolute",
                    marginLeft:
                      screenWidth <= 425
                        ? "-14px"
                        : screenWidth <= 768
                        ? "-106px"
                        : screenWidth <= 1024
                        ? "-17px"
                        : "-95px",
                  }}
                >
                  DIRECT ACCESS
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: screenWidth <= 768 ? "30px" : "10px",
                  // marginTop: "70px",
                  flexDirection: screenWidth <= 425 ? "column" : "row",
                }}
              >
                <div
                  style={{
                    border: "1px solid #001C4C",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "-15px",
                    padding: "0px 10px",
                    height: "70px",
                  }}
                >
                  <Image
                    style={{
                      height: "30px",
                      marginTop: "-20px",
                      background: "white",
                    }}
                    src={Money_Img}
                    alt="Image no found"
                  />
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      marginBottom: "20px",
                      width: screenWidth <= 425 ? "240px" : "100%",
                      textAlign: "center",
                    }}
                  >
                    Quote & Services
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #001C4C",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "-15px",
                    padding: screenWidth <= 425 ? "0px 10px" : "unset",
                    height: "70px",
                  }}
                >
                  <Image
                    style={{
                      height: "30px",
                      marginTop: "-20px",
                      background: "white",
                    }}
                    src={Money_Img1}
                    alt="Image no found"
                  />
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      // width: "120px",
                      textAlign: "center",
                      padding: "0px 10px",
                    }}
                  >
                    Submit a claim
                  </p>
                </div>
                <div
                  style={{
                    border: "1px solid #001C4C",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "-15px",
                    padding: "0px 10px",
                    height: "70px",
                  }}
                >
                  <Image
                    style={{
                      height: "30px",
                      marginTop: "-20px",
                      background: "white",
                    }}
                    src={Money_Img2}
                    alt="Image no found"
                  />
                  <p
                    style={{
                      borderBottom: "1px solid gray",
                      // width: "120px",
                      textAlign: "center",
                    }}
                  >
                    Track shipment
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "1px solid gray",
                position: "relative",
                padding: "30px 10px",
                width:
                  screenWidth <= 425
                    ? "100%"
                    : screenWidth <= 768
                    ? "100%"
                    : "600px",
                position: "relative",
                marginTop: "60px",
              }}
            >
              <p
                style={{
                  marginTop: "-40px",
                  background: "white",
                  width: "150px",
                  marginLeft:
                    screenWidth <= 425
                      ? "-12px"
                      : screenWidth <= 768
                      ? "-12px"
                      : "-12px",
                }}
              >
                SEND US A MESSAGE
              </p>
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: screenWidth <= 425 ? "column" : "row",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <div>
                  <Filter_DropDown
                    items={reasonitems}
                    labelTitle={"Select a reason"}
                    placeholder={"-Select-"}
                    type={"dropdown"}
                  />
                </div>

                <div style={{ maxWidth: 255 }}>
                  <StyledButton
                    style={{
                      backgroundColor: "#121212",
                      color: "#fff",
                      width: "140px",
                      marginTop: "30px",
                      marginLeft: "10px",
                    }}
                  >
                    SELECT
                    <IconWrapper>
                      <ArrowRightOutlined style={{ color: "red" }} />
                    </IconWrapper>
                  </StyledButton>
                </div>
                {/* <FilterField type={"button"} labelTitle={"SELECT"} /> */}
              </div>
            </div>
          </Row>
          <Row style={{ marginBottom: "1rem" }}>
            {/* <SmallHeading
              style={{
                // fontSize: screens?.xs ? "1rem" : "1.2rem",
                paddingRight: screens?.xs ? "12px" : "0px",
              }}>
              {GetInTouchData.desc}
            </SmallHeading> */}
          </Row>
          {/* <Row style={{ marginBottom: "2rem" }}>
            <HeroButton>Learn More</HeroButton>
          </Row> */}
        </Col>
        <Col
          xs={20}
          lg={12}
          style={{
            padding: "10px",
          }}
        >
          <div
            style={{
              border: "1px solid gray",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "50px 20px",
              marginTop: "60px",
              width:
                screenWidth <= 425
                  ? "100%"
                  : screenWidth <= 768
                  ? "100%"
                  : "400px",
            }}
          >
            <div>
              <p
                style={{
                  marginTop: "-60px",
                  background: "white",
                  width: "170px",
                  marginLeft:
                    screenWidth <= 425
                      ? "-22px"
                      : screenWidth <= 768
                      ? "-205px"
                      : "-75px",
                }}
              >
                FIND YOUR LOCAL OFFICE
              </p>
              <Image src={GlobeImage} preview={false} alt="Image not found" />
            </div>
            <div style={{ width: "100%" }}>
              <StyledButton
                style={{
                  backgroundColor: "#121212",
                  color: "#fff",
                  width: "100%",
                  marginTop: "30px",
                  // marginLeft: "10px",
                }}
              >
                SELECT ON MAP
                <IconWrapper>
                  <ArrowRightOutlined style={{ color: "red" }} />
                </IconWrapper>
              </StyledButton>
            </div>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default GetInTouch;
