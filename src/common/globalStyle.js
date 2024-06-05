import styled from "styled-components";
import { Colors } from "../constant/theme/theme";
import {
  Button,
  Card,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  AutoComplete,
  Image,
  Divider,
} from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Radio } from "antd";

import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
export const CustPhoneInput = styled(PhoneInput)`
  height: 45px;
  padding-left: 10px;
  width: 90%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
export const StyledCircle = styled.div`
  height: 240px;
  width: 240px;
  border-radius: 240px;
  background-color: ${(props) => props.bgColor};
  padding-left: 90px;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 767px) {
    height: 140px;
    width: 140px;
    padding-left: 53px;
  }
  @media (max-width: 990px) and (min-width: 767px) {
    height: 170px;
    width: 170px;
    padding-left: 60px;
  }
`;

export const ButtonWithIcon = styled(Button)`
  border-radius: 0;
  height: 55px;
  width: 255px;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  background-color: ${({ defaultBgColor }) => defaultBgColor};
  color: ${({ defaultTextColor }) => defaultTextColor};
  position: relative;
  font-size: 1.6rem;
  font-weight: 700;
  &:hover {
    padding-right: 0px;
    gap: 25px;
    background-color: #062352 !important;
    color: #fff !important;
  }
`;

export const IconWrapper = styled.span`
  transition: visibility 0.1s ease-in-out;
  visibility: hidden;
  font-size: 15px;
  ${ButtonWithIcon}:hover & {
    visibility: visible;
  }
`;

export const PaymentButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 9px;
  border: 1px solid #00488c;
  background: #d9d9d9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const GreyImg = styled.img`
  width: 50px;
`;

export const ServiceTypeButtons = styled.button`
  width: 227px;
  height: 46px;
  border-radius: 15px;
  background: #e0e0e0;
`;

export const ServiceTypeDiv = styled.div`
  width: 20vw;
  min-width: 300px;
  font-family: inter;
  height: 60px;
  border-radius: 15px;
  background: #E30022;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;

  @media (max-width: 1278px) {
    font-size: 1.6rem;
  }
`;

export const GreyPicture = styled.div`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  box-shadow: 1px 6px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 9999px; /* Use a large value for a circle effect */
  position: absolute;
  margin-bottom: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -50px;
`;
export const StyledBox = styled.div`
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(216, 216, 216);
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 1144px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 75vw;
    padding: 20px;
  }
  @media (max-width: 400px) {
    width: 70vw;
    padding: 12px;
  }
`;

export const PrimaryText = styled.p`
  color: gray;
  margin: 0;
  text-align: left;
  fontweight: bold;
`;
export const SecondaryText = styled.p`
  margin: 0;
  text-align: left;
  color: gray;
`;
export const SelectionBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const StyledButton = styled(Radio.Button)`
  width: ${(props) => (props.forPackageButton ? "140px" : "100%")};
  height: ${(props) => (props.forPackageButton ? "35px" : "50px")};
  font-size: 12px;
  @media (max-width: 425px) {
    width: ${(props) => (props.forPackageButton ? "140px" : "200px")};
    height: ${(props) => (props.forPackageButton ? "45px" : "50px")};
    font-size: 16px;
  }
`;
export const WhitePicture = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 1px 6px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 9999px; /* Use a large value for a circle effect */
  position: absolute;
  margin-bottom: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -1px;
`;

export const Bluebox = styled.div`
  margin-top: 8rem;
  border: 1px solid black;
  height: max-content;
  background: #E30022;
  padding: 50px;
  border-radius: 26px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 90px;
`;
export const HeroHeading = styled.span`
  margin-top: 3rem;
  width: full;
  font-size: 3.7rem;
  text-align: center;
  font-weight: 400;
  color: ${Colors.main};
  padding-inline: 0.5rem;
  font-family: Inter;
  @media (max-width: 1278px) {
    font-size: 2.3rem;
  }
`;
export const Line = styled.div`
  margin-top: 6px;
  width: 100px;
  border-radius: 14px;
  height: 3px;
  background-color: white;
`;

export const Boxx = styled(Col)`
  // width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const BoxHeading = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
export const BoxContent = styled.p`
  margin: 0;
  color: #a2a2a2;
  font-size: 1.2rem;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
  padding: 0;
`;

export const CardContent = styled.p`
  margin: 0;
  color: black;
  font-size: 0.8rem;
  @media (min-width: 1200px) {
    font-size: 1rem;
  }
  padding: 0;
`;

export const HeroSubHeading = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  font-family: Inter;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-inline: 0.5rem;
  @media (max-width: 1278px) {
    font-size: 1.4rem;
  }
`;

export const HeroButton = styled(Button)`
  && {
    background-color: #5ca200;
    border: 0;
    margin-left: 10px;
    color: white;
    padding-left: 40px;
    padding-right: 40px;
    height: 50px;
    &:hover {
      color: white;
      transition: 0.2s all ease-in-out;
      transform: scale(1.02);
    }
  }

  @media (max-width: 1040px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const StyledImg = styled(Image)`
  margin-bottom: 2rem;
  width: 100vw;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 8px 6px 17px -5px rgba(0, 0, 0, 0.75);
  @media (min-width: 992px) {
    width: 450px;
    height: 660px;
    object-fit: cover;
  }
`;
export const OurVisionImage = styled(Image)`
  margin-bottom: 2rem;
  width: 100vw;
  border-radius: 10px;
  object-fit: cover;

  @media (min-width: 992px) {
    width: 450px;
    height: 660px;
    object-fit: cover;
  }
  @media (min-width: 373px) {
    width: 150px;
    height: 260px;
    object-fit: cover;
  }
  @media (min-width: 2540px) {
    width: 150px;
    height: 760px;
    object-fit: cover;
  }
`;

export const OurMissionImage = styled(Image)`
  margin-bottom: 2rem;
  width: 100vw;
  border-radius: 10px;
  object-fit: cover;

  // @media (min-width: 992px) {
  //   width: 450px;
  //   height: 660px;

  // }
  @media (max-width: 320px) {
    width: 150px;
    height: 170px;
  }
  // @media (min-width: 2540px) {
  //   width: 150px;
  //   height: 760px;
  // }
`;

export const Wrapper1 = styled(Row)`
  padding-left: ${({ screens }) => (screens?.lg ? "120px" : "0px")};
  padding-right: ${({ screens }) => (screens?.lg ? "33px" : "0px")};
  padding-top: 3vh;
  padding-bottom: 6vh;

  background-color: #f6f6f6;
`;

export const Wrapper = styled(Row)`
  padding-left: ${({ screens }) => (screens?.lg ? "120px" : "0px")};
  padding-right: ${({ screens }) => (screens?.lg ? "33px" : "0px")};
  padding-top: 3vh;
  padding-bottom: 6vh;

  background-color: white;
`;

export const AppBar = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.screens.lg ? "flex-end" : "space-between"};
  gap: 40px;
  padding: 40px;
  box-sizing: border-box;
`;

export const StyledOption = styled.p`
  fontsize: 18px;
  padding: 0px;
  margin: 0px;
  color: White;
`;
export const StyledOptionRow = styled(Row)`
  background-color: "";
  width: 100%;
  padding: 5px 10px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    text-decoration: underline;
    color: white;
    transform: scale(1.03);
    cursor: pointer;
  }
`;
export const StyledUserDashBox = styled(Row)`
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px 5px 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    justify-content: center;
    padding-bottom: 20px;
  }
`;
export const CustomCard = styled(Card)`
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const HeadingMain = styled.h1`
  font-size: 17px;
  font-weight: bold;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`;
export const Subheading = styled.p`
  font-weight: bold;
`;

export const FieldData = styled.p`
  font-size: 15px;
  padding: 0;
  margin: 0;
  font-weight: normal;
  color: gray;
  margin-bottom: 6px;
  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

export const CusstomButton = styled.button`
  background-color: ${({ active }) =>
    active == "Active"
      ? "Green"
      : active == "Paid"
      ? "#F7CB73"
      : active == "time"
      ? "blue"
      : "#ebbcbc"};
  color: ${({ active }) =>
    active == "Active"
      ? "#fff"
      : active == "Paid"
      ? "#D9512C"
      : active == "time"
      ? "white"
      : "Red"};
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;
export const CusstomActiveButton = styled.button`
  background-color: ${({ active }) => (active ? "Green" : "white")};
  color: ${({ active }) => (active ? "#fff" : "Red")};
  padding: 10px 17px;
  border-radius: 10px;
  border: none;
  text-decoration: ${({ active }) => !active && "underline"};
  font-weight: bold;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;
export const CusstomCancelledButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 10px 17px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;

export const CusstomTimeButton = styled.button`
  background-color: #f7cb73;
  color: #d9512c;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
`;

export const FieldName = styled.div`
  font-weight: 500;
  padding: 0;
  margin: 0;
  margin-bottom: 6px;
  @media (max-width: 425px) {
    font-size: 13px;
  }
`;
export const CardColumn = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 767px) {
    flex-direction: row;
  }
`;
export const SelectedFilterText = styled.p`
  margin: 0;
  padding: 0;
  color: #011046;
  font-weight: 500;
  border-bottom: 2px solid #011046;
  height: 50px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledFilterBox = styled(Row)`
  background-color: white;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const Box = styled.div`
  height: 130px;
  width: 250px;
  border: 1px solid #979595;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
`;
export const RequestQuoteBox = styled.div`
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 400px;

  text-align: center;
  border: 2px solid #041c5c;
  border-radius: 15px;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const StyledPara = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 1278px) {
    font-size: 1rem;
  }
`;
export const RequestButton = styled.button`
  border-radius: 5px;
  color: white;
  width: 151px;
  height: 31px;
  flex-shrink: 0;
  background: linear-gradient(
    268deg,
    #011046 0%,
    rgba(1, 16, 70, 0.68) 66.47%,
    rgba(1, 16, 70, 0.49) 99.7%
  );
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    transition-duration: 0.4s;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
export const SimpleButton = styled.button`
  width: 172px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #07164b;
  color: white;
`;
export const MapBg = styled.div`
  width: 100%;
  height: 516px;
  flex-shrink: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ image }) => image}), lightgray 50% / cover no-repeat;
`;
export const MapCenterBox = styled.div`
  width: 318px;
  height: 187px;
  flex-shrink: 0;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background: rgba(7, 22, 75, 0.8);
  & > p {
    font-size: 1.5rem;
    @media (max-width: 1278) {
      font-size: 1rem;
    }
  }
  @media (max-width: 425px) {
    width: 200px;
    height: 140px;
  }
`;
export const Heading = styled.div`
  color: white;

  font-size: 30px;
  font-weight: 400;

  text-transform: uppercase;
  font-family: Inter;

  @media (max-width: 1278px) {
    font-size: 3.2rem;
  }
`;
export const CircleContainer = styled.div`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 2rem;

  fill: radial-gradient(50% 50% at 50% 50%, #fff 0%, #cbc9c9 100%);
  stroke-width: 1px;
  stroke: rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.14));
`;
export const MWButton = styled(Button)`
  && {
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    line-height: normal;

    height: 40px;

    margin: 2px;
    // width: 140px;
    box-shadow: inset 0 0 10px gray;
    &:hover {
      color: white;
    }
  }
`;
export const MWButtonTwo = styled(Button)`
  && {
    background-color: white;
    border: 0;
    color: ${Colors?.primary};
    height: 40px;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow */
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      color: ${Colors?.primary};
    }
  }
`;
export const BackgroundCol = styled(Col)`
  background-image: ${({ imagePath }) => `url(${imagePath})`};
  background-size: contain;
  background-repeat: no-repeat;
  height: max-content;
`;
export const CardButton = styled.button`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
    -1px 3px 4px 5px rgba(0, 0, 0, 0.28) inset;
  width: 227px;
  height: 46px;

  color: #00376c;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 3.2rem;

  cursor: pointer;
`;

export const Seprator = styled.div`
  width: 0;
  opacity: 0.6;
  border: 1px white solid;
  height: 27rem;

  margin-left: 30px;
  margin-right: 30px;
  transform: translateY(-25px);

  @media (min-width: 800px) and (max-width: 1280px) {
    height: 16rem;
  }

  @media (max-width: 780px) {
    border: 1px white solid;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 13rem;
    margin-top: 50px;

    width: 300.5px;
    height: 0;
  }

  @media only screen and (min-width: 600px) and (max-width: 1280px) {
    margin-top: 80px;
  }
`;

export const CardDescription = styled.div`
  opacity: 0.8;
  width: 288px;
  text-align: center;
  color: white;
  font-size: 1.9rem;
  font-family: Inter;
  font-weight: 300;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: auto;
  }
  @media (max-width: 1278) {
    font-size: 1.6rem;
  }
`;

export const SubHeading = styled.div`
  font-size: 2.4rem;
  font-weight: 300;
  font-family: Inter;
  margin-bottom: 1.6rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  margin-top: 1.6rem;

  color: white;
  font-family: "Inter";

  letter-spacing: 8px;
  word-wrap: break-word;

  @media (max-width: 1278px) {
    font-size: 1.3rem;
  }
`;
export const MiniHeading = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  font-family: Inter;
  margin-bottom: 1.6rem;
  margin-top: 1.6rem;

  color: white;
  font-size: 15px;
  font-family: Inter;

  letter-spacing: 8.4px;
  word-wrap: break-word;

  @media (max-width: 1278px) {
    font-size: 8px;
  }
`;

export const CardHeading = styled.div`
  font-size: 1rem;
  font-weight: 500;
  font-family: inter;
  margin-bottom: 1rem;
  margin-top: 1rem;
  padding-inline: 0.5rem;
  text-align: center;
`;
export const StyledCard = styled(Card)`
  width: 24rem;
  height: 24rem;
  margin: 0.8rem;

  padding: 1.6rem;
  display: flex;
  justify-content: center;

  background-color: transparent; /* Add this line */
  color: white;
  border: 0px;

  @media (max-width: 668px) {
    margin-bottom: 8rem;

    ${Bluebox} {
      width: 60vw;
    }
  }

  ${SubHeading} {
    transform: translateY(20px);
  }
  ${CardDescription} {
    transform: translateY(20px);
  }
  ${GreyPicture} {
    opacity: 0;
    transform: translateY(20px);
  }
  ${CardButton} {
    opacity: 0;
    transform: translateY(20px);
  }

  &:hover {
    ${WhitePicture} {
      opacity: 0;
    }
    ${SubHeading} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${CardDescription} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${GreyPicture} {
      opacity: 1;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${MiniHeading} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${CardButton} {
      opacity: 1;

      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
  }
  @media (max-width: 1023px) {
    ${WhitePicture} {
      opacity: 0;
    }
    ${SubHeading} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${CardDescription} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${GreyPicture} {
      opacity: 1;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${MiniHeading} {
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
    ${CardButton} {
      opacity: 1;

      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in;
      transform: translateY(-20px);
    }
  }
`;

export const HeadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  border-radius: 10px;
  background: #E30022;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.25);

  color: #f5f5f5;

  font-size: 20px;

  font-weight: 700;
  line-height: normal;

  text-align: center;
  font-family: Inter;
`;

export const FormBackground = styled.div`
  width: 80vw;
  height: max-content;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 10px 8px rgba(9, 45, 86, 0.37),
    0px 0px 50px 100px rgba(255, 255, 255, 0.35) inset;
`;

export const StyledTag = styled.div`
  font-family: Inter;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ selected }) => (selected ? "#E30022" : "#E0E0E0")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  font-weight: 300;

  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;

  width: 16rem;
  height: 46px;
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 1.9rem;

  @media (max-width: 1278px) {
    font-size: 1.6rem;
  }
`;
export const CustInput = styled(Input)`
  border: 1px solid #e8e8e8;

  height: 45px;
  padding-left: 10px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  $:hover {
    border-color: white;
  }
`;
export const CustAuto = styled(AutoComplete)`
  border: 1px solid #e8e8e8;

  height: 37px;
  width: 90%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  // padding-top: 0.35rem;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  &:hover {
    border-color: #69b1ff;
  }
`;
export const CustUL = styled.ul`
  width: 80%;
  transition: display linear 3s;
  list-style: none;
  padding: 0;
  list-style-position: inside;
  &::placeholder {
    color: #01497c;
  }
  margin: 0;
  border-radius: 4px;
  border-left: 1px solid #4096ff;
  border-right: 1px solid #4096ff;
  border-bottom: 1px solid #4096ff;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  transition: max-height 0.3s ease-in-out;
`;

export const CustLI = styled.li`
background-color: white;
border: 1px solid #4096ff;
padding: 4px;
padding-left: 20px;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25);
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    transition: background-color 0.3s ease;
    &:hover{
  background-color: #4096ff;
  color:white;
  cursor:pointer;
}

`;

const StyledCustInputPassword = styled(Input.Password)`
  height: 45px;
  border: 1px solid #e8e8e8;
  width: 100%;
  border-radius: 5px;
  width: 100%;

  &::placeholder {
    color: #01497c;
  }
`;
export const CustInputPassword = ({ ...props }) => {
  return (
    <StyledCustInputPassword
      {...props}
      style={{
        boxShadow:
          "0px 0px 1px 1px rgba(9, 45, 86, 0.25),0px -1px 1px 0px rgba(0, 0, 0, 0.25) inset",
      }}
      prefix={
        <LockOutlined
          style={{
            fontSize: "18px",
            color: "#aeb1b6",
          }}
        />
      }
    />
  );
};
export const CircularIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-inline: 2px;
`;

export const LabelTitle = styled.span`
  font-size: 1.2rem;
  color: white;
  font-family: Inter;
  margin-bottom: 3.2rem;
`;
export const LabelTitleBlue = styled.h1`
  font-size: 1.3rem;
  color: #00376c;
  font-family: Inter;
  margin-bottom: 2px;
`;
export const CustInputPass = styled(CustInput.Password)`
  height: 45px;
  border: 1px solid #e8e8e8;

  border-radius: 5px;
  width: 100%;
  &::placeholder {
    color: #01497c;
  }
`;

export const CustSelectCountry = styled(CountryDropdown)`
  height: 45px;
  width: 90%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 8px 0px rgba(0, 0, 0, 0.25) inset;

  &::placeholder {
    color: #bfbfbf !important; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  padding-left: 8px;
`;
export const CustSelectRegion = styled(RegionDropdown)`
  height: 45px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 8px 0px rgba(0, 0, 0, 0.25) inset;

  &::placeholder {
    color: #bfbfbf !important; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  padding-left: 8px;
`;
export const CustCountrySelect = styled(Select)`
  border: 1px solid #e8e8e8;

  height: 45px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  // padding-top: 0.35rem;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  &:hover {
    border-color: #69b1ff;
  }
`;
export const CustSelectCity = styled(Select)`
  height: 45px;
  width: 90%;

  background-color: white;
  border-radius: 5px;

  color: black;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
  }

  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

export const CustInputNumber = styled(InputNumber)`
  height: 20%;
  border: 1px solid #e8e8e8;
  width: 90px;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &::placeholder {
    color: #01497c; /* Change this to the desired placeholder color */
  }
`;

export const Con_MWButton = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors?.primary};
    border: 0;
    color: white;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;
export const NavButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #E30022;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  width: 180px;
  && {
    border: 0;
    color: white;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;
export const Con_MWButtonSecond = styled(Button)`
  && {
    background-color: transparent;
    border: 1px solid ${Colors?.primary};
    color: ${Colors?.primary};
    height: 40px;

    &:hover {
      color: ${Colors?.primary};
    }
  }
`;
export const Con_Heading = styled.h1`
  color: #E30022;
  font-size: 26px;
`;
export const Con_Title = styled.div`
  font-size: 14pt;

  font-family: inter;
  font-weight: 600;
  text-align: left;
  color: #E30022;

  margin-top: 0.75rem;
`;
export const Con_SubTitle = styled.div`
  font-size: 10pt;
  font-family: inter;
  font-weight: 500;
  text-align: left;
  margin-top: 0.75rem;
`;
export const Con_BoldSubTitle = styled.div`
  font-size: 12pt;
  font-family: inter;
  font-weight: bold;
  text-align: left;
  margin-top: 0.75rem;
`;
export const Con_CustomLine = styled(Divider)`
  &&& {
    display: flex;
    align-items: center;
    position: relative;
    height: 1px;
    background-color: #000;
    border-radius: 50%;
  }
`;

export const Con_Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
`;

export const Con_LeftCircle = styled(Con_Circle)`
  left: 0;
  transform: translate(-50%, -50%);
`;

export const Con_RightCircle = styled(Con_Circle)`
  right: 0;
  transform: translate(50%, -50%);
`;

export const Con_TextBelow = styled.div`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: ${Colors?.primary};
  font-weight: bold;
`;
export const CustSelect = styled(Select)`
  border: 1px solid #e8e8e8;

  height: 37px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #000;
  background: #fff;
  box-shadow: 0px 0px 4px 4px rgba(9, 45, 86, 0.25),
    0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  // padding-top: 0.35rem;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  &:hover {
    border-color: #69b1ff;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  border-radius: 30px;
  margin: 1rem;
`;

export const CustomButton = styled.button`
  background-color: ${(props) => (props.selected ? "#041c5c" : "#aeb1b6")};
  color: white;
  border: none;

  flex: 1;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 0.5rem;
  padding-inline: 1rem;
  &:hover {
    background-color: ${(props) => (props.selected ? "#041c5c" : "#aeb1b6")};
    cursor: pointer;
  }
`;
export const CustomButtonTwo = styled.button`
  background-color: ${(props) => (props.selected ? "#041c5c" : "#aeb1b6")};
  color: white;
  border: none;
  padding: 0.5rem;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-inline: 1rem;
  flex: 1;

  &:hover {
    background-color: ${(props) => (props.selected ? "#041c5c" : "#aeb1b6")};
    cursor: pointer;
  }
`;
