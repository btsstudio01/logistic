import React from 'react'
import styled from 'styled-components'
import Navbar from '../../../constant/Navbar';
import { Row, Col, Image ,Grid} from 'antd'
import AboutBannerImg from '../../../assets/aboutbanner.png'

import AboutOne from '../../../assets/aboutone.jpg'
import Graph from '../../../assets/bar-chart.png'
import { Colors } from '../../../constant/theme/theme';
const { useBreakpoint } = Grid;

const Box = styled.div`
  width: 100%;
  position: absolute;
  top: 20;
  left: 0;
  z-index: 1;
`;

const MyComponent = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${props => props.bgImage || ''});
  background-size: cover;
  background-position: center;
`;

const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 0;
  z-index: 1;
  padding-inline: 2rem;

`;


const BannerSubText = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: inter;
  color:white;

  padding-inline:5rem;
  @media (max-width:576px){
    font-size:1.25rem;
    padding-inline:2rem;

  }
 
`;
const BoldSmallHeading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  font-family: inter;
  color:black;
  margin-top:1rem;

 
`;
const SmallHeading = styled.div`
  font-size: 1rem;
  font-weight: 100;
  font-family: inter;
  color:black;

 
`;
const BannerText = styled.div`
  font-size: 5.5rem;
  font-weight: 900;
  font-family: inter;
  color: whitesmoke;
  text-shadow: 0 0 2px black;
  padding-inline: 5rem;

  @media (max-width: 580px) {
    font-size: 5rem;
    padding-inline: 2rem;
  }

  @media (max-width: 475px) {
    font-size: 4rem;
    padding-inline: 2rem;
  }
`;
const CardHead = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${Colors?.primary};
  font-family:inter;
  text-align: center;
  text-transform: uppercase;
`;
const CardPara = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${Colors?.primary};
  font-family: inter;
  text-align: center;
  text-transform: uppercase;
`;
const CareerBanner = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.md ? "90px" : "0px" }}>

   
      <Col span={24}>
        <MyComponent bgImage={AboutBannerImg} />
      </Col>
      <BoxContent>

        <BannerText>About us</BannerText>
        <BannerSubText>  MAC is a comprehensive logistical provider catering to small and large, commercial and non-commercial entities from almost any sector of industry, in the UAE and around the world. We make our self available to customers 24/7, 365 days a year.
        </BannerSubText>

      </BoxContent>
      <Row style={{ marginTop: '2rem' }} justify={"center"}>
        <Col span={22}>
          <BoldSmallHeading>
            We are the customers’ quality service source
          </BoldSmallHeading>
          <SmallHeading >
            We are the customers’ quality service source for cargo transportation, commercial warehousing, storage, distribution, movers and packers and all logistics related project-management services. Whether their needs are global, regional or local, MAC delivers solutions.


          </SmallHeading>
        </Col>
        <Col span={24} style={{ marginTop: '2rem' }}>
          <Row justify={"center"}>
            <Col xs={22} sm={22} md={22} lg={22} xl={22} xxl={22}  >
              <Image
                src={AboutOne}
                style={{ width: '100%' }}
                preview={false}
              />
            </Col>

          </Row>
        </Col>
        <Col span={22}>

          <SmallHeading style={{ marginTop: '1rem' }}>
            By offering a diversified group of logistics services, we focus on continuous, profitable growth and stress-free operations. As a company, we believe in growing and progressing on the foundations of our customers’ satisfaction and trust in the high quality and streamlined service that we provide. We operate in an honest and ethical manner with our employees, clients, suppliers and partners.



          </SmallHeading>
          <SmallHeading style={{ fontWeight: 100, marginTop: '1rem' }}>
            Our company supersedes its contemporaries on the basis of our highly competitive rates; well-established global connections; availability; proven operational performance; integrated Technology; seasoned logisticians’ team; active customer care and ethical conduct.


          </SmallHeading>


        </Col>
      </Row>

      <Row justify={"center"}>
        <Col span={22} >
          <Row style={{ flexWrap: "wrap" }} gutter={[20, 20]} justify={"center"}>
            {[{ id: 1, title: '5.0 Billion', para: 'Euro Turnover', imgScr: Graph }, { id: 2, title: '241', para: 'Offices Worldwide', imgScr: Graph }, { id: 3, title: '20 Million', para: 'Shipment per year', imgScr: Graph }, { id: 4, title: '13,946', para: 'employees', imgScr: Graph }].map((val) => {
              return (
                <Col
                  xs={24}
                  sm={10}
                  md={10}
                  lg={5}
                  xl={5}
                  xxl={5}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    borderRadius: "8px",
                    paddingInline: "2rem",
                    paddingBottom: "2rem",
                    paddingTop:"2rem",
                    backgroundColor: "transparent",
                    margin: "20px", // add margin between the cards
                  }}
                >
                  <Row justify={"center"}>
                    <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ backgroundColor: '#edf0f3', borderRadius: '50%', width: '68px', height: '68px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                        <Image
                          src={`${val.imgScr}`}
                          width={48}
                          height={48}
                          preview={false}
                        />
                      </div>
                    </Col>
                  </Row>


                  <Row>
                    <Col span={24}>
                      <CardHead>{val?.title}</CardHead>

                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <CardPara>{val?.para}</CardPara>

                    </Col>
                  </Row>
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>

<Row justify={"center"}>
  <Col span={22}>

    
          <BoldSmallHeading>
                    We provide best-in-class logistics and transportation related services                    </BoldSmallHeading>
                    <SmallHeading >
                    We provide best-in-class logistics and transportation related services, allowing our clients to focus on their business goals instead of managing transportation and supply-chain details. We also use technology that provides our customers with real time data and full visibility into each and every one of their shipments.


                    </SmallHeading><br/>
                    <SmallHeading>
                    We offer comprehensive freight management and freight broker related services including LTL/FTL shipments in UAE, GCC & Middle East.

                    </SmallHeading><br/>
                    <SmallHeading>
                    We have experience of handling a complete range of goods from Textile /Spare parts / House Hold / Industrial & Medical Equipment to Electronic Product. Our major growth markets over recent years, in the commercial sectors have included retailers and importers - both quarters benefiting from our integrated services approach to storage, reworking and onward distribution. Our non-commercial markets have included relocation candidates with requirements to pack and move furniture, household items and personal articles.
                    </SmallHeading>
  </Col>
</Row>
<Row justify={"center"} style={{marginTop:'2rem'}}>
        <Col span={22}>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.8347346839823!2d55.241595517443855!3d25.141277599999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69738cd21491%3A0x167ebe5b3489ad82!2sMAC%20World%20Logistic%20LLC!5e0!3m2!1sen!2s!4v1683242566832!5m2!1sen!2s"
                width={"100%"}
                height="350"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
        </Col>
      </Row>
    </div>
  )
}

export default CareerBanner
