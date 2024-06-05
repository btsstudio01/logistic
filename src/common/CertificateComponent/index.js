import { Grid, Row } from "antd";
import FilterField from "../../components/Career/JobFilters/FilterField";
import styled from "styled-components";

const { useBreakpoint } = Grid

const CertificateComponent = ({ row = "row", listData, heading, contents = [], buttonText, imageSrc }) => {








    const screens = useBreakpoint()


    const ScalableIMG = styled.img`
  transition: transform 0.5s ;

  &:hover {
    transform: scale(1.2); 
        transform-origin: 0 100%;
  }
`;






    return (
        <div style={{ marginLeft: screens.lg || screens.xl || screens.xxl ? "10rem" : 0, gap: "3rem", width: "100%", margin: "10rem 1rem", display: "flex", justifyContent: "center", alignItems: screens.sm ? "start" : "center", flexDirection: screens.sm ? row : "column" }}>

            <div style={{ width: "50rem", height: "auto" }}>
                <h1 style={{ color: "#021d49", fontSize: "3.7rem", margin: "0" }}>

                    {heading ?? ""}
                </h1>
                {contents ?
                    contents?.map((content) => {
                        return (
                            <p>
                                {content}
                            </p>
                        )
                    }) : null
                }

                <ul>
                    {
                        listData && listData.map((elem) => {
                            return (
                                <li className="idk" style={{listStyleType:"none",position:"relative"}}>
                                    {elem}
                                </li>

                            )
                        })
                    }
                </ul>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        width: "100%",
                        // marginTop: "20px",
                        // paddingRight: screens?.lg ? "20px" : "0px",
                    }}>
                    <a href={""}>
                        {/* <HeroButton>Learn More</HeroButton> */}
                        <FilterField type={"button"} labelTitle={buttonText ?? "Learn More"} defaultBgColor="#E30022"
                            defaultTextColor="#fff" />
                    </a>
                </Row>
            </div>
            <div style={{ width: "45rem", height: "45rem", overflow: "hidden" }}>
                <ScalableIMG style={{ width: "100%", height: "100%" }} src={imageSrc ?? "https://www.cevalogistics.com/images/ratio_100_x_large_picture/CEVA_IATA_CEIV_Certification-768-768.webp"} />
            </div>



        </div>
    )
}

export default CertificateComponent;
