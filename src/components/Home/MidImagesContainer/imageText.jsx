import React, { useState } from "react";
import './styles.css';
import styled from "styled-components";

const ImageHeadingText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
`;

export default function ImageText({ bottom, left, text, href = "#" }) {
  return (
    <a
      className="imagePanelText"
      style={{
        bottom: bottom,
        left
      }}
      href={href}
    >
      <ImageHeadingText>
        {text}
      </ImageHeadingText>

      <p className="image-view-more">
        <u>View More</u>
      </p>

    </a>
  );
}
