import React from "react";
import MainLayout from "../../../common/Layout";
import useScreenWidth from "../../../hooks/useScreenWidth";
import BannerWithBreadcrumbs from "../../../common/BannerWithBreadcrumb";
import HeadingArea from "../../../components/Career/HeadingArea";
import styled from "styled-components";
import { Button, Col, Image, Input } from "antd";
import loginformimage from "../../../assets/careers/career-login.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const CreateAccountForm = styled.div`
  position: relative;

  &:before {
    background-color: hsla(0, 0%, 40%, 0.502);
    content: "";
    display: block;
    height: 100%;
    left: -4rem;
    position: absolute;
    top: 0;
    width: 1px;
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

const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 0;
  height: 55px;
  padding: 0px 25px 0px 25px;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 120px;
  padding: 0px 25px 0px 25px;
  display: flex;
  font-size:1.6rem;
  font-weight: 700;
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
    width: 165px;
  }
`;

const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;

  ${StyledButton}:hover & {
    visibility: visible;
  }
`;

export default function CareerLogin() {
  const { screenWidth } = useScreenWidth();
  return (
    <MainLayout>
      <div
        style={{
          marginLeft: screenWidth > 1024 ? 90 : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BannerWithBreadcrumbs
          title={"LOGIN"}
          desc={"Login"}
          bgColor="#E30022"
          bannerHeight="340px"
        />
        <div>
          <HeadingArea
            title={"DO YOU HAVE AN ACCOUNT ALREADY?"}
            desc={
              "Please enter your login information below. Both your username and password are case sensitive."
            }
          />
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: screenWidth > 900 ? "normal" : "center",
              gap: screenWidth > 900 ? 0 : 30,
            }}
          >
            <Col
              span={24}
              md={24}
              lg={5}
              xl={5}
              xxl={5}
              align={screenWidth > 900 ? "left" : "center"}
            >
              <img alt="image_not_found" src={loginformimage} />
            </Col>
            <Col span={24} md={16} xl={12} xxl={12}>
              <CreateAccountForm>
                <div style={{ marginBottom: "2.4rem" }}>
                  <Label>{"Email Address"}</Label>
                  <StyledInput placeholder={"Your email"} />
                </div>
                <div style={{ marginBottom: "2.4rem" }}>
                  <Label>{"Password"}</Label>
                  <StyledInput placeholder={"Your password"} />
                </div>
                <br />
              </CreateAccountForm>
              <Col span={24} align={"center"}>
                <p>Forgot Your Password?</p>
                <div style={{ maxWidth: 200 }}>
                  <StyledButton
                    style={{
                      backgroundColor: "#001429",
                      color: "#fff",
                    }}
                  >
                    {"SING IN"}
                    <IconWrapper>
                      <ArrowRightOutlined style={{ color: "white" }} />
                    </IconWrapper>
                  </StyledButton>
                </div>
              </Col>
            </Col>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
