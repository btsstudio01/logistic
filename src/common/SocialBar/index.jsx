import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaRocket,
  FaPhone,
} from "react-icons/fa";
import styled from "styled-components";
const StyledIndivBox = styled.a`
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  color: white;
  gap: 4px;
  align-items: center;
  width: 100%; // You need to specify a unit for the width, such as "px" or "%"
`;
const SocialBar = ({ screens }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "33px",
        position: "fixed",
        bottom: 0,
        display: "grid",
        gridTemplateColumns: screens.md
          ? "45px 45px 45px 45px 45px 45px 1fr 1fr"
          : "35px 35px 35px 35px 35px 35px 1fr 1fr", // 1fr means the remaining width
        zIndex: 9999,
      }}
    >
      <StyledIndivBox bgColor="#43d2e4" href="" target="_blank">
        <FaTwitter />
      </StyledIndivBox>
      <StyledIndivBox bgColor="#3b5998" href="" target="_blank">
        <FaFacebookF />
      </StyledIndivBox>
      <StyledIndivBox href="" target="_blank" bgColor="#FF0000">
        <FaYoutube />
      </StyledIndivBox>
      <StyledIndivBox
        href=""
        data-action="share/whatsapp/share"
        bgColor="#4FCE5D"
      >
        <FaWhatsapp />
      </StyledIndivBox>
      <StyledIndivBox
        href=""
        data-action="share/whatsapp/share"
        bgColor="#2867B2"
      >
        <FaLinkedin />
      </StyledIndivBox>
      <StyledIndivBox
        href=""
        data-action="share/whatsapp/share"
        bgColor="#f36a37"
      >
        <FaInstagram />
      </StyledIndivBox>
      <StyledIndivBox
        href="/quote"
        style={{ backgroundColor: "#82bd00", height: "100" }}
      >
        <FaRocket /> Quick Quote
      </StyledIndivBox>
      <StyledIndivBox href="" style={{ backgroundColor: "#717171", flex: "1" }}>
        <FaPhone />
        Call us
      </StyledIndivBox>
    </div>
  );
};

export default SocialBar;
