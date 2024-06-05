import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col, Card, Button,Image } from "antd";
import Tool from "./../../../assets/tool.png";
import Balance from "./../../../assets/balance.png";
import CompetitivePay from "../../../assets/competitivepay.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styled from "styled-components";
import { Pagination, Navigation } from "swiper";

const StyledSwiper = styled(Swiper)`
  height: 600px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
  }
`;
const Title = styled.div`
  font-size: 60px;
  margin-top: 3rem;
  color: white;
  display: flex;
  font-weight: 700;
  justify-content: center;
  color: rgba(32, 20, 69, 1);
  padding-inline: 2rem;
`;
const SubHead = styled.p`
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  color: rgba(32, 20, 69, 1);
  padding-inline: 2rem;
`;
const CalButton = styled(Button)`
  &:hover {
    background-color: rgba(32, 20, 69, 1);
    border-color: rgba(32, 20, 69, 1) !important;
    color: #ffc914 !important;
  }
  background-color: #ffc914;
  margin-top: 1rem;
  border-color: #ffc914;
  color: black;
  font-family: "inter";
  font-weight: 400;
  border-radius: 20px;
  font-size: 35px;
  height: 100%;
  margin-right: 1rem;
  margin-bottom: 3rem;
`;
const StyledCard = styled(Card)`
  width: 300px;
  height: 330px;
  border: 0px;
`;
const CardHead = styled.p`
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: rgba(32, 20, 69, 1);
`;
export default function Company() {
  const [width, setWidth] = useState();
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (typeof window !== "undefined") {
        // browser code
        setWidth(window.innerWidth);
      }
    };
  }, []);
  function getActiveSlideId(swiper) {
    const activeIndex = swiper.activeIndex;
    const activeSlide = swiper.slides[activeIndex];
    const activeSlideId = activeSlide.getAttribute("data-id");
    return activeSlideId;
  }
  const handleSlideChange = (swiper) => {
    const activeSlideId = getActiveSlideId(swiper);
    setActive(activeSlideId);
  };
  console.log(width);
  function handleClick() {
    window.open(
      "https://intelliapp.driverapponline.com/c/fastloading?r=omar.ibarra&uri_b=ia_fastloading_2105018589",
      "_blank"
    );
  }
  return (
    <>
      <Title>DRIVING FURTHER WITH FAST LOADING</Title>
      <SubHead>
        When you drive with Fast Loading, you’ll have a growing career that
        covers 48 states.
      </SubHead>

      <StyledSwiper
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        navigation={true}
        slidesPerView={width <= 992 ? 1 : 3}
        initialSlide={width >= 992 ? 3 : 1}
        loop={true}
        spaceBetween={20}
        centeredSlides={true}
        style={{ backgroundColor: "white" }}
      >
        <SwiperSlide
          data-id="slide1"
          style={{
            transform: active === "slide1" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>Competitive pay?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={CompetitivePay}                    preview={false}

                  />
                </Row>
                <CardHead style={{ fontWeight: 200, marginTop: "2rem" }}>
                  You bet – and we pay weekly
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide
          data-id="slide2"
          style={{
            transform: active === "slide2" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>The latest equipment?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={Tool}                    preview={false}

                  />
                </Row>
                <CardHead style={{ fontWeight: 200, marginTop: "2rem" }}>
                  We have you covered
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide
          data-id="slide3"
          style={{
            transform: active === "slide3" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>The best blending of work and home life?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={Balance}                    preview={false}

                  />
                </Row>
                <CardHead style={{ fontWeight: 200 }}>
                  Nobody balances it better than Fast Loading
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
        {/* // repeated code (need to change this logic) */}
        <SwiperSlide
          data-id="slide4"
          style={{
            transform: active === "slide4" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>Competitive pay?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={CompetitivePay}
                    preview={false}
                  />
                </Row>
                <CardHead style={{ fontWeight: 200, marginTop: "1rem" }}>
                  You bet – and we pay weekly
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide
          data-id="slide5"
          style={{
            transform: active === "slide5" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>The latest equipment?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={Tool}                    preview={false}

                  />
                </Row>
                <CardHead style={{ fontWeight: 200, marginTop: "2.5rem" }}>
                  We have you covered
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
        <SwiperSlide
          data-id="slide6"
          style={{
            transform: active === "slide6" ? "scale(1.3)" : "scale(0.8)",
            transition: "transform 0.3s ease",
          }}
        >
          <StyledCard>
            <Row justify="center">
              <Col span={24}>
                <CardHead>The best blending of work and home life?</CardHead>
                <Row justify="center">
                  <Image
                    alt="fast"
                    style={{ width: 218, height: 218 }}
                    src={Balance}                    preview={false}

                  />
                </Row>
                <CardHead style={{ fontWeight: 200 }}>
                  Nobody balances it better than Fast Loading
                </CardHead>
              </Col>
            </Row>
          </StyledCard>
        </SwiperSlide>
      </StyledSwiper>
      <SubHead style={{ fontWeight: 400, fontSize: "35px" }}>
        And through it all, you’ll be a valued partner in our success, not just
        another vehicle number.
      </SubHead>

      <Row justify="end">
        <CalButton onClick={handleClick}>Driver Application</CalButton>
      </Row>
    </>
  );
}
