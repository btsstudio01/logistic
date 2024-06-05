import React from 'react';
import { Row, Col, Image, Tabs, Form, Input, Button, Grid } from 'antd';
import Miniair from '../../../assets/miniair.jpg';
import Miniplane from '../../../assets/miniplane.jpg'
import Miniearth from '../../../assets/miniearth.jpg'
import Minisea from '../../../assets/minisea.jpg'
import styled from 'styled-components';
import { Colors } from '../../../constant/theme/theme';
const { useBreakpoint } = Grid;

const Heading = styled.span`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  padding-inline: 1rem;
 
  font-family: inter;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }
`;

const SubHeading = styled.div`
  font-size: 1.15rem;
  font-weight: 500;
  padding-inline: 1rem;
  font-family: inter;
  color: white;
margin-top: 1rem;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
const ImgBanner=styled.div`
background-image: url(${props => props.bgImage || ''});
background-size: cover;
height: 375px;
`

const MWButton = styled(Button)`
  && {
    background-color: transparent;
    text-transform: uppercase;
    margin-top: 2rem;
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 40px;
    padding-inline: 3rem;
border: 2px solid white;
    &:hover {
        color: white;
        border: 2px solid white;

    }
  }
`;
const Minibanner = () => {
  const screens = useBreakpoint();

  return (
    <div style={{ marginLeft: screens?.md ? '90px' : '0px', marginTop: '5vh' }}>
      <Row align={"middle"} style={{backgroundColor:`${Colors?.primary}`}}>
        <Col span={24}>
        <Row align={"middle"}>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14} >
              <Heading>my MAC for your Air Freight quotes and bookings</Heading>
              <SubHeading>
                Just at your fingertips, your business can benefit now from the extensive MAC's Air Freight offer online
                on my MAC, your digital freight partner.
              </SubHeading>
              <MWButton>Access MAC</MWButton>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} >
              <div style={{ height: '100%' }}>
                <ImgBanner bgImage={Miniair}></ImgBanner>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* second */}
      <Row align={"middle"} style={{marginTop:'2rem',backgroundColor:`${Colors?.primary}`}}>
        <Col span={24}>
        <Row align={"middle"}>
           
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} >
              <div style={{ height: '100%' }}>
                <ImgBanner bgImage={Miniplane}></ImgBanner>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14} >
              <Heading>SKYCAPACITY</Heading>
              <SubHeading>
              Guarantee your air cargo booking with SKYCAPACITY, whatever your business sector or cargo size; we connect you to regions across the world, North and South America, Europe and the Asia Pacific, giving you access to the most extensive global markets.
              </SubHeading>
              <MWButton>Discover SKYCAPACITY </MWButton>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* three */}

      <Row align={"middle"} style={{marginTop:'2rem',backgroundColor:`${Colors?.primary}`}}>
        <Col span={24}>
        <Row align={"middle"}>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14} >
              <Heading>Time Critical Solution</Heading>
              <SubHeading>
              Our Time Critical Shipment Solution provides you with customized highly reliable and guaranteed transport for time-critical shipments. Choose Time Critical, our premium air solution that is best suited for rush and emergency shipment whatever your sector, wherever you need to ship to.
              </SubHeading>
              <MWButton>Discover Time Critical Solution </MWButton>
            </Col>
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} >
              <div style={{ height: '100%' }}>
                <ImgBanner bgImage={Miniearth}></ImgBanner>
              </div>
            </Col>
            
          </Row>
        </Col>
      </Row>

      {/* four */}

      <Row align={"middle"} style={{marginTop:'2rem',backgroundColor:`${Colors?.primary}`}}>
        <Col span={24}>
        <Row align={"middle"}>
           
            <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10} >
              <div style={{ height: '100%' }}>
                <ImgBanner bgImage={Minisea}></ImgBanner>
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14} >
              <Heading>Sea-Air Solution</Heading>
              <SubHeading>
              Combined supply chain solutions, reducing cost, time and carbon emissions. When you need a fast supply chain solution that includes a broad network and helps your carbon emission reduction strategy, Choose CEVA ‘s SEA-AIR solutions.              </SubHeading>
              <MWButton>Discover Sea-Air Solution </MWButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Minibanner;
