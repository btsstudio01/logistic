import CardImg1 from "../../assets/Air freight Images/cardimg1.webp";
import { Grid, Row } from "antd";
import FilterField from "../../components/Career/JobFilters/FilterField";
import styled from "styled-components";

const { useBreakpoint } = Grid;

const CaseStudies = () => {
  const screens = useBreakpoint();

  const ScalableIMG = styled.img`
    transition: transform 0.5s;
  `;

  const AnimatedDiv = styled.div`
    transition: all 0.3s ease;
    background-color: white;
    padding: 3rem 3rem;
    position: absolute;
    width: 80%;
    top: 70%;
    left: 0;
  `;

  const CardContainer = styled.div`
    width: 36rem;
    height: 40rem;
    background-color: blue;
    position: relative;
    margin: 0rem 0;
    curosr: pointer;

    @media (max-width: 768px) {
      margin: 5rem 0;
    }

    &:hover {
      .second {
        background-color: #0d47a1; /* Background color on hover */
        width: 75%; /* Decrease width to 60% on hover */
        top: 65%;
      }
      .second > p {
        color: white;
      }
      .second > h1 {
        color: white;
      }
      div > img {
        transform: scale(1.2);
      }
    }
  `;
  const RedHead = styled.h1`
    font-size: 2rem;
    margin: 0;
    color: #e1261c;
  `;

  return (
    <div
      style={{
        marginLeft: screens.lg || screens.xl || screens.xxl ? "4rem" : 0,
        gap: "3rem",
        flexWrap: "wrap",
        width: "100%",
        margin: "10rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: screens.sm ? "start" : "center",
        flexDirection: screens.sm ? "row" : "column",
      }}
    >
      <CardContainer>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <ScalableIMG
            src={CardImg1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <AnimatedDiv className="second">
          <RedHead>Case Studies</RedHead>
          <p style={{ fontSize: "2rem", margin: "1rem 0 0 0 " }}>
            CEVA’s optimized hybrid solution swiftly transports aircraft engine
          </p>
        </AnimatedDiv>
      </CardContainer>
      <CardContainer>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <ScalableIMG
            src={CardImg1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <AnimatedDiv className="second">
          <RedHead>Case Studies</RedHead>
          <p style={{ fontSize: "2rem", margin: "1rem 0 0 0 " }}>
            CEVA’s optimized hybrid solution swiftly transports aircraft engine
          </p>
        </AnimatedDiv>
      </CardContainer>
      <CardContainer>
        <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
          <ScalableIMG
            src={CardImg1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <AnimatedDiv className="second">
          <RedHead>Case Studies</RedHead>
          <p style={{ fontSize: "2rem", margin: "1rem 0 0 0 " }}>
            CEVA’s optimized hybrid solution swiftly transports aircraft engine
          </p>
        </AnimatedDiv>
      </CardContainer>

      <div
        style={{
          marginLeft: screens.lg || screens.xl || screens.xxl ? "0 8rem" : 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
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
    </div>
  );
};

export default CaseStudies;
