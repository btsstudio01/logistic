import React, { useState } from "react";
import { Image } from "antd";
import Wood from "../assets/PackageType/Wood.png";
import Pallete from "../assets/PackageType/Pallete.png";
import Roll from "../assets/PackageType/Roll.png";
import Box from "../assets/PackageType/Box.png";

const PackageType = ({ desc, index }) => {
  let pic = desc[index];
  if (pic === "Pallete") {
    return (
      <Image
        style={{ marginTop: "4px", height: "50px", width: "50px" }}
        preview={false}
        src={Pallete}
      />
    );
  } else if (pic === "Wooden Crat") {
    return (
      <Image
        style={{ marginTop: "4px", height: "50px", width: "50px" }}
        preview={false}
        src={Wood}
      />
    );
  } else if (pic === "Roll") {
    return (
      <Image
        style={{ marginTop: "4px", height: "50px", width: "50px" }}
        preview={false}
        src={Roll}
      />
    );
  } else if (pic === "Box") {
    return (
      <Image
        style={{ marginTop: "4px", height: "50px", width: "50px" }}
        preview={false}
        src={Box}
      />
    );
  } else {
    return <></>;
  }
};

export default PackageType;
