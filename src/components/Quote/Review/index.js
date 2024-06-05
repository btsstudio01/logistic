import React, { useState, useEffect } from "react";
import { Col, Row, Grid } from "antd";
import { Space, Table, Tag } from "antd";
import "jspdf-autotable";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AirExpressServiceTable, AirFreightServiceTable } from "../Tables";
import {
  Con_MWButton,
  Con_Heading,
  Wrapper,
} from "../../../common/globalStyle";
import SecondDetailBox from "../../ConfirmationPage/SecondDetailBox";
import GeneratePdf from "../../ConfirmationPage/GeneratePdf";
import axios from "axios";

const { useBreakpoint } = Grid;

const Review = ({ setCurrent, data }) => {
  const dispatch = useDispatch();
  const screens = useBreakpoint();

  const InitialData = useSelector((state) => state.data).data;
  const [AirExpressServiceData, setAirExpressServiceData] = useState([]);
  const [AirFreightServiceData, setAirFreightServiceData] = useState([]);

  useEffect(() => {
    if (InitialData.serviceTypeOpt == 2) {
      setAirExpressServiceData(InitialData?.selectedService);
    } else {
      setAirFreightServiceData(InitialData?.selectedService);
    }
  }, [InitialData]);

  const confirmBooking = async () => {
    const payload = {
      tradeId: InitialData.tradeId,
      UserId: InitialData.userId,
      serviceType: InitialData.serviceType,
      tradeType: InitialData.tradeType,
      serviceTypeOpt: InitialData.serviceTypeOpt,
      shipperDetails: InitialData.shipperDetails,
      recieverDetails: InitialData.recieverDetails,
      shipmentDetails: {
        timebound: InitialData.shipmentDetails.timebound,
        timeboundPickUpDate: InitialData.shipmentDetails.timeboundPickUpDate,
        timeboundDropOffDate: InitialData.shipmentDetails.timeboundDropOffDate,
        tradeItem: InitialData.shipmentDetails.tradeItem,
        termofshipment: InitialData.shipmentDetails.termofshipment,
        noofpackages: InitialData.shipmentDetails.noofpackages,
        totalVolumetricWeight:
          InitialData.shipmentDetails.totalVolumetricWeight,
        totalcbm: InitialData.shipmentDetails.totalcbm,
        totalweight: InitialData.shipmentDetails.totalweight,
        chargeableWeight: InitialData.shipmentDetails.chargeableWeight,
      },
      charges:
        InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 1
          ? InitialData.airfreightcharges
          : InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 2
          ? InitialData.charges
          : InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 1
          ? InitialData.seafreightcharges
          : InitialData.seafreightlclcharges,
      selectedService: InitialData.selectedService,
    };
    if (InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 1) {
      payload.shipmentDetails.container = InitialData.shipmentDetails.container;
    }
    if (!(InitialData.serviceType === 1 && InitialData.serviceTypeOpt === 2)) {
      payload.shipmentDetails.pickupCountry =
        InitialData.shipmentDetails.pickup;
      payload.shipmentDetails.dropoffCountry =
        InitialData.shipmentDetails.dropoff;
      payload.shipmentDetails.pickupCity =
        InitialData.shipmentDetails.pickupCity;
      payload.shipmentDetails.dropoffCity =
        InitialData.shipmentDetails.dropoffCity;
      payload.shipmentDetails.pickupAdd =
        InitialData.shipmentDetails.pickupAddress;
      payload.shipmentDetails.dropoffAdd =
        InitialData.shipmentDetails.dropoffAddress;
      payload.shipmentDetails.pickupPort =
        InitialData.shipmentDetails.pickupAirport ||
        InitialData.shipmentDetails.pickupSeaport;
      payload.shipmentDetails.dropoffPort =
        InitialData.shipmentDetails.dropoffAirport ||
        InitialData.shipmentDetails.dropoffSeaport;
    } else {
      payload.shipmentDetails.pickupAdd = `${InitialData.shipperDetails.sen_buildingName}, ${InitialData.shipperDetails.sen_districtArea}, ${InitialData.shipperDetails.sen_city}, ${InitialData.shipperDetails.sen_country}`;
      payload.shipmentDetails.dropoffAdd = `${InitialData.recieverDetails.rec_buildingName}, ${InitialData.recieverDetails.rec_districtArea}, ${InitialData.recieverDetails.rec_city}, ${InitialData.recieverDetails.rec_country}`;
    }
    const res = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}trade/saveTrade`,
      payload
    );
    console.log(res);
    setCurrent(7);
  };
  console.log("confirmation", InitialData);

  return (
    <Wrapper
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Row
        justify={"center"}
        style={{
          width: "100%",
          backgroundColor: "#F0F0F0	",
        }}
      >
        <Row
          justify={"center"}
          style={{
            backgroundColor: "#F0F0F0	",
            paddingTop: "1rem",
            width: "100%",
          }}
        >
          <Col span={22}>
            <SecondDetailBox
              InitialData={InitialData}
              setCurrent={setCurrent}
              review={true}
            />
            <Row
              justify={"center"}
              style={{
                width: "100%",
                backgroundColor: "#F0F0F0	",
              }}
            >
              <GeneratePdf InitialData={InitialData} showButton={false} />
            </Row>
            <Row
              style={{
                backgroundColor: "white",
                padding: "2rem",
              }}
            >
              <Col span={24}>
                <Row
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Con_MWButton
                    style={{
                      borderRadius: "20px",
                      background: "#E30022",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      position: "relative",
                      width: "180px",
                    }}
                    onClick={() => setCurrent(5)}
                  >
                    <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
                    Back
                  </Con_MWButton>
                  <Con_MWButton
                    onClick={confirmBooking}
                    style={{
                      borderRadius: "20px",
                      background: "#E30022",
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      position: "relative",
                      width: "180px",
                    }}
                  >
                    Move To Payment
                    <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                  </Con_MWButton>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Wrapper>
  );
};

export default Review;
