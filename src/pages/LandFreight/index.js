import React from "react";
import Level from "../../common/Level";
import Stats from "../../components/Oceanfreight/Stats";
import OurServices from "../../common/OurServices";
import AboutSection from "../../common/AboutSection";
import ImagePanel from "../../common/ImagePannel";
import SafeWithUs from "../../common/SafeWithUs";
import ChooseUs from "../../common/ChooseUs";
import CenterHeading from "../../common/CenterHeading";
import KeySector from "../../common/KeySector";
import AirfreightServices from "../../components/Airfreight/AirfreightServices";
import MainLayout from "../../common/Layout";
//import Banner from "../../common/Banner";
import { safeWithUseData, chooseUsData } from "../../Data/Constant";
import {
    LandFreightAboutSectionData,
    LandFreightourServiceData,
    LandFreightlevelData,
    LandFreightBannerData,
    FourSeasonsLandData,
    LandServicesArray,
    LandFreightPanelsData
} from "../../Data/Freight";
import FourServicesLand from "../../components/Landfreight/FourServices";
import VideoArea from "../../common/VideoArea";
import Network from "../../components/Home/Network";
import { NetworkData } from "../../Data/network/index"
import { Grid, Row } from "antd";
import ValueAddedServices from "../../common/ValueAddedServices";
import CaseStudies from "../../common/CaseStudies";
import ContactUsBanner from "../../common/ContactUsBanner";
import BannerSmallScreen from "../../components/Career/SmallScreenBanner";
import Banner from "../../components/Career/LifeAtMacworld/Banner";
import PageOverview from "../../common/PageOverview";
import CertificateComponent from "../../common/CertificateComponent";

const { useBreakpoint } = Grid;

const LandFreight = () => {
    const screens = useBreakpoint();
    return (
        <>
            <MainLayout>
                {screens.xs ? (
                    <BannerSmallScreen
                        bgImage={LandFreightBannerData.image}
                        heading={LandFreightBannerData.title}
                        text={LandFreightBannerData.desc}
                    />
                ) : (
                    <Banner
                        bgImage={LandFreightBannerData.image}
                        title={LandFreightBannerData.title}
                        desc={LandFreightBannerData.desc}
                        height="55vh"
                    />
                )}
                <PageOverview
                    title={LandFreightAboutSectionData.title}
                    freightTitle={""}
                    Content1={LandFreightAboutSectionData.Content1}
                    Content3={LandFreightAboutSectionData.Content2}
                    showButton={false}
                />

                <VideoArea video_url={"https://www.youtube.com/embed/oX_E0JWF-z4?si=0iPuEHrzAqSNdO99"} />
                <CenterHeading Heading={"OUR GROUND & RAIL TRANSPORTATION SERVICES"} showLine={true} width={"15%"} color={"#e1261c"} />

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <p style={{ textAlign: "center", fontSize: "2rem", width: "70%" }}>
                        CEVA Ground and Rail Transport services rely on international and local expert teams, a collaborative IT system, consistent operational processes with high-quality standards adapted to regional specificities, a lean culture and an asset-right model.
                    </p>
                    <p style={{ textAlign: "center", fontSize: "1.4rem", width: "70%" }}>
                        Through our global network and expertise across all industries, we offer solutions that are covering both inbound and outbound flows, international or domestic transportation for all types of goods and special requirements. We propose also special capabilities for high value goods, heavy bulky, 2-wheeler, and Out-of-Gauge transportations.
                    </p>
                    <p style={{ textAlign: "center", fontSize: "1.4rem", width: "70%" }}>
                        Through our global and advanced Visibility solution (P44, to collect and aggregate data), our local device solutions (GPS, PDA, drive apps), via API and EDI TMS connections, we offer full traceability and holistic supply chain visibility to our customers. Our focus on innovation and operational excellence will guarantee a superior level of service and bring your supply chain to the edge of digitalization and sustainability.
                    </p>
                </div>



                <CertificateComponent
                    heading={"Ground Transport Network Services"}
                    contents={["For your shipments <2 Tons or 2 loading meters, we offer you a variety of services for B2B pallets distribution and B2C parcels distribution (<30 kg). For non-standard freight (B2B / B2C) our ground and rail freight experts develop tailor-made solutions. Pick-up and delivery are operated through our own extensive network of hubs and agencies (CEVA & Partners), allowing you to reduce the costs of your logistics via economies of scale."]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/CEVA%20NEW%20TRUCK-768-768.webp"}
                    row={"row-reverse"}
                />


                <CertificateComponent
                    heading={"Ground and Rail Transport Forwarding Services"}
                    contents={["For your domestic or international shipments >2 Tons, we provide you with Full Truck-Load (FTL) or Part-Load (LTL) solutions. When you need to cover long distances, serve congested areas, transport significant volumes of goods or raw materials, use heavy lift equipment, we can support you with low-carbon competitive rail and barge solutions."]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/rail-road-forwarding-768-768.webp"}
                />



                <CertificateComponent
                    heading={"Customized Transport Solutions"}
                    contents={["When you need to secure capacities and assets for your transportation, we offer dedicated fleets and drivers. To enhance the resilience and the visibility of your supply chain we provide you with Control Tower services (under a 3PL or 4PL model) to orchestrate and control your transportation flows."]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/customized-ground-solution-768-768.webp"}
                    row={"row-reverse"}
                />
                <CertificateComponent
                    heading={"Ground & Rail APAC Transport Networks"}
                    contents={["Capabilities in Asia / Pacific"]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_69793800-768-768.webp"}
                />


                <CertificateComponent
                    heading={"Ground & Rail European Transport Networks"}
                    contents={["Capabilities in Europe"]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/Ground-Rail-Freight-Europe.-768-768.webp"}
                    row={"row-reverse"}
                />
                <CertificateComponent
                    heading={"Ground & Rail African & Middle-East Transport Networks"}
                    contents={["Capabilities in Africa & Middle-East"]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_212352434-768-768.webp"}
                />


                <CertificateComponent
                    heading={"Ground & Rail North American Transport Networks"}
                    contents={["Capabilities in North America"]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/AdobeStock_138671064-768-768.webp"}
                    row={"row-reverse"}
                />
                <CertificateComponent
                    heading={"Ground & Rail South American Transport Networks"}
                    contents={["Capabilities in South  America"]}
                    buttonText={"More Information"}
                    imageSrc={"https://www.cevalogistics.com/images/ratio_100_x_large_picture/WEB_banner_immersif-visual_latamroad_0-768-768.webp"}
                />




                <CenterHeading Heading={"ADDITIONAL SERVICES AND SOLUTIONS"} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <ul style={{ width: !screens.sm ? "90%" : "60%" }}>
                        {
                            [
                                { key: "Support start-ups to develop supply chain technologies", value: "Partner with emerging and established brands" },
                                { key: "Invest in research to develop digital supply chains", value: "Robots working directly alongside order pickers to maximise picking output" },
                                { key: "Advanced automation for a standard warehouse management system", value: "Automated pickup and order preparation for increased productivity" },
                                { key: "Drones for more reliable and accurate inventories", value: "Consolidation Hubs - taking away city centre deliveries" },
                                { key: "Recycling solutions", value: "zero landfill initiatives" },
                                { key: "Electric vehicles", value: "Clean fuel drives our vehicles" },
                                { key: "Solar Panel solutions", value: "Our warehouses and fleet are taking advantage of powering our solution by the sun" },
                                { key: "Engineering and transport optimization", value: "we design and optimize your transport plan to adapt quickly to a volatile and disrupted market" },
                                { key: "Customs management and fiscal representation", value: "customised solutions to optimise, operate and coordinate your customs formalities worldwide. Dedicated fiscal representation teams manage VAT when you need to accelerate your commercial deployment in European countries where you don’t have subsidiary representation" },
                                { key: "Full traceability to enhance your supply chain visibility", value: "We provide you with a comprehensive range of services through collaborative IT solutions (EDI, API, Webportal) and Control Towers" },
                                { key: "Performance management", value: "we offer a range of advanced analytics solutions to measure delivery performance and accelerate your decision-making process including On Time Delivery (OTD) and On Time In Full (OTIF) rate" },
                                { key: "Cargo insurance", value: "the right coverage against physical damage or loss of goods during shipping available on demand" },
                                { key: "Low-carbon solutions", value: "we can implement multimodal solutions, electric trucks or biofuel solutions" }
                            ].map((elem) => {
                                return (
                                    <li className="idk" style={{ listStyleType: "none", position: "relative" }}>
                                        <b>
                                            {elem.key}
                                        </b> {" : "}
                                        {elem.value}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>



















                <Stats />




                {/* <Network /> */}

                {/* <Level
          title={LandFreightlevelData.title}
          desc={LandFreightlevelData.desc}
          Data={LandFreightlevelData.items}
        /> */}


                {/* {LandFreightPanelsData.map((e, i) => 
          <ImagePanel heading={e.title} key={"panel" + i} />
        )} */}
                {/* <OurServices Options={LandFreightourServiceData} /> */}
                <ContactUsBanner />
                <CenterHeading Heading={"CASE STUDIES"} color={"#e1261c"} showLine={true} />
                <p style={{ textAlign: "center", fontSize: "2rem" }}>
                    We partner with leaders and specialists across all industries, discover our success stories.
                </p>
                <CaseStudies />
                <AirfreightServices ServiceArray={LandServicesArray} />
                {/* 
            <KeySector />
            <AirfreightServices /> */}
                {/* <Minibanner /> */}
                {/* <Stats /> */}
            </MainLayout>
        </>
    );
};

export default LandFreight;
