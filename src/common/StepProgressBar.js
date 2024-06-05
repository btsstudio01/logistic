import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
// import airplane from "../assets/StepPrgressBarIcons/airplane.png";
import airplane from "../assets/StepPrgressBarIcons/airplane.png";
import { useSelector } from "react-redux";

import ship from "../assets/StepPrgressBarIcons/freight.png";
import truck from "../assets/StepPrgressBarIcons/delivery-truck.png";
import useScreenWidth from "../hooks/useScreenWidth";
// import airplaneSound from "../assets/Audio/Airplane.mp3";
import { Colors } from "../constant/theme/theme";

const Bar = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: row;
  justify-content:"center",
  align-items:"center",
  
  @media screen and (max-width: 350px) {
    
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    display:none;
  }
`;

const changeColor = keyframes`
  0% {
    background-color: white;
    transform: scale(1);
  }
  50% {
    background-color: #E30022;
    transform: scale(1.1);
  }
  100% {
    background-color: white;
    transform: scale(1);
  }
`;

const Step = styled.div`
  width: 13.5vw;
  height: 7vh;
  display: flex;
  background-color: ${(props) =>
    props.activeIndex === props.index ? "#E30022" : "white"};
  animation: ${changeColor} 3s;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #090909;
  font-family: Inter;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
    margin: 5px;
    border-radius: 50%;
  }
`;

const Airplane = styled.img`
  width: 5rem;
  height: 5rem;

  position: absolute;
  left: 5%;
  top: -40px;
  transition: transform 4s ease;
  --moveValueX: ${({ activeIndex }) => activeIndex};
  transform: translateX(calc(var(--moveValueX) * 11.5vw));

  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const StepProgressBar = ({ activeIndex }) => {
  // const [audio, setAudio] = useState(new Audio());
  const [img, setImg] = useState();
  const { screenWidth } = useScreenWidth();
  const { serviceType } = useSelector((state) => state.data).data;

  useEffect(() => {
    console.log("yeh le", serviceType);
    if (serviceType === 1) {
      setImg(airplane);
      // audio.src = airplaneSound;
    } else if (serviceType === 2) {
      setImg(ship);
    } else if (serviceType === 3) {
      setImg(truck);
    }
  }, [serviceType]);

  // useEffect(() => {
  //   audio.play();
  //   return () => {
  //     audio.pause();
  //     audio.currentTime = 0;
  //     audio.playbackRate = 3;
  //   };
  // }, [activeIndex, audio]);

  return (
    <>
      <Airplane src={img} activeIndex={activeIndex} />
      <Bar>
        <Step style={{}} index={0} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 0 ? (
              <p style={{ color: "white" }}>{"1. Service"}</p>
            ) : (
              <p>{"1. Service"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>0 </p>
          )}
        </Step>
        <Step index={1} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 1 ? (
              <p style={{ color: "white" }}>{"2. Trade Type"}</p>
            ) : (
              <p>{"2. Trade Type"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>1</p>
          )}
        </Step>
        <Step index={2} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 2 ? (
              <p style={{ color: "white" }}>{"3. Shipper Details"}</p>
            ) : (
              <p>{"3. Shipper Details"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>2</p>
          )}
        </Step>
        <Step index={3} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 3 ? (
              <p style={{ color: "white" }}>{"4. Receiver Details"}</p>
            ) : (
              <p>{"4. Receiver Details"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>3</p>
          )}
        </Step>
        <Step index={4} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 4 ? (
              <p style={{ color: "white" }}>{"5. Shipment Details"}</p>
            ) : (
              <p>{"5. Shipment Details"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>4</p>
          )}
        </Step>
        <Step index={5} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 5 ? (
              <p style={{ color: "white" }}>{"6. Select Service"}</p>
            ) : (
              <p>{"6. Select Service"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>5</p>
          )}
        </Step>
        <Step index={6} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 6 ? (
              <p style={{ color: "white" }}>{"7. Payment"}</p>
            ) : (
              <p>{"7. Payment"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>7</p>
          )}
        </Step>
        <Step index={7} activeIndex={activeIndex}>
          {window.innerWidth > 350 ? (
            activeIndex === 7 ? (
              <p style={{ color: "white" }}>{"8. Confirmation"}</p>
            ) : (
              <p>{"7. Confirmation"}</p>
            )
          ) : (
            <p style={{ fontSize: "20px" }}>6</p>
          )}
        </Step>
      </Bar>
    </>
  );
};

export default StepProgressBar;
