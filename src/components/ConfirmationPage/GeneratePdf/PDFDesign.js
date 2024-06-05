import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import logo from "../../../assets/logo.png";

import arial from "../../../assets/Fonts/ARIALBD.TTF";

import arialLight from "../../../assets/Fonts/arial-light.ttf";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    height: 60,
    width: 210,
  },
  image: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
  },
  section: {
    margin: 10,
    padding: 10,
    width: 200,
    height: 120,
  },
  addressHeaderTextStlye: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  addressHeading: {
    fontWeight: "bold",
    fontSize: 8,
    marginVertical: 5,
  },
  mainContainer: {
    // flex: 4,
    marginTop: 6,
  },

  tableHeading: {
    paddingTop: "5px",
    fontSize: 20,
    marginVertical: 5,
    fontFamily: "arialBold",
    textDecoration: "underline",
  },
  tableFrame: {
    marginVertical: 5,
  },
  tableHeaderRow: {
    flexDirection: "row",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#FAFAFA",
    justifyContent: "space-between",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
  },
  tableHeaders: {
    fontSize: 6,
    borderRightWidth: 0.1,
    justifyContent: "center",
    paddingVertical: 10,
    paddingLeft: 5,
    width: "12.3%",
    borderStyle: "solid",
    borderColor: "#000000",
    border: "1px",
    borderRight: "0px",
    marginBottom: "-10px",
  },
  tableEXWHeaders: {
    fontSize: 6,
    borderRightWidth: 0.1,
    justifyContent: "center",
    paddingVertical: 8,
    paddingLeft: 10,
    width: "17.3%",
    borderStyle: "solid",
    borderColor: "black",
    border: "1px",
    borderLeft: "0px",
  },
  tableCell: {
    marginTop: "-1px",
    fontSize: 6,
    width: "12.3%",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: "black",
    border: "1px",
    borderBottomWidth: 0.1,
    borderRightWidth: 0.1,
    textAlign: "center",
    borderBottom: "1px",
  },
  tableEXWCell: {
    fontSize: 6,
    width: "14.2%",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: "black",
    borderBottomWidth: 0.1,
    borderRightWidth: 0.1,
    border: "1px",
    borderLeft: "0px",
    borderTop: "0px",
    textAlign: "center",
  },
  tableTotalChargesCell: {
    marginTop: 1,
    fontFamily: "arialBold",
    textAlign: "center",
    fontSize: 6,
    width: "14.1%",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: "#000000",
    borderRightWidth: 0.1,
  },
  packageTableTotalHeadingCell: {
    marginTop: "-1px",
    fontSize: 6,
    width: "86%",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderColor: "black",
    borderBottomWidth: 0.1,

    borderRightWidth: 0.2,
    borderLeftWidth: 0.1,
    textAlign: "center",
    borderTop: "0",
    border: "1px",
  },
  packageTableCellChargeableCBMValue: {
    marginTop: "-1px",
    fontSize: 6,
    width: "24.6%",
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderColor: "#000000",
    borderBottomWidth: 0.1,
    borderRightWidth: 0.1,
    textAlign: "center",
    border: "1px",
    borderLeft: "0px",
    borderRight: "0px",
  },
  signatureArea: {
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: "10px",
  },
  signatureFields: {
    fontWeight: "bold",
    fontSize: 8,
    marginVertical: 10,
    fontFamily: "arialBold",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  invoiceContainer: {
    display: "flex",
    // marginTop: 10,

    // marginBottom: 3,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  invoiceBox: {
    flexDirection: "row",
    display: "flex",
    fontWeight: "bold",
    fontSize: 12,
    gap: 2,
  },
});
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
const PDFDesign = ({ data }) => {
  const exwChargesArraySize =
    data?.airfreightcharges?.exwCharges?.chargeDescription.length;
  Font.register({
    family: "arialBold",
    src: arial,
  });
  Font.register({
    family: "arialLight",
    src: arialLight,
  });
  let [showExw, setShowExw] = useState(true);
  let [showDest, setShowDest] = useState(true);
  const [currentDate, setCurrentDate] = useState(getDate());
  const checkTermOfShipment = () => {
    if (data.shipmentDetails.termofshipment == 1) {
      setShowExw(true);
      setShowDest(true);
    } else if (data.shipmentDetails.termofshipment == 2) {
      setShowExw(false);
      setShowDest(true);
    } else if (data.shipmentDetails.termofshipment == 3) {
      setShowExw(true);
      setShowDest(false);
    } else if (data.shipmentDetails.termofshipment == 4) {
      setShowExw(false);
      setShowDest(false);
    } else {
      console.log("error");
    }
  };
  useEffect(() => {
    checkTermOfShipment();
  }, []);
  const renderPackageDetailsHeaders = () => {
    console.log(data.shipmentDetails.tradeItem, "fgskahsdkj");
    const keys = Object.keys(data?.shipmentDetails?.tradeItem[0]);
    return (
      <>
        <Text
          style={[
            styles.tableHeaders,
            { fontFamily: "arialBold", textAlign: "center" },
          ]}
        >
          ID
        </Text>
        {keys.includes("length") && (
          <Text style={[styles.tableHeaders, { fontFamily: "arialBold" }]}>
            Length
          </Text>
        )}
        {keys.includes("width") && (
          <Text
            style={[
              styles.tableHeaders,
              {
                fontFamily: "arialBold",
                textAlign: "center",
                textAlign: "center",
              },
            ]}
          >
            Width
          </Text>
        )}
        {keys.includes("height") && (
          <Text
            style={[
              styles.tableHeaders,
              { fontFamily: "arialBold", textAlign: "center" },
            ]}
          >
            Height
          </Text>
        )}
        {keys.includes("packageType") && (
          <Text
            style={[
              styles.tableHeaders,
              { fontFamily: "arialBold", textAlign: "center" },
            ]}
          >
            Package Type
          </Text>
        )}
        {keys.includes("natureOfPackage") && (
          <Text
            style={[
              styles.tableHeaders,
              { fontFamily: "arialBold", textAlign: "center" },
            ]}
          >
            Package Nature
          </Text>
        )}
        {keys.includes("cbm") && (
          <Text
            style={[
              styles.tableHeaders,
              { fontFamily: "arialBold", textAlign: "center" },
            ]}
          >
            CBM
          </Text>
        )}
        <Text
          style={[
            styles.tableHeaders,
            { fontFamily: "arialBold", textAlign: "center" },
          ]}
        >
          Volumetric Weight
        </Text>
        <Text
          style={[
            styles.tableHeaders,
            {
              borderTopRightRadius: 10,
              fontFamily: "arialBold",
              textAlign: "center",
            },
          ]}
        >
          Gross Weight
        </Text>
      </>
    );
  };

  const renderPackageDetailsRows = () => {
    let totalWeight = 0,
      chargeableCBM = 0,
      volumetricWeight = 0;
    // console.log("Package Detail Items", data.items);
    if (data.shipmentDetails.tradeItem.length > 0) {
      totalWeight = data?.shipmentDetails?.tradeItem?.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue.weight;
        },
        0
      );
      chargeableCBM = data?.shipmentDetails?.tradeItem.reduce(
        (accumulator, currentValue) => accumulator + currentValue.cbm,
        0
      );
      volumetricWeight = data?.shipmentDetails?.tradeItem.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.volumetricWeight,
        0
      );
    }
    // debugger;
    return (
      <>
        {data.shipmentDetails.tradeItem.map((row, id) => (
          <View style={styles.tableRow} id={id + 100}>
            <Text style={[styles.tableCell]}>{id + 1}</Text>
            <Text style={styles.tableCell}>{row.length}</Text>
            <Text style={styles.tableCell}>{row.width}</Text>
            <Text style={styles.tableCell}>{row.height}</Text>
            <Text style={styles.tableCell}>
              {row.packageType ? "Palletized" : "Non Palletized"}
            </Text>
            <Text style={styles.tableCell}>
              {row.natureOfPackage ? "Stackable" : "Non Stackable"}
            </Text>
            <Text style={styles.tableCell}>{row.cbm}</Text>
            <Text style={styles.tableCell}>{row.volumetricWeight}</Text>
            <Text style={styles.tableCell}>{row.weight}</Text>
          </View>
        ))}
        <View style={styles.tableRow}>
          <Text
            style={[
              styles.packageTableTotalHeadingCell,
              { fontFamily: "arialBold" },
            ]}
          >
            Total Weight
          </Text>
          <Text
            style={[
              styles.tableCell,
              {
                marginRight: 0,
                width: "12.%",
                borderRight: "0px",
                borderLeft: "0px",
              },
            ]}
          >
            {volumetricWeight.toFixed(2)}
          </Text>
          <Text style={[styles.tableCell, {}]}>{totalWeight.toFixed(2)}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text
            style={[
              styles.packageTableTotalHeadingCell,
              { fontFamily: "arialBold", width: "87%" },
            ]}
          >
            Chargeable Weight
          </Text>
          <Text style={styles.packageTableCellChargeableCBMValue}>
            {totalWeight > volumetricWeight
              ? totalWeight.toFixed(2)
              : volumetricWeight.toFixed(2)}
          </Text>
        </View>
      </>
    );
  };

  const renderSelectedServicesHeaders = () => {
    const keys = Object.keys(data.selectedService);
    return (
      <>
        {(keys.includes("companyname") || keys.includes("name")) && (
          <Text style={[styles.tableHeaders]}>Service Name</Text>
        )}
        {keys.includes("noofpackage") && (
          <Text style={styles.tableHeaders}>Package</Text>
        )}
        {keys.includes("chargeableWeight") && (
          <Text style={[styles.tableHeaders]}>
            {data.serviceType == 2 && data.serviceTypeOpt == 2
              ? "Chargeable Weight"
              : "CBM"}
          </Text>
        )}
        {keys.includes("minCharge") && (
          <Text style={styles.tableHeaders}>Min Charge</Text>
        )}
        {keys.includes("ratePerKg") && (
          <Text style={styles.tableHeaders}>Rate / Unit</Text>
        )}
        {keys.includes("rate") && (
          <Text style={styles.tableHeaders}>Rate / Kg</Text>
        )}
        {keys.includes("chargeablerates") && (
          <Text style={styles.tableHeaders}>Rates Charged</Text>
        )}
        {keys.includes("overweight") && (
          <Text style={styles.tableHeaders}>Total Over-Weight Charges</Text>
        )}
        {keys.includes("oversize") && (
          <Text style={styles.tableHeaders}>Total Over-Size Charges</Text>
        )}
        {keys.includes("stackable") && (
          <Text style={styles.tableHeaders}>Total Non-Stackable Charges</Text>
        )}

        {keys.includes("insuranceCharges") && (
          <Text style={styles.tableHeaders}>Insurance</Text>
        )}
        {keys.includes("fuelSurcharge") && (
          <Text style={styles.tableHeaders}>Fuel Surcharge</Text>
        )}
        {keys.includes("emergency") && (
          <Text style={styles.tableHeaders}>Emergency Charges</Text>
        )}
        {keys.includes("freight") && (
          <Text style={styles.tableHeaders}>Ocean Freight</Text>
        )}
        {/* change object keys in below two lines */}
        {keys.includes("blValue") && (
          <Text style={styles.tableHeaders}>BL / Unit</Text>
        )}
        {keys.includes("totalService") && (
          <Text style={styles.tableHeaders}>Total Service</Text>
        )}
        {keys.includes("totalExwCharges") && (
          <Text style={styles.tableHeaders} break>
            EXW Charges
          </Text>
        )}
        {keys.includes("additionalCharges") && (
          <Text style={styles.tableHeaders} break>
            Additional Charges
          </Text>
        )}
        {keys.includes("totalDestCharges") && (
          <Text style={styles.tableHeaders}>Destination Charges</Text>
        )}
        <Text style={[styles.tableHeaders, { borderTopRightRadius: 10 }]}>
          Total Amount(USD)
        </Text>
      </>
    );
  };

  const renderSelectedServicesRows = () => {
    const keys = Object.keys(data.selectedService);
    const service = data.selectedService;

    return (
      <View style={styles.tableRow}>
        {keys.includes("companyname") && (
          <Text style={styles.tableCell}>{service.companyname}</Text>
        )}
        {keys.includes("name") && (
          <Text style={styles.tableCell}>{service.name}</Text>
        )}
        {keys.includes("noofpackage") && (
          <Text style={styles.tableCell}>{service.noofpackage}</Text>
        )}
        {keys.includes("chargeableWeight") && (
          <Text style={[styles.tableCell]}>{service.chargeableWeight}</Text>
        )}
        {keys.includes("rate") && (
          <Text style={styles.tableCell}>{service.rate}</Text>
        )}
        {keys.includes("chargeablerates") && (
          <Text style={styles.tableCell}>{service.chargeablerates}</Text>
        )}
        {keys.includes("overweight") && (
          <Text style={styles.tableCell}>{service.overweight}</Text>
        )}
        {keys.includes("oversize") && (
          <Text style={styles.tableCell}>{service.oversize}</Text>
        )}

        {keys.includes("stackable") && (
          <Text style={styles.tableCell}>{service.stackable}</Text>
        )}
        {keys.includes("insuranceCharges") && (
          <Text style={styles.tableCell}>{service.insuranceCharges}</Text>
        )}
        {keys.includes("fuelSurcharge") && (
          <Text style={styles.tableCell}>{service.fuelSurcharge}</Text>
        )}
        {keys.includes("emergency") && (
          <Text style={styles.tableCell}>{service.emergency}</Text>
        )}

        {keys.includes("minCharge") && (
          <Text style={styles.tableCell}>{service.minCharge}</Text>
        )}
        {keys.includes("ratePerKg") && (
          <Text style={styles.tableCell}>{service.ratePerKg}</Text>
        )}
        {keys.includes("freight") && (
          <Text style={styles.tableCell}>{service.freight}</Text>
        )}
        {/* change object keys in below two lines */}
        {keys.includes("blValue") && (
          <Text style={styles.tableCell}>{service.blValue}</Text>
        )}
        {keys.includes("totalService") && (
          <Text style={styles.tableCell}>{service.totalService}</Text>
        )}

        {keys.includes("additionalCharges") && (
          <Text style={styles.tableCell}>{service.additionalCharges}</Text>
        )}
        {keys.includes("totalExwCharges") && (
          <Text style={styles.tableCell}>{service.totalExwCharges}</Text>
        )}
        {keys.includes("totalDestCharges") && (
          <Text style={styles.tableCell}>{service.totalDestCharges}</Text>
        )}
        <Text style={styles.tableCell}>{service.totalCharges}</Text>
      </View>
    );
  };

  const renderEXWChargesHeaders = () => {
    let keys;
    if (data.serviceType == 2 && data.serviceTypeOpt == 2) {
      keys = Object.keys(
        data.seafreightlclcharges.exwCharges.chargeDescription[0]
      );
    }
    if (data.serviceType == 2 && data.serviceTypeOpt == 1) {
      keys = Object.keys(
        data.seafreightcharges.exwCharges.chargeDescription[0]
      );
    }
    if (data.serviceType == 1 && data.serviceTypeOpt == 1) {
      keys = Object.keys(
        data.airfreightcharges.exwCharges.chargeDescription[0]
      );
    }
    return (
      <>
        {keys.includes("chargeName") && (
          <Text style={[styles.tableEXWHeaders, { width: "17.2%" }]}>
            Description
          </Text>
        )}
        {keys.includes("chargeableWeight") && (
          <Text style={styles.tableEXWHeaders}>Chargeable CBM</Text>
        )}
        {keys.includes("cbm") && (
          <Text style={styles.tableEXWHeaders}>CBM</Text>
        )}
        {keys.includes("minCharge") && (
          <Text style={styles.tableEXWHeaders}>Min Charge</Text>
        )}
        {keys.includes("ratePerKg") && (
          <Text style={styles.tableEXWHeaders}>Rate / Unit</Text>
        )}
        {keys.includes("charged") && (
          <Text style={styles.tableEXWHeaders}>Charged (USD)</Text>
        )}
        <Text style={[styles.tableEXWHeaders, { borderTopRightRadius: 10 }]}>
          Total Charges (USD)
        </Text>
      </>
    );
  };

  const renderEXWChargesRows = () => {
    let exwCharges;
    let totalCharge;
    if (data.serviceType == 2 && data.serviceTypeOpt == 2) {
      exwCharges = data.seafreightlclcharges.exwCharges?.chargeDescription;
      totalCharge = data.seafreightlclcharges.exwCharges?.totalCharge;
    }
    if (data.serviceType == 2 && data.serviceTypeOpt == 1) {
      exwCharges = data.seafreightcharges.exwCharges?.chargeDescription;
      totalCharge = data.seafreightcharges.exwCharges?.totalCharge;
    }
    if (data.serviceType == 1 && data.serviceTypeOpt == 1) {
      exwCharges = data.airfreightcharges.exwCharges?.chargeDescription;
      totalCharge = data.airfreightcharges.exwCharges?.totalCharge;
    }

    const midVal = Math.floor(exwCharges.length / 2);
    return exwCharges.map((row, id) => (
      <View style={[styles.tableRow]} id={id + 100}>
        <Text style={[styles.tableEXWCell, { borderLeft: 0.1 }]}>
          {row.chargeName}
        </Text>
        <Text style={styles.tableEXWCell}>{row.chargeableWeight}</Text>
        <Text style={styles.tableEXWCell}>{row.cbm}</Text>
        <Text style={styles.tableEXWCell}>{row.minCharge}</Text>
        <Text style={styles.tableEXWCell}>{row.ratePerKg}</Text>
        <Text style={styles.tableEXWCell}>{row.charged}</Text>
        <Text
          style={[
            styles.tableTotalChargesCell,
            id === exwCharges.length - 1
              ? { borderBottom: "1px", borderBottomColor: "black" }
              : {},
          ]}
        >
          {midVal === id ? totalCharge : ""}
        </Text>
      </View>
    ));
  };

  const renderDestinationChargesHeaders = () => {
    let keys;
    if (data.serviceType == 2 && data.serviceTypeOpt == 2) {
      keys = Object.keys(
        data.seafreightlclcharges.destCharges.chargeDescription[0]
      );
    }
    if (data.serviceType == 2 && data.serviceTypeOpt == 1) {
      keys = Object.keys(
        data.seafreightcharges.destCharges.chargeDescription[0]
      );
    }
    if (data.serviceType == 1 && data.serviceTypeOpt == 1) {
      keys = Object.keys(
        data.airfreightcharges.destCharges.chargeDescription[0]
      );
    }
    return (
      <>
        {keys.includes("chargeName") && (
          <Text style={[styles.tableEXWHeaders]}>Description</Text>
        )}
        {keys.includes("chargeableWeight") && (
          <Text style={styles.tableEXWHeaders}>Chargeable CBM</Text>
        )}
        {keys.includes("cbm") && (
          <Text style={styles.tableEXWHeaders}>CBM</Text>
        )}
        {keys.includes("minCharge") && (
          <Text style={styles.tableEXWHeaders}>Min Charge</Text>
        )}
        {keys.includes("ratePerKg") && (
          <Text style={styles.tableEXWHeaders}>Rate / Unit</Text>
        )}
        {keys.includes("charged") && (
          <Text style={styles.tableEXWHeaders}>Charged (USD)</Text>
        )}
        <Text style={[styles.tableEXWHeaders, { borderTopRightRadius: 10 }]}>
          Total Charges (USD)
        </Text>
      </>
    );
  };

  const renderDestinationChargesRows = () => {
    let destCharges;
    let totalCharge;
    if (data.serviceType == 2 && data.serviceTypeOpt == 2) {
      destCharges = data.seafreightlclcharges.destCharges?.chargeDescription;
      totalCharge = data.seafreightlclcharges.destCharges?.totalCharge;
    }
    if (data.serviceType == 2 && data.serviceTypeOpt == 1) {
      destCharges = data.seafreightcharges.destCharges?.chargeDescription;
      totalCharge = data.seafreightcharges.destCharges?.totalCharge;
    }
    if (data.serviceType == 1 && data.serviceTypeOpt == 1) {
      destCharges = data.airfreightcharges.destCharges?.chargeDescription;
      totalCharge = data.airfreightcharges.destCharges?.totalCharge;
    }

    const midVal = Math.floor(destCharges.length / 2);

    // console.log("destCharges", destCharges);
    return destCharges.map((row, id) => (
      <View style={styles.tableRow} id={id + 100}>
        <Text style={[styles.tableEXWCell, { borderLeft: 0.1 }]}>
          {row.chargeName}
        </Text>
        <Text style={styles.tableEXWCell}>{row.chargeableWeight}</Text>
        <Text style={styles.tableEXWCell}>{row.cbm}</Text>
        <Text style={styles.tableEXWCell}>{row.minCharge}</Text>
        <Text style={styles.tableEXWCell}>{row.ratePerKg}</Text>
        <Text style={styles.tableEXWCell}>{row.charged}</Text>
        <Text
          style={[
            styles.tableTotalChargesCell,
            id === destCharges.length - 1
              ? { borderBottom: "1px", borderColor: "black" }
              : {},
          ]}
        >
          {midVal === id ? totalCharge : ""}
        </Text>
      </View>
    ));
  };

  const renderAdditionalChargesHeaders = () => {
    let keys;
    if (
      data.serviceType == 2 &&
      data.serviceTypeOpt == 2 &&
      data.shipmentDetails.termofshipment == 4
    ) {
      keys = Object.keys(
        data.seafreightlclcharges.additionalCharges.chargeDescription[0]
      );
    }
    if (
      data.serviceType == 2 &&
      data.serviceTypeOpt == 1 &&
      data.shipmentDetails.termofshipment == 4
    ) {
      keys = Object.keys(
        data.seafreightcharges.additionalCharges.chargeDescription[0]
      );
    }

    return (
      <>
        {keys.includes("chargeName") && (
          <Text style={[styles.tableEXWHeaders]}>Description</Text>
        )}
        {keys.includes("chargeableWeight") && (
          <Text style={styles.tableEXWHeaders}>Chargeable CBM</Text>
        )}
        {keys.includes("cbm") && (
          <Text style={styles.tableEXWHeaders}>CBM</Text>
        )}
        {keys.includes("minCharge") && (
          <Text style={styles.tableEXWHeaders}>Min Charge</Text>
        )}
        {keys.includes("ratePerKg") && (
          <Text style={styles.tableEXWHeaders}>Rate / Unit</Text>
        )}
        {keys.includes("charged") && (
          <Text style={styles.tableEXWHeaders}>Charged (USD)</Text>
        )}
        <Text style={[styles.tableEXWHeaders, { borderTopRightRadius: 10 }]}>
          Total Charges (USD)
        </Text>
      </>
    );
  };

  const renderAdditionalChargesRows = () => {
    let addCharges;
    let totalCharge;
    if (
      data.serviceType == 2 &&
      data.serviceTypeOpt == 2 &&
      data.shipmentDetails.termofshipment == 4
    ) {
      addCharges =
        data.seafreightlclcharges.additionalCharges?.chargeDescription;
      totalCharge = data.seafreightlclcharges.additionalCharges?.totalCharge;
    }
    if (
      data.serviceType == 2 &&
      data.serviceTypeOpt == 1 &&
      data.shipmentDetails.termofshipment == 4
    ) {
      addCharges = data.seafreightcharges.additionalCharges?.chargeDescription;
      totalCharge = data.seafreightcharges.additionalCharges?.totalCharge;
    }

    const midVal = Math.floor(addCharges.length / 2);
    return addCharges.map((row, id) => (
      <View style={styles.tableRow} id={id + 100}>
        <Text style={[styles.tableEXWCell, { borderLeft: 0.1 }]}>
          {row.chargeName}
        </Text>
        <Text style={styles.tableEXWCell}>{row.chargeableWeight}</Text>
        <Text style={styles.tableEXWCell}>{row.cbm}</Text>
        <Text style={styles.tableEXWCell}>{row.minCharge}</Text>
        <Text style={styles.tableEXWCell}>{row.ratePerKg}</Text>
        <Text style={styles.tableEXWCell}>{row.charged}</Text>
        <Text
          style={[
            styles.tableTotalChargesCell,
            id === addCharges.length - 1 ? { borderBottom: 0.1 } : {},
          ]}
        >
          {midVal === id ? totalCharge : ""}
        </Text>
      </View>
    ));
  };
  console.log(data);
  return (
    <Document title="Demo">
      <Page size="A4" style={styles.page} wrap>
        <View
          style={{
            borderStyle: "solid",
            borderColor: "black",
            border: "1px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderStyle: "solid",
              borderColor: "black",
              border: "2px",
              textAlign: "right",
              borderBottom: "1px",
            }}
          >
            <View style={{}}>
              <Image style={{ width: "180px", height: "120px" }} src={logo} />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "5px",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontFamily: "arialBold",
                }}
              >
                Logistic LLC
              </Text>
              <Text
                style={{
                  fontSize: "10px",
                  fontFamily: "arialBold",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                TRN No: {data.tradeId}
              </Text>
              <Text
                style={{
                  fontSize: "12px",
                  fontFamily: "arialLight",
                  display: "flex",
                  fontWeight: "ultralight",
                  justifyContent: "flex-end",
                  textAlign: "right",
                  width: "200px",
                  marginTop: "5px",
                  lineHeight: "1px",
                }}
              >
                Office No: XXX, The ABC Tower, XXX Street, Dubai, UAE UNITED
                ARAB EMIRATES. +832-5-5642121 Email: info@logistic.com | Web:
                https://demo-logistics-system.vercel.app/
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: "5px",
              fontFamily: "arialBold",
              backgroundColor: "#0E51A0",
              color: "white",
              height: "40px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>BOOKING INVOICE-{data.tradeId}</Text>
          </View>
          <View style={[styles.invoiceContainer, { marginTop: "5px" }]}>
            {/* <View style={[styles.invoiceBox]}>
              <Text style={{ fontFamily: "arialBold" }}>Invoice Number :</Text>
              <Text>{data.tradeId}</Text>
            </View>
            <View style={styles.invoiceBox}>
            <Text>Invoice Date :</Text>
            <Text>{currentDate}</Text>
          </View> */}
          </View>

          <View
            style={{
              width: "100%",
              height: "20%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                fontFamily: "arialBold",
                fontSize: "10px",
                lineHeight: "2px",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "8px",
                }}
              >
                <Text>Bill to: </Text>
                <View
                  style={{
                    width: "200px",
                    height: "auto",
                    lineHeight: "1.2px",
                  }}
                >
                  <Text style={{ fontFamily: "arialLight" }}>
                    {data.shipperDetails.sen_companyName},
                    {data.shipperDetails.sen_city},
                    {data.shipperDetails.sen_country}
                  </Text>
                </View>
              </View>
              <Text>
                Consignee:{" "}
                {
                  <Text style={{ fontFamily: "arialLight" }}>
                    <Text>
                      {
                        <Text style={{ fontFamily: "arialLight" }}>
                          {data.shipperDetails.sen_companyName}{" "}
                        </Text>
                      }{" "}
                    </Text>
                  </Text>
                }{" "}
              </Text>
              <Text>Shipment No: </Text>
              <Text>MBL / MAWB No: </Text>
              <Text>Port of Loading: </Text>
              <Text>Vessel / Flight Name: </Text>
              <Text>Voyage / Flight No: </Text>
              <Text>Narration: </Text>
              <Text>Reference No: </Text>
              <Text>BOE No: </Text>
              <Text>Remarks: </Text>
            </View>

            <View
              style={{
                width: "50%",
                height: "100%",
                fontFamily: "arialBold",
                fontSize: "10px",
                lineHeight: "2px",
                alignItems: "flex-start",
              }}
            >
              <Text>
                Invoice No:{" "}
                <Text style={{ fontFamily: "arialLight" }}>
                  {data.tradeId}{" "}
                </Text>{" "}
              </Text>
              <Text>
                Shipper:{" "}
                <Text style={{ fontFamily: "arialLight" }}>
                  {data.recieverDetails.rec_companyName}{" "}
                </Text>{" "}
              </Text>
              <Text>Job: </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "8px",
                }}
              >
                <Text>Place of Receipt: </Text>
                <View
                  style={{
                    width: "200px",
                    height: "auto",
                    lineHeight: "1.2px",
                  }}
                >
                  <Text style={{ fontFamily: "arialLight" }}>
                    {data.recieverDetails.rec_companyName},
                    {data.recieverDetails.rec_city},
                    {data.recieverDetails.rec_country}{" "}
                  </Text>{" "}
                </View>
              </View>
              <Text>Port of Discharge :</Text>
              <Text>Place of Delivery</Text>
              <Text>ETD :</Text>
              <Text>ETA :</Text>
              <Text>
                Currency: <Text style={{ fontFamily: "arialLight" }}>AED </Text>{" "}
              </Text>
              <Text>HBL/AWB No.:</Text>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.tableHeading}>Package Details</Text>
            <View style={styles.tableFrame}>
              <View style={styles.tableHeaderRow}>
                {renderPackageDetailsHeaders()}
              </View>
              {/* Add more rows as needed */}
              <View>{renderPackageDetailsRows()}</View>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <Text style={styles.tableHeading}>Selected Service</Text>
            <View style={styles.tableFrame}>
              <View style={styles.tableHeaderRow}>
                {renderSelectedServicesHeaders()}
              </View>
              <View>{renderSelectedServicesRows()}</View>
            </View>
          </View>
          {data.serviceType == 2 &&
            data.shipmentDetails.termofshipment == 4 && (
              <View style={styles.mainContainer}>
                <Text style={styles.tableHeading}>Additional Charges</Text>
                <View style={styles.tableFrame}>
                  <View style={styles.tableHeaderRow}>
                    {renderAdditionalChargesHeaders()}
                  </View>
                  {/* Add more rows as needed */}
                  <View>{renderAdditionalChargesRows()}</View>
                </View>
              </View>
            )}

          {!(data.serviceType == 1 && data.serviceTypeOpt == 2) && (
            <>
              {showExw && (
                <View style={styles.mainContainer}>
                  <Text
                    style={[
                      styles.tableHeading,
                      { marginTop: exwChargesArraySize > 3 ? "140px" : "0px" },
                    ]}
                  >
                    EXW Charges
                  </Text>
                  <View style={styles.tableFrame}>
                    <View style={styles.tableHeaderRow}>
                      {renderEXWChargesHeaders()}
                    </View>
                    {/* Add more rows as needed */}
                    <View>{renderEXWChargesRows()}</View>
                  </View>
                </View>
              )}
              {showDest && (
                <View style={styles.mainContainer}>
                  <Text style={[styles.tableHeading, ,]} break>
                    Destination Charges
                  </Text>
                  <View style={styles.tableFrame}>
                    <View style={styles.tableHeaderRow}>
                      {renderDestinationChargesHeaders()}
                    </View>
                    <View>{renderDestinationChargesRows()}</View>
                  </View>
                </View>
              )}
            </>
          )}
          <View style={styles.signatureArea}>
            <View style={{ textAlign: "right" }}>
              <Text style={styles.signatureFields}>
                HOD Signature:_____________________________________
              </Text>
              <Text style={styles.signatureFields}>
                Manager Signature:__________________________________
              </Text>
              <Text style={styles.signatureFields}>
                Admin Signature:____________________________________
              </Text>
            </View>
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
};

export default PDFDesign;
