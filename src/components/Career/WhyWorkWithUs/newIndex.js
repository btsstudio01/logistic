import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../../constant/theme/theme";
import Loading_Img from "../../../assets/sf-24-768-768 (1).webp";
import useScreenWidth from "../../../hooks/useScreenWidth";
import FilterField from "../../../components/Career/JobFilters/FilterField";
import {
  ButtonWithIcon,
  HeroSubHeading,
  IconWrapper,
} from "../../../common/globalStyle";
import { useLocation } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

export const HeroHeading = styled.span`
  margin-top: 3rem;
  width: full;
  font-size: 3.7rem;
  text-align: center;
  font-weight: 400;
  color: ${Colors.main};
  padding-inline: 0.5rem;
  font-family: Inter;
  @media (max-width: 1278px) {
    font-size: 2.3rem;
  }

  &:before {
    background-color: hsla(0, 0%, 40%, 0.502);
    content: "";
    top: -20rem;
    display: block;
    height: 160px;
    margin-left: 113px;
    margin-bottom: 24px;
    width: 1px;
    z-index: 0;
  }
`;

export const HeroHeading2 = styled.p`
  margin: 0.5rem 0rem;
  width: full;
  font-size: 2.2rem;
  text-align: center;
  font-weight: 700;
  color: ${Colors.main};
  padding-inline: 0.5rem;
  font-family: Inter;
  @media (max-width: 1278px) {
    font-size: 2.3rem;
  }
`;

const StyledImg = styled.img`
  margin-bottom: 2rem;
  width: 100%;
  height: 67vh;
  object-fit: cover;
  box-shadow: 8px 6px 17px -5px rgba(0, 0, 0, 0.75);
  @media (max-width: 1300px) {
    height: 50vh;
  }
  @media (max-width: 1100px) {
    height: 40vh;
  }
  @media (max-width: 1100px) {
    height: 450px;
  }
  @media (max-width: 1026px) {
    height: 400px;
  }
`;

const RightImagePanel = styled.div`
  background-color: #1d4289;
  height: inherit;
  position: relative;
  width: 650px;
  @media (max-width: 1300px) {
    width: 550px;
  }
  @media (max-width: 1100px) {
    width: 450px;
  }
  @media (max-width: 1024px) {
    width: 400px;
  }
`;

const { useBreakpoint } = Grid;

const ListPageOverview = ({
  Content1,
  Content2,
  Content3,
  title,
  freightTitle,
  Image,
  bgColor,
  href = "#",
  showButton = true,
  marginTop = "2rem",
  items, point
}) => {
  const screens = useBreakpoint();
  const location = useLocation();
  const { screenWidth } = useScreenWidth();
  const isAirfreightPath =
    location.pathname === "/airfreight" ||
    location.pathname === "/oceanfreight";

  return (
    <>
      <Row
        style={{
          width: "100%",
          display: "flex",
          marginLeft: screenWidth <= 768 ? "0xp" : "90px",
          marginBottom:
            screenWidth <= 425 ? "380px" : screenWidth <= 768 ? "280px" : "0px",
          minHeight: "100vh",
        }}
      >
        <RightImagePanel>
          <div
            style={{
              // trasform: screenWidth <= 768 ? "translateX(0%)" : screenWidth < 1024 ? "translateX(12%)" : "translateX(15%)",
              transform: "translateX(12%)",
              borderRadius: "0px",
              marginTop: screenWidth > 575 ? "190px" : "20px",
              height: "100%",
            }}
          >
            <StyledImg
              src={Image ? Image : Loading_Img}
              preview={false}
              height={screens.xl ? 500 : screens.lg ? 400 : 300}
              // width={"100%"}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </RightImagePanel>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Row
            align={"top"}
            style={{
              paddingTop: screenWidth <= 768 ? "20px" : "0px",
              paddingRight:
                screens > 1024 ? "140px" : screenWidth < 1024 ? "0px" : "100px",
              paddingLeft: "10vw",
              marginBottom: "3rem",
              width: "85%",
            }}
          >
            <HeroHeading
              style={{
                textAlign: "left",
                marginTop: "0px",
                fontSize: screenWidth < 768 ? "2.7rem" : "4.4rem",
                fontWeight: 300,
                marginBottom: "3rem",
              }}
            >
              {title}
            </HeroHeading>

            <Row>
              <Col style={{ margin: 25 }}>
                {items.map((e, i) => (
                  <Row
                    key={i}
                    style={{
                      display: "flex",
                      gap: "30px",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "2rem",
                        margin: 0,
                        fontWeight: 500,
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {point ? (
                        <img
                          src={e.icon}
                          style={{ marginRight: "20px" }}
                          height={screens?.md ? 10 : 6}
                          width={screens?.md ? 10 : 6}
                        />
                      ) : (
                        <img
                          src={e.icon}
                          style={{ marginRight: "20px" }}
                          height={screens?.md ? 50 : 40}
                          width={screens?.md ? 50 : 40}
                        />
                      )}
                      {e.label}
                    </p>
                  </Row>
                ))}
              </Col>
            </Row>
            {showButton && (
              <Row
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                {/* <a href={href}> */}
                <ButtonWithIcon
                  style={{
                    backgroundColor: "#E30022",
                    color: "#fff",
                    width: 200,
                    borderColor: "#E30022",
                  }}
                >
                  Learn More
                  <IconWrapper>
                    <ArrowRightOutlined style={{ color: "#fff" }} />
                  </IconWrapper>
                </ButtonWithIcon>
                {/* </a> */}
              </Row>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ListPageOverview;
