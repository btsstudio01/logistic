import { Col, Grid, Image, Row } from "antd"
import styled from "styled-components"
import pillars from "../../../../assets/careers/Leadershipmwl/leadershippillars.webp"
import { HeroHeading } from "../../../../common/globalStyle"
import { FaCaretRight } from "react-icons/fa";

const {useBreakpoint} = Grid

const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    margin-left:6rem;
    margin-top:3rem;
@media (max-width: 500px) {
    margin-left:0rem;
    height:160vh;

}
@media (max-width: 768px) and (min-width: 500px) {
    margin-left:0rem;
    height:120vh;

}

    
`
const Cont = styled.div` 
display:flex;
flex-direction:row; 
justify-content:center;
width:80%;
gap:2rem;

 @media (max-width: 768px) {
    display:flex;
    width:100%;
    flex-direction:column-reverse;
    gap:1rem;
padding:1rem; }`
const Container = styled.div`
display:flex;
flex-direction:flex-row;
`
const LeadershipModal = ({title , pillarss}) => {
    const screens = useBreakpoint()
    return (
        <Wrapper>
            <Cont style={{marginLeft:screens.lg? "12rem": "0rem"  }} >
                <Col lg={10} span={24} style={{marginTop:screens.lg? "3.5rem" : "0.5rem" , display:"flex" , justifyContent:"center", width:"100%"}}><Image src={pillars} height={screens.lg? 400 : 300} width={screens.lg? 450 : 350} /></Col>
                <Col lg={12} span={24} style={{marginLeft: screens.lg? "0rem" : "2rem" , marginRight: screens.lg? "0rem" : "2rem"}}>
                    <Row >
                    <HeroHeading style={{fontSize:screens.md? "3rem" : "2rem",fontWeight:'600' , textAlign:"justify"}}>{title}</HeroHeading>
                    </Row>
                    <Row style={{margin:"3rem"}}>
                        {pillarss.map((pillar , index)=>(
                            <Container key={index}>
                              <FaCaretRight style={{color:"red" , marginTop:screens.md? "2rem":"1.5rem"}}/>
                                
                              <p style={{width:"100%" , fontWeight:"700", fontSize:screens.md? "1.8rem":"1.5rem"}}>{pillar.title} <span style={{fontWeight:"400"}}>{pillar.desc}</span></p>
                               
                                
                            </Container>
                        ))}
                    </Row>
                </Col>
            </Cont>

        </Wrapper>
    )
}
export default LeadershipModal