import React, { useState, useEffect } from "react";
import { Col, Row, Grid } from "antd";
import { BsArrowRight } from "react-icons/bs";

import { Con_Heading, Con_SubTitle } from "../../../common/globalStyle";
import { CheckCircleFilled, CheckCircleTwoTone } from "@ant-design/icons";
const { useBreakpoint } = Grid;

const SecondDetailBox = ({ InitialData, setCurrent, confirmation, review }) => {
  const [currentService, setCurrentService] = useState();
  const screens = useBreakpoint();

  const CurrentService = () => {
    switch (InitialData.serviceType) {
      case 1:
        setCurrentService("Airport");
        break;
      case 2:
        setCurrentService("Seaport");
        break;
      case 3:
        setCurrentService("Dryport");
        break;
      default:
        setCurrentService(null);
    }
  };

  const ShowShipment = ({ from, to }) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {from}
        <span>
          <BsArrowRight size={25} />
        </span>
        {to}
      </div>
    );
  };

  useEffect(() => {
    CurrentService();
  });
  return (
    <Row
      style={{
        backgroundColor: "white",
        marginBottom: "0.5rem",
        paddingBottom: "1rem",
      }}
    >
      <Con_Heading
        style={{
          // fontSize: "34px",
          display: "flex",

          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {confirmation ? (
          <>
            <span style={{ color: "green", fontWeight: "bold" }}>Payment</span>{" "}
            <span>
              <CheckCircleFilled
                style={{
                  fontSize: "40px",
                  color: "green",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
              />
            </span>
            <span>Successfull</span>
          </>
        ) : review ? (
          "Review Your Shipment"
        ) : (
          "Shipment details"
        )}
      </Con_Heading>

      <Col
        span={
          (InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 1) ||
          confirmation ||
          review
            ? 6
            : 8
        }
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Con_Heading
          style={{
            fontSize: "20px",
          }}
        >
          Quotation number
        </Con_Heading>
        <Con_SubTitle style={{ paddingLeft: "0px",marginRight:screens.xs?"10px":"5px" , fontSize: screens.xs? "10px" : "20px", }}>
          {InitialData?.tradeId}
        </Con_SubTitle>
      </Col>
      <Col
        span={
          (InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 1) ||
          confirmation ||
          review
            ? 6
            : 8
        }
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Con_Heading
          style={{
            fontSize: "20px",
          }}
        >
          Shipment Type
        </Con_Heading>
        <Con_SubTitle style={{ fontSize: screens.xs? "10px" : "20px",}}>
          {InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 2 ? (
            <ShowShipment from="Business" to="Business" />
          ) : InitialData?.shipmentDetails?.termofshipment === 1 ? (
            <ShowShipment from="Business" to="Business" />
          ) : InitialData?.shipmentDetails?.termofshipment === 3 ? (
            <ShowShipment from="Business" to={currentService} />
          ) : InitialData?.shipmentDetails?.termofshipment === 2 ? (
            <ShowShipment from={currentService} to="Business" />
          ) : InitialData?.shipmentDetails?.termofshipment === 4 ? (
            <ShowShipment from={currentService} to={currentService} />
          ) : null}
        </Con_SubTitle>
      </Col>
      {confirmation || review ? (
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Con_Heading
            style={{
              fontSize: "20px",
            }}
          >
            Service Name
          </Con_Heading>
          <Con_SubTitle style={{ paddingLeft: "20px",  fontSize: screens.xs? "10px" : "20px", }}>
            {InitialData?.selectedService.companyname ||
              InitialData?.selectedService.name}
          </Con_SubTitle>
        </Col>
      ) : (
        <Col
          span={
            InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 1
              ? 6
              : 8
          }
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Con_Heading
            style={{
              fontSize: "20px",
            }}
          >
            Commodity
          </Con_Heading>
          <Con_SubTitle style={{ paddingLeft: "20px",  fontSize: screens.xs? "10px" : "20px", }}>
            {InitialData?.shipmentDetails?.commodity?.type}((
            {InitialData?.shipmentDetails?.commodity?.subtype}))
          </Con_SubTitle>
        </Col>
      )}
      {(confirmation || review) && (
        <Col
          span={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Con_Heading
            style={{
              fontSize: "20px",
            }}
          >
            Total Amount
          </Con_Heading>
          <Con_SubTitle style={{ paddingLeft: "20px" }}>
            {InitialData?.selectedService.totalCharges ||
              InitialData?.selectedService.total}{" "}
            AED
          </Con_SubTitle>
        </Col>
      )}
      {!confirmation &&
        !review &&
        InitialData.serviceType == 2 &&
        InitialData.serviceTypeOpt == 1 && (
          <Col
            span={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: "column",
            }}
          >
            <Con_Heading
              style={{
                fontSize: "20px",
              }}
            >
              Container Type
            </Con_Heading>
            <Con_SubTitle style={{ paddingLeft: "20px" }}>
              {InitialData?.shipmentDetails?.container?.type}(
              {InitialData?.shipmentDetails?.container?.size}ft)
            </Con_SubTitle>
          </Col>
        )}
    </Row>
  );
};

export default SecondDetailBox;
