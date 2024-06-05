import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../redux/DataRedux";

export const AirExpressServiceTable = (noService) => {
  const dispatch = useDispatch();
  const InitialData = useSelector((state) => state.data.data);

  const [selectedRow, setSelectedRow] = useState(
    InitialData?.selectedService?.key
  );

  useEffect(() => {
    setSelectedRow(null);
    dispatch(updateData({ selectedService: "" }));
  }, [noService]);

  return [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_, record, index) => (
        <Checkbox
          checked={selectedRow === record?.key}
          onChange={() => {
            setSelectedRow(record.key);
            dispatch(updateData({ selectedService: record }));
          }}
        />
      ),
    },
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "no of package",
    //   dataIndex: "noofpackage",
    //   key: "noofpackage",
    //   render: (val, record) => {
    //     return <span>{val}</span>;
    //   },
    // },

    {
      title: "Chargeable Weight",
      dataIndex: "chargeableWeight",
      key: "chargeableWeight",
      render: (weight) => {
        return <span>{weight}</span>;
      },
    },
    {
      title: "Rate Per Kg",
      dataIndex: "rate",
      key: "rate",
      render: (rate) => {
        return <span>{rate}</span>;
      },
    },

    {
      title: "Rates Charged",
      dataIndex: "chargeablerates",
      key: "chargeableWeight",
      render: (chargeablerates) => {
        return <span>{chargeablerates}</span>;
      },
    },
    {
      title: "Overweight Charges",
      dataIndex: "overweight",
      key: "overweight",
      render: (overweight) => {
        return <span> {overweight}</span>;
      },
    },
    {
      title: "Oversize Charges",
      dataIndex: "oversize",
      key: "oversize",
      render: (oversize) => {
        return <span>{oversize}</span>;
      },
    },

    // {
    //   title: "Address Correction",
    //   dataIndex: "addresscorrection",
    //   key: "addresscorrection",
    //   render: (address, record) => {
    //     return <span>{address ? address : "N/A"}</span>;
    //   },
    // },
    {
      title: "Non-Stackable Charges",
      dataIndex: "stackable",
      key: "stackable",
      render: (stack) => {
        return <span>{stack ? stack : 0}</span>;
      },
    },

    {
      title: "Insurance Charges",
      dataIndex: "insuranceCharges",
      key: "insuranceCharges",
      render: (insuranceCharges) => {
        return <span>{insuranceCharges ? insuranceCharges : 0}</span>;
      },
    },

    {
      title: "Fuel Surcharge (per pcs)",
      dataIndex: "fuelSurcharge",
      key: "fuelSurcharge",
      render: (price, record, index) => {
        return <span>{price ? price : 0}</span>;
      },
    },
    {
      title: "Emergency",
      dataIndex: "emergency",
      key: "emergency",
      render: (price) => {
        return <span>{price}</span>;
      },
    },

    {
      title: "Total Amount ",
      dataIndex: "totalCharges",
      key: "totalCharges",
      render: (val) => {
        return (
          <span>
            <b>{val}</b>
          </span>
        );
      },
    },
  ];
};

export const PackageDetailsColumns = () => {
  const InitialData = useSelector((state) => state.data.data);

  let columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) =>
        text ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0px",
              margin: "0px",
            }}
          >
            <b>{text} </b>
          </p>
        ) : (
          index + 1
        ),
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable Weight" ||
          text.id == "Chargeable CBM"
            ? InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 2
              ? 9
              : 7
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },

    {
      title: "length",
      dataIndex: "length",
      key: "length",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "width",
      dataIndex: "width",
      key: "width",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "height",
      dataIndex: "height",
      key: "height",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;

        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "Package Type",
      dataIndex: "packageType",
      key: "packageType",
      render: (val) => {
        return <span>{val ? "Palletized" : "Non-Palletized"}</span>;
      },
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "Package Nature",
      dataIndex: "natureOfPackage",
      key: "natureOfPackage",
      render: (val) => {
        return <span>{val ? "Stackable" : "Not Stackable"}</span>;
      },
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "CBM",
      dataIndex: "cbm",
      key: "cbm",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" ||
          text.id == "Chargeable CBM" ||
          text.id == "Chargeable Weight"
            ? 0
            : 1;
        return {
          colSpan: colSpan,
        };
      },
    },
    {
      title: "Volumetric Weight",
      dataIndex: "volumetricWeight",
      key: "volumetricWeight",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Chargeable CBM" || text.id == "Chargeable Weight" ? 2 : 1;
        return {
          colSpan: colSpan,
        };
      },
      render: (text, record, index) =>
        record?.id == "Chargeable CBM" || record.id == "Chargeable Weight" ? (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0px",
              margin: "0px",
            }}
          >
            {/* <b>{record.chargeableWeight} </b> */}
            <b>{text} </b>
          </p>
        ) : (
          text
        ),
    },

    {
      title: "Gross Weight",
      dataIndex: "weight",
      key: "weight",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Chargeable CBM" || text.id == "Chargeable Weight" ? 0 : 1;
        return {
          colSpan: colSpan,
        };
      },
    },

    // {
    //   title: "Non-Stackable Charges",
    //   dataIndex: "nonStackable",
    //   key: "nonStackable",
    //   render: (val) => {
    //     return <span>{val ? val : "N/A"}</span>;
    //   },
    // },
  ];
  let additionalColumns = [
    {
      title: "Over Size Charged",
      dataIndex: "oversize",
      key: "oversize",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" || text.id == "Chargeable Weight" ? 0 : 1;
        return {
          colSpan: colSpan,
        };
      },
      render: (val) => {
        return <span>{val ? "YES" : "NO"}</span>;
      },
    },
    {
      title: "Over Weight Charged",
      dataIndex: "overweight",
      key: "overweight",
      onCell: (text, record, rowIndex) => {
        let colSpan =
          text.id == "Total Weight" || text.id == "Chargeable Weight" ? 0 : 1;
        return {
          colSpan: colSpan,
        };
      },
      render: (val, record) => {
        return <span>{val ? "YES" : "NO"}</span>;
      },
    },
  ];

  if (InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 2) {
    return [
      ...columns.slice(0, columns.length - 2),
      ...additionalColumns,
      ...columns.slice(columns.length - 2, columns.length),
    ];
  } else {
    return [...columns];
  }
};

export const DestinationTable = () => {
  const InitialData = useSelector((state) => state.data.data);

  return [
    {
      title: "Description",
      dataIndex: "chargeName",
      key: "chargeNamE",
    },
    {
      title:
        InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 2
          ? "Chargeable CBM"
          : "Chargeable Weight",
      dataIndex: "chargeableWeight",
      key: "chargeableWeight",
    },
    {
      title: "CBM",
      dataIndex: "cbm",
      key: "cbm",
    },

    {
      title: "Min Charge",
      dataIndex: "minCharge",
      key: "minCharge",
    },

    {
      title: "Rate / Unit",
      dataIndex: "ratePerKg",
      key: "ratePerKg",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    },
    {
      title: " Charged (USD)",
      dataIndex: "charged",
      key: "charged",
    },
    {
      title: " Total Charges (USD)",
      dataIndex: "totalCharges",
      render: (_, record) =>
        InitialData.serviceType === 1
          ? InitialData?.airfreightcharges?.destCharges?.totalCharge
          : InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 1
          ? InitialData?.seafreightcharges?.destCharges?.totalCharge
          : InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 2
          ? InitialData?.seafreightlclcharges?.destCharges?.totalCharge
          : null, // Define a default value if none of the conditions match

      onCell: (_, record, rowIndex) => {
        let rowSpan = 0;
        if (!record) {
          rowSpan =
            InitialData.serviceType == 1
              ? InitialData?.airfreightcharges?.destCharges?.chargeDescription
                  ?.length
              : InitialData.serviceTypeOpt === 1
              ? InitialData?.seafreightcharges?.destCharges?.chargeDescription
                  ?.length
              : InitialData?.seafreightlclcharges?.destCharges
                  ?.chargeDescription?.length;
        }
        return {
          rowSpan: rowSpan,
        };
      },
      key: "totalCharges",
    },
  ];
};

export const EXWSTable = () => {
  const InitialData = useSelector((state) => state.data.data);

  return [
    {
      title: "Description",
      dataIndex: "chargeName",
      key: "chargeNamE",
    },
    {
      title:
        InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 2
          ? "Chargeable CBM"
          : "Chargeable Weight",
      dataIndex: "chargeableWeight",
      key: "chargeableWeight",
    },
    {
      title: "CBM",
      dataIndex: "cbm",
      key: "cbm",
    },
    {
      title: "Min Charge",
      dataIndex: "minCharge",
      key: "minCharge",
    },
    {
      title: "Rate / Unit",
      dataIndex: "ratePerKg",
      key: "ratePerKg",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    },
    {
      title: " Charged (USD)",
      dataIndex: "charged",
      key: "charged",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    },
    {
      title: " Total Charges (USD)",
      dataIndex: "totalCharges",
      render: (_, record) =>
        InitialData.serviceType === 1
          ? InitialData?.airfreightcharges?.exwCharges?.totalCharge
          : InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 1
          ? InitialData?.seafreightcharges?.exwCharges?.totalCharge
          : InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 2
          ? InitialData?.seafreightlclcharges?.exwCharges?.totalCharge
          : null, // Define a default value if none of the conditions match

      onCell: (_, record, rowIndex) => {
        let rowSpan = 0;
        if (!record) {
          rowSpan =
            InitialData.serviceType == 1
              ? InitialData?.airfreightcharges?.exwCharges?.chargeDescription
                  ?.length
              : InitialData.serviceTypeOpt === 1
              ? InitialData?.seafreightcharges?.exwCharges?.chargeDescription
                  ?.length
              : InitialData?.seafreightlclcharges?.exwCharges?.chargeDescription
                  ?.length;
        }
        console.log("sfsdfsdfsdf".rowSpan);

        return {
          rowSpan: rowSpan,
        };
      },
      key: "totalCharges",
    },
  ];
};

export const AdditionalDataColumn = () => {
  const InitialData = useSelector((state) => state.data.data);

  let columns = [];
  let headingColumn = [
    { dataIndex: "chargeName", title: "Charge Name" },
    {
      dataIndex: "chargeableWeight",
      title:
        InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 2
          ? "Chargeable Cbm"
          : "Chargeable Weight",
    },
    { dataIndex: "cbm", title: "CBM" },
    { dataIndex: "minCharge", title: "Min Charge" },
    { dataIndex: "ratePerKg", title: "Rate" },
    { dataIndex: "charged", title: "Charge" },

    {
      dataIndex: "totalCharge",
      title: "TotalCharge",
      render: (_, record) =>
        InitialData?.seafreightlclcharges?.additionalCharges?.totalCharge,

      onCell: (_, record, rowIndex) => {
        let rowSpan = 0;
        if (!record) {
          rowSpan =
            InitialData?.seafreightlclcharges?.additionalCharges
              ?.chargeDescription?.length;
        }
        console.log("anaschk".rowSpan);

        return {
          rowSpan: rowSpan,
        };
      },
    },
  ];
  for (let item of headingColumn) {
    let temp = {
      title: item?.title,
      dataIndex: item?.dataIndex,
      key: item?.dataIndex,
      onCell: item?.onCell,
      render: item?.render,
    };
    columns.push(temp);
  }
  return columns;
};

export const AirFreightServiceTable = () => {
  const dispatch = useDispatch();
  const InitialData = useSelector((state) => state.data.data);

  const [selectedRow, setSelectedRow] = useState(
    InitialData.selectedService.key || null
  );

  let serviceTable = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_, record, index) => {
        return (
          <Checkbox
            checked={selectedRow === record?.key}
            onChange={() => {
              setSelectedRow(record.key);

              dispatch(updateData({ selectedService: record }));
            }}
          />
        );
      },
    },
    {
      title: "Service Name",
      dataIndex: "companyname",
      key: "companyname",
    },

    {
      title: "Packages",
      dataIndex: "noofpackage",
      key: "noofpackage",
    },
    {
      title:
        InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 2
          ? "CBM"
          : "Weight",
      dataIndex: "chargeableWeight",
      key: "chargeableWeight",
    },
    {
      title: "Min Charge",
      dataIndex: "minCharge",
      key: "minCharge",
    },
    {
      title: "Rate / Unit",
      dataIndex: "ratePerKg",
      key: "ratePerKg",
    },

    {
      // If Sea the Ocean Freight,,,air then Air Freight
      title:
        InitialData.serviceType == 1
          ? "Air Freight"
          : InitialData.serviceType == 2
          ? "Ocean Freight"
          : "Air Freight",
      dataIndex: "freight",
      key: "freight",
    },
    {
      title: InitialData.serviceType == 2 ? "BL / Unit" : "FSC / Unit",
      dataIndex: "ratefsc",
      key: "ratefsc",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    },
    {
      title: InitialData.serviceType == 2 ? "Total Service" : "Total FSC",
      dataIndex: "fsc",
      key: "fsc",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    },

    {
      title: "EXW Charges",
      dataIndex: "totalExwCharges",
      key: "totalExwCharges",
    },

    {
      title: "Destination Charges",
      dataIndex: "totalDestCharges",
      key: "totalDestCharges",
    },

    {
      title: " Total Amount (USD)",
      dataIndex: "totalCharges",
      key: "totalCharges",
    },
  ];

  if (
    InitialData.serviceType === 2 &&
    InitialData.serviceTypeOpt === 2 &&
    InitialData.shipmentDetails.termofshipment === 4
  ) {
    serviceTable = serviceTable.filter(
      (item) =>
        item.key !== "totalExwCharges" && item.key !== "totalDestCharges"
    );
    let temp = {
      title: "Additional Charges",
      dataIndex: "additionalCharges",
      key: "additionalCharges",
      render: (val) => {
        return <span>{val ? val : "N/A"}</span>;
      },
    };
    // serviceTable.push(temp);
    serviceTable = [
      ...serviceTable.slice(0, serviceTable.length - 1),
      temp,
      ...serviceTable.slice(serviceTable.length - 1),
    ];
  } else if (
    InitialData.serviceType === 2 &&
    InitialData.serviceTypeOpt === 2 &&
    InitialData.shipmentDetails.termofshipment === 3
  ) {
    serviceTable = serviceTable.filter(
      (item) => item.key !== "totalDestCharges"
    );
  } else if (
    InitialData.serviceType === 2 &&
    InitialData.serviceTypeOpt === 2 &&
    InitialData.shipmentDetails.termofshipment === 2
  ) {
    serviceTable = serviceTable.filter(
      (item) => item.key !== "totalExwCharges"
    );
  }

  return serviceTable;
};

export const InsuranceCompanyTableColumns = () => {
  const dispatch = useDispatch();
  const InitialData = useSelector((state) => state.data.data);

  const [selectedRow, setSelectedRow] = useState(0);
  return [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_, record, index) => (
        <Checkbox
          checked={selectedRow === record?.key}
          onChange={() => {
            setSelectedRow(record.key);
            dispatch(updateData({ selectedInsurance: record }));
          }}
        />
      ),
    },
    {
      title: "Insurance Type",
      dataIndex: "insuranceType",
      key: "insuranceType",
    },
    {
      title: "Insurance Details",
      dataIndex: "insuranceDetails",
      key: "insuranceDetails",
      render: (val, record) => {
        return <span>{val ? val : "-"}</span>;
      },
    },
    {
      title: "Insurance Charges",
      dataIndex: "insuranceCharger",
      key: "insuranceCharger",
      render: (weight) => {
        return <span>{weight !== 0 ? weight : "-"}</span>;
      },
    },
    {
      title: "Rate Per Kg",
      dataIndex: "rate",
      key: "rate",
      render: (rate) => {
        return <span>{rate !== 0 ? rate + "/Kg" : "-"}</span>;
      },
    },
    {
      title: "Rates Charged",
      dataIndex: "chargeablerates",
      key: "chargeableWeight",
      render: (chargeablerates) => {
        return <span>{chargeablerates !== 0 ? chargeablerates : "-"}</span>;
      },
    },
    {
      title: "Total Amount (USD)",
      dataIndex: "totalCharges",
      key: "totalCharges",
      render: (val) => {
        return (
          <span>
            <b>{val !== 0 ? val : "-"}</b>
          </span>
        );
      },
    },
  ];
};

export const InsuranceTableColumns = () => {
  const dispatch = useDispatch();
  const InitialData = useSelector((state) => state.data.data);

  const [selectedRow, setSelectedRow] = useState(0);
  return [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (_, record, index) => (
        <Checkbox
          checked={selectedRow === record?.key}
          onChange={() => {
            setSelectedRow(record.key);
            dispatch(updateData({ selectedInsurance: record }));
          }}
        />
      ),
    },
    {
      title: "Insurance Type",
      dataIndex: "insuranceType",
      key: "insuranceType",
    },
    {
      title: "Insurance Details",
      dataIndex: "insuranceDetails",
      key: "insuranceDetails",
      render: (val, record) => {
        return <span>{val ? val : "-"}</span>;
      },
    },
    {
      title: "Insurance Charges",
      dataIndex: "insuranceCharger",
      key: "insuranceCharger",
      render: (weight) => {
        return <span>{weight !== 0 ? weight : "-"}</span>;
      },
    },
    {
      title: "Rate Per Kg",
      dataIndex: "rate",
      key: "rate",
      render: (rate) => {
        return <span>{rate !== 0 ? rate + "/Kg" : "-"}</span>;
      },
    },
    {
      title: "Rates Charged",
      dataIndex: "chargeablerates",
      key: "chargeableWeight",
      render: (chargeablerates) => {
        return <span>{chargeablerates !== 0 ? chargeablerates : "-"}</span>;
      },
    },
    {
      title: "Total Amount (USD)",
      dataIndex: "totalCharges",
      key: "totalCharges",
      render: (val) => {
        return (
          <span>
            <b>{val !== 0 ? val : "-"}</b>
          </span>
        );
      },
    },
  ];
};
