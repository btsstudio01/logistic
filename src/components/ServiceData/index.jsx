import React from "react";
import { Wrapper } from "../../common/globalStyle";
import useScreenWidth from "../../hooks/useScreenWidth";
import MidImagesContainer from "../Home/MidImagesContainer";

export default function ServiceData() {
  const { screenWidth, getBreakpoint } = useScreenWidth();
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: '100%',
          backgroundColor: "#1F3E7B"
        }}
      >
        <div
          style={{
            display: "flex",
            width: screenWidth < 768 ? 425 : "100%",
            justifyContent: "center",
            flexDirection: screenWidth < 1024 ? "column" : "row",
            paddingLeft: screenWidth < 1024 ? "0" : "90px",
            paddingBottom: screenWidth < 425 ? "10px" : "0px",
          }}
        >
          {screenWidth < 425 && (
            <MidImagesContainer
              pannelHeight={"235px"}
              pannelWidth={"75%"}
              boxHeight={"100%"}
              boxWidth={"75%"}
              bannerHeigh={"270px"}
              bannerWidth={"75%"}
            />
          )}
          {getBreakpoint() === "sm" && (
            <MidImagesContainer
              pannelHeight={"235px"}
              pannelWidth={"90%"}
              boxHeight={"100%"}
              boxWidth={"90%"}
              bannerHeigh={"310px"}
              bannerWidth={"90%"}
            />
          )}
          {getBreakpoint() === "md" && (
            <MidImagesContainer
              pannelHeight={"350px"}
              pannelWidth={"100%"}
              boxHeight={"350px"}
              boxWidth={"100%"}
              bannerHeigh={"350px"}
              bannerWidth={"100%"}
            />
          )}

          {getBreakpoint() === "lg" && (
            <MidImagesContainer
              pannelHeight={"100%"}
              pannelWidth={"100%"}
              boxHeight={"100%"}
              boxWidth={"100%"}
              bannerHeigh={"100%"}
              bannerWidth={"100%"}
            />
          )}
          {getBreakpoint() === "xl" && (
            <MidImagesContainer
              pannelHeight={"100%"}
              pannelWidth={"100%"}
              boxHeight={"100%"}
              boxWidth={"100%"}
              bannerHeigh={"100%"}
              bannerWidth={"100%"}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
