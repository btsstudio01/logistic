
import styled from 'styled-components';
import {Row} from 'antd'
import useScreenWidth from '../../../../hooks/useScreenWidth';
const Wrapper = styled.div`
    width: 100%;
    margin-left:4rem;
    display:flex;
    justify-content:center;
    @media (max-width: 768px) {
        margin-left:0rem;
    }
    
    `;
    const Container = styled.div`
    width: 70%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media (max-width: 768px) {
        width:90%;
    
    }`;

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: primary;
  text-align:center;

margin-left: 1rem;
@media (max-width: 1024px)
{
   font-size: 3.7rem;
}
@media (max-width: 575.98px)
 {
    font-size: 2.3rem;
}
  
`;

const SubHeading = styled.p`

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.625;
  color: #021d49;
  text-align:justify;
    font-family: Arial, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    @media (max-width: 1024px)
    {
       font-size: 1.3rem;
   }
     
`;

const SubContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
gap:12rem;
@media (max-width: 768px) {
    gap:4rem;
}
@media (max-width: 700px) {
    flex-direction:column;
    gap:2rem;
`;
const Info = ({title , desc})=>{
    const {screenWidth}= useScreenWidth();

    return(
       <Wrapper>
        <Container>
            <Heading>{title}</Heading>
            <SubContainer>
                {desc.map((item , index)=>{
                    return(
                        <div style={{display:"flex" , flexDirection:"column" , gap:"0rem" , width:screenWidth>800 ? "50%" : "90%"}} >
                        <SubHeading  key={index}><span style={{fontWeight:"700"}}>{item?.boldtext}</span>{item?.text}</SubHeading>
 
                        </div>
                    )
                })}
            </SubContainer>
            


        </Container>
       
       </Wrapper>
    )
}
export default Info;