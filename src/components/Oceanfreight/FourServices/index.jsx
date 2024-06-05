import React, { useState } from "react";
import CenterHeading from "../../../common/CenterHeading";
import fourServiceImage from "../../../assets/Air freight Images/4_serviceImage.png";
import useScreenWidth from "../../../hooks/useScreenWidth";
import ServiceTriangle from "../FourServices/serviceTriangle";
import { FourSeasonsDataOcean } from "../../../Data/Freight";


const FourServicesOcean = () => {
    const { screenWidth } = useScreenWidth();
    const [serviceContent, setServiceContent] = useState({
        title: FourSeasonsDataOcean[0].title,
        subTitle: "",
        description: FourSeasonsDataOcean[0].description,
    });
    return (
        <div
            style={{
                textAlign: "center",
                paddingLeft: screenWidth < 1024 ? 0 : 90,
                color: "#E30022",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CenterHeading Heading={"5 SERVICES"} color={"#e1261c"} showLine={false} />
            <p style={{ color: "#E30022", fontSize: screenWidth > 1278 ? "1.6rem" : "1rem" }}>
                We build the perfect ocean freight solution to match your needs.
            </p>
            <div style={{ display: "flex", flexDirection: screenWidth <= 1024 ? 'column' : "row", justifyContent: 'center', alignItems: 'center', width: '80%' }}>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 50,
                        justifyContent: "center",
                    }}
                >
                    {screenWidth >= 768 && (
                        <div
                            style={{
                                width: "max-content",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <ServiceTriangle
                                height={80}
                                width={15}
                                textToShow={""}
                                top={true}
                                changeContent={setServiceContent}
                            />
                            <ServiceTriangle
                                height={80}
                                width={140}
                                textToShow={"OCEAN CHARTER"}
                                hoverColor={"#021D49"}
                                content={FourSeasonsDataOcean[1]}
                                defaultContent={FourSeasonsDataOcean[0]}
                                changeContent={setServiceContent}
                            />
                            <ServiceTriangle
                                height={80}
                                width={260}
                                textToShow={"OCEAN EXPRESS"}
                                initialColor="#BDD6E6"
                                hoverColor={"#021D49"}
                                content={FourSeasonsDataOcean[2]}
                                defaultContent={FourSeasonsDataOcean[0]}
                                changeContent={setServiceContent}
                            />
                            <ServiceTriangle
                                height={80}
                                width={380}
                                textToShow={"OCEAN NOW"}
                                initialColor="#407EC9"
                                hoverColor={"#021D49"}
                                content={FourSeasonsDataOcean[3]}
                                defaultContent={FourSeasonsDataOcean[0]}
                                changeContent={setServiceContent}
                            />
                            <ServiceTriangle
                                height={80}
                                width={500}
                                textToShow={"OCEAN PREMIUM"}
                                initialColor="#A9C4FF"
                                hoverColor={"#021D49"}
                                content={FourSeasonsDataOcean[4]}
                                defaultContent={FourSeasonsDataOcean[0]}
                                changeContent={setServiceContent}
                            />
                            <ServiceTriangle
                                height={80}
                                width={620}
                                textToShow={"OCEAN ECONOMY"}
                                initialColor="#021D49"
                                hoverColor={"#021D49"}
                                content={FourSeasonsDataOcean[5]}
                                defaultContent={FourSeasonsDataOcean[0]}
                                changeContent={setServiceContent}
                            />
                        </div>
                    )}

                    {screenWidth <= 426 && (
                        <img src={fourServiceImage} width={300} height={200} />
                    )}

                    {/*{screenWidth <= 768 && screenWidth > 426 && <img src={fourServiceImage} />}

                    {screenWidth <= 1024 && screenWidth > 768 && <img src={fourServiceImage} width={500} height={300} />}

                    {screenWidth >= 1440 && <img src={fourServiceImage} />} */}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: 'center',
                        width: "80%"
                    }}
                >
                    <div style={{ width: "90%" }}>
                        <p
                            style={{
                                fontSize: screenWidth > 1278 ? "3.7rem" : "2rem",
                                fontWeight: "bold",
                                textAlign: "left",
                                width: screenWidth < 426 ? 210 : 422,
                            }}
                        >
                            {serviceContent.title}
                        </p>
                    </div>
                    <div style={{ width: "90%" }}>
                        <p
                            style={{
                                fontSize: screenWidth > 1278 ? "1.6rem" : "1rem",
                                textAlign: "left",
                            }}
                        >
                            {serviceContent.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FourServicesOcean;
