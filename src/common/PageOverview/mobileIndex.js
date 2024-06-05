import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Button, Grid } from "antd";
import { Colors } from "../../constant/theme/theme";
import Loading_Img from "../../../src/assets/sf-24-768-768 (1).webp";
import useScreenWidth from "../../hooks/useScreenWidth";
import FilterField from "../../components/Career/JobFilters/FilterField";
import { HeroButton, HeroSubHeading, StyledImg, Wrapper } from "../globalStyle";
import { useLocation } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

export const HeroHeading = styled.span`
  margin-top: 3.9rem;
  width: 100%;
  font-size: 3.9rem;
  text-align: center;
  font-weight: 300;
  color: ${Colors.main};
  padding-inline: 0.5rem;
  font-family: Inter;
  @media (max-width: 575px) {
    font-size: 2.8rem;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 172px;
  font-size: 1.6rem;
  font-weight: 700;
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
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
  }
`;

const { useBreakpoint } = Grid;

const PageOverviewMobile = ({
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
}) => {
  const screens = useBreakpoint();
  const location = useLocation();
  const { screenWidth } = useScreenWidth();
  const isAirfreightPath = location.pathname === "/airfreight";

  return (
    <>
      <Row
        style={{
          marginTop: 40,
          marginLeft: screenWidth > 991 ? 90 : 0,
          padding: "2rem 0rem 0rem 0rem",
        }}>
        <Col
          xs={{ order: 2, span: 24 }}
          sm={{ order: 2, span: 24 }}
          md={{ order: 2, span: 24 }}
          style={{ backgroundColor: "#E30022" }}
          align={"center"}>
          <StyledImg
            src={Loading_Img}
            preview={false}
            height={screens.xl ? 500 : screens.lg ? 400 : 300}
            width={"95%"}
          />
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          md={{ order: 1, span: 24 }}
          style={{ padding: "0rem 2rem 0rem 2rem" }}>
          <Row align={"top"}>
            <HeroHeading>{title}</HeroHeading>

            <Row>
              <HeroSubHeading> {Content1}</HeroSubHeading>
              <HeroSubHeading>{Content2}</HeroSubHeading>{" "}
              {isAirfreightPath && (
                <>
                  <HeroHeading>{freightTitle}</HeroHeading>
                  <HeroSubHeading>{Content3}</HeroSubHeading>{" "}
                </>
              )}
            </Row>
            {showButton && (
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  padding: "0rem 0rem 4rem 0rem",
                }}>
                <div style={{ maxWidth: 255, padding: "10px 0px 10px 0px" }}>
                  <StyledButton
                    style={{ backgroundColor: "#E30022", color: "#fff" }}>
                    LEARN MORE
                  </StyledButton>
                </div>
              </Row>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PageOverviewMobile;
