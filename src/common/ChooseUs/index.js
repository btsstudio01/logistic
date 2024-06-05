import React from "react";
import { Row, Col, Grid } from "antd";
import "./style.css";
import useScreenWidth from "../../hooks/useScreenWidth";

import {
  HeroHeading,
  Wrapper,
  Line,
  BoxHeading,
  Boxx,
  BoxContent,
} from "../globalStyle";
const { useBreakpoint } = Grid;
const ChooseUs = ({ title, Data }) => {
  const screens = useBreakpoint();
  const { screenWidth } = useScreenWidth();

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: screens?.md ? "85px" : "50px",
        paddingBottom: screens?.md ? "85px" : "50px",
        backgroundColor: "#F6F6F6",
      }}>
      <Row
        justify={"center"}
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Col>
          <Row justify={"center"}>
            <HeroHeading style={{ textAlign: "center" }}>{title}</HeroHeading>
          </Row>
          <Row justify={"center"}>
            <Line />
          </Row>

          <Row
            style={{
              marginTop: "50px",
              columnGap: "100px",
              width:
                screenWidth <= 425
                  ? "300px"
                  : screenWidth <= 768
                  ? "740px"
                  : "900px",
              margin: "30px auto",
            }}
            justify={"center"}
            gutter={[0, 50]}>
            {Data.map((item, ind) => {
              return (
                <Boxx
                  className="hover-bg"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    borderRadius: "20px",
                    backgroundColor: "#5CA200",
                    paddingTop: screenWidth < 425 ? "20px" : "20px",
                    paddingBottom: screenWidth < 425 ? "20px" : "20px",
                    paddingLeft: screenWidth < 425 ? "20px" : "20px",
                    paddingRight: screenWidth < 425 ? "10px" : "20px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    gap: "0px",
                    // gap: screenWidth < 425 ? "15px" : "30px",
                  }}
                  key={ind}
                  span={20}
                  md={10}
                  lg={10}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#D9D9D9";
                    e.currentTarget.querySelector(
                      ".hover-img"
                    ).style.backgroundColor = "#EBEBEB";
                    e.currentTarget.classList.add("hover-text-color");
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#5CA200";
                    e.currentTarget.querySelector(
                      ".hover-img"
                    ).style.backgroundColor = "#A9CE79";
                    e.currentTarget.classList.remove("hover-text-color");
                  }}>
                  <img
                    className="hover-img"
                    src={item.image}
                    style={{
                      backgroundColor: "#A9CE79",
                      padding: "10px",
                      borderRadius: "5px",
                      height: "50px",
                      transition: "background-color 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <BoxHeading>{item.title}</BoxHeading>
                    {/* <BoxContent>{item.description}</BoxContent> */}
                  </div>
                </Boxx>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ChooseUs;
