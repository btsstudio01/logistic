import React from "react";
import { Row, Col, Grid, Image } from "antd";

import {
  HeroHeading,
  Wrapper,
  Line,
  BoxHeading,
  Boxx,
  BoxContent,
  CardContent,
} from "../../../common/globalStyle";
const { useBreakpoint } = Grid;
const RelocationCard = ({ title, Data }) => {
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: screens?.md ? "85px" : "50px",
        paddingBottom: screens?.md ? "85px" : "50px",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Row
        justify={"center"}
        style={{
          width: "100%",
        }}
      >
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
            }}
            justify={"center"}
            gutter={[0, 30]}
          >
            {Data.map((item, ind) => {
              return (
                <Boxx
                  style={{
                    border: "2px solid black",
                    backgroundColor: "lightgray",
                    padding: screens?.sm ? "40px" : "20px",
                    marginRight: screens?.md ? "30px" : "0px",
                  }}
                  key={ind}
                  span={20}
                  md={10}
                  lg={7}
                >
                  <div>
                    <div
                      style={{
                        height: "80px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Image preview={false} src={item.image} />
                    </div>
                    <BoxHeading
                      style={{ textAlign: "center", marginTop: "15px" }}
                    >
                      {item.title}
                    </BoxHeading>
                    <CardContent>{item.description}</CardContent>
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

export default RelocationCard;
