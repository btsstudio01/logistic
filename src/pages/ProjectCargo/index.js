import React from "react";
import MainLayout from "../../common/Layout";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import AboutSection from "../../common/AboutSection";
import EcommerceSection from "../../components/Home/EcommerceSection";
// import ChooseUs from "../../common/ChooseUs";
import {
  BannerData,
  EcommerceSectionData,
  EcommerceSection2Data,
  EcommerceSection3Data,
  AboutSectionData,
  chooseUsData,
  AdditionalContentData,
} from "../../Data/projectCargoData";
import AdditionalContent from "../../components/ProjectCargo/AdditionalContent";
import CenterHeading from "../../common/CenterHeading";
import VideoArea from "../../common/VideoArea";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const ProjectCargo = () => {
  const screens = useBreakpoint();
  console.log("title", EcommerceSectionData.title);
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

        <EcommerceSection
          bgColor={"#F6F6F6"}
          showButton={false}
          individalTitle={EcommerceSectionData?.title}
          Content1={EcommerceSectionData?.Content1}
          Content2={EcommerceSectionData?.Content2}
          Image={EcommerceSectionData?.img}
        />

        <AdditionalContent
          bgColor={"white"}
          title={AdditionalContentData?.title}
          Content1={AdditionalContentData?.Content}
        />

        <EcommerceSection
          bgColor={"white"}
          showButton={false}
          individalTitle={EcommerceSection2Data?.title}
          Content1={EcommerceSection2Data?.Content1}
          // Content2={EcommerceSection2Data?.Content2}
          Image={EcommerceSection2Data?.img}
        />

        <AboutSection
          showButton={false}
          bgColor={"#F6F6F6"}
          title={AboutSectionData.title}
          Content1={AboutSectionData.Content1}
          Image={AboutSectionData.img}
          // Content2={AboutSectionData.Content2}
        />

        <CenterHeading
          Heading={"Mac World PROJECT CARGO"}
          showLine={true}
          color="#e1261c"
        />

        <VideoArea
          video_url={
            "https://www.youtube.com/embed/RGrJ2XVoAMw?si=F6HmAQXGZ61gTXjS"
          }
        />

        <EcommerceSection
          bgColor={"white"}
          showButton={false}
          individalTitle={EcommerceSection3Data?.title}
          Content1={EcommerceSection3Data?.Content1}
          Content2={EcommerceSection3Data?.Content2}
          Image={EcommerceSection3Data?.img}
        />

        {/* <ChooseUs title={chooseUsData.title} Data={chooseUsData.items} /> */}
      </MainLayout>
    </>
  );
};

export default ProjectCargo;
