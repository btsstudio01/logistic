import React from "react";
import useScreenWidth from "../../../hooks/useScreenWidth";
import projectSolImg from "../../../assets/serviceData/projectsol.png";
import ShipImg from "../../../assets/serviceData/ship.png";
import AeroplaneImg from "../../../assets/serviceData/air.png";
import truckImg from "../../../assets/serviceData/truck-vehicle-with-trailers-background 1.png";
import trainImg from "../../../assets/serviceData/train-wagons-carrying-cargo-containers-shipping-companies 1.png";
import formImg from "../../../assets/serviceData/Mask group.png";
import ImageText from "./imageText";
import "./styles.css";
import CoverImageText from "./coverImageText";

export default function MidImagesContainer({
  bannerHeigh,
  bannerWidth,
  boxHeight,
  boxWidth,
  pannelHeight,
  pannelWidth,
}) {
  const { screenWidth, getBreakpoint } = useScreenWidth();

  return (
    <>
      <div
        style={{
          flexBasis: screenWidth >= 1024 ? "40%" : "60%",
          display: "flex",
          height: bannerHeigh,
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          alignItems: "center",
        }}
      >
        <div
          className="image-container"
          style={{
            width: "100%",
            height: bannerHeigh,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: bannerWidth,
              height: bannerHeigh,
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
            src={projectSolImg}
            alt=""
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: bannerWidth,
              height: 0,
              zIndex: 5,
            }}
          >
            {screenWidth < 425 && (
              <CoverImageText
                text={"PROJECT LOGISTICS\nSOLUTIONS"}
                bottom={100}
                href="/projectcargo"
              />
            )}
            {getBreakpoint() === "sm" && (
              <CoverImageText
                text={"PROJECT LOGISTICS\nSOLUTIONS"}
                bottom={100}
                href="/projectcargo"
              />
            )}
            {getBreakpoint() === "md" && (
              <CoverImageText
                text={"PROJECT LOGISTICS\nSOLUTIONS"}
                bottom={100}
                href="/projectcargo"
              />
            )}
            {getBreakpoint() === "lg" && (
              <CoverImageText
                text={"PROJECT LOGISTICS\nSOLUTIONS"}
                bottom={100}
                left={30}
                href="/projectcargo"
              />
            )}
            {getBreakpoint() === "xl" && (
              <CoverImageText
                text={"PROJECT LOGISTICS\nSOLUTIONS"}
                bottom={100}
                left={40}
                href="/projectcargo"
              />
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          flexWrap: "wrap",
          // margin: "10px 0px"
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: screenWidth < 1024 ? "column" : "row",
            position: "relative",
          }}
        >
          <div
            className="image-container"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={ShipImg}
              alt=""
              style={{ width: boxWidth, height: boxHeight }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: bannerWidth,
                alignItems: "center",
                height: 0,
                zIndex: 5,
              }}
            >
              {screenWidth < 425 && (
                <ImageText
                  text={"OCEAN FREIGHT"}
                  bottom={40}
                  href="/oceanfreight"
                />
              )}
              {getBreakpoint() === "sm" && (
                <ImageText
                  text={"OCEAN FREIGHT"}
                  bottom={40}
                  href="/oceanfreight"
                />
              )}
              {getBreakpoint() === "md" && (
                <ImageText
                  text={"OCEAN FREIGHT"}
                  bottom={40}
                  href="/oceanfreight"
                />
              )}
              {getBreakpoint() === "lg" && (
                <ImageText
                  text={"OCEAN FREIGHT"}
                  bottom={40}
                  href="/oceanfreight"
                />
              )}
              {getBreakpoint() === "xl" && (
                <ImageText
                  text={"OCEAN FREIGHT"}
                  bottom={40}
                  href="/oceanfreight"
                />
              )}
            </div>
          </div>

          <div
            className="image-container"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={AeroplaneImg}
              alt=""
              style={{ width: boxWidth, height: boxHeight }}
            />

            <div
              style={{
                width: bannerWidth,
                backgroundColor: "pink",
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "center",
                height: 0,
                zIndex: 5,
              }}
            >
              {screenWidth < 425 && (
                <ImageText
                  text={"AIR FREIGHT"}
                  bottom={40}
                  href="/airfreight"
                />
              )}
              {getBreakpoint() === "sm" && (
                <ImageText
                  text={"AIR FREIGHT"}
                  bottom={40}
                  href="/airfreight"
                />
              )}
              {getBreakpoint() === "md" && (
                <ImageText
                  text={"AIR FREIGHT"}
                  bottom={40}
                  href="/airfreight"
                />
              )}
              {getBreakpoint() === "lg" && (
                <ImageText
                  text={"AIR FREIGHT"}
                  bottom={40}
                  href="/airfreight"
                />
              )}
              {getBreakpoint() === "xl" && (
                <ImageText
                  text={"AIR FREIGHT"}
                  bottom={40}
                  href="/airfreight"
                />
              )}
            </div>
          </div>
          {/* <h2 style={{ position: "absolute", bottom: "40px", left: "53%", color: "white", cursor: "pointer" }}>AIR FRIEGHT</h2> */}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: screenWidth < 1024 ? "column" : "row",
            position: "relative",
          }}
        >
          <div
            className="image-container"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={truckImg}
              alt=""
              style={{ width: boxWidth, height: boxHeight }}
            />

            <div
              style={{
                width: bannerWidth,
                backgroundColor: "pink",
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "center",
                height: 0,
                zIndex: 5,
              }}
            >
              {screenWidth < 425 && (
                <ImageText
                  text={"LAND FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "sm" && (
                <ImageText
                  text={"LAND FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "md" && (
                <ImageText
                  text={"LAND FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "lg" && (
                <ImageText
                  text={"LAND FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "xl" && (
                <ImageText
                  text={"LAND FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
            </div>
          </div>

          <div
            className="image-container"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <img
              src={trainImg}
              alt=""
              style={{ width: boxWidth, height: boxHeight }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: bannerWidth,
                height: 0,
                zIndex: 5,
              }}
            >
              {screenWidth < 425 && (
                <ImageText
                  text={"RAIL FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "sm" && (
                <ImageText
                  text={"RAIL FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "md" && (
                <ImageText
                  text={"RAIL FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "lg" && (
                <ImageText
                  text={"RAIL FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
              {getBreakpoint() === "xl" && (
                <ImageText
                  text={"RAIL FRIEGHT"}
                  bottom={40}
                  href="/landfreight"
                />
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            flexDirection: screenWidth < 1024 ? "column" : "row",
            position: "relative",
          }}
        >
          <div
            className="image-container"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={formImg}
              alt=""
              style={{
                backgroundImage: "cover",
                width: pannelWidth,
                height: pannelHeight,
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                width: pannelWidth,
                height: 0,
                zIndex: 5,
              }}
            >
              {screenWidth < 425 && (
                <ImageText
                  text={"CONTRACT LOGITICS"}
                  bottom={40}
                  href="/contract-logistic"
                />
              )}
              {getBreakpoint() === "sm" && (
                <ImageText
                  text={"CONTRACT LOGITICS"}
                  bottom={40}
                  href="/contract-logistic"
                />
              )}
              {getBreakpoint() === "md" && (
                <ImageText
                  text={"CONTRACT LOGITICS"}
                  bottom={40}
                  href="/contract-logistic"
                />
              )}
              {getBreakpoint() === "lg" && (
                <ImageText
                  text={"CONTRACT LOGITICS"}
                  bottom={40}
                  href="/contract-logistic"
                />
              )}
              {getBreakpoint() === "xl" && (
                <ImageText
                  text={"CONTRACT LOGITICS"}
                  bottom={40}
                  href="/contract-logistic"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
