import PlaneIcon from "../../assets/Air freight Images/icon_plane_0-250-251.webp";
import Plane from "../../assets/Air freight Images/air_freight-512-214.webp";
import LeftDown from "../../assets/Air freight Images/leftdown.svg";
import { Grid, Row } from "antd";
import FilterField from "../../components/Career/JobFilters/FilterField";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const ValueAddedServices = ({
  showButton = true,
  image,
  logoImage,
  heading,
  content,
}) => {
  const screens = useBreakpoint();

//   const ScalableIMG = styled.img`
//     transition: transform 0.5s;

//     &:hover {
//       transform: scale(1.2);
//       transform-origin: 0 100%;
//     }
//   `;

  console.log(content);

  return (
    <>
      <div
        style={{
          marginLeft: screens.lg || screens.xl || screens.xxl ? "0 8rem" : 0,
          gap: "0rem",
          width: "100%",
          margin: "10rem 1rem 0rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: screens.sm ? "start" : "center",
          flexDirection: screens.sm ? "row" : "column",
        }}
      >
        <div
          style={{
            height: "76rem",
            position: "relative",
            flex: "50%",
            display: "flex",
            justifyContent: "end",
            padding: "10rem 18rem",
            alignItems: "center",
            backgroundColor: "rgb(0, 21, 41)",
          }}
        >
          <img
            src={image ?? Plane}
            style={{
              position: "absolute",
              left: "0px",
              top: "-50px",
              width: screens.xs ? "30rem" : null,
            }}
          />
          <img
            src={LeftDown}
            height={200}
            style={{ position: "absolute", left: "0px", bottom: "0px" }}
          />
          <div>
            <img src={logoImage ?? PlaneIcon} width={100} height={100} />
            <h1 style={{ fontSize: "3rem", color: "white" }}>
              {heading ?? `Value Added Services & Solutions`}
            </h1>
          </div>
        </div>
        <div
          style={{
            flex: "50%",
            height: "76rem",
            overflow: "hidden",
            backgroundColor: "#1d4289",
          }}
        >
          <div style={{ margin: "10rem 5rem" }}>
            {content?.map((elem, idx) => {
              return (
                <div style={{ width: "44rem" }}>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "",
                      display: "flex",
                      alignItems: "start",
                    }}
                  >
                    <div style={{ flex: "50%" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          color: "#fff",
                          fontSize: "1.7rem",
                        }}
                      >
                        {elem?.heading ?? "ON BOARD COURIER"}
                      </p>
                    </div>
                    <div style={{ flex: "50%" }}>
                      <p style={{ color: "white", fontSize: "1.4rem" }}>
                        {elem?.text ??
                          "Sometimes a critically urgent or high value shipment requires the personal touch to ensure it is accompanied all the way to the final destination.  We have a team of trained, fully insured couriers on hand to reliably deliver those special shipments."}
                      </p>
                    </div>
                  </div>
                  {content.length - 1 !== idx ? <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showButton && (
        <div
          style={{
            marginLeft: screens.lg || screens.xl || screens.xxl ? "0 8rem" : 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <a href={""}>
              <FilterField
                type={"button"}
                labelTitle={"OUR SERVICES"}
                defaultBgColor="#E30022"
                defaultTextColor="#fff"
              />
            </a>
          </Row>
        </div>
      )}
    </>
  );
};

export default ValueAddedServices;
