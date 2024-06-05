import React from "react";
import styled, { keyframes } from "styled-components";
import {Row,Col} from 'antd'
import { Colors } from "../theme/theme";
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;



const Text = styled.span`
 font-size: 5.5rem;
  font-weight: 900;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  &:nth-child(4) {
    animation-delay: 0.6s;
  }
`;

const AnimatedText = () => {
  return (
    <>
    <Row>
      <Text>Safe&nbsp;</Text>
      <Text>& Reliable</Text>
      <Text>&nbsp;Logistic</Text>
 
      <Text style={{color:`${Colors?.primary}`}}> Solutions.
</Text>
    </Row>
  
    </>
  );
};

export default AnimatedText;
