import React from "react";
import styled from "styled-components";
import Navbar from "../../../constant/Navbar";
import bannerVideo from "../../../assets/Banner.png";
import "./style.css";
import { Image } from "antd";

const VideoContainer = styled.div`
  position: relative;
  height: 60vh;
  padding-left: 0px;
  @media (min-width: 768px) {
    height: 100vh;
  }
  @media (min-width: 996px) {
    padding-left: 90px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Banner = () => {
  return (
    <VideoContainer>
      {/* <Video src={bannerVideo} autoPlay loop muted /> */}
      <Image src={bannerVideo} alt="banner" width={"100%"} height={"85vh"} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* <NavbarContainer>
        <Navbar />
       </NavbarContainer> */}
        <div
          style={{
            width: "100%",
            position: "absolute",
            marginTop: "-10%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="scrolldown">
          <svg
            width="40px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: 1.5,
            }}>
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style={{ fill: "none", stroke: "#E30022", strokeWidth: "20px" }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{ fill: "none", stroke: "#E30022", strokeWidth: "20px" }}
            />
          </svg>
          <p style={{ fontWeight: 600 }}>SCROLL-DOWN</p>
        </div>
      </div>
    </VideoContainer>
  );
};

export default Banner;
