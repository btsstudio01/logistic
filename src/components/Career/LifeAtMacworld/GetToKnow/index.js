import { Col, Grid, Image, Row } from "antd";
import styled from "styled-components";
import {
  HeroHeading,
  HeroSubHeading,
  StyledPara,
} from "../../../../common/globalStyle";

const {useBreakpoint} = Grid;

const HorizontalLine = styled.div`
  height: 1.5px;
  background-color: silver;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direaction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const Box = styled.div`
  width: 45%;
  padding: 5px;

  @media (max-width: 700px){
    width:100%
  }
`;

const BoxTitle = styled.h1`
  font-size: 1.5rem;
`;

const BoxContent = styled.p`
margin-right:2px`;



const GetToKnow = ({ title, data }) => {
    const screens = useBreakpoint();
  return (
    <Wrapper>
      <Row>
        <Col span={6}>
          <HorizontalLine></HorizontalLine>{" "}
        </Col>
        <Col span={16}>
          <HeroHeading>{title}</HeroHeading>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={23} lg={18} md={20} offset={screens.lg? 3 : 2}>
          <Container>
            {data.map((item, index) => (
              <Box>
                <Row gutter={16}>
                  <Col span={8}>
                    <Image src={item?.img} />
                  </Col>
                  <Col span={16}>
                    <BoxTitle style={{ color: "black" }}>
                      {item?.title}
                    </BoxTitle>
                    <BoxContent>{item?.desc}</BoxContent>
                    <Row gutter={16} ><Col span={4} ><HorizontalLine style={{marginTop:"0.5rem" , backgroundColor:"red"}}></HorizontalLine></Col>
                    <Col span={14}> <a style={{color:"black" , textDecoration:"none" , transition:"500ms linear"}}>Read More</a></Col>
                      </Row>
                  </Col>
                </Row>
              </Box>
            ))}
          </Container>
        </Col>
      </Row>
    </Wrapper>
  );
};
export default GetToKnow;
