import React from "react";
import './styles.css';
import styled from "styled-components";

const ImageHeadingText = styled.h2`
  font-size: 4.4rem;
  font-weight: 300;
  
  @media (max-width: 992px) {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export default function CoverImageText({ bottom, left, text, href = "#" }) {
  return (
    <a
      className="coverImagePanelText"
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
