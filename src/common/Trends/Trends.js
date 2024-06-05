import CardImg1 from "../../assets/Air freight Images/cardimg1.webp";
import { Grid, Row } from "antd";
import FilterField from "../../components/Career/JobFilters/FilterField";
import styled from "styled-components";
import NewsCard from "../../components/NewsCard";

const { useBreakpoint } = Grid;

const CertificateComponent = () => {
  const screens = useBreakpoint();

  const ScalableIMG = styled.img`
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.2);
      transform-origin: 0 100%;
    }
  `;

  return (
    <div
      style={{
        marginLeft: screens.lg || screens.xl || screens.xxl ? "4rem" : 0,
        gap: "3rem",
        width: "100%",
        margin: "10rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: screens.sm ? "center" : "center",
        flexDirection: screens.sm ? "column" : "column",
      }}
    >
      <div style={{ width: screens.xs ? "90%" : "60%" }}>
        <div style={{ width: "100%", height: "35rem" }}>
          <NewsCard />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            margin: "3rem 0",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width:!screens.xl ? "100%" : "50rem", height: "40rem" }}>
            <NewsCard />
          </div>
          <div style={{ width:!screens.xl ? "100%" : "50rem", height: "40rem" }}>
            <NewsCard />
          </div>
          <div style={{ width:!screens.xl ? "100%" : "50rem", height: "40rem" }}>
            <NewsCard />
          </div>

          <div style={{ width:!screens.xl ? "100%" : "50rem", height: "40rem" }}>
            <NewsCard />
          </div>
        </div>
        <hr style={{ margin: "3rem 0", color: "#d2d2d2" }} />
      </div>
    </div>
  );
};

export default CertificateComponent;
