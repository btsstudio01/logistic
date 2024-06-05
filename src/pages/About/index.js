import React from "react";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
// import Banner from "../../common/Banner";
// import FormSection from "../../components/About/FormSection";
// import AboutSection from "../../common/AboutSection";
// import KeySector from "../../common/KeySector";
// import MapAndLoc from "../../constant/MapAndLoc";
import MainLayout from "../../common/Layout";
import NavbarCarreer from "../../components/Career/navbar";
// import CirckeAboutSection from "../../common/CirckeAboutSection";
// import ReverseCircleAboutSection from "../../common/ReverseCircleAboutSection";
// import MeetTheTeam from "../../common/MeetTheTeam";
import {
  AboutKeySectors,
  BannerData,
  // AboutSectionData,
  // Content1Data,
  // Content2Data,
} from "../../Data/About";
import { Grid } from "antd";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import CaseStudies from "../../common/CaseStudies";
import CenterHeading from "../../common/CenterHeading";
import ContactUsBanner from "../../common/ContactUsBanner";
const { useBreakpoint } = Grid;

const About = () => {
  const screens = useBreakpoint();
  return (
    <>
      <MainLayout>
        {/* <Banner
          title={BannerData.title}
          bgImage={BannerData.image}
          desc={BannerData.desc}
        /> */}

        {screens.xs ? (
          <BannerSmallScreen
            bgImage={BannerData.image}
            heading={BannerData.title}
            text={BannerData.desc}
          />
        ) : (
          <Banner
            title={BannerData.title}
            bgImage={BannerData.image}
            desc={BannerData.desc}
            height="55vh"
          />
        )}

        <NavbarCarreer
          menuItems={[
            { label: "ABOUT MWL LOGISTICS" },
            { label: "COMMITMENTS" },
            { label: "CASE STUDIES" },
            { label: "LIFE'S ESSENTIALS" },
            { label: "MWL PARTNERS" },
          ]}
          extraDropdown={false}
        />

        <AirfreightServices
          ServiceArray={AboutKeySectors}
          headingText={"Logistics"}
          subHeadingText={"Discover more about us"}
          showButton={false}
        />

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

        {/* <AboutSection
          showButton={false}
          bgColor={"#F6F6F6"}
          title={AboutSectionData.title}
          Content1={AboutSectionData.Content1}
          Content2={AboutSectionData.Content2}
          Image={AboutSectionData.img}
        />

        <CirckeAboutSection
          bgColor={"#F6F6F6"}
          title={Content1Data.title}
          Content1={Content1Data.desc}
        />
        <ReverseCircleAboutSection
          bgColor={"white"}
          title={Content2Data.title}
          Content1={Content2Data.desc}
        />
        <MeetTheTeam
          bgColor={"#F6F6F6"}
          title={TeamMembersData.title}
          TeamData={TeamMembersData.items}
        />
        <KeySector />
        <MapAndLoc /> */}
      </MainLayout>
      {/* <FormSection/> */}
    </>
  );
};

export default About;
