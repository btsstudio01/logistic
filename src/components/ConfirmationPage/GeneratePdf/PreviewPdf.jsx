import logo from "../../../assets/logo.png";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";

export const PreviewPDF = (InitialData) => {
  const doc = new jsPDF();
  let dataArray;
  const pdfCurrentDate = () => {
    let yourDate = new Date();
    const temp = yourDate.toISOString().split("T")[0];
    return temp;
  };
  let data1 = {};
  const column1 = [
    { title: "no.", dataKey: `number` },
    { title: "weight", dataKey: "weight" },
    { title: "height", dataKey: "height" },
    { title: "width", dataKey: "width" },
    { title: "length", dataKey: "length" },
    { title: "packageType", dataKey: "packageType" },
    { title: "Package Nature", dataKey: "Nature" },
    ...(InitialData?.serviceType == 1 && InitialData?.serviceTypeOpt == 2
      ? [
          { title: "Over Size", dataKey: "overSize" },
          { title: "Over Weight", dataKey: "overWeight" },
        ]
      : []),
  ];
  let data2 = [InitialData?.selectedService];
  // let data2 = [];
  console.log("data2", data2);
  const column2 = [
    { title: "Service Name", dataKey: "companyname" },
    { title: "Packges", dataKey: "noofpackage" },
    { title: "Weight", dataKey: "chargeableWeight" },
    { title: "Min Charge", dataKey: "minCharge" },

    ...(InitialData?.serviceType == 2
      ? [
          { title: "Rate / unit", dataKey: "ratePerKg" },
          { title: "BL / unit", dataKey: "ratePerKg" },
          { title: "Ocean Freight", dataKey: "oceanFreight" },

          { title: "FSC / unit", dataKey: "ratefsc" },
          { title: "Total Srevice", dataKey: "fsc" },
        ]
      : [
          { title: "Rate / unit", dataKey: "ratePerKg" },
          { title: "Air Freight", dataKey: "airFreight" },
          { title: "FSC / unit", dataKey: "ratefsc" },
          { title: "Total FSC", dataKey: "fsc" },
        ]),

    ...(!(InitialData?.serviceType == 1 && InitialData?.serviceTypeOpt == 2)
      ? [
          {
            title: "EXW CHARGES",
            dataKey: `totalExwCharges`,
          },
          {
            title: "DEST CHARGES",
            dataKey: `totalDestCharges`,
          },
        ]
      : []),
    { title: "Total Amount", dataKey: "totalCharges" },
  ];
  if (InitialData?.serviceType == 1 && InitialData?.serviceTypeOpt == 2) {
    const updatedRows1 = JSON.stringify(
      InitialData?.shipmentDetails?.tradeItem
    );
    const updatedRows = JSON.parse(updatedRows1);
    const Data = [...updatedRows];
    const data = InitialData?.charges?.map((e, i) => {
      e?.peritemcharges[i]?.oversize &&
        (Data[i].overSize = e?.peritemcharges[i]?.oversize);
      e?.peritemcharges[i]?.nonstackable &&
        (Data[i].nonStackable = e?.peritemcharges[i]?.nonstackable);
      e?.peritemcharges[i]?.overweight &&
        (Data[i].overWeight = e?.peritemcharges[i]?.overweight);
    });
    data1 = Data?.map((item, i) => {
      console.log(item);
      return {
        number: i + 1,
        weight: item?.weight,
        height: item?.height,
        length: item?.length,
        width: item?.width,
        packageType: item?.packageType ? "Pallteized" : "Non-Palletized",
        overSize: item?.overSize,
        overWeight: item?.overWeight ? item?.overWeight : "-",
        Nature: item?.natureOfPackage ? "Stackable" : "Non-Stackable",
      };
    });
  } else {
    data1 = InitialData?.shipmentDetails?.tradeItem?.map((item, i) => {
      return {
        number: i + 1,
        weight: item?.weight,
        height: item?.height,
        length: item?.length,
        width: item?.width,
        packageType: item?.packageType ? "Pallteized" : "Non-Palletized",
        Nature: item?.natureOfPackage ? "Stackable" : "Non-Stackable",
      };
    });
  }

  doc.setFontSize(40);
  doc.addImage(logo, "JPEG", 10, 5, 100, 30);
  // doc.text(`Proforma Invoice`, 10, 10);
  doc.setFontSize(12);
  doc.setFont(undefined, "bold").text(`AWB No:`, 10, 60);
  doc.setFont(undefined, "normal").text(`010233:`, 30, 60);

  doc.setFont(undefined, "bold").text(`Invoice Date: `, 65, 60);
  doc.setFont(undefined, "normal").text(pdfCurrentDate(), 95, 60);
  doc.setFont(undefined, "bold").text(`Invoice No:`, 120, 60);
  doc
    .setFont(undefined, "normal")
    .text(`${Math.floor(1000 + Math.random() * 9000)}`, 160, 60);

  doc.setFont(undefined, "bold").text(`SHIP FROM:`, 10, 70);
  doc.setFont(undefined, "bold").text(`SHIP To:`, 90, 70);

  // Sender Details
  doc.setFontSize(8);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_contactPersonName}`, 10, 80);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_buildingName}`, 10, 85);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_districtArea}`, 10, 90);
  doc
    .setFont(undefined, "normal")
    .text(
      `${InitialData?.shipperDetails.sen_city}, ${
        InitialData?.shipperDetails.postalCode || ""
      }`,
      10,
      95
    );
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_country}`, 10, 100);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_phoneNumber}`, 10, 105);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_companyEmail}`, 10, 110);
  doc.setFont(undefined, "normal").text(`${InitialData?.tradeType}`, 10, 115);
  doc
    .setFont(undefined, "normal")
    .text(`$VAT No: ${InitialData?.tradeType}`, 10, 120);
  doc
    .setFont(undefined, "normal")
    .text(`$EORI: ${InitialData?.tradeType}`, 10, 125);
  doc.setFont(undefined, "normal").text(`Shipper Reference:`, 10, 130);
  doc.setFont(undefined, "normal").text(`Receiver Reference:`, 10, 135);

  // Receiver Details

  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_contactPersonName}`, 90, 80);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_buildingName}`, 90, 85);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_districtArea}`, 90, 90);
  doc
    .setFont(undefined, "normal")
    .text(
      `${InitialData?.recieverDetails.rec_city}, ${
        InitialData?.recieverDetails.postalCode || ""
      }`,
      90,
      95
    );
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_country}`, 90, 100);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_phoneNumber}`, 90, 105);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.recieverDetails.rec_companyEmail}`, 90, 110);
  doc.setFont(undefined, "normal").text(`${InitialData?.tradeType}`, 90, 80);
  doc
    .setFont(undefined, "normal")
    .text(`$VAT No: ${InitialData?.tradeType}`, 90, 120);
  doc
    .setFont(undefined, "normal")
    .text(`$EORI: ${InitialData?.tradeType}`, 90, 125);
  doc.setFont(undefined, "normal").text(`Shipper Reference:`, 90, 130);
  doc.setFont(undefined, "normal").text(`Receiver Reference:`, 90, 135);

  doc.autoTable(column1, data1, {
    styles: {
      // fillColor: [51,51,51],
      // fillColor: [],
      lineColor: 240,
      lineWidth: 1,
    },
    columnStyles: {
      col1: { fillColor: false },
      col2: { fillColor: false },
      col3: { fillColor: false },
      col4: { fillColor: false },
      col5: { fillColor: false },
      col6: { fillColor: false },
    },
    margin: { top: 150 },
    addPageContent: function (InitialData) {
      doc.text("", 40, 30);
    },
  });
  //   const unique = [...new Map(dataArray.map((m) => [m.name, m])).values()];
  doc.autoTable(column2, data2, {
    styles: {
      // fillColor: [51,51,51],
      // fillColor: [],
      lineColor: 240,
      lineWidth: 1,
    },
    columnStyles: {
      col1: { fillColor: false },
      col2: { fillColor: false },
      col3: { fillColor: false },
      col4: { fillColor: false },
      col5: { fillColor: false },
      col6: { fillColor: false },
    },
    margin: { top: 700 },
    addPageContent: function (InitialData) {
      doc.text("", 40, 30);
    },
  });
  // doc.addPage([width, height], "p");

  doc
    .setFont(undefined, "normal")
    .text(
      `I/We hereby certify that the information contained in the invoice is true and correct and that the contents of this shipment are as stated above.`,
      10,
      250
    );
  doc.setFont(undefined, "bold").text(`Name:`, 10, 260);
  doc
    .setFont(undefined, "normal")
    .text(`${InitialData?.shipperDetails.sen_contactPersonName}`, 40, 260);
  doc.setFont(undefined, "bold").text(`Signature:`, 70, 260);
  doc.setFont(undefined, "bold").text(`Company Stamp`, 120, 260);

  doc.setFont(undefined, "bold").text(`Position:`, 10, 270);
  doc
    .setFont(undefined, "bold")
    .text(
      `Date of Signature: __________________________________________________________`,
      10,
      280
    );

  const pdfDataUri = doc.output("datauristring");
  const previewWindow = window.open("", "_blank");
  const iframe = document.createElement("iframe");
  iframe.src = pdfDataUri;
  iframe.width = "100%";
  iframe.height = "100%";
  previewWindow.document.body.appendChild(iframe);
};
