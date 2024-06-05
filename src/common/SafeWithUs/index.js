import React from "react";
import { Row, Col, Grid } from "antd";

import {
  HeroHeading,
  Wrapper,
  Line,
  BoxHeading,
  Boxx,
  BoxContent,
} from "../globalStyle";
import { Colors } from "../../constant/theme/theme";
const { useBreakpoint } = Grid;
const SafeWithUs = ({ title, Data }) => {
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        backgroundColor: Colors.main,
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: screens?.md ? "85px" : "50px",
        paddingBottom: screens?.md ? "85px" : "50px",
      }}>
      <Row justify={"center"} style={{ width: "100%" }}>
        <Col>
          <Row justify={"center"}>
            <HeroHeading style={{ textAlign: "center", color: "white" }}>
              {title}
            </HeroHeading>
          </Row>
          <Row justify={"center"}>
            <Line />
          </Row>

          <Row
            style={{
              marginTop: "50px",
            }}
            justify={"center"}
            gutter={[20, 30]}>
            {Data.map((item, ind) => {
              return (
                <Boxx key={ind} span={20} md={10} lg={7}>
                  <img
                    style={{
                      backgroundColor: "white",
                      borderRadius: "3px",
                      padding: "2px 3px",
                    }}
                    src={item.image}
                  />
                  <div>
                    <BoxHeading>{item.title}</BoxHeading>
                    <BoxContent>{item.description}</BoxContent>
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

export default SafeWithUs;
