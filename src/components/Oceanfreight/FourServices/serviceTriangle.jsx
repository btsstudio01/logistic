import React, { useState } from 'react';

export default function ServiceTriangle({ initialColor = '#E1261D', hoverColor, textToShow, content, height, width, changeContent, defaultContent, top = false }) {
  const [bgColor, setBgColor] = useState(initialColor);
  console.log("initial color", initialColor);

  const HandleOnMouseEnter = () => {
    setBgColor(hoverColor);
    changeContent(content);
  }

  const HandleOnMouseLeave = () => {
    setBgColor(initialColor);
    changeContent(defaultContent);
  }

  const onTextClickHandle = () => {
    const targetElement = document.getElementById(content.compId);
    console.log("element fetched", targetElement, content.compId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  if (top) {
    return (
      <div style={{
        borderColor: bgColor,
        // borderTopLeftRadius: 100,
        // borderTopRightRadius: 100,
        borderRadius:100,
        borderBottom: `20px solid ` + bgColor,
        // borderLeft: '10px solid transparent',
        // borderRight: '10px solid transparent',
        width: width,
        height: 20,
        position: 'relative'
      }}
      >
        <div style={{ 
          position: 'absolute', 
          width: 30, 
          height: 12, 
          borderColor: bgColor,
          borderBottom: `13px solid ` + bgColor,
          borderLeft: '7px solid transparent',
          borderRight: '7px solid transparent',
          top:8,
          left:-7
          }}></div>
      </div>
    );
  }

  return (
    <div 
      style={{
        // borderColor: bgColor,
        // borderBottom: `80px solid ` + bgColor,
        borderColor: 'transparent transparent ' + bgColor + ' transparent',
        borderBottom: `80px solid ` + bgColor,
        borderLeft: '52px solid transparent',
        borderRight: '52px solid transparent',
        width: width,
        height: height,
        margin: 7
      }}
      onMouseEnter={HandleOnMouseEnter}
      onMouseLeave={HandleOnMouseLeave}
    >
      <p style={{
        height: height,
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: '450',
        cursor: 'pointer'
      }} onClick={() => onTextClickHandle()}>{textToShow}</p>
    </div>
  )
}
