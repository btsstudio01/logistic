import React, { useState } from "react";
import Product from "../../components/Warehousing/Product";
import Stats from "../../components/Warehousing/Stats";
import Minibanner from "../../components/Warehousing/Minibanner";
import MainLayout from "../../common/Layout";
import AboutSection from "../../common/AboutSection";
import EcommerceSection from "../../components/Home/EcommerceSection";
import {
    AirFreightAboutSectionData,
    AirFreightourServiceData,
    AirFreightlevelData,
    AirFreightBannerData,
} from "../../Data/Freight";
import {
    BannerData,
    AboutSectionData,
    EcommerceSectionData,
    levelData,
    AboutSection2Data,
} from "../../Data/WarehousingData";
import Level from "../../common/Level";
import CenterHeading from "../../common/CenterHeading";
import CenteredPara from "../../common/ConteredPara";
import FiftyPercent from "../../common/FiftyPercent";
import useScreenWidth from "../../hooks/useScreenWidth";
import VideoArea from "../../common/VideoArea";
import { Grid, Row } from "antd";
import ValueAddedServices from "../../common/ValueAddedServices";
import CaseStudies from "../../common/CaseStudies";
import ContactUsBanner from "../../common/ContactUsBanner";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import PageOverview from "../../common/PageOverview";
import CertificateComponent from "../../common/CertificateComponent";

const { useBreakpoint } = Grid;

const Warehousing = () => {
    const screens = useBreakpoint();
    const { screenWidth } = useScreenWidth();
    // let [selected, setSelected] = useState(1);
    // console.log(selected);
    return (
        <><MainLayout>
            {screens.xs ? (
                <BannerSmallScreen
                    bgImage={BannerData.image}
                    heading={BannerData.title}
                    text={BannerData.desc}
                />
            ) : (
                <Banner
                    bgImage={BannerData.image}
                    title={BannerData.title}
                    desc={BannerData.desc}
                    height="55vh"
                />
            )} 

                <CenterHeading Heading={levelData.title} />

                <CenteredPara text={levelData.desc} />

                <VideoArea video_url={"https://www.youtube.com/embed/_grpOkkd8p8?si=r5Y5moQj0VIquNoR"} />

                <FiftyPercent Item={levelData.items[0]} maxOffset={screenWidth <= 425 ? 110 : 230} />


                <CertificateComponent
                    heading={"CONSOLIDATION CENTERS"}
                    contents={["A warehouse perfectly placed and connected to your sourcing areas can combine materials and goods pre-export, helping you optimise your landside movements and container loads..","We offer domestic and regional/international consolidation, including multi-country consolidation. Offered at several international hubs, including our major East-West transshipment hub at Tanjong Palapas in Malaysia, these facilities offer multi-country consolidation and a host of product value-added services, within the free trade zone."]}
                    buttonText={"More Information"}
                    imageSrc={AboutSectionData.img}
                    row={"row-reverse"}
                />



                <FiftyPercent Item={levelData.items[1]} maxOffset={screenWidth <= 425 ? 450 : 500} />

                {/* <Level
          setSelected={setSelected}
          title={levelData.title}
          desc={levelData.desc}
          Data={levelData.items}
        /> */}
                {/* <Stats /> */}

                <CertificateComponent
                    heading={"Distribution services X E-Commerce Logistics"}
                    contents={["Online shopping has allowed all brands to quickly expand across the four corners of the world. Maersk has the scale to ensure you can place goods at consumers doorsteps, anytime, anywhere.","The world of e-commerce logistics is currently evolving and transforming. Retailers around the world are becoming more resilient and are quickly adopting omnichannel, direct-to-consumer (D2C) models to reach their consumers."]}
                    buttonText={"More Information"}
                    imageSrc={AboutSectionData.img}
                    row={"row-reverse"}
                />


            </MainLayout>
        </>
    );
};

export default Warehousing;
