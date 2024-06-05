import styled from "styled-components";
import { HeroHeading, SubHeading, Subheading } from "../../../../common/globalStyle";
import useScreenWidth from "../../../../hooks/useScreenWidth";


const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display:flex;
  justify-content:center;
  margin-left:4rem;
  @media (max-width: 768px) {
    margin-left:0rem;
    height:100vh;
  }
  @media (max-width: 350px) {
    height:120vh;

  }
`;
const InspiringLeaders = ({title , desc , bgcolor , boldtext , textalign}) => {
  const {screenWidth}= useScreenWidth();

  return (
    <Wrapper style={{backgroundColor:`${bgcolor}`}}>
   
      <div style={{width:"70%" , display:"flex" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" , gap:"2rem"}}>
        <HeroHeading style={{fontWeight:"700" , fontSize:"3rem"}}>{title}</HeroHeading>
        <p style={{fontSize: screenWidth > 768 ? "1.8rem":"1.5rem" , lineHeight:"3rem" , textAlign:`${textalign}`}}>{desc}</p>
        <p style={{fontSize: screenWidth > 768 ? "1.8rem":"1.5rem" , lineHeight:"3rem" , textAlign:`${textalign}` , fontWeight:'500'}}>{boldtext}</p>
      </div>
    </Wrapper>
  );
}
export default InspiringLeaders;