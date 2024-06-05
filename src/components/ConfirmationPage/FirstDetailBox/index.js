import React from "react";
import { Col, Grid, Row } from "antd";

import "jspdf-autotable";
import { Con_SubTitle, Con_Heading } from "../../../common/globalStyle";

import shipMoving from "../../../assets/Final.gif";
import planeMoving from "../../../assets/plane flying.gif";
const { useBreakpoint } = Grid;

const FirstDetailBox = ({ InitialData, AirExpressServiceData }) => {
  const screens = useBreakpoint();
  return (
    <Col span={22}>
      <Row style={{ backgroundColor: "white" }}>
        <Col span={24}>
          <div
            style={{
              border: "1px solid #F0F0F0",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <Row align={"middle"} justify={"space-between"}>
              <Col>
                <Col span={24}>
                  <Con_Heading>Sender Details </Con_Heading>
                  <Con_SubTitle>
                    <b>Company Name : </b>
                    {InitialData?.shipperDetails?.sen_companyName}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Email : </b>
                    {InitialData?.shipperDetails?.sen_companyEmail}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Contact Person : </b>
                    {InitialData?.shipperDetails?.sen_contactPersonName}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Phone Number : </b>
                    {InitialData?.shipperDetails?.sen_phoneNumber}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Contact Person Number: </b>
                    {InitialData?.shipperDetails?.sen_contactPersonNumber}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Country: </b>
                    {InitialData?.shipperDetails?.sen_country}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>City: </b>
                    {InitialData?.shipperDetails?.sen_city}
                  </Con_SubTitle>
                </Col>
              </Col>
              <Col md={6} xl={10} xxl={12}>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {InitialData.serviceType == 1 && (
                    <img
                      src={planeMoving}
                      style={{
                        height: screens.xl ? "300px" : "100%",
                        width: "100%",
                      }}
                    />
                  )}
                  {InitialData.serviceType == 2 && (
                    <img
                      src={shipMoving}
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    />
                  )}
                </div>
              </Col>
              <Col>
                <Col span={24}>
                  <Con_Heading>Reciever Details </Con_Heading>
                  <Con_SubTitle>
                    <b>Company Name : </b>
                    {InitialData?.recieverDetails?.rec_companyName}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Email : </b>
                    {InitialData?.recieverDetails?.rec_companyEmail}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Contact Person : </b>
                    {InitialData?.recieverDetails?.rec_contactPersonName}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Phone Number : </b>
                    {InitialData?.recieverDetails?.rec_phoneNumber}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Contact Person Number: </b>
                    {InitialData?.recieverDetails?.rec_contactPersonNumber}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>Country: </b>
                    {InitialData?.recieverDetails?.rec_country}
                  </Con_SubTitle>
                  <Con_SubTitle>
                    <b>City: </b>
                    {InitialData?.recieverDetails?.rec_city}
                  </Con_SubTitle>
                </Col>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default FirstDetailBox;
