import React from "react";
import { Col, Grid, Row } from "antd";
import styled from "styled-components"; 
import { HeroButton, HeroHeading, Wrapper } from "../../../common/globalStyle";
import BackImg from "../../../assets/contact/ChatWithUsBg.png"

const { useBreakpoint } = Grid; 

const ChatWithUs = () => {
  const StyledModal = styled.div`
  width:100%;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 20px;
  padding:5%;
  margin-bottom:10px
   `;

   const Form = styled.form`
   width:100%`;

   const FormInput = styled.input`
   width:100%;
   padding:10px;
      `;

      const Label = styled.p`
         font-size: 1rem;
         font-family: inter;
     
       `;
  const screens = useBreakpoint();
  return (
    <>
      <Wrapper
        screens={screens}
        justify={"center"}
        style={{
          opacity: 0.9,
          background: `url(${BackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
          height : "110vh",
          position:"relative",
          padding:"0px",
          paddingTop:"0vh"
         
        }}
      >
        <div style={{backgroundColor:"black" , width:"100%", height:"110vh",  position:"absolute" , opacity:"0.2"}}>   </div>
         <Row justify={"center"} style={{ width: "100%", display: "flex", flexDirection: "column" }}>
         <Row justify={"center"} style={{marginBottom:"10px"}} >
          <HeroHeading style={{ color: "white"  , marginTop:"0.2rem"}}>Chat With Us!</HeroHeading>
          </Row>
          <Row justify={"center"} style={{marginBottom:"2rem"}}>
          <div style={{height:"5px" , backgroundColor:"white" , width:"10%", borderRadius:"10px"}}>.</div>
          </Row>
          <Row justify={"center"}>
            <Col span={18} md={12} >
              <StyledModal>
                <Form>
                  <Row justify={"center"}  style={{display:"flex" , flexDirection:"row" , gap:"7%" }} >
                    <Col sm={24} md={11} style={{ marginRight:"0%" }}>
                      <Row>
                      <Label>Full Name</Label>
                      </Row>
                      <Row>
                      <FormInput type="text" style={{border:"none" , borderRadius:"10px", backgroundColor:"#F5F5F5"}} />
                      </Row>
                  </Col> 
                    <Col sm={24} md={11} style={{ marginLeft:"0%" }}>
                      <Row>
                      <Label>Email</Label></Row>
                      <Row> <FormInput type="email" style={{border:"none" , borderRadius:"10px", backgroundColor:"#F5F5F5"}} /></Row>
                      </Col>
                  </Row>
                  <Row justify={'center'} >
                    <Col sm={20} md={24}>
                    <Row>
                    <Label style={{marginLeft:"1px"}}>Your Message</Label>
                    </Row>
                    <Row><FormInput type="text" style={{border:"none" , height:"25vh" , borderRadius:"10px", backgroundColor:"#F5F5F5"}}/></Row>
                    </Col>
                    
                  </Row>
                  <Row justify={"center"} style={{marginTop:"15px"}}>
                    <HeroButton>Submit</HeroButton>
                  </Row>

                 
                 
                </Form>
                
              </StyledModal>

            </Col>
          </Row>

          </Row>
        

      </Wrapper>
    </>
  );
};

export default ChatWithUs;
