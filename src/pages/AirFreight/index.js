import React from "react";
//import Banner from "../../common/Banner";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import Level from "../../common/Level";
import Minibanner from "../../components/Airfreight/Minibanner";
import Network from "../../components/Home/Network";
import Stats from "../../components/Airfreight/Stats";

import OurServices from "../../common/OurServices";
import AboutSection from "../../common/AboutSection";

import SafeWithUs from "../../common/SafeWithUs";
import ChooseUs from "../../common/ChooseUs";

import KeySector from "../../common/KeySector";
import { NetworkDataAir } from "../../Data/network/index";

import {
  AboutSectionData,
  AirFreightAboutSectionData,
  AirFreightourServiceData,
  AirFreightPanelsData,
  AirFreightBannerData,
  OurServicesArray,
  FourServicesData,
} from "../../Data/Freight";
import PageOverview from "../../common/PageOverview";
import { safeWithUseData, chooseUsData } from "../../Data/Constant";
import MainLayout from "../../common/Layout";
import { HeroHeading } from "../../common/globalStyle";
import CenterHeading from "../../common/CenterHeading";
import VideoArea from "../../common/VideoArea";
import CertificateComponent from "../../common/CertificateComponent";
import ValueAddedServices from "../../common/ValueAddedServices";
import CaseStudies from "../../common/CaseStudies";
import Trends from "../../common/Trends/Trends";
import ContactUsBanner from "../../common/ContactUsBanner";
import FourServices from "../../components/Airfreight/FourServices";
import ImagePanel from "../../common/ImagePannel";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import bg from "../../assets/careers/LifeAtMacworld/talentApproach.webp";
import FilterField from "../../components/Career/JobFilters/FilterField";
import { Grid, Row } from "antd";

const { useBreakpoint } = Grid;

const AirFreight = () => {
  console.log("AirFreightPanelsData values", AirFreightPanelsData);
  // const { screenWidth, getBreakpoint } = useScreenWidth()

  const screens = useBreakpoint();
  return (
    <>
      <MainLayout>
        {/*
        <Banner
          title={AirFreightBannerData.title}
          bgImage={AirFreightBannerData.image}
          desc={AirFreightBannerData.desc}
        />
      */}
        {screens.xs ? (
          <BannerSmallScreen
            bgImage={AirFreightBannerData.image}
            heading="AIR FREIGHT"
            text="Working round the clock, wherever you need us"
          />
        ) : (
          <Banner
            title="AIR FREIGHT"
            bgImage={AirFreightBannerData.image}
            desc="Working round the clock, wherever you need us"
            height="55vh"
          />
        )}

        <PageOverview
          title={AboutSectionData.title}
          freightTitle={AboutSectionData.title2}
          Image={AboutSectionData.img}
          Content1={AboutSectionData.Content1}
          Content3={AboutSectionData.Content2}
          showButton={true}
        />
        {/*
        <AboutSection
          bgColor={"#F6F6F6"}
          showButton={true}
          title={AirFreightAboutSectionData.homeTitle}
          freightTitle={AirFreightAboutSectionData.freightTitle}
          Content1={AirFreightAboutSectionData.Content1}
          Image={AirFreightAboutSectionData.img}
          Content2={AirFreightAboutSectionData.Content2}
          Content3={AirFreightAboutSectionData.Content3}
        />

      */}
        <CenterHeading
          Heading={"Mac World AIR FRIEGHT"}
          color={"#e1261c"}
          showLine={true}
        />

        <VideoArea
          video_url={
            "https://www.youtube.com/embed/vEVtnS3sqe4?si=7bbJ6DmajaPGDFMP"
          }
        />
        {/* <Level
          title={AirFreightlevelData.title}
          desc={AirFreightlevelData.desc}
          Data={AirFreightlevelData.items}
        /> */}

        <FourServices
          FourServicesData={FourServicesData}
          pageDescription={
            "We build the perfect air freight solution to match your needs."
          }
        />

        <AirfreightServices
          ServiceArray={OurServicesArray}
          headingText={"OUR SERVICES"}
          showButton={false}
        />

        <CertificateComponent
          buttonText={"LEARN MORE"}
          heading={"CEIV LIBA CERTIFICATION BY IATA"}
          contents={[
            "Our new CEIV Lithium Battery certification confirms our operational excellence and quality management standards in handling and transporting lithium battery shipments",

            "This certification demonstrates we comply with IATA Dangerous Goods Regulations (DGR), IATA Shipping Lithium Battery Guidelines (SLBG), as well as international standards and best practices.",

            "Our trained and experienced air freight experts are here to ensure your lithium batteries are delivered on time and in excellent condition. We currently have two certified locations — Amsterdam and Hong Kong — and are working towards certifying more.  CEIV Liba certification applies to all our air core offer, which offers you a choice of products and delivery speeds to match your requirements.",
          ]}
        />

        <Network data={NetworkDataAir} />

        <ValueAddedServices
          content={[
            {
              heading: "ON BOARD COURIER",
              text: "Sometimes a critically urgent or high value shipment requires the personal touch to ensure it is accompanied all the way to the final destination.  We have a team of trained, fully insured couriers on hand to reliably deliver those special shipments.",
            },
            {
              heading: "Insurance",
              text: "Cargo insurance provides cover against potential loss or damage to freight whilst in transit.",
            },
            {
              heading: "Customs brokerage",
              text: "With many decades expertise of tariffs and Customs laws, rules and regulations we are ideally placed to provide you with Customs Brokerage solutions for your goods.  Our specialist Customs Gateway team is fully versed in import and export requirements.",
            },
          ]}
          logoImage="https://www.cevalogistics.com/images/original/icon_consumer_centric-200-326.webp"
          showButton={false}
        />

        {/* <OurServices Options={AirFreightourServiceData} /> */}

        {/* <SafeWithUs
          title={safeWithUseData.title}
          Data={safeWithUseData.items}
        /> */}
        {/* <ChooseUs title={chooseUsData.title} Data={chooseUsData.items} /> */}
        {/* <KeySector /> */}
        {/* {AirFreightPanelsData.map((e, i) => 
          <ImagePanel heading={e.title} key={"panel" + i} />
        )} */}
        {/* <Minibanner /> */}
        <Stats />
        <CenterHeading
          Heading={"CASE STUDIES"}
          color={"#e1261c"}
          showLine={true}
        />
        <p style={{ textAlign: "center", fontSize: "2rem" }}>
          We partner with leaders and specialists across all industries,
          discover our success stories.
        </p>
        <CaseStudies />
        <ContactUsBanner />

        <CenterHeading
          Heading={"TRENDS & NEWS"}
          color={"#e1261c"}
          showLine={true}
        />
        <Trends />
        {/* <Network /> */}
      </MainLayout>
    </>
  );
};

export default AirFreight;
