import React from "react";
import { Row, Col, Grid } from "antd";
import styled from "styled-components";
import { HeroHeading, Line, Wrapper } from "../../common/globalStyle";
const CardHeading = styled.div`
  text-align: left;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  font-family: inter;
  text-transform: capitalize;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;
// font-family: inter;x
const CardPara = styled.div`
  text-align: center;
  font-size: 1.2rem;
  line-height: 22px;
  font-weight: 300;
  color: #faf9f6;

  text-transform: capitalize;
  @media (max-width: 1278px) {
    font-size: 0.8rem;
  }
`;
const { useBreakpoint } = Grid;

const MapAndLoc = () => {
  const screens = useBreakpoint();

  return (
    <Wrapper
      style={{
        paddingBottom: "0px",
      }}
      screens={screens}
      justify={"center"}
    >
      <Row style={{ marginTop: "5vh" }} justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <HeroHeading style={{ textAlign: "center" }}>
              {"Find Us"}
            </HeroHeading>
          </Row>
          <Row style={{ marginBottom: "60px" }} justify={"center"}>
            <Line />
          </Row>
          <Row
            justify={"center"}
            style={{ position: "relative", width: "80vw" }}
          >
            <Col span={24}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8347346839823!2d55.241595517443855!3d25.141277599999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69738cd21491%3A0x167ebe5b3489ad82!2sMAC%20World%20Logistic%20LLC!5e0!3m2!1sen!2s!4v1683242566832!5m2!1sen!2s"
                  width={"100%"}
                  height={screens.md ? "750" : "500"}
                  style={{ border: "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Col>

            {screens.md ? (
              <Col
                span={24}
                style={{
                  marginTop: "20px",
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  backgroundColor: "rgb(0, 21, 41,0.88)",
                  padding: "20px",
                  backdropFilter: "blur(2px)",
                }}
              >
                <Row justify={"center"}>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>OFFICE</CardHeading>
                    {[
                      "Logistic LLC, Office No: 105 ABC Building ",
                      "2504F,HongChang Square,Shennan East Road 2001, Luohu",

                      "Tel : +548-5404-50456",
                      "Mob : +548-5404-50456",
                      "Email : info@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>WAREHOUSE</CardHeading>
                    {[
                      "(Warehousing & Distributions)",
                      "WH No: 10,11,6 Street No 32 Al Qadir 2 Dubai, UAE",
                      "Tel : +971-4-549879788",
                      "Mob : +971-55-549879788",
                      "Email : info@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>CHINA</CardHeading>
                    {[
                      "Shenzhen Logistic Co.,Ltd.",
                      "2504F,HongChang Square,Shennan East Road 2001, Luohu",
                      "District,",
                      "Shenzhen,China",
                      "Tel: +86 755 87984135",
                      "E-mail: eva@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                </Row>
              </Col>
            ) : (
              <Col
                span={24}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  backgroundColor: "rgb(0, 21, 41,0.9)",
                  padding: "20px",
                  backdropFilter: "blur(2px)",
                }}
              >
                <Row justify={"center"}>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>OFFICE</CardHeading>
                    {[
                      "Logistic LLC, Office No: 105 ABC Building ",
                      "Sheikh Zayed Road Dubai, UAE, Near to Burj Khalifa Metro Station",
                      "Tel : +971-4-74879878",
                      "Mob : +971-5-74879878",
                      "Email : info@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>WAREHOUSE</CardHeading>
                    {[
                      "(Warehousing & Distributions)",
                      "WH No: 10,11,6 Street No 32 Al Qadir 2 Dubai, UAE",
                      "Tel : +971-4-549879788",
                      "Mob : +971-55-549879788",
                      "Email : info@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                    xxl={8}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeading>CHINA</CardHeading>
                    {[
                      "Shenzhen Logistic Co.,Ltd.",
                      "2504F,HongChang Square,Shennan East Road 2001, Luohu",
                      "District,",
                      "Shenzhen,China",
                      "Tel: +86 755 87984135",
                      "E-mail: eva@logistic.com",
                    ].map((val) => {
                      return <CardPara>{val}</CardPara>;
                    })}
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default MapAndLoc;
