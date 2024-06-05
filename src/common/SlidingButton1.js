import {
  StyledButton,
  SelectionBox,
  LabelTitleBlue,
} from "../common/globalStyle";
import { Radio, Modal, DatePicker, Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
const SlidingButton1 = ({
  setTimebound,
  setTimeboundPickUpDate,
  setTimeboundDropOffDate,
}) => {
  const InitialData = useSelector((state) => state.data.data);
  const [nature, setNature] = useState(InitialData.shipmentDetails?.timebound); // Initialize state to 'truvscode-file://vscode-app/c:/Users/User/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmle' for 'Time Bound'
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPickUpDate, setSelectedPickUpDate] = useState(
    InitialData.shipmentDetails?.timeboundPickUpDate
  );
  const [selectedDropOffDate, setSelectedDropOffDate] = useState(
    InitialData.shipmentDetails?.timeboundDropOffDate
  );
  const handleButtonClick = (value) => {
    setNature(value);
    setTimebound(value);
    if (value === true) {
      setModalVisible(true);
    }
  };

  const handlePickUpDateSelection = (date) => {
    if (date?.$d) {
      setSelectedPickUpDate(date?.$d);
    }
  };
  const handleDropOffDateSelection = (date) => {
    if (date?.$d) {
      setSelectedDropOffDate(date?.$d);
    }
  };

  const handleOk = () => {
    if (selectedPickUpDate && selectedDropOffDate) {
      setTimeboundPickUpDate(selectedPickUpDate);
      setTimeboundDropOffDate(selectedDropOffDate);
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  return (
    <SelectionBox style={{ marginTop: "2px" }}>
      <Radio.Group
        onChange={(e) => {
          handleButtonClick(e.target.value);
        }}
        value={nature}
        buttonStyle="solid"
        style={{ textAlign: "center", display: "flex" }}
      >
        <StyledButton
          style={{
            boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",
            borderTopLeftRadius: "100px",
            borderBottomLeftRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: nature === true ? "#E30022" : "white",
            backgroundColor: nature === true ? "#E30022" : "white",
            color: nature === true ? "white" : "#E30022",
          }}
          value={true}
        >
          Yes
        </StyledButton>

        <StyledButton
          style={{
            boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",
            textAlign: "center",
            borderTopRightRadius: "100px",
            borderBottomRightRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: nature === false ? "#E30022" : "white",
            backgroundColor: nature === false ? "#E30022" : "white",
            color: nature === false ? "white" : "#E30022",
          }}
          value={false}
        >
          No
        </StyledButton>
      </Radio.Group>
      {console.log(Date(selectedPickUpDate), typeof selectedPickUpDate)}
      {nature && selectedPickUpDate && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <div
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            <LabelTitleBlue>Pick Up Date</LabelTitleBlue>

            <DatePicker
              disabled={true}
              readOnly={true}
              style={{
                backgroundColor: "white",
                flex: 1,
                color: "black",
              }}
              value={selectedPickUpDate && dayjs(selectedPickUpDate)}
            />
          </div>
          <div
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            <LabelTitleBlue>Drop Off Date</LabelTitleBlue>

            <DatePicker
              disabled={true}
              style={{
                backgroundColor: "white",
                flex: 1,
                color: "black",
              }}
              value={selectedDropOffDate && dayjs(selectedDropOffDate)}
            />
          </div>
        </div>
      )}
      {/* Modal for Date Selection */}
      <Modal
        title={nature ? "Enter Expected Date" : ""}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        {nature && (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px" }}>Select Pickup Date:</p>
              <DatePicker
                onChange={handlePickUpDateSelection}
                value={selectedPickUpDate && dayjs(selectedPickUpDate)}
                placeholder="Select Expected Date"
                style={{ flex: 1 }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px" }}>Select Drop off Date:</p>
              <DatePicker
                onChange={handleDropOffDateSelection}
                value={selectedDropOffDate && dayjs(selectedDropOffDate)}
                placeholder="Select Expected Date"
                style={{ flex: 1 }}
              />
            </div>
          </>
        )}
      </Modal>
    </SelectionBox>
  );
};

export default SlidingButton1;
