import CareerForm from "../../components/Career/Form";
import React from "react";
// import Banner from "../../components/About/Banner";
import Banner from "../../common/Banner";
import FormSection from "../../components/About/FormSection";
import AboutSection from "../../common/AboutSection";
import KeySector from "../../common/KeySector";
import MapAndLoc from "../../constant/MapAndLoc";
import MainLayout from "../../common/Layout";
import CirckeAboutSection from "../../common/CirckeAboutSection";
import ReverseCircleAboutSection from "../../common/ReverseCircleAboutSection";
import MeetTheTeam from "../../common/MeetTheTeam";
import {
  BannerData,
  WorkWithUsData,
  Content1Data,
  Content2Data,
  ourVision,
  ourMission
} from "../../Data/Career";
import { ExpertsData } from "../../Data/Constant";
import WhyWorkWithUs from "../../components/Career/WhyWorkWithUs";
import FAQSection from "../../components/Career/FAQSection";
import { FAQData } from "../../Data/Constant";
import OurVision from "../../components/Career/OurVision";
import OurMission from "../../components/Career/ourMission";
// import KeySector from "../../common/KeySector";
// import KeySector from "../../common/KeySector";


const Careers = () => {
  return (
    <>
      <MainLayout>
        <Banner
          title={BannerData.title}
          bgImage={BannerData.image}
          desc={BannerData.desc}
        />
        <WhyWorkWithUs
          bgColor={"white"}
          title={WorkWithUsData.title}
          Content1={WorkWithUsData.Content1}
          Image={WorkWithUsData.img}
          items={WorkWithUsData.items}
        />
        {/* <CareerForm bgColor={"#F6F6F6"} /> */}
        {/* <WhyWorkWithUs
          bgColor={"white"}
          title={ourVision.title}
          Content1={ourVision.Content1}
          Image={ourVision.img}
          items={ourVision.items}
        /> */}
        <OurVision
         bgColor={"white"}
         title={ourVision.title}
         Content1={ourVision.Content1}
         Image={ourVision.img}
         items={ourVision.items}/>

         <OurMission
          bgColor={"white"}
          title={ourMission.title}
          Content1={ourMission.Content1}
          Image={ourMission.img}
          items={ourMission.items}
        />


        <MeetTheTeam
          rounded={true}
          bgColor={"#F6F6F6"}
          title={ExpertsData.title}
          TeamData={ExpertsData.items}
        />
        {/* <FAQSection
          title={FAQData.title}
          desc={FAQData.desc}
          Data={FAQData.items}
        /> */}
        <KeySector />
        <MapAndLoc />
        
      </MainLayout>
      {/* <KeySector /> */}
      {/* <FormSection/> */}
    </>
  );
};

export default Careers;
