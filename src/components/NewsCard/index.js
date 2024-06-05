import CardImg1 from "../../assets/Air freight Images/cardimg1.webp";
import styled from "styled-components";

export default function NewsCard() {
  const UpperDiv = styled.div`
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: 0;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: url(${CardImg1}); /* Set background image */
    background-size: cover; /* Cover the entire container */
    background-repeat: no-repeat; /* Do not repeat the background image */
    transition: all 0.1s ease-in-out;
  `;

  const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    border-top: 1px solid #d2d2d2; /* Border top */

    &:hover {
      .upper {
        width: 100%;
      }
    }
  `;
  return (
    <CardContainer>
      <div style={{ height: "100%", width: "35%" }}>
        <img
          src={CardImg1}
          style={{ width: "100%", height: "auto", maxHeight: "100%" }}
        />
      </div>
      <div style={{ height: "100%", width: "65%", padding: "3% 5%" }}>
        <div
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "0.5rem 1rem",
            display: "inline-block",
          }}
        >
          ARTICLE
        </div>
        <h1 style={{ fontSize: "2.2rem", margin: "1rem 0 0 0" }}>
          Lithium Battery recycling - EU Respect project
        </h1>
        <p style={{ margin: "0", fontSize: "1.5rem", color: "gray" }}>
          27/3/2024
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          CEVA Logistics is a member of the EU Respect consortium, which aims to
          foster a green recycling process of lithium-ion (Li-ion) batteries.
        </p>
      </div>

      <UpperDiv className="upper">
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: "linear-gradient(transparent, #021d49)",
            backgroundColor: "transparent",
          }}
        ></div>
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <div
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "0.5rem 1rem",
              display: "inline-block",
            }}
          >
            ARTICLE
          </div>
          <h1
            style={{ color: "white", fontSize: "2.2rem", margin: "1rem 0 0 0" }}
          >
            Lithium Battery recycling - EU Respect project
          </h1>
          <p style={{ margin: "3rem 0", color: "white", fontSize: "1.5rem" }}>
            VIEW MORE
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            backgroundColor: "#e1261c",
            padding: "0.2rem 2rem",
            color: "white",
            fontSize: "4rem",
          }}
        >
          +
        </div>
      </UpperDiv>
    </CardContainer>
  );
}
