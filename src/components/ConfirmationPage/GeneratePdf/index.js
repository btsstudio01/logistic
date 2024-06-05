import React, { useState, useEffect } from "react";
import { Button, Col, Row, Grid, notification } from "antd";
import "./style.css";
import { Con_SubTitle } from "../../../common/globalStyle";
import dowanloadicon from "../../../assets/download.gif";
import messageicon from "../../../assets/message.gif";
import { Colors } from "../../../constant/theme/theme";
import { PreviewPDF } from "./PreviewPdf";
import shipMoving from "../../../assets/Final.gif";
import planeMoving from "../../../assets/plane flying.gif";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";
import PDFDesign from "./PDFDesign";
import { useSelector } from "react-redux";
import axios from "axios";
const { useBreakpoint } = Grid;

const GeneratePdf = ({ InitialData, AirExpressServiceData, showButton }) => {
  const [sendingButtonLoading, setSendingButtonLoading] = useState(false);
  const screens = useBreakpoint();
  const [time, setTime] = useState(Date.now());

  const sendPDFViaEmail = async (blob) => {
    setSendingButtonLoading(true);
    const userEmail = JSON.parse(localStorage.getItem("persist:root")).counter;
    const { email, username } = JSON.parse(userEmail).credentials;
    const order = InitialData?.tradeId;
    const amount = InitialData?.selectedService?.totalCharges;
    const sendingWeight = InitialData?.shipmentDetails?.chargeableWeight;
    const timeElapsed = Date.now();
    const date = new Date(timeElapsed);

    const newFilePromise = new Promise((resolve, reject) => {
      const newFile = new File([blob], "express.pdf", {
        type: "application/pdf",
      });
      resolve(newFile);
    });

    try {
      const newFile = await newFilePromise;

      const formData = new FormData();
      formData.append("file", newFile);
      formData.append("email", email);
      formData.append("username", username);
      formData.append("order", order);
      formData.append("amount", amount);
      formData.append("date", date.toDateString());
      formData.append("sendingWeight", sendingWeight);

      const response = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}users/emailpdf`,
        formData,

        { headers: { "Content-Type": "multipart/form-data" } }
      );
      notification.success({
        message: "Successs",
        description: `Sent to ${email}`,
      });
      setSendingButtonLoading(false);
    } catch (error) {
      console.error("Error occurred while uploading file:", error);
      setSendingButtonLoading(false);
    }
  };

  return (
    <Col span={24}>
      <Row
        justify={"center"}
        style={{ backgroundColor: "white", padding: "1rem" }}
      >
        <Col span={22}>
          <div
            style={{
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <Row
              align={"middle"}
              justify={"center"}
              style={{
                marginBottom: InitialData.serviceType == 1 ? "0px" : "40px",
              }}
            >
              <Col>
                <Col span={24}>
                  <Con_SubTitle style={{ fontWeight: "bold" }}>
                    {InitialData?.shipperDetails?.sen_country}({" "}
                    {InitialData?.shipperDetails?.sen_city})
                  </Con_SubTitle>
                  {(() => {
                    if (InitialData?.serviceType === 2) {
                      return (
                        <Con_SubTitle
                          style={{ fontWeight: "bold", maxWidth: "200px" }}
                        >
                          {InitialData?.shipmentDetails?.termofshipment == 4 ||
                          InitialData?.shipmentDetails?.termofshipment == 2
                            ? `Seaport -
                            ${InitialData?.shipmentDetails?.pickupSeaport}`
                            : `Address - 
                            ${InitialData?.shipmentDetails?.pickupAddress}`}
                        </Con_SubTitle>
                      );
                    }
                  })()}
                  {(() => {
                    if (InitialData?.serviceType === 1) {
                      return (
                        <Con_SubTitle
                          style={{ fontWeight: "bold", maxWidth: "200px" }}
                        >
                          {InitialData.serviceTypeOpt == 1 &&
                            (InitialData?.shipmentDetails?.termofshipment ==
                              4 ||
                            InitialData?.shipmentDetails?.termofshipment == 2
                              ? `Airport -
                            ${InitialData?.shipmentDetails?.pickupAirport}`
                              : `Address - 
                            ${InitialData?.shipmentDetails?.pickupAddress}`)}
                        </Con_SubTitle>
                      );
                    }
                  })()}

                  <Con_SubTitle>
                    {InitialData?.shipperDetails?.sen_contactPersonName} - (
                    {InitialData?.shipperDetails?.sen_contactPersonNumber})
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
                        height: screens.xl ? "200px" : "100%",
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
                  <Con_SubTitle style={{ fontWeight: "bold" }}>
                    {InitialData?.recieverDetails?.rec_country}(
                    {InitialData?.recieverDetails?.rec_city})
                  </Con_SubTitle>
                  {(() => {
                    if (InitialData?.serviceType === 2) {
                      return (
                        <Con_SubTitle
                          style={{ fontWeight: "bold", maxWidth: "200px" }}
                        >
                          {InitialData?.shipmentDetails?.termofshipment == 4 ||
                          InitialData?.shipmentDetails?.termofshipment == 3
                            ? `Seaport -
                            ${InitialData?.shipmentDetails?.dropoffSeaport}`
                            : `Address - 
                            ${InitialData?.shipmentDetails?.dropoffAddress}`}
                        </Con_SubTitle>
                      );
                    }
                  })()}
                  {(() => {
                    if (InitialData?.serviceType === 1) {
                      return (
                        <Con_SubTitle
                          style={{ fontWeight: "bold", maxWidth: "200px" }}
                        >
                          {InitialData.serviceTypeOpt == 1 &&
                            (InitialData?.shipmentDetails?.termofshipment ==
                              4 ||
                            InitialData?.shipmentDetails?.termofshipment == 3
                              ? `Airport -
                            ${InitialData?.shipmentDetails?.dropoffAirport}`
                              : `Address - 
                            ${InitialData?.shipmentDetails?.dropoffAddress}`)}
                        </Con_SubTitle>
                      );
                    }
                  })()}
                  <Con_SubTitle>
                    {InitialData?.recieverDetails?.rec_contactPersonName} - (
                    {InitialData?.recieverDetails?.rec_contactPersonNumber})
                  </Con_SubTitle>
                </Col>
              </Col>
            </Row>

            {showButton && (
              <Row justify={"center"} style={{ display: "flex", gap: "50px" }}>
                <PDFDownloadLink
                  document={
                    <PDFDesign id={Math.random() * 1000} data={InitialData} />
                  }
                  fileName={`Express ${time}`}
                >
                  {({ blob, url, loading, error }) => (
                    <Button
                      onClick={async () => {
                        setTime(Date.now());
                      }}
                      size="large"
                      style={{
                        background: Colors.main,
                        color: "white",
                        paddingLeft: "30px",
                        textAlign: "center",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        paddingRight: "30px",
                      }}
                    >
                      {loading ? "Loading document..." : "Generate PDF"}
                      <img src={dowanloadicon} height="35px" width="40px" />
                    </Button>
                  )}
                </PDFDownloadLink>

                <BlobProvider
                  document={
                    <PDFDesign id={Math.random() * 1000} data={InitialData} />
                  }
                >
                  {({ blob, url, loading, error }) => (
                    <Button
                      loading={sendingButtonLoading ? true : false}
                      onClick={async () => {
                        await sendPDFViaEmail(blob);
                      }}
                      size="large"
                      style={{
                        background: "rgb(130, 189, 0)",
                        color: "white",
                        paddingLeft: "30px",
                        textAlign: "center",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        paddingRight: "30px",
                      }}
                    >
                      <p>Email PDF</p>
                      <img src={messageicon} height="35px" width="40px" />
                    </Button>
                  )}
                </BlobProvider>
              </Row>
            )}
          </div>
        </Col>
      </Row>
    </Col>
    // </Row>
  );
};

export default GeneratePdf;

// const generatePDF = () => {
//     const doc = new jsPDF();
//     // var image = new Image();
//     // img.src = Img

//     const datas = AirExpressServiceData?.map((item) => {
//       return {
//         overweight: item["internationalCharges"]?.overweight,
//         oversize: item["internationalCharges"]?.oversize,
//       };
//     });

//     const column1 = [
//       { title: "no.", dataKey: `number` },
//       { title: "weight", dataKey: "weight" },
//       { title: "height", dataKey: "height" },
//       { title: "packageType", dataKey: "packageType" },
//       { title: "width", dataKey: "width" },
//       { title: "length", dataKey: "length" },
//     ];
//     const column2 = [
//       //   ...(!InitialData.serviceType=1&&!InitialData.serviceTypeOpt==1&&[{ title: "EXW CHARGES", dataKey: `name` }]),
//       { title: "Min Charges", dataKey: "chargesMin" },
//       { title: "Rate Per KG", dataKey: "rateperkg" },
//       { title: "Chargeable Weight", dataKey: "chargeableweight" },
//       { title: "Charges", dataKey: "totalCharges" },
//       { title: "Total", dataKey: "locationPrice" },
//     ];
//     const data1 = InitialData?.tradeItem?.map((item, i) => {
//       return {
//         number: i + 1,
//         weight: item?.weight,
//         height: item?.height,
//         length: item?.length,
//         width: item?.width,
//         packageType: item?.packageType,
//       };
//     });
//     var rows = [
//       {
//         col1: "ASad",
//         col2: ``,
//         col3: "hev",
//         col4: "Date",
//       },
//       {
//         col1: "data-cell_r2_c1",
//         col2: "data-cell_r2_c2",
//         col3: "data-cell3_r2_c3",
//         col4: "data-cell4_r2_c4",
//       },
//       {
//         col1: "data-cell_r3_c1",
//         col2: "data-cell_r3_c2",
//         col3: "data-cell3_r3_c3",
//         col4: "data-cell4_r3_c4",
//       },
//     ];

//     doc.setFontSize(40);
//     var imgData = logo;
//     // doc.addImage(img, 'png', x, y, w, h, 'alias');
//     // doc.addImage(Img, 'png', 1, 2);
//     doc.addImage(imgData, "JPEG", 10, 5, 100, 30);
//     // doc.text(`Proforma Invoice`, 10, 10);
//     doc.setFontSize(12);
//     doc.setFont(undefined, "bold").text(`AWB No:`, 10, 60);
//     doc.setFont(undefined, "normal").text(`010233:`, 30, 60);

//     doc.setFont(undefined, "bold").text(`Invoice Date: `, 65, 60);
//     doc.setFont(undefined, "normal").text(pdfCurrentDate(), 95, 60);
//     doc.setFont(undefined, "bold").text(`Invoice No:`, 120, 60);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${Math.floor(1000 + Math.random() * 9000)}`, 160, 60);

//     doc.setFont(undefined, "bold").text(`SHIP FROM:`, 10, 70);
//     doc.setFont(undefined, "bold").text(`SHIP To:`, 90, 70);

//     // Sender Details
//     doc.setFontSize(8);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.sen_contactPersonName}`, 10, 80);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.sen_buildingName}`, 10, 85);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.sen_districtArea}`, 10, 90);
//     doc
//       .setFont(undefined, "normal")
//       .text(
//         `${InitialData?.shipperDetails.sen_city}, ${
//           InitialData?.shipperDetails.postalCode || ""
//         }`,
//         10,
//         95
//       );
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.sen_country}`, 10, 100);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.en_phoneNumber}`, 10, 105);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.shipperDetails.sen_companyEmail}`, 10, 110);
//     // doc.setFont(undefined, "normal").text(`${InitialData?.tradeType}`, 10, 115);
//     doc
//       .setFont(undefined, "normal")
//       .text(`$VAT No: ${InitialData?.tradeType}`, 10, 120);
//     doc
//       .setFont(undefined, "normal")
//       .text(`$EORI: ${InitialData?.tradeType}`, 10, 125);
//     doc.setFont(undefined, "normal").text(`Shipper Reference:`, 10, 130);
//     doc.setFont(undefined, "normal").text(`Receiver Reference:`, 10, 135);

//     // Receiver Details

//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_contactPersonName}`, 90, 80);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_buildingName}`, 90, 85);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_districtArea}`, 90, 90);
//     doc
//       .setFont(undefined, "normal")
//       .text(
//         `${InitialData?.recieverDetails.rec_city}, ${
//           InitialData?.recieverDetails.postalCode || ""
//         }`,
//         90,
//         95
//       );
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_country}`, 90, 100);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_phoneNumber}`, 90, 105);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.recieverDetails.rec_companyEmail}`, 90, 110);
//     doc.setFont(undefined, "normal").text(`${InitialData?.tradeType}`, 90, 80);
//     doc
//       .setFont(undefined, "normal")
//       .text(`$VAT No: ${InitialData?.tradeType}`, 90, 120);
//     doc
//       .setFont(undefined, "normal")
//       .text(`$EORI: ${InitialData?.tradeType}`, 90, 125);
//     doc.setFont(undefined, "normal").text(`Shipper Reference:`, 90, 130);
//     doc.setFont(undefined, "normal").text(`Receiver Reference:`, 90, 135);

//     doc.autoTable(column1, data1, {
//       styles: {
//         // fillColor: [51,51,51],
//         // fillColor: [],
//         lineColor: 240,
//         lineWidth: 1,
//       },
//       columnStyles: {
//         col1: { fillColor: false },
//         col2: { fillColor: false },
//         col3: { fillColor: false },
//         col4: { fillColor: false },
//         col5: { fillColor: false },
//         col6: { fillColor: false },
//       },
//       margin: { top: 150 },
//       addPageContent: function (data) {
//         doc.text("", 40, 30);
//       },
//     });
//     const unique = [...new Map(dataArray.map((m) => [m.name, m])).values()];
//     doc.autoTable(column2, unique, {
//       styles: {
//         // fillColor: [51,51,51],
//         // fillColor: [],
//         lineColor: 240,
//         lineWidth: 1,
//       },
//       columnStyles: {
//         col1: { fillColor: false },
//         col2: { fillColor: false },
//         col3: { fillColor: false },
//         col4: { fillColor: false },
//         col5: { fillColor: false },
//         col6: { fillColor: false },
//       },
//       margin: { top: 700 },
//       addPageContent: function (InitialData) {
//         doc.text("", 40, 30);
//       },
//     });
//     doc
//       .setFont(undefined, "normal")
//       .text(
//         `I/We hereby certify that the information contained in the invoice is true and correct and that the contents of this shipment are as stated above.`,
//         10,
//         250
//       );
//     doc.setFont(undefined, "bold").text(`Name:`, 10, 260);
//     doc
//       .setFont(undefined, "normal")
//       .text(`${InitialData?.sen_contactPersonName}`, 40, 260);
//     doc.setFont(undefined, "bold").text(`Signature:`, 70, 260);
//     doc.setFont(undefined, "bold").text(`Company Stamp`, 120, 260);

//     doc.setFont(undefined, "bold").text(`Position:`, 10, 270);
//     doc
//       .setFont(undefined, "bold")
//       .text(
//         `Date of Signature: __________________________________________________________`,
//         10,
//         280
//       );
//     doc.save("invoice.pdf");
//   };
