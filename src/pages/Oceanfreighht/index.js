import React from "react";
import Trends from "../../common/Trends/Trends";
import CertificateComponent from "../../common/CertificateComponent";
import AirfreightBanner from "../../common/Banner";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import Level from "../../common/Level";
import Minibanner from "../../components/Airfreight/Minibanner";
import Network from "../../components/Home/Network";
import Stats from "../../components/Oceanfreight/Stats";

import OurServices from "../../common/OurServices";
import AboutSection from "../../common/AboutSection";

import SafeWithUs from "../../common/SafeWithUs";
import ChooseUs from "../../common/ChooseUs";
import CenterHeading from "../../common/CenterHeading";
import KeySector from "../../common/KeySector";
import { NetworkDataOcean } from "../../Data/network/index"

import { safeWithUseData, chooseUsData } from "../../Data/Constant";
import {
    OceanFreightAboutSectionData,
    OceanFreightourServiceData,
    OceanFreightlevelData,
    OceanFreightBannerData,
    OceanServicesArray,
    OceanFreightPanelsData
} from "../../Data/Freight";
import PageOverview from "../../common/PageOverview";
import MainLayout from "../../common/Layout";
import { HeroHeading } from "../../common/globalStyle";
//import Banner from "../../common/Banner";
import FourServicesOcean from "../../components/Oceanfreight/FourServices";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import ImagePanel from "../../common/ImagePannel";
import VideoArea from "../../common/VideoArea";
import { Grid, Row } from "antd";
import ValueAddedServices from "../../common/ValueAddedServices";
import CaseStudies from "../../common/CaseStudies";
import ContactUsBanner from "../../common/ContactUsBanner";

const { useBreakpoint } = Grid;


const OceanFreight = () => {
    const screens = useBreakpoint();

    return (
        <>
            <MainLayout>
                {/*
        <Banner
          title={OceanFreightBannerData.title}
          bgImage={OceanFreightBannerData.image}
          desc={OceanFreightBannerData.desc}
        />
      */}
                {screens.xs ? (
                    <BannerSmallScreen
                        bgImage={OceanFreightBannerData.image}
                        heading="OCEAN FREIGHT"
                        text="We make the world a smaller place"
                    />
                ) : (
                    <Banner
                        title="OCEAN FREIGHT"
                        bgImage={OceanFreightBannerData.image}
                        desc="We make the world a smaller place"
                        height="55vh"
                    />
                )}
                <PageOverview
                    title={"OVERVIEW"}
                    freightTitle={OceanFreightAboutSectionData.HomeTitle2}
                    Content1={OceanFreightAboutSectionData.Content1}
                    Content3={OceanFreightAboutSectionData.Content2}
                    showButton={true}
                />
                {/*
        <AboutSection
          bgColor={"#F6F6F6"}
          showButton={false}
          title={OceanFreightAboutSectionData.HomeTitle}
          freightTitle={OceanFreightAboutSectionData.FreightTitle}
          Content1={OceanFreightAboutSectionData.Content1}
          Image={OceanFreightAboutSectionData.img}
          Content2={OceanFreightAboutSectionData.Content2}
        />
      */}

                <CenterHeading Heading={"Mac World OCEAN FRIEGHT"} color={"#e1261c"} width={"28%"} showLine={true} />

                <VideoArea video_url={"https://www.youtube.com/embed/L4xeUCqs9I4?si=WwK7Rng0cTvUAUFq"} />

                <CenterHeading Heading={"OUR SERVICES"} color={"#e1261c"} showLine={true} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <p style={{ textAlign: "center", fontSize: "2rem", width: "70%" }}>
                        We have developed numerous service offerings taking individual particularities into account. From the Pacific to the East China Sea and the Atlantic to the Indian Ocean, we have thought of everything. For a reliable, cost-effective and efficient service, CEVA Logistics proposes customized solutions.
                    </p>
                </div>


                <CertificateComponent
                    heading={"Full Container Load (FCL)"}
                    contents={["We provide reliable global integrated door to door FCL services, operating weekly services with 289 Ocean carriers, serving more than 10,000 points port-pairs all over the World."]}
                    buttonText={"Logistic FCL"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_281275486-768-768.webp"}
                    row={"row-reverse"}
                />
                <CertificateComponent
                    heading={"Less than Container Load (LCL)"}
                    contents={["We operate weekly services on more than 600 lanes, covering more than 10,000 points port-pairs.", "We offset 100% of the LCL shipments at no extra cost."]}
                    buttonText={"Logistic LCL"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/Web-square-lcl-768-768.webp"}
                />
                <CertificateComponent
                    heading={"Freight management services"}
                    contents={["We provide a complete range of freight management services which cater to every aspect of transporting your cargo."]}
                    buttonText={"Logistic FMS"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_30710474_0-768-768.webp"}
                    row={"row-reverse"}
                />
                <CertificateComponent
                    heading={"Client consolidation"}
                    contents={["We provide buyer and seller consolidation, distribution center bypass, transload, multi-country consolidation and temporary storage plus of course purchase order and vendor management."]}
                    buttonText={"CONSOLIDATION SERVICES"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_108923565-768-768.webp"}
                />

                {/* <Level
          title={OceanFreightlevelData.title}
          desc={OceanFreightlevelData.desc}
          Data={OceanFreightlevelData.items}
        />  */}
                <FourServicesOcean pageDescription={"We build the perfect air freight solution to match your needs."} />
                <AirfreightServices ServiceArray={OceanServicesArray} headingText={"OUR SERVICES"} showButton={false} />

                <Network data={NetworkDataOcean} />
                <ValueAddedServices content={
                    [{
                        heading: "ON BOARD COURIER",
                        text: "Sometimes a critically urgent or high value shipment requires the personal touch to ensure it is accompanied all the way to the final destination.  We have a team of trained, fully insured couriers on hand to reliably deliver those special shipments."
                    },
                    {
                        heading: "ON BOARD COURIER",
                        text: "Sometimes a critically urgent or high value shipment requires the personal touch to ensure it is accompanied all the way to the final destination.  We have a team of trained, fully insured couriers on hand to reliably deliver those special shipments."
                    },
                    {
                        heading: "ON BOARD COURIER",
                        text: "Sometimes a critically urgent or high value shipment requires the personal touch to ensure it is accompanied all the way to the final destination.  We have a team of trained, fully insured couriers on hand to reliably deliver those special shipments."
                    }
                    ]
                }
                    logoImage="https://www.cevalogistics.com/images/original/icon_ocean_freight_3-233-238.webp"
                    image={"https://www.cevalogistics.com/images/original/ocean_freight-255-435.webp"}
                    heading="Additional Services and solutions"

                />

                {/* {OceanFreightPanelsData.map((e, i) => 
          <ImagePanel heading={e.title} key={"panel" + i} />
        )} */}

                <Stats />
                <CenterHeading Heading={"CASE STUDIES"} color={"#e1261c"} showLine={true} />
                <p style={{ textAlign: "center", fontSize: "2rem" }}>
                    We partner with leaders and specialists across all industries, discover our success stories.
                </p>
                <CaseStudies />
                <ContactUsBanner />

                <CenterHeading Heading={"TRENDS & NEWS"} color={"#e1261c"} showLine={true} />
                <Trends />

                {/* <OurServices Options={OceanFreightourServiceData} /> */}
                {/* <AirfreightServices /> */}
                {/* <Minibanner />
        <Stats />
        <Network /> */}
            </MainLayout>
        </>
    );
};

export default OceanFreight;
