import { Col, Row, Image, Grid } from "antd";
import React from "react";
import { Colors } from "../../constant/theme/theme";
import image from "../../assets/HomePagePics/plane.png";
import image2 from "../../assets/HomePagePics/cargo-ship.png";
import image3 from "../../assets/HomePagePics/delivery-truck.png";
import styled from "styled-components";
import { Wrapper } from "../globalStyle";
const HoverBox = styled(Row)`
  background-color: transparent;
  position: absolute;
  top: -90px;
  border-radius: 999px;

  transition: background-color 0.3s;
  padding: 30px;

  &:hover {
    background-color: #f6f6f6;
    border-radius: 999px;
    padding: 30px;
  }
`;

const StyledBox = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const StyledText = styled(Row)`
  height: 100px;
  background-color: ${Colors.main};
  display: flex;
  width: 240px;

  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 30px;
  fontsize: 20px;
  fontweight: 700px;
`;
const { useBreakpoint } = Grid;
const LogisticTypesSection = () => {
  const screens = useBreakpoint();
  return (
    <Wrapper
      screens={screens}
      justify={"center"}
      style={{
        paddingLeft: screens?.lg ? "85px" : "0px",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      {/* <Row justify={"center"} style={{ }}> */}
      <Col
        xs={24}
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <StyledBox>
            <HoverBox>
              <Image style={{ height: "60px" }} src={image} preview={false} />
            </HoverBox>
            <StyledText>International Logistics</StyledText>
          </StyledBox>
          <StyledBox style={{ marginTop: screens.xs ? "90px" : 0 }}>
            <HoverBox>
              <Image style={{ height: "60px" }} src={image3} preview={false} />
            </HoverBox>
            <StyledText>Wraehohuse Logistics</StyledText>
          </StyledBox>
          <StyledBox
            style={{ marginTop: screens.md ? 0 : screens.sm ? "90px" : "90px" }}
          >
            <HoverBox>
              <Image style={{ height: "60px" }} src={image2} preview={false} />
            </HoverBox>
            <StyledText>Domestic Logistics</StyledText>
          </StyledBox>
        </Row>
      </Col>
      {/* </Row> */}
    </Wrapper>
  );
};

export default LogisticTypesSection;
