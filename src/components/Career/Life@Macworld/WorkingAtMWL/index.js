import { Row , Col , Grid } from "antd";
import { HeroHeading, HeroSubHeading  } from "../../../../common/globalStyle";
import styled from "styled-components";


const {useBreakpoint} = Grid


const HorizontalLine = styled.div`
height:1.5px;
background-color:silver;
margin-top:1rem`


const WorkingAtMWL =({title , desc})=>{
    const screens =useBreakpoint() ;
    return(
        <div style={{ height:screens.md?"30vh" :"60vh", paddingBottom:"2rem", marginTop:screens.md?"1rem" :"2rem"}}>
           <Row>
            <Col span={4}  ><HorizontalLine></HorizontalLine>  </Col>
            <Col span={16}  ><HeroHeading>{title}</HeroHeading>
            <HeroSubHeading>{desc}</HeroSubHeading></Col>
           </Row>
        </div>
    )
}
export default WorkingAtMWL;