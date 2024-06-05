import React from 'react';
import Image from "../../assets/HomePagePics/Ship.png";
import useScreenWidth from '../../hooks/useScreenWidth';
import { HeroButton } from '../globalStyle';

export default function ImagePanel({ heading, showButton = true, width = "100%", textAlign = "center", image = Image }) {
    const { screenWidth } = useScreenWidth();
    console.log("tried to render Image panel", heading);
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px 0px", paddingLeft: screenWidth >= 1024 ? 90 : 0, gap: "30px", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px 10px", background: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", color: "#ffffff", textAlign: textAlign }}>
                <div style={{ zIndex: 1, paddingBottom: 20 }}>
                    <h2 style={{
                        fontSize: screenWidth >= 1278 ? "3rem" : "2rem",
                        width: width,
                        textAlign: textAlign
                    }}>
                        {heading}
                    </h2>
                    {showButton && (
                        <a>
                            <HeroButton>Learn More</HeroButton>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
