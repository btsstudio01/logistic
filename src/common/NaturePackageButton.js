import { StyledButton, SelectionBox } from "../common/globalStyle";
import { Row, Col, Result } from "antd";
import React, { useEffect, useState } from "react";
import { Radio, Select } from "antd";
import { useSelector } from "react-redux";

const NaturePackageButton = (props) => {
  const [nature, setNature] = useState(
    useSelector((state) => state.data).data?.tradeItem[props.index]
      ?.natureOfPackage
  );
  useEffect(() => {
    props.setStackable(props.index, "natureOfPackage", nature);
  }, [nature]);

  return (
    <SelectionBox style={{ marginTop: "2px" }}>
      <Radio.Group
        onChange={(e) => {
          setNature(e.target.value);
        }}
        value={nature}
        buttonStyle="solid"
        style={{
          textAlign: "center",
          display: "flex",
        }}
      >
        <StyledButton
          forPackageButton={props.forPackageButton}
          style={{
            boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",
            borderTopLeftRadius: "100px",
            borderBottomLeftRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: nature == true ? "#E30022" : "white",
            backgroundColor: nature == true ? "#E30022" : "white",
            color: nature == true ? "white" : "#E30022",
          }}
          value={true}
        >
          Stackable
        </StyledButton>
        <StyledButton
          forPackageButton={props.forPackageButton}
          style={{
            boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",
            textAlign: "center",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: nature == false ? "#E30022" : "white",
            backgroundColor: nature == false ? "#E30022" : "white",
            color: nature == false ? "white" : "#E30022",
          }}
          onChange={(e) => {
            setNature(e.target.value);
          }}
          value={false}
        >
          Non-Stackable
        </StyledButton>
      </Radio.Group>
    </SelectionBox>
  );
};

export default NaturePackageButton;
