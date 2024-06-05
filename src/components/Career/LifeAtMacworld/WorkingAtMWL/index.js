import { Row , Col , Grid } from "antd";
import { HeroHeading, HeroSubHeading  } from "../../../../common/globalStyle";
import styled from "styled-components";
import useScreenWidth from "../../../../hooks/useScreenWidth";


const {useBreakpoint} = Grid


const HorizontalLine = styled.div`
height:1.5px;
background-color:silver;
margin-top:1rem`

 const MWLHeading = styled.span`
  margin-top: 3rem;
  width: full;
  font-size: 4.4rem;
  text-align: center;
  font-weight: 300;
 
  color: #e1261c;
  padding-inline: 0.5rem;
  font-family: Inter;
  media (max-width: 991.98px)
{
    font-size: 3.9rem;
  
}
@media (max-width: 575.98px)
 {
    font-size: 2.8rem;
}
`;

 const MWLSubHeading = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #021d49;
  font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  margin-bottom: 1rem;
  margin-top: 1rem;
  

 
`;
const MWLheadingbox = styled.div`




`;



const WorkingAtMWL =({title , desc})=>{
    const { screenWidth } = useScreenWidth();
    const screens =useBreakpoint() ;
    return(
        <MWLheadingbox style={{ paddingBottom:".5rem", marginTop:screens.md?"1rem" :"2rem",marginLeft:(screenWidth > 1023 ?90:0)}}>
           <Row>
            <Col span={4}  ><HorizontalLine></HorizontalLine>  </Col>
            <Col span={16}  ><MWLHeading>{title}</MWLHeading>
            <MWLSubHeading>{desc}</MWLSubHeading></Col>
           </Row>
        </MWLheadingbox>
    )
}
export default WorkingAtMWL;