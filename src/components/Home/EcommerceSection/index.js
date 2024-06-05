import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../../constant/theme/theme";
import {
  HeroButton,
  HeroSubHeading,
  StyledImg,
  Wrapper,
} from "../../../common/globalStyle";
import { ArrowRightOutlined } from "@ant-design/icons";

const HeroHeading = styled.span`
  width: full;
  font-size: 3.7rem;
  text-align: center;
  font-weight: 400;
  color: ${Colors.main};
  padding-inline: 0.5rem;
  text-transform: uppercase;
  font-family: Inter;
  @media (max-width: 1278px) {
    font-size: 2.3rem;
  }

  &:before {
    background-color: #021d49;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 5px;
  }

  &:after {
    background-color: #e1261c;
    bottom: 0;
    content: "";
    height: 20px;
    left: 0;
    position: absolute;
    width: 5px;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 65px;
  width: 65px;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: ${({ defaultBgColor }) => defaultBgColor};
  color: ${({ defaultTextColor }) => defaultTextColor};
  position: relative;

  &:hover {
    gap: 25px; /* Visible on hover */
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

const IconWrapper = styled.span`
  transition: font-size 0.1s ease-in-out;
  font-size: 25px;
  // visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
    font-size: 35px;
  }
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

const { useBreakpoint } = Grid;

const CompanyOverview = ({
  individalTitle,
  companyTitle,
  Content1,
  Content2,
  Image,
  showButton = false,
  bgColor = "#F6F6F6",
}) => {
  const screens = useBreakpoint();

  console.log("title===>", individalTitle);

  return (
    <>
      <Wrapper
        screens={screens}
        style={{ backgroundColor: bgColor }}
        justify={"center"}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            minHeight: 460,
            padding: "2rem 0rem 2rem 0rem",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Col
              style={{
                position: "absolute",
                height: "100%",
                width: "50%",
                left: "-3rem",
                backgroundColor: "#F1F2F4",
              }}
            ></Col>
            <Row
              align={"middle"}
              justify={"end"}
              style={{
                paddingLeft: screens?.lg ? "20px" : "20px",
                paddingRight: screens?.lg ? "0px" : "20px",
              }}
              gutter={[{ xxl: 16, xl: 16 }, 24]}
            >
              <Col
                span={18}
                style={{ position: "relative", margin: 30, paddingLeft: 0 }}
              >
                <HeroHeading
                  style={{
                    textAlign: "left",
                    paddingLeft: "25px",
                    display: "flex",
                    flexDirection: "column",
                    padding: 30,
                  }}
                >
                  {individalTitle}
                  <HeroSubHeading style={{ padding: 0, textTransform: "none" }}>
                    {Content1}
                  </HeroSubHeading>
                </HeroHeading>
              </Col>

              {(companyTitle || Content2) && (
                  <Col
                    span={18}
                    style={{ position: "relative", margin: 30, paddingLeft: 0 }}
                  >
                    <Row align={"middle"} justify={"space-between"}>
                      <Col span={20}>
                        <HeroHeading
                          style={{
                            textAlign: "left",
                            paddingLeft: "25px",
                            display: "flex",
                            flexDirection: "column",
                            padding: 30,
                          }}
                        >
                          {companyTitle}
                          <HeroSubHeading
                            style={{
                              padding: "0rem 0rem 2rem 0rem",
                              textTransform: "none",
                            }}
                          >
                            {Content2}
                          </HeroSubHeading>
                        </HeroHeading>
                      </Col>
                      <Col span={4}>
                        <div
                          style={{
                            maxWidth: 255,
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            paddingRight: "10rem",
                          }}
                        >
                          {showButton &&
                            <StyledButton style={{ backgroundColor: "#E1261C" }}>
                            <IconWrapper>
                              <ArrowRightOutlined style={{ color: "white" }} />
                            </IconWrapper>
                          </StyledButton>
                          }
                        </div>
                      </Col>
                    </Row>
                  </Col>
                )}
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            xxl={12}
            style={{
              paddingRight: screens?.lg ? "20px" : "20px",
              paddingLeft: screens?.lg ? "0px" : "20px",
            }}
          >
            <StyledImg
              src={Image}
              preview={false}
              // height={500}
              height={screens.xl ? 500 : screens.lg ? 400 : 300}
              width={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default CompanyOverview;
