import React from "react";
import styled from "styled-components";
import { Row, Col, Image, Grid, Breadcrumb } from "antd";
import { Wrapper } from "../globalStyle";
import { BsCaretRightFill } from "react-icons/bs";
import useScreenWidth from "../../hooks/useScreenWidth";

const { useBreakpoint } = Grid;

const MyComponent = styled.div`
  height: 60vh;
  min-height: 350px;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  // padding-left: 0px;
  // @media (min-width: 768px) {
  //   height: 100vh;
  // }
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.bgImage || ""});
  background-size: cover;
  background-position: center;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1140px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: left;

  @media (max-width: 1140px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const BannerSubText = styled.div`
  font-size: 2.3rem;
  font-weight: 600;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  color: white;
  max-width: 500px;
  display: block;
  text-align: left;
  @media (max-width: 760px) {
    font-size: 2.3rem;
  }
  @media (max-width: 575px) {
    font-size: 2rem;
    // text-align: center;
  }
`;

const BannerText = styled.div`
  font-size: 6rem;
  font-weight: 900;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
  color: whitesmoke;
  text-shadow: 0 0 2px black;
  margin-bottom: 1rem;
  width: max-content;
  @media (max-width: 1000px) {
    font-size: 5rem;
  }

  @media (max-width: 575px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const BannerWithBreadcrumb = ({
  title,
  bgImage,
  desc,
  bgColor = "#fff",
  bannerHeight = "100vh",
  breadcrumbItems,
}) => {
  const { screenWidth } = useScreenWidth();
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingBottom: "0px",
        paddingTop: "0px",
        backgroundColor: bgColor,
        height: bannerHeight,
        minHeight: "350px",
        width: "100%",
      }}
      justify={"center"}
      align={"middle"}
    >
      {bgImage && (
        <Col
          style={{
            position: "absolute",
            height: 0,
            width: "100%",
            zIndex: 0,
            minHeight: 0,
            top: 70,
          }}
        >
          <MyComponent bgImage={bgImage} style={{ height: bannerHeight }} />
        </Col>
      )}
      <Col
        justify={"center"}
        align={"middle"}
        style={{
          width: "100%",
          maxWidth: "1140px",
          position: "relative",
          backgroundColor: "#E30022",
          minHeight: 0,
        }}
      >
        <Col
          span={24}
          style={{
            position: "relative",
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxContent>
            <BannerText>{title}</BannerText>
            <BannerSubText> {desc}</BannerSubText>
            {breadcrumbItems && (
              <div style={{ margin: "2rem 0rem" }}>
                <Breadcrumb
                  separator={
                    <BsCaretRightFill
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 22,
                      }}
                      color="white"
                    />
                  }
                  items={breadcrumbItems}
                />
              </div>
            )}
          </BoxContent>
        </Col>
      </Col>
    </Wrapper>
  );
};

export default BannerWithBreadcrumb;
