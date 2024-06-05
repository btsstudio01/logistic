import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { useSelector } from "react-redux";

const ToggleButton = ({
  open,
  isOpen,
  HandleComprehensiveInsurance,
  HandleNoInsurance,
}) => {
  //   const [open, isOpen] = useState(false);
  const onChange = () => {
    isOpen((prev) => {
      if (prev) {
        HandleNoInsurance();
      } else {
        HandleComprehensiveInsurance();
      }
      return !prev;
    });
  };

  return (
    <>
      <Switch
        onChange={onChange}
        checked={open}
        style={{
          backgroundColor: open === true ? "#041c5c" : "gray",
        }}
      />
    </>
  );
};

export default ToggleButton;
