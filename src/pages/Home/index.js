import React from "react";
import Banner from "../../components/Home/Banner";
import Trends from "../../common/Trends/Trends";
// import FirstImage from "../../assets/HomePagePics/1.jpg";
// import Secondmage from "../../assets/HomePagePics/2.jpg";
// import ThirdImage from "../../assets/HomePagePics/3.jpg";
// import FourthImage from "../../assets/HomePagePics/4.jpg";
// import FifthImage from "../../assets/HomePagePics/5.jpg";

// import Services from "../../components/Home/Services";
// import Content from "../../components/Home/Content";
// import MapAndLoc from "../../constant/MapAndLoc";
// import OurServices from "../../common/OurServices";
// import AboutSection from "../../common/AboutSection";
import EcommerceSection from "../../components/Home/EcommerceSection";
// import WhatWeDo from "../../components/Home/WhatWeDo";
// import SafeWithUs from "../../common/SafeWithUs";
import ChooseUs from "../../common/ChooseUs";
import Essential from "../../components/Home/Essential";
import Discover from "../../components/Home/Discover";
// import KeySector from "../../common/KeySector";
// import Network from "../../components/Home/Network";
import MainLayout from "../../common/Layout";
import ServiceData from "../../components/ServiceData";
import {
  AboutSectionData,
  // ourServiceData,
  EcommerceSectionData,
  Home4thEssentialData,
  OurKeySectors,
} from "../../Data/Home";
import { chooseUsData } from "../../Data/Constant";
import { useDispatch, useSelector } from "react-redux";
// import LogisticTypesSection from "../../common/LogisticTypesSection";
// import styled from "styled-components";
import ImagePanel from "../../common/ImagePannel";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import Transform from "../../components/Transform";
import FullWidthPanel from "../../components/FullWidthPanel";
import useScreenWidth from "../../hooks/useScreenWidth";

import PageOverview from "../../common/PageOverview";
import PageOverviewMobile from "../../common/PageOverview/mobileIndex";
import CenterHeading from "../../common/CenterHeading";
import styled from "styled-components";
import SingleEssential from "../../components/Home/Essential/SingleEssential";
import ContactUsBanner from "../../common/ContactUsBanner";
import { Col } from "antd";

const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: 400;
  font-family: inter;
  padding-inline: 1rem;
  margin-bottom: 1rem;
  color: #E30022;
  text-align: center;
  @media (max-width: 1278px) {
    font-size: 2rem;
  }

  @media (max-width: 575px) {
    font-size: 2rem;
  }
`;

const DefaultMarginHandler = styled.div`
  margin-left: 90px;

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;

const Heading = styled.p`
  font-size: 4.4rem;
  font-weight: 300;
  color: #e1261c;
  margin-bottom: 0rem;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

const Home = ({ userId }) => {
  const { screenWidth } = useScreenWidth();
  // const dispatch = useDispatch();
  // const statess = useSelector((state) => state.service.flag);
  return (
    <>
      <MainLayout userId={userId}>
        {screenWidth > 992 && <Banner />}
        {/* <LogisticTypesSection /> */}
        {/* <AboutSection
          href={"/about"}
          bgColor={"#F6F6F6"}
          title={AboutSectionData.title}
          Content1={AboutSectionData.Content1}
          Image={AboutSectionData.img}
          Content2={AboutSectionData.Content2}
        /> */}

        {screenWidth < 992 ? (
          <PageOverviewMobile
            title={AboutSectionData.title}
            Content1={AboutSectionData.Content1}
            Content2={AboutSectionData.Content2}
            showButton={true}
          />
        ) : (
          <PageOverview
            title={AboutSectionData.title}
            Content1={AboutSectionData.Content1}
            Content2={AboutSectionData.Content2}
            showButton={true}
          />
        )}

        <DefaultMarginHandler>
          <Col span={24} align={"center"}>
            <Heading>I AM...</Heading>
          </Col>
        </DefaultMarginHandler>

        <EcommerceSection
          individalTitle={EcommerceSectionData?.individalTitle}
          companyTitle={EcommerceSectionData?.companyTitle}
          Content1={EcommerceSectionData?.Content1}
          Content2={EcommerceSectionData?.Content2}
          Image={EcommerceSectionData?.img}
          href={"/about"}
          bgColor="#fff"
          showButton={true}
        />
        <ServiceData />
        {/* <ChooseUs title={chooseUsData.title} Data={chooseUsData.items} /> */}

        <AirfreightServices
          ServiceArray={OurKeySectors}
          headingText={"OUR KEY SECTORS"}
          showButton={true}
        />

        {/* <Transform /> */}

        {/* <ImagePanel
          textAlign="center"
          heading={"My World"}
          image={FirstImage}
          showButton={false}
        />
        <ImagePanel
          textAlign="center"
          heading={"Life's Essentials"}
          image={Secondmage}
          showButton={false}
        />
        <ImagePanel
          textAlign="center"
          heading={"Supercharge Your Battery Supply Chain"}
          image={ThirdImage}
          showButton={false}
        /> */}
        {/* <FullWidthPanel
          headingText={"Life At Logistics"}
          showButton={false}
          descText={
            "Experience Life at Logistics: Dive into a dynamic environment where innovation meets excellence. From seamless operations to cutting-edge logistics solutions, our vibrant workplace embodies the spirit of Lorem Ipsum. Join us and be part of a journey fueled by passion, teamwork, and endless possibilities."
          }
        /> */}

        {/* <ImagePanel
          heading={"Discover Our Career Opportunities"}
          width={"90%"}
          textAlign="center"
          image={FourthImage}
          showButton={false}
        />
        <ImagePanel
          heading={"A Network To Insure Your Serenity"}
          textAlign="left"
          width={screenWidth < 768 ? "90%" : "40%"}
          image={FifthImage}
          showButton={false}
        /> */}

        {/* <OurServices BgImage={BgImage} Options={ourServiceData} />
        <SafeWithUs
          title={safeWithUseData.title}
          Data={safeWithUseData.items}
        /> */}
        {/* <KeySector /> */}
        <Essential />
        {/* <Network /> */}

        <div style={{ marginLeft: screenWidth < 1024 ? 0 : 90 }}>
          <CenterHeading
            Heading={"LOGISTICS NEWSROOM"}
            color={"#e1261c"}
            showLine={true}
          />

          <SubHeading>
            Providing the right solutions to the right business.
          </SubHeading>
        </div>

        <Trends />

        <Discover />

        <SingleEssential
          FirstHeading={Home4thEssentialData.FirstHeading}
          MainHeading={Home4thEssentialData.MainHeading}
          Description={Home4thEssentialData.Description}
          BtnLabelText={Home4thEssentialData.BtnLabelText}
          BtnWidth={340}
        />

        <ContactUsBanner height="100vh" margin="3rem 0rem" />
      </MainLayout>
    </>
  );
};

export default Home;
