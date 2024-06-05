import React from 'react';
import Image from "../../assets/Transform/bg-transform.png";
import useScreenWidth from "../../hooks/useScreenWidth"
import { ArrowRightOutlined } from '@ant-design/icons';

export default function () {
    const { screenWidth } = useScreenWidth()
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: screenWidth > 425 ? "30px" : "20px 15px", gap: "30px", justifyContent: "center", alignItems: "center", backgroundColor: "#F6F6F6" }}>
            <div style={{ width: screenWidth > 425 ? "70%" : "90%" }} >
                <div style={{ position: "relative", display: "flex", padding: screenWidth < 425 ? "60px 30px" : "90px 30px", backgroundRepeat: "no-repeat", background: `url(${Image})`, backgroundSize: "cover", backgroundPosition: "center", color: "#ffffff", textAlign: "start", borderRadius: "30px" }}>
                    <div style={{ zIndex: 1 }}>
                        <h2 style={{
                            fontSize: screenWidth > 1278 ? "3rem" : "2rem",
                        }}>
                            <div style={{ width: screenWidth <= 425 ? "100%" : "70%" }}>
                                <h3 style={{ fontSize: screenWidth >= 1600 ? "3rem" : screenWidth >= 1200 ? "1.5rem" : screenWidth >= 768 ? "1rem" : "1rem" }}>CONTACT US TODAY TO FIND OUTHOW Logistics<br /> <span style={{ fontWeight: 400 }}>CAN TRANSFORM.</span></h3>
                            </div>
                        </h2>
                        <button style={{ fontSize: screenWidth <= 425 ? 16 : 20, padding: "12px 22px", borderRadius: 15, backgroundColor: "#5CA200", border: "none", color: "white" }}>Get Started <ArrowRightOutlined /></button>
                    </div>
                </div>
            </div>
        </div >
    );
}
