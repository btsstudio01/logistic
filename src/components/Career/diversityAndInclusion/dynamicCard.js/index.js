import React from "react";
import styled from "styled-components";

const UpperDiv = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  width: 0;
  z-index: 1;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.imgSrc}); /* Set background image */
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

export default function DynamicCard({ imgSrc, p1, h1, p2 }) {
  return (
    <CardContainer>
      <div style={{ height: "100%", width: "35%" }}>
        <img
          src={imgSrc}
          style={{ width: "100%", height: "auto", maxHeight: "100%" }}
          alt="Card"
        />
      </div>
      <div style={{ height: "100%", width: "65%", padding: "3% 5%" }}>
        <p
          style={{
            fontSize: "1.5rem",
            textTransform: "uppercase",
            color: "red",
            padding: "0.5rem 1rem",
            display: "inline-block",
            fontWeight: "500",
          }}
        >
          {p1}
        </p>
        <h1
          style={{
            fontSize: "2.2rem",
            margin: "1rem 0 0 0",
            color: "#021d49",
            cursor: "pointer",
            fontSize: "2.2rem",
            fontWeight: "700",
          }}
        >
          {h1}
        </h1>

        <p style={{ fontSize: "1.5rem", color: "#021d49", fontWeight: "400" }}>
          {p2}
        </p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ height: "1px", width: "4rem", backgroundColor: "red" }}></div>
          <p
            style={{ fontSize: "1.5rem", color: "#021d49", fontWeight: "400", marginLeft: "0.5rem" }}
          >
            LEARN MORE
          </p>
        </div>
      </div>

      <UpperDiv className="upper" imgSrc={imgSrc}>
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: "linear-gradient(transparent, #021d49)",
            backgroundColor: "transparent",
          }}
        ></div>
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <p
            style={{
              fontSize: "1.5rem",
              textTransform: "uppercase",
              color: "red",
              padding: "0.5rem 1rem",
              display: "inline-block",
              fontWeight: "500",
            }}
          >
            {p1}
          </p>
          <h1
            style={{
              fontSize: "2.2rem",
              margin: "1rem 0 0 0",
              color: "white",
              cursor: "pointer",
              fontSize: "2.2rem",
              fontWeight: "700",
            }}
          >
            {h1}
          </h1>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "1px", width: "4rem", backgroundColor: "red" }}></div>
            <p style={{ fontSize: "1.5rem", color: "white", fontWeight: "400", marginLeft: "0.5rem" }}>
              LEARN MORE
            </p>
          </div>
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
