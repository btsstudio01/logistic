import {Col, Grid, Image, Pagination, Row } from "antd";
import styled from "styled-components";
import { CardHeading, HeroHeading } from "../../../../common/globalStyle";
import location from "../../../../assets/careers/Life@Macworld/location.svg";
import team from "../../../../assets/careers/Life@Macworld/work.svg";
import hour from "../../../../assets/careers/Life@Macworld/working hour.svg";
import { useState } from "react";

const {useBreakpoint} = Grid

const jobsData = [{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
},
{
    title:"Customer Service Specialist",
    location:"Walwiik\nNetherlands",
    team:"Operations Support",
    hours:"32-40 hours a week"
}]

const Wrapper = styled.div`
margin-top:3rem;
margin-bottom:5rem;`
const Container = styled.div`
width:100%;
background-color:#001147;
padding:2rem`;
const Card = styled.div`
width:30%;
&:hover {
   background-color:#E8E8E8; 
    &:before {
      opacity: 1;
      background-color:#E8E8E8;
    }
    .btn {
      opacity: 1;
     background-color:#3366FF
    }
  }

@media(max-width:425px){
    width:90%
}

border-left:8px solid red;
background-color:white`;
const CardContent = styled.div`
display:flex;
flex-direction:column;
padding:10px 20px 10px 20px`
const Button = styled.button`
padding:15px 20px 15px 20px;
background-color:red;
color:white;
font-size:1rem;
border:none`;

const CustomPagination = styled(Pagination)`
  .ant-pagination-item,

  .ant-pagination-prev ,
  .ant-pagination-next {
    background-color:#E8E8E8 /* Change the color of page numbers, prev, and next buttons */
  }
 
  .ant-pagination-item a{
    color:black
  }
  .ant-pagination-item-active,
  .ant-pagination-item-active a
  {
    background-color:#3366FF;
    color:white
  }
`;
const Jobs = ()=>{
    const screens= useBreakpoint();
    const [currentPage , setCurrentPage]= useState(1);
    const pageSize = 6;
  const totalJobs = jobsData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalJobs);
  const currentJobs = jobsData.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    return(
        <Wrapper style={{marginLeft:screens.lg? "5rem":"0rem"}}>
            <Row justify="center" ><HeroHeading style={{color:"#001147" , marginBottom:"2rem"}}>Jobs that may interest you</HeroHeading></Row>
            <Container>
                <div style={{display:"flex" , flexDirection:"row" , flexWrap:"wrap" , gap:"30px" , justifyContent:"center"}}>
                    {currentJobs.map((item , index)=>(
                         <Card>
                         <CardContent>
                           <CardHeading>{item.title}</CardHeading>
                           <p style={{fontWeight:"200"}}>28/3/24 - 536709</p>
                           <Row>
                            <Col span={12}>
                                <Row><Col span={6}><Image src={location} height={18} /></Col>
                                <Col span={16}><p style={{fontSize:"0.8rem" , fontWeight:"500" ,marginTop:"0px"}}>Location</p></Col></Row>
                            </Col>
                            <Col span={12}><p  style={{marginTop:"0px"}}>{item?.location}</p></Col>
                           </Row>
                           <Row>
                            <Col span={12}>
                                <Row><Col span={6}><Image src={team} height={15} /></Col>
                                <Col span={16}><p style={{fontSize:"0.8rem" , fontWeight:"500" ,marginTop:"0px"}}>Team</p></Col></Row>
                            </Col>
                            <Col span={12}><p  style={{marginTop:"0px"}}>{item?.team}</p></Col>
                           </Row>
                           <Row>
                            <Col span={12}>
                                <Row><Col span={6}><Image src={hour} height={18} /></Col>
                                <Col span={16}><p style={{fontSize:"0.8rem" , fontWeight:"500" ,marginTop:"0px"}}>Working Hours</p></Col></Row>
                            </Col>
                            <Col span={12}><p  style={{marginTop:"0px"}}>{item?.hours}</p></Col>
                           </Row>
                         
                           </CardContent>
                           <Row  style={{ display:"flex" , justifyContent:"end"}}>
                            <Button className="btn">+</Button>
                           </Row>
                        </Card>

                    ))}
               
            
                </div>
                <Row justify="center" style={{ marginTop: '20px' }}>
          <CustomPagination current={currentPage} pageSize={pageSize} total={totalJobs} onChange={handlePageChange}  />
        </Row>
       
            </Container>
            
        </Wrapper>
    )
}
export default Jobs;