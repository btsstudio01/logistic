import { Grid, Row } from "antd";
import FilterField from "../../components/Career/JobFilters/FilterField";
import GlobeImg from "../../assets/Air freight Images/globe.webp";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const ContactUsBanner = ({height = "auto", margin = "10rem 0rem"}) => {
  const screens = useBreakpoint();

  const ScalableIMG = styled.img`
    // transition: transform 0.5s;
    transform: translateZ(0);
    transform-origin: 0 0;
    transition: transform 0.15s;

    &:hover {
      //   transform: scale(1.2);
      //   transform-origin: 100% 0;
      transform: translate3d(20%, 20%, 0);
      transition: transform 0.45s;
    }
  `;

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        margin: margin,
        height: height,
        flexWrap: "wrap",
        display: "flex",
        justifyContent: screens.sm ? "center" : "space-around",
        padding: screens.sm ? "0 0 0 20rem" : "0",
        alignItems: screens.sm ? "center" : "center",
        flexDirection: screens.sm ? "row" : "column",
        backgroundColor: "#021d49",
      }}
    >
      <div style={{ color: "white" }}>
        <h1 style={{ fontSize: "2rem", margin: "2rem 0" }}>CONTACT US</h1>
        <p style={{ fontSize: "4rem", margin: "0 2rem" }}>
          PEOPLE, RESOURCES, SYSTEMS & <br /> NETWORKS
        </p>
        <p style={{ fontSize: "1.5rem", margin: "0 2rem" }}>
          this is our winnig formula
        </p>
        <Row
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            margin: "0 2rem",
            // marginTop: "20px",
            // paddingRight: screens?.lg ? "20px" : "0px",
          }}
        >
          <a href={""}>
            {/* <HeroButton>Learn More</HeroButton> */}
            <FilterField
              type={"button"}
              labelTitle={"Contact Us"}
              defaultBgColor="#E30022"
              defaultTextColor="#fff"
            />
          </a>
        </Row>
      </div>

      <div style={{ overflow: "hidden" }}>
        <ScalableIMG
          src={GlobeImg}
          style={{ width: screens.xs ? "30rem" : "70rem" }}
        />
      </div>
    </div>
  );
};

export default ContactUsBanner;
