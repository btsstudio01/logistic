import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { useSelector } from "react-redux";

const ToggleButton = (props) => {
  const data = useSelector((state) => state.data).data?.shipmentDetails
    ?.tradeItem;
  const [open, setOpen] = useState(
    data?.length > 0 ? data[props?.index]?.natureOfPackage : false
  );

  const onChange = (checked) => {
    setOpen(checked);
  };

  useEffect(() => {
    props.packageButton
      ? props.setFunction(props.index, "packageType", open)
      : props.setFunction(props.index, "natureOfPackage", open);
  }, [open]);

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
