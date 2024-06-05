import React, { useEffect } from 'react'
import { HeroButton } from '../../common/globalStyle';
import Img from "../../assets/HomePagePics/Ship.png"
import useScreenWidth from "../../hooks/useScreenWidth"

export default function FullWidthPanel({ headingText, descText, showButton = true }) {
    const { screenWidth } = useScreenWidth();

    return (
        <div style={{ display: "flex", flexDirection: screenWidth <= 768 ? "column-reverse" : "row", padding: "50px 0px" }}>
            <div style={{ backgroundColor: "#F6F6F6", width: screenWidth <= 768 ? "100%" : "70%", justifyContent: "center", padding: screenWidth >= 1024 ? "60px 160px" : "30px 20px" }}>
                <h2 style={{ fontSize: screenWidth > 1278 ? "4.2rem" : "4rem", fontWeight: 400 }}>{headingText}</h2>
                <p style={{ fontSize: screenWidth <= 1278 ? "1.2rem" : "1.4rem", fontWeight: 400 }}>{descText}</p>
                {showButton && (
                    <a>
                        <HeroButton>Learn More</HeroButton>
                    </a>
                )}
            </div>
            <div style={{ width: "30%" }}>
                <img src={Img} alt="" style={{ height: "100%" }} />
            </div>
        </div>
    )
}
