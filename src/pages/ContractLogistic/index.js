import React from "react";
import Product from "../../components/Warehousing/Product";
import Stats from "../../components/Warehousing/Stats";
import MainLayout from "../../common/Layout";
//import Banner from "../../common/Banner";
import AboutSection from "../../common/AboutSection";
import EcommerceSection from "../../components/Home/EcommerceSection";

import {
    BannerData,
    EcommerceSectionData,
    EcommerceSection2Data,
    SustainabilityData,
    InovationData,
} from "../../Data/ContractLogistic";
import Level from "../../common/Level";
import WhyWorkWithUs from "../../components/Career/WhyWorkWithUs";
import WhyWorkWithUsReverse from "../../components/Career/WhyWorkWithUsReverse";
import VideoArea from "../../common/VideoArea";
import CenterHeading from "../../common/CenterHeading";
import FourServices from "../../components/Airfreight/FourServices";
import { ContractLogisticPanelsData, ContractLogisticsServicesArray, FourServicesContractData } from "../../Data/Freight";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import ImagePanel from "../../common/ImagePannel";
import { NetworkContractLogistics, NetworkDataCargo } from "../../Data/network";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import Network from "../../components/Home/Network";
import { Grid } from "antd";
import PageOverview from "../../common/PageOverview";
import ValueAddedServices from "../../common/ValueAddedServices";
import CaseStudies from "../../common/CaseStudies";
import ContactUsBanner from "../../common/ContactUsBanner";
import CertificateComponent from "../../common/CertificateComponent";

const { useBreakpoint } = Grid

const ContractLogistic = () => {
    const screens = useBreakpoint();
    return (
        <>
            <MainLayout>
                {screens.xs ? (
                    <BannerSmallScreen
                        bgImage={BannerData.image}
                        heading={BannerData?.title}
                        text={BannerData?.desc}
                    />
                ) : (
                    <Banner
                        bgImage={BannerData.image}
                        title={BannerData?.title}
                        desc={BannerData?.desc}
                        height="55vh"
                    />
                )}

                <PageOverview
                    title={"A FULL SPECTRUM OF SERVICES AND INTEGRATED SOLUTIONS"}
                    freightTitle={"Customer Engagement"}
                    Content1={"As a recognized 4PL logistics expert and thanks to more than 750 warehouses worldwide, CEVA Logistics offers and manages end-to-end supply chain solutions. Our dedicated Contract Logistics organization uses technology and innovation to deliver optimized and reliable solutions. Whatever the complexity and the geographical scope, we will design, execute and monitor your supply chain strategy to help you keep your promises to your customers."}
                    Content3={"We believe that operational excellence is a continuous journey and our aim is to always support our customers as they move up in the value chain. We do that through design principles and process standardization, controlling all project implementation, site & transport classification assessment and our continuous improvement culture."}
                    showButton={false}
                />
                <CenterHeading Heading={"Mac World Contract Logistics"} showLine={true} color={"#e1261c"} width="28%" />

                <VideoArea video_url={"https://www.youtube.com/embed/VSjJ8Budwi8?si=KkqYddSnnfwfD0iq"} />


                <AirfreightServices ServiceArray={ContractLogisticsServicesArray} headingText={"OUR SERVICES"} />

                {/* <Stats bgColor={"#f7f7f7f7"} /> */}


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
                    logoImage="https://www.cevalogistics.com/images/original/icon_consumer_centric-200-326.webp"
                    image={"Reasons to choose MacWorld Logistics?"}
                    heading="Reasons to choose MacWorld Logistics?"
                    showButton={false}

                />
                <div style={{ margin: "4rem 0" }}>
                </div>


                <Network data={NetworkContractLogistics} />

                <CertificateComponent
                    heading={"SMART solutions"}
                    contents={["With our SMART SOLUTIONS we provide Standardized “Best Practice” options with proven concepts so that we can address your needs with up-to-date, innovative best practice based on standardized replicable processes & systems on global scale.", "SMART Solutions are designed to drive a high level of service quality. Documentation includes process descriptions, standard system configuration, including materials & data flows, layout, flow decision tree, productivity benchmark and training material."]}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/Beneluxteam_DL_1478-768-768.webp"}
                />



                <CertificateComponent
                    heading={"Innovation across the supply chain"}
                    contents={["We work with renowned partners to implement the most advanced technologies in order to ensure the best service level for our customer's thanks to automated equipment dedicated to key tasks in our warehouses"]}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/CEVA-Traineecampaign-HR11_0-768-768.webp"}
                    row="row-reverse"
                    listData={[
                        "Support start-ups to develop supply chain technologies",
                        "Partner with emerging and established brands",
                        "Invest in research to develop digital supply chains",
                        "Robots working directly alongside order pickers to maximise picking output",
                        "Advanced automation for a standard warehouse management system",
                        "Automated pickup and order preparation for increased productivity",
                        "Drones for more reliable and accurate inventories"
                    ]}
                />



                <CertificateComponent
                    heading={"Sustainability"}
                    contents={["As a global logistics company, CEVA Logistics pays particular attention to its role in the protection of the environment and its responsibility to the community."]}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/sustainable-shutterstock_145644622-768-768.webp"}
                    listData={[
                        "Consolidation Hubs - taking away city centre deliveries",
                        "Recycling solutions- zero landfill initiatives",
                        "Electric vehicles - Clean fuel drives our vehicles",
                        "Solar Panel solutions - Our warehouses and fleet are taking advantage of powering our solution by the sun"
                    ]}
                />




                <CenterHeading Heading={"CASE STUDIES"} color={"#e1261c"} showLine={true} />
                <p style={{ textAlign: "center", fontSize: "2rem" }}>
                    We partner with leaders and specialists across all industries, discover our success stories.
                </p>
                <CaseStudies />
                <ContactUsBanner />

                {/* 
                <WhyWorkWithUsReverse
                    bgColor={"#f7f7f7f7"}
                    point={true}
                    title={InovationData.title}
                    Content1={InovationData.Content1}
                    Image={InovationData.img}
                    items={InovationData.items}
                />
                <WhyWorkWithUs
                    point={true}
                    bgColor={"white"}
                    title={SustainabilityData.title}
                    Content1={SustainabilityData.Content1}
                    Image={SustainabilityData.img}
                    items={SustainabilityData.items}
                />

                <Network data={NetworkDataCargo} />

                    {ContractLogisticPanelsData.map((e, i) =>
          <ImagePanel heading={e.title} key={"panel" + i} />
        )} */}
            </MainLayout>
        </>
    );
};

export default ContractLogistic;
