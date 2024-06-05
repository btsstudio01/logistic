import styled from "styled-components";
import { HeroHeading, HeroSubHeading } from "../../../../common/globalStyle";
import { Row ,Col, Grid } from "antd";
import ProductSlider from "../../../../common/KeySector";
import MoreAboutUs from "../MoreAboutUs";

const {useBreakpoint} = Grid;

const Wrapper = styled.div`
padding-top:4rem;
padding-bottom:5rem;
background-color:#001147`;

const HorizontalLine = styled.div`
  height: 1.5px;
  background-color: white;
  margin-top: 1rem;
`;
const GreatWorkPlace = ()=>{
    const screens = useBreakpoint();
    return(
        <Wrapper>
       
            <Row style={{display:"flex" , justifyContent:"end"  }}><Row style={{width:screens.lg ? "70%" :"85%"}} >
                <Col lg={16} md={18} ><HeroHeading style={{fontSize:"2.8rem", color:"white"}}>Great Place To Work</HeroHeading></Col>
                <Col lg={8} md={6}><HorizontalLine></HorizontalLine></Col>
                </Row>
            </Row>
            <Row justify="center"><HeroSubHeading style={{color:"white"  , marginBottom:"2rem"}}>Learn more about our culture, what we care about and what we offer</HeroSubHeading></Row>
            <Row>
             <MoreAboutUs/>
            
            </Row>
        </Wrapper>
    )
}
export default GreatWorkPlace;