import React from "react";
import Warehousebanner from "../../components/Relocation/Warehousebanner";
import Product from "../../components/Relocation/Product";

import Overview from "../../components/Relocation/Overview";
import Minibanner from "../../components/Relocation/Minibanner";
import MainLayout from "../../common/Layout";
import Banner from "../../common/Banner";
import {
  BannerData,
  WorkWithUsData,
  FAQData,
  chooseUsData,
  NetworkDataRelocation,
} from "../../Data/Relocation";
import RelocationServiceBanner from "../../components/Relocation/relocationServicesBanner/Index";
import FAQSection from "../../components/Career/FAQSection";
import RelocationCard from "../../components/Relocation/whatgiveubestbanner/index";
import WhyWorkWithUs from "../../components/Career/WhyWorkWithUs";
import FourServices from "../../components/Relocation/FourServices";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import ImagePanel from "../../common/ImagePannel";
import Stats from "../../components/Airfreight/Stats";
import CenterHeading from "../../common/CenterHeading";
import VideoArea from "../../common/VideoArea";
import { FourServicesData } from "../../Data/Relocation";
import BannerWithBreadcrumb from "../../common/BannerWithBreadcrumb";
import useScreenWidth from "../../hooks/useScreenWidth";
import ListPageOverview from "../../components/Career/WhyWorkWithUs/newIndex";
import Network from "../../components/Home/Network";
import { NetworkDataAir } from "../../Data/network";

const breadcrumbItems = [
  {
    title: (
      <a style={{ color: "#fff" }} href="">
        Logistics
      </a>
    ),
  },
  {
    title: (
      <a style={{ color: "#fff" }} href="">
        Relocation
      </a>
    ),
  },
];

const Relocation = () => {
  const { screenWidth } = useScreenWidth();
  return (
    <>
      <MainLayout>
        {/* <Banner
          title={BannerData.title}
          bgImage={BannerData.image}
          desc={BannerData.desc}
        /> */}
        <div style={{ marginLeft: screenWidth > 992 ? 90 : 0 }}>
          <BannerWithBreadcrumb
            bgImage={BannerData.image}
            title={BannerData.title}
            desc={BannerData.desc}
            bgColor="#E30022"
            breadcrumbItems={breadcrumbItems}
            bannerHeight="530px"
          />
        </div>

        {/* <WhyWorkWithUs
          point={true}
          bgColor={"white"}
          title={WorkWithUsData.title}
          Content1={WorkWithUsData.Content1}
          Image={WorkWithUsData.img}
          items={WorkWithUsData.items}
        /> */}
        <ListPageOverview
          title={WorkWithUsData.title}
          Image={WorkWithUsData.img}
          items={WorkWithUsData.items}
          point={true}
        />

        <CenterHeading
          Heading={"Logistic Relocation"}
          showLine={true}
          color="#e1261c"
        />

        <VideoArea
          video_url={
            "https://www.youtube.com/embed/q4cRh1-S6ys?si=wz9O8zIBZvHgXRsa"
          }
        />

        <FourServices
          FourServicesData={FourServicesData}
          pageDescription={
            "We build the perfect relocation solution to match your needs."
          }
        />
        {/* <FAQSection
          title={FAQData.title}
          desc={FAQData.desc}
          Data={FAQData.items}
        /> */}
        <AirfreightServices
          ServiceArray={FourServicesData}
          headingText={"OUR SERVICES"}
        />
        
        <Network data={NetworkDataRelocation} />
        {/* {chooseUsData.items.map((item, index) => (
          <ImagePanel heading={item.title} key={"panel" + index} />
        ))} */}
        {/* <RelocationCard title={chooseUsData.title} Data={chooseUsData.items} /> */}
        {/* <Overview />
        <Stats />
        <Product />
        <Minibanner /> */}
        <Stats />
      </MainLayout>
    </>
  );
};

export default Relocation;
