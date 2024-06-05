import React, { useState } from "react";
import CenterHeading from "../../../common/CenterHeading";
import fourServiceImage from "../../../assets/Air freight Images/4_serviceImage.png";
import useScreenWidth from "../../../hooks/useScreenWidth";
import ServiceTriangle from "./ServiceTriangle";
import {
  FourSeasonsData,
  FourSeasonsLandData
} from "../../../Data/Freight";

export default function FourServicesLand() {
  const { screenWidth } = useScreenWidth();
  const [serviceContent, setServiceContent] = useState({
    title: FourSeasonsLandData[0].title,
    subTitle: "",
    description: FourSeasonsLandData[0].description,
  });
  return (
    <div
      style={{
        textAlign: "center",
        paddingLeft: screenWidth < 1024 ? 0 : 90,
        color: "#E30022",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CenterHeading Heading={"4 SERVICES"} />
      <p style={{ color: "#E30022", fontSize: screenWidth > 1278 ? "1.2rem" : "1rem" }}>
        We build the perfect land freight solution to match your needs.
      </p>
      <div style={{ display: "flex", flexDirection: screenWidth <= 1024 ? 'column' : "row", justifyContent: 'center', alignItems: 'center', width: '80%' }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 50,
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
                textToShow={"ROAD TRASNPORT"}
                hoverColor={"#021D49"}
                content={FourSeasonsLandData[1]}
                defaultContent={FourSeasonsLandData[0]}
                changeContent={setServiceContent}
              />
              <ServiceTriangle
                height={80}
                width={260}
                textToShow={"EXPRESS\nDELIVERY"}
                initialColor="#BDD6E6"
                hoverColor={"#021D49"}
                content={FourSeasonsLandData[2]}
                defaultContent={FourSeasonsLandData[0]}
                changeContent={setServiceContent}
              />
              <ServiceTriangle
                height={80}
                width={380}
                textToShow={"DEDICATED FLEET"}
                initialColor="#407EC9"
                hoverColor={"#021D49"}
                content={FourSeasonsLandData[3]}
                defaultContent={FourSeasonsLandData[0]}
                changeContent={setServiceContent}
              />
              <ServiceTriangle
                height={80}
                width={500}
                textToShow={"ECONOMY LOGISTICS"}
                initialColor="#021D49"
                hoverColor={"#021D49"}
                content={FourSeasonsLandData[4]}
                defaultContent={FourSeasonsLandData[0]}
                changeContent={setServiceContent}
              />
            </div>
          )}

          {screenWidth <= 426 && (
            <img src={fourServiceImage} width={300} height={200} />
          )}

          {/*{screenWidth <= 768 && screenWidth > 426 && <img src={fourServiceImage} />}

          {screenWidth <= 1024 && screenWidth > 768 && <img src={fourServiceImage} width={500} height={300} />}

          {screenWidth >= 1440 && <img src={fourServiceImage} />} */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: 'center',
            width: "80%"
          }}
        >
          <div style={{ width: "90%" }}>
            <p
              style={{
                fontSize: screenWidth < 1278 ? "1rem" : "1.5rem",
                fontWeight: "bold",
                textAlign: "left",
                width: screenWidth < 426 ? 210 : 422,
              }}
            >
              {serviceContent.title}
            </p>
          </div>
          <div style={{ width: "90%" }}>
            <p
              style={{
                fontSize: screenWidth < 1278 ? "1rem" : "1.2rem",
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
