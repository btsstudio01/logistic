import React from "react";
import styled from "styled-components";
import { Carousel, Progress, Grid, Row, Col } from "antd";

import logo2 from "../../../../assets/careers/Life@Macworld/icon_history-259-219.webp";
import logo1 from "../../../../assets/careers/Life@Macworld/icon_safe-292-268.webp";
import logo3 from "../../../../assets/careers/Life@Macworld/icon_fact_figures-280-188.webp"

import pic1 from "../../../../assets/careers/Life@Macworld/card1.webp";
import pic2 from "../../../../assets/careers/Life@Macworld/card2.webp";
import pic3 from "../../../../assets/careers/Life@Macworld/card3.webp";

const { useBreakpoint } = Grid;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  
`;

const Card = styled.div`
  width: 280px;
  height: 300px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: translateY(-10px);
    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media (max-width: 768px) and (min-width: 600px){
    width:220px
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
`;

const Info = styled.div`
  position: absolute;
  z-index: 30;
  width: 100%;
  background-color: transparent;
  height: 300px;
  color: white;
  left: 0;
  top: -40;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const SmallWrapper = styled.div`
width:100%;
@media (max-width: 425px) and (min-width: 380px){
  padding-left:4rem
}
@media (max-width: 380px) and (min-width: 350px){
  padding-left:3rem
}
@media (max-width: 320px) {
  padding-left:1rem
}
`;
const HorizontalLine = styled.div`
height:1.5px;
background-color:red;
width:50px`

const MoreAboutUs = () => {
  const screens = useBreakpoint(); // Ant Design hook to get screen breakpoints

  return (
    <Wrapper>
      {screens.md ? (
        <Row gutter={16} style={{ marginLeft: screens.lg?'5rem' :"1rem" , width:"100%" ,paddingLeft:screens.lg? "2rem" :"0rem", paddingRight:screens.lg? "2rem" :"0rem" }}>
          <Col span={8}>
            <Card>
              <Image src={pic1} />
              <Info className="info">
                <img src={logo1} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
                
             
              </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card>
              <Image src={pic2} />
              <Info className="info">
                <img src={logo2} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
             
              </div>
            </Card>
          </Col>
          <Col span={8} >
            <Card>
              <Image src={pic3} />
              <Info className="info">
                <img src={logo3} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
             
              </div>
            </Card>
          </Col>
        </Row>
      ) : (
        <SmallWrapper>
        <Carousel autoplay autoplaySpeed={3000} >
          <div >
          <Card>
              <Image src={pic1} />
              <Info className="info">
                <img src={logo1} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
             
              </div>
            </Card>
          </div>
          <div>
          <Card>
              <Image src={pic2} />
              <Info className="info">
                <img src={logo2} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
             
              </div>
            </Card>
          </div>
          <div>
          <Card>
              <Image src={pic3} />
              <Info className="info">
                <img src={logo3} style={{ height: "20%" }} alt="Logo" />
              </Info>
              <div
                style={{
                  position: "absolute",
                  zIndex: "20",
                  top: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  left: "0",
                  display:"flex",
                  flexDirection:"column",
                  flexWrap:"wrap"
               

                }}
              >
               
                <p style={{color:"white" , fontWeight:"300" , fontSize:"1rem"}}>MORE ABOUT</p>
            
             
                <p style={{color:"white" , fontWeight:"700" , fontSize:"1.5rem"}}>Our Values</p>
                <HorizontalLine></HorizontalLine>
             
              </div>
            </Card>
          </div>
        </Carousel>
        </SmallWrapper>
      )}
      {!screens.md && (
        <ProgressWrapper>
          <Progress percent={0} />
        </ProgressWrapper>
      )}
    </Wrapper>
  );
};

export default MoreAboutUs;
