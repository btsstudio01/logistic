import React from "react";
import PDFDesign from "../../components/ConfirmationPage/GeneratePdf/PDFDesign";
import { useSelector } from "react-redux";
import { PDFDownloadLink, BlobProvider, PDFViewer } from "@react-pdf/renderer";

const ShowPDF = () => {
  const InitialData = useSelector((state) => state.data).data;
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <PDFDesign id={Math.random() * 1000} data={InitialData} />
    </PDFViewer>
  );
};

export default ShowPDF;
