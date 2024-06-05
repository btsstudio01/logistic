import React, { useState } from "react";
import CenterHeading from "../../../common/CenterHeading";
import fourServiceImage from "../../../assets/Air freight Images/4_serviceImage.png";
import useScreenWidth from "../../../hooks/useScreenWidth";
import ServiceTriangle from "./ServiceTriangle";
// import { FourServicesData } from "../../../Data/Freight";

export default function FourServices({ FourServicesData, pageDescription }) {
  const { screenWidth } = useScreenWidth();
  const [serviceContent, setServiceContent] = useState({
    title: FourServicesData[0].title,
    subTitle: "",
    description: FourServicesData[0].description,
  });
  return (
    <div
      style={{
        textAlign: "center",
        paddingLeft: screenWidth < 1024 ? 0 : 90,
        color: "#E30022",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <CenterHeading Heading={"4 SERVICES"} color={"#e1261c"} showLine={false} />
      <p
        style={{
          color: "#E30022",
          fontSize: screenWidth > 1278 ? "1.6rem" : "1rem",
        }}
      >
        {pageDescription}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: screenWidth <= 1024 ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // padding: 50,
            justifyContent: "center",
          }}
        >
          {screenWidth >= 768 && (
            <div
              style={{
                width: "max-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ServiceTriangle
                height={80}
                width={15}
                textToShow={""}
                top={true}
                changeContent={setServiceContent}
              />
              <ServiceTriangle
                height={80}
                width={140}
                textToShow={FourServicesData[1].title}
                hoverColor={"#021D49"}
                content={FourServicesData[1]}
                defaultContent={FourServicesData[0]}
                changeContent={setServiceContent}
                id={FourServicesData[1].compId}
              />
              <ServiceTriangle
                height={80}
                width={260}
                textToShow={FourServicesData[2].title}
                initialColor="#BDD6E6"
                hoverColor={"#021D49"}
                content={FourServicesData[2]}
                defaultContent={FourServicesData[0]}
                changeContent={setServiceContent}
                id={FourServicesData[2].compId}
              />
              <ServiceTriangle
                height={80}
                width={380}
                textToShow={FourServicesData[3].title}
                initialColor="#407EC9"
                hoverColor={"#021D49"}
                content={FourServicesData[3]}
                defaultContent={FourServicesData[0]}
                changeContent={setServiceContent}
                id={FourServicesData[3].compId}
              />
              <ServiceTriangle
                height={80}
                width={500}
                textToShow={FourServicesData[4].title}
                initialColor="#021D49"
                hoverColor={"#021D49"}
                content={FourServicesData[4]}
                defaultContent={FourServicesData[0]}
                changeContent={setServiceContent}
                id={FourServicesData[4].compId}
              />
            </div>
          )}

          {screenWidth <= 767 && (
            <img src={fourServiceImage} width={300} height={200} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <div style={{ width: "90%" }}>
            <p
              style={{
                fontSize: screenWidth > 1278 ? "3.7rem" : "2rem",
                fontWeight: "bold",
                textAlign: "left",
                width: screenWidth < 426 ? 210 : 422,
                // width: screenWidth < 768 ? "100%" : "422px"
              }}
            >
              {serviceContent.title}
            </p>
          </div>
          <div style={{ width: "90%" }}>
            <p
              style={{
                fontSize: screenWidth > 1278 ? "1.6rem" : "1rem",
                textAlign: "left",
              }}
            >
              {serviceContent.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
