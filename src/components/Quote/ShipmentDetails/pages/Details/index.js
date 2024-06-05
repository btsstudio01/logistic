import React, { useEffect, useState } from "react";

import {
  Col,
  Row,
  Form,
  Select,
  Divider,
  InputNumber,
  Grid,
  notification,
} from "antd";

import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import apiRequest from "../../../../../common/apiRequest";
import {
  CustInput,
  MWButton,
  Heading,
  CustInputNumber,
  CustSelect,
  BackgroundCol,
  LabelTitleBlue,
  FormBackground,
} from "../../../../../common/globalStyle";

import SlidingButton from "../../../../../common/SlidingButton";
import bgImg from "../../../../../bg/details1.jpg";
import SeaBgImg from "../../../../../bg/sea1.png";
import TimeBoundButton from "../../../../../common/SlidingButton1";
import SeaButton from "../../../../../common/SeaButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getFreightcharges,
  updateData,
  getSeaFreightcharges,
  getSeaFreightLCLcharges,
} from "../../../../../redux/DataRedux";
import ToggleButton from "../../../../../common/toggleButton";
// import { conatinerData } from "../../../../../Data/Quote";
import axios from "axios";

const { Option } = Select;

const StyledCol = styled(Col)`
  margin-inline: 0.4rem;
`;
const { useBreakpoint } = Grid;

const Details = ({ setCurrent }) => {
  const InitialData = useSelector((state) => state.data).data;
  const dispatch = useDispatch();
  const [btn1, setbtn1] = useState("");
  const [btn2, setbtn2] = useState("");
  const [commodityType, setCommodityType] = useState("");
  const [commoditySubType, setCommoditySubType] = useState("");

  const [containerType, setContainerType] = useState("");
  const [containerSize, setContainerSize] = useState();
  const [commoditiesData, setCommoditiesData] = useState([]);
  const [conatinerData, setConatinerData] = useState([]);

  const [value, setValue] = useState(1);
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [selectedCountryfrom, setSelectedCountryfrom] = useState("");
  const [selectedCountryto, setSelectedCountryto] = useState("");
  const [timebound, setTimebound] = useState(
    InitialData?.shipmentDetails?.timebound || false
  );
  const [timeboundPickUpDate, setTimeboundPickUpDate] = useState(
    InitialData?.shipmentDetails?.timeboundPickUpDate || ""
  );
  const [timeboundDropOffDate, setTimeboundDropOffDate] = useState(
    InitialData?.shipmentDetails?.timeboundDropOffDate || ""
  );
  const [form] = Form.useForm();

  // const [rows, setRows] = useState([
  //   {
  //     weight: 0,
  //     length: 0,
  //     width: 0,
  //     height: 0,
  //     packageType: true,
  //     natureOfPackage: true,
  //     cbm: 0,
  //     volumetricWeight: 0,
  //   },
  // ]);
  // Define your initial row object

  // Initialize rows state with the initial row
  const [rows, setRows] = useState([
    {
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      packageType: true,
      natureOfPackage: true,
      cbm: 0,
      volumetricWeight: 0,
    },
  ]);

  const fetchCommoditiesData = async () => {
    let endpoint;
    if (InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 1) {
      endpoint = "getAirFreightCommodities";
    }
    if (InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 1) {
      endpoint = "getSeaFCLCommodities";
    }
    if (InitialData.serviceType == 2 && InitialData.serviceTypeOpt == 2) {
      endpoint = "getSeaLCLCommodities";
    }
    let res = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}trade/${endpoint}`
    );
    setCommoditiesData(res.data.data);
  };
  const fetchContainersData = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}trade/getSeaFCLConatiners`
    );
    setConatinerData(res.data.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest(
          process.env.REACT_APP_CALCULATOR,

          {
            url: "trade/getCountryName",
            method: "get",
            headers: { "Content-Type": "application/json" },
          }
        );

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
    fetchCommoditiesData();
    fetchContainersData();
  }, []);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  // const handleChange = (fieldId) => {
  //   setData((prevData) => {
  //     const updatedServices = prevData.associateServices.map((service) =>
  //       service.id === fieldId
  //         ? {
  //             ...service,
  //             value: { ...service.value, value: !service.value.value },
  //           } // Update the nested value property
  //         : service
  //     );

  //     return {
  //       ...prevData,
  //       associateServices: updatedServices,
  //     };
  //   });
  // };

  const handleAddRow = () => {
    setRows((prevRows = []) => [
      ...prevRows,
      {
        weight: 0,
        length: 0,
        width: 0,
        height: 0,
        packageType: true,
        natureOfPackage: true,
        cbm: 0,
        volumetricWeight: 0,
      },
    ]);
    //   setRows((prevRows) =>
    //   prevRows?.length > 0
    //     ? [
    //         ...prevRows,
    //         {
    //           weight: 0,
    //           length: 0,
    //           width: 0,
    //           height: 0,
    //           packageType: true,
    //           natureOfPackage: true,
    //           cbm: 0,
    //           volumetricWeight: 0,
    //         },
    //       ]
    //     : [
    //       ...prevRows,
    //         {
    //           weight: 0,
    //     length: 0,
    //     width: 0,
    //     height: 0,
    //     packageType: true,
    //     natureOfPackage: true,
    //     cbm: 0,
    //     volumetricWeight: 0,
    //         },
    //       ]
    // );
  };
  const handleRowChange = (index, fieldName, value) => {
    let cbm = calculateCBM(2, rows[index]);
    let vw = calculateVolumetricWeight(2, rows[index]);
    setRows((prevRows) => {
      const updatedRows1 = JSON.stringify(prevRows);
      const updatedRows = JSON.parse(updatedRows1);
      updatedRows[index]["volumetricWeight"] = vw;

      return updatedRows;
    });
    setRows((prevRows) => {
      const updatedRows1 = JSON.stringify(prevRows);
      const updatedRows = JSON.parse(updatedRows1);
      updatedRows[index]["cbm"] = cbm;
      return updatedRows;
    });
    setRows((prevRows) => {
      const updatedRows1 = JSON.stringify(prevRows);
      const updatedRows = JSON.parse(updatedRows1);
      updatedRows[index][fieldName] = value;
      return updatedRows;
    });
  };
  const calculateTotalWeight = () => {
    let totalWeight = 0;
    rows &&
      rows.length > 0 &&
      rows.forEach((row) => {
        totalWeight += row.weight;
      });
    form.setFieldsValue({
      totalweight: totalWeight,
    });
    return totalWeight;
  };
  const calculateTotalCBM = () => {
    let totalCBM = 0;
    rows &&
      rows.length > 0 &&
      rows.forEach((row) => {
        const cbmValue = (row.length * row.width * row.height) / 1000000;
        totalCBM += cbmValue;
      });
    form.setFieldsValue({
      totalCbm: totalCBM,
    });
    return totalCBM;
  };
  const calculateTotalVolWeight = () => {
    let totalVolWeight = 0;
    // if (data?.serviceTypeOpt === 2) {
    if (true) {
      //if air express
      rows &&
        rows.length > 0 &&
        rows.forEach((row) => {
          const VolWeightValue = (row.length * row.width * row.height) / 5000;
          totalVolWeight += VolWeightValue;
        });
      form.setFieldsValue({
        totalVolumetricWeight: totalVolWeight.toFixed(2),
      });

      return totalVolWeight;
    }
    return 0;
  };
  const handleRemoveRow = (index) => {
    if (rows.length > 1) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows.splice(index, 1);
        return updatedRows;
      });
    }
  };

  const calculateCBM = (title, row) => {
    //air express
    //1 cbm = 200kg
    //air freight
    //1 cbm=167kg

    //ex 30cm
    //cm convert to meter
    //then divided by 5000

    //type of weights
    //volumetric weight
    //net weight or gross weight
    const { length, width, height } = row;
    //if service is air express
    if (title === 2) {
      const cbm = (length * width * height) / 1000000;
      return cbm;
    }

    // Handle other cases if needed
    return 0;
  };

  const calculateVolumetricWeight = (title, row) => {
    const { length, width, height } = row;
    //if service is air express
    if (title === 1) {
      const volweight = (length * width * height) / 6000;
      return volweight;
    } else if (title === 2) {
      const volweight = (length * width * height) / 5000;
      return volweight;
    }
    return 0;
  };

  useEffect(() => {
    setTimebound(InitialData?.shipmentDetails?.timebound);
    setTimeboundDropOffDate(InitialData?.shipmentDetails?.timeboundDropOffDate);
    setTimeboundPickUpDate(InitialData?.shipmentDetails?.timeboundPickUpDate);
    setCommodityType(InitialData?.shipmentDetails?.commodity?.type);
    setContainerType(InitialData?.shipmentDetails?.container?.type);
    setContainerSize(InitialData?.shipmentDetails?.container?.size);
    setCommoditySubType(InitialData?.shipmentDetails?.commodity?.subtype);
    setRows(InitialData?.shipmentDetails?.tradeItem);
    setSelectedCountryfrom(InitialData?.shipmentDetails?.pickup);
    setSelectedCountryto(InitialData.shipmentDetails?.dropoff);
  }, []);
  const CheckSliddingButton = () => {
    if (
      InitialData.serviceType == 1 &&
      ((InitialData.shipmentDetails.termofshipment == 4 &&
        InitialData.shipmentDetails.pickupAirport &&
        InitialData.shipmentDetails.dropoffAirport) ||
        (InitialData.shipmentDetails.termofshipment == 2 &&
          InitialData.shipmentDetails.pickupAirport &&
          InitialData.shipmentDetails.dropoffAddress) ||
        (InitialData.shipmentDetails.termofshipment == 3 &&
          InitialData.shipmentDetails.pickupAddress &&
          InitialData.shipmentDetails.dropoffAirport) ||
        (InitialData.shipmentDetails.termofshipment == 1 &&
          InitialData.shipmentDetails.pickupAddress &&
          InitialData.shipmentDetails.dropoffAddress))
    ) {
      // console.log("checkjhaksd");

      return true;
    } else if (
      InitialData.serviceType == 2 &&
      ((InitialData.shipmentDetails.termofshipment == 4 &&
        InitialData.shipmentDetails.pickupSeaport &&
        InitialData.shipmentDetails.dropoffSeaport) ||
        (InitialData.shipmentDetails.termofshipment == 2 &&
          InitialData.shipmentDetails.pickupSeaport &&
          InitialData.shipmentDetails.dropoffAddress) ||
        (InitialData.shipmentDetails.termofshipment == 3 &&
          InitialData.shipmentDetails.pickupAddress &&
          InitialData.shipmentDetails.dropoffSeaport) ||
        (InitialData.shipmentDetails.termofshipment == 1 &&
          InitialData.shipmentDetails.pickupAddress &&
          InitialData.shipmentDetails.dropoffAddress))
    ) {
      // console.log("checkjhaksd");

      return true;
    } else {
      console.log("checkjhaksd");

      return false;
    }
  };

  const onFinish = async (val) => {
    const CheckButton = CheckSliddingButton();
    // First checking all fields
    if (
      !(commodityType && commoditySubType && CheckButton && rows.length > 0)
    ) {
      return notification.error({
        message: "Unfilled Fields",
        description: "Please Fill all Fields.",
      });
    } else if (
      InitialData.serviceTypeOpt == 1 &&
      InitialData.serviceType == 2 &&
      !(containerType && containerSize)
    ) {
      return notification.error({
        message: "Unfilled Fields",
        description: "Please Fill all Fields.",
      });
    } else {
      dispatch(
        updateData({
          shipmentDetails: {
            ...InitialData.shipmentDetails,

            pickup: selectedCountryfrom,
            dropoff: selectedCountryto,
            commodity: { type: commodityType, subtype: commoditySubType },
            timebound: timebound,
            timeboundPickUpDate: timeboundPickUpDate,
            timeboundDropOffDate: timeboundDropOffDate,
            container: { type: containerType, size: containerSize },
            noofpackages: rows.length,
            totalweight: form.getFieldValue("totalweight"),
            totalcbm: form.getFieldValue("totalweight"),
            totalVolumetricWeight: form.getFieldValue("totalVolumetricWeight"),
            tradeItem: rows,
            chargeableWeight: Math.ceil(
              form.getFieldValue("totalweight") >
                form.getFieldValue("totalVolumetricWeight")
                ? form.getFieldValue("totalweight")
                : form.getFieldValue("totalVolumetricWeight")
            ),
          },
        })
      );

      try {
        if (InitialData.serviceType === 1) {
          dispatch(
            getFreightcharges({
              chargeableweight: Math.ceil(
                form.getFieldValue("totalweight") >
                  form.getFieldValue("totalVolumetricWeight")
                  ? form.getFieldValue("totalweight")
                  : form.getFieldValue("totalVolumetricWeight")
              ),
              termofshipment: InitialData.shipmentDetails.termofshipment,
              item: rows,
            })
          );
        } else if (
          InitialData.serviceType === 2 &&
          InitialData.serviceTypeOpt === 1
        ) {
          dispatch(
            getSeaFreightcharges({
              chargeableweight: Math.ceil(
                form.getFieldValue("totalweight") >
                  form.getFieldValue("totalVolumetricWeight")
                  ? form.getFieldValue("totalweight")
                  : form.getFieldValue("totalVolumetricWeight")
              ),
              termofshipment: InitialData.shipmentDetails.termofshipment,
              item: rows,
              container: { type: containerType, size: containerSize },
            })
          );
        } else if (
          InitialData.serviceType === 2 &&
          InitialData.serviceTypeOpt === 2
        ) {
          dispatch(
            getSeaFreightLCLcharges({
              totalweight: Math.ceil(
                form.getFieldValue("totalweight") >
                  form.getFieldValue("totalVolumetricWeight")
                  ? form.getFieldValue("totalweight")
                  : form.getFieldValue("totalVolumetricWeight")
              ),
              termofshipment: InitialData.shipmentDetails.termofshipment,
              item: rows,
            })
          );
        }
        setCurrent(5);
      } catch (err) {}
    }
  };

  return (
    <>
      <BackgroundCol
        span={24}
        imagePath={InitialData?.serviceType === 1 ? bgImg : SeaBgImg}
        style={{
          backgroundPosition: "center",
          backgroundSize: InitialData?.serviceType === 1 ? "cover" : "auto",
        }}
      >
        <Row
          justify={"center"}
          style={{
            marginLeft: screens?.lg ? "90px" : "0px",
          }}
        >
          <Row>
            <Col
              span={24}
              style={{
                padding: screens.lg ? "3.2rem" : "0rem",
                paddingTop: "3.2rem",
                paddingBottom: "3.2rem",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                autoComplete="off"
              >
                <FormBackground
                  style={{
                    padding: "1.6rem",
                  }}
                >
                  <Col
                    span={24}
                    style={{
                      paddingLeft: screens.xs ? "0px" : "50px",
                      paddingRight: screens.xs ? "0px" : "50px",
                      paddingTop: "20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Row
                      justify={"center"}
                      gutter={[80, 30]}
                      style={{ marginTop: "1.6rem" }}
                    >
                      <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <LabelTitleBlue>From:</LabelTitleBlue>
                        <CustInput
                          value={InitialData?.shipperDetails?.sen_country}
                          readOnly
                        />
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                        style={{
                          display: "flex",

                          flexDirection: "column",
                        }}
                      >
                        <LabelTitleBlue>To:</LabelTitleBlue>
                        <CustInput
                          value={InitialData?.recieverDetails?.rec_country}
                          readOnly
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "1.6rem" }}>
                      <Col span={24}>
                        {InitialData.serviceType == 2 ? (
                          <SeaButton
                            setbtn1={setbtn1}
                            setbtn2={setbtn2}
                            fromCountry={InitialData.shipperDetails.sen_country}
                            toCountry={InitialData.recieverDetails.rec_country}
                          />
                        ) : (
                          <SlidingButton
                            setbtn1={setbtn1}
                            setbtn2={setbtn2}
                            fromCountry={InitialData.shipperDetails.sen_country}
                            toCountry={InitialData.recieverDetails.rec_country}
                          />
                        )}
                      </Col>
                    </Row>

                    <Row gutter={[80, 20]} style={{ marginTop: "1.6rem" }}>
                      <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <LabelTitleBlue>Goods Type</LabelTitleBlue>
                        <CustSelect
                          value={commodityType}
                          onChange={(value) => setCommodityType(value)}
                        >
                          <Option value="">Select a type</Option>
                          {commoditiesData &&
                            Array.isArray(commoditiesData) && // Add null and type check
                            commoditiesData.map((commodity) => (
                              <Option
                                key={commodity?.type}
                                value={commodity?.type}
                              >
                                {commodity?.type}
                              </Option>
                            ))}
                        </CustSelect>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {true && (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <LabelTitleBlue>Sub Type</LabelTitleBlue>
                            {
                              // Add null, type, and commodityType checks
                              <CustSelect
                                showSearch
                                value={commoditySubType}
                                onChange={(value) => setCommoditySubType(value)}
                              >
                                {commoditiesData
                                  ?.find(
                                    (commodity) =>
                                      commodity?.type === commodityType
                                  )
                                  ?.subtypes.map((subtype) => (
                                    <Option key={subtype} value={subtype}>
                                      {subtype}
                                    </Option>
                                  ))}
                              </CustSelect>
                            }
                          </div>
                        )}
                      </Col>
                    </Row>

                    {InitialData && InitialData?.serviceType == 2 && (
                      <Row
                        gutter={[80, 20]}
                        justify={"center"}
                        style={{ marginTop: "1.6rem" }}
                      >
                        {InitialData.serviceType === 2 &&
                        InitialData.serviceTypeOpt === 2 ? null : (
                          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <LabelTitleBlue>Container Type</LabelTitleBlue>
                            <CustSelect
                              value={containerType}
                              onChange={(value) => setContainerType(value)}
                            >
                              <Option value="">Select a type</Option>
                              {conatinerData &&
                                Array.isArray(conatinerData) &&
                                conatinerData?.map((conatiner) => (
                                  <Option
                                    key={conatiner?.type}
                                    value={conatiner?.type}
                                  >
                                    {conatiner?.type}
                                  </Option>
                                ))}
                            </CustSelect>
                          </Col>
                        )}

                        {InitialData.serviceType === 2 &&
                        InitialData.serviceTypeOpt === 2 ? null : (
                          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                            <LabelTitleBlue>Container Size</LabelTitleBlue>
                            {conatinerData &&
                              Array.isArray(conatinerData) &&
                              containerType && (
                                <CustSelect
                                  value={containerSize}
                                  onChange={(value) => setContainerSize(value)}
                                >
                                  <Option value="">Select a type</Option>
                                  {conatinerData
                                    ?.find(
                                      (container) =>
                                        container?.type === containerType
                                    )
                                    ?.sizes.map((subtype) => (
                                      <Option key={subtype} value={subtype}>
                                        {subtype}
                                      </Option>
                                    ))}
                                </CustSelect>
                              )}
                          </Col>
                        )}
                      </Row>
                    )}

                    <>
                      <Row
                        justify={"center"}
                        gutter={[20, 20]}
                        style={{ paddingTop: "1.6rem", textAlign: "center" }}
                      >
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
                          <LabelTitleBlue style={{ fontSize: "15px" }}>
                            Time Bound
                          </LabelTitleBlue>

                          <Form.Item
                            name={"timebound"}
                            rules={[
                              {
                                message: "Please input your time bound",
                              },
                            ]}
                            initialValue={
                              InitialData?.shipmentDetials?.timebound
                            }
                          >
                            <TimeBoundButton
                              setTimeboundPickUpDate={setTimeboundPickUpDate}
                              setTimeboundDropOffDate={setTimeboundDropOffDate}
                              setTimebound={setTimebound}
                            />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: "-20px" }} justify={"center"}>
                        <Col>
                          <Row gutter={[20, 0]}>
                            <Col>
                              <LabelTitleBlue>Pieces</LabelTitleBlue>
                              <Form.Item disabled={true} name={"noofpackage"}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <InputNumber
                                    value={rows?.length}
                                    readOnly
                                    style={{
                                      backgroundColor: "#F0F0F0	",
                                      margin: "2px",
                                    }}
                                    placeholder="Total Weight"
                                  />
                                </div>
                              </Form.Item>
                            </Col>
                            <Col>
                              <LabelTitleBlue>Total Weight (kg)</LabelTitleBlue>
                              <Form.Item name={"totalweight"}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <InputNumber
                                    value={calculateTotalWeight()}
                                    readOnly
                                    style={{
                                      backgroundColor: "#F0F0F0	",
                                      margin: "2px",
                                    }}
                                    placeholder="Total Weight"
                                  />
                                </div>
                              </Form.Item>
                            </Col>
                            <Col>
                              <LabelTitleBlue>Total CMB</LabelTitleBlue>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <InputNumber
                                  value={calculateTotalCBM().toFixed(2)}
                                  readOnly
                                  style={{
                                    backgroundColor: "#F0F0F0	",
                                    margin: "2px",
                                  }}
                                  placeholder="Total Weight"
                                />
                              </div>
                            </Col>
                            <Col>
                              <LabelTitleBlue>
                                Total Volumetric Weight
                              </LabelTitleBlue>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <InputNumber
                                  value={calculateTotalVolWeight().toFixed(2)}
                                  readOnly
                                  style={{
                                    backgroundColor: "#F0F0F0	",
                                    margin: "2px",
                                  }}
                                  placeholder="Total Weight"
                                />
                              </div>
                            </Col>

                            <Col>
                              <LabelTitleBlue>
                                Chargeable Weight{}
                              </LabelTitleBlue>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <InputNumber
                                  value={
                                    form.getFieldValue("totalweight") >
                                    form.getFieldValue("totalVolumetricWeight")
                                      ? form.getFieldValue("totalweight")
                                      : form.getFieldValue(
                                          "totalVolumetricWeight"
                                        )
                                  }
                                  readOnly
                                  style={{
                                    backgroundColor: "#F0F0F0",
                                    margin: "2px",
                                  }}
                                  placeholder="Chargeable Weight"
                                />
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Divider />
                      <Heading
                        style={{
                          fontSize: "1.6rem",
                          color: "#E30022",
                          textAlign: "center",
                        }}
                      >
                        Enter the weight and dimensions of your parcels
                      </Heading>

                      <Row justify={"center"}>
                        <Col>
                          {rows?.map((row, index) => (
                            <Row
                              style={{
                                marginTop: index === 0 ? "0px" : "-25px",
                                display: "flex",
                                alignItems: "center",
                              }}
                              key={index}
                              align={"middle"}
                            >
                              <MinusCircleOutlined
                                onClick={() => handleRemoveRow(index)}
                                style={{
                                  padding: "1.6rem",
                                  color: "red",
                                  fontSize: 18,
                                }}
                              />

                              <StyledCol>
                                <LabelTitleBlue>Weight* (kg)</LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    min={0}
                                    max={300}
                                    value={row.weight}
                                    onChange={(value) =>
                                      handleRowChange(index, "weight", value)
                                    }
                                    placeholder="weight"
                                  />
                                </div>
                              </StyledCol>

                              <StyledCol>
                                <LabelTitleBlue>Length (cm)</LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    value={row.length}
                                    min={0}
                                    max={300}
                                    onChange={(value) =>
                                      handleRowChange(index, "length", value)
                                    }
                                    placeholder="Length"
                                  />
                                </div>
                              </StyledCol>

                              <StyledCol>
                                <LabelTitleBlue>Width (cm)</LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    min={0}
                                    max={150}
                                    value={row.width}
                                    onChange={(value) =>
                                      handleRowChange(index, "width", value)
                                    }
                                    placeholder="Width"
                                  />
                                </div>
                              </StyledCol>

                              <StyledCol>
                                <LabelTitleBlue>Height (cm)</LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    min={0}
                                    max={150}
                                    value={row.height}
                                    onChange={(value) =>
                                      handleRowChange(index, "height", value)
                                    }
                                    placeholder="Height"
                                  />
                                </div>
                              </StyledCol>

                              <StyledCol>
                                <LabelTitleBlue>CBM</LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    value={calculateCBM(
                                      2,
                                      // data?.serviceTypeOpt,
                                      row
                                    ).toFixed(2)}
                                    onChange={(value) =>
                                      handleRowChange(index, "cbm", value)
                                    }
                                    //  disabled
                                    readOnly
                                    placeholder="CBM"
                                  />
                                </div>
                              </StyledCol>

                              <StyledCol>
                                <LabelTitleBlue>
                                  {" "}
                                  Volumetric Weight
                                </LabelTitleBlue>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CustInputNumber
                                    value={calculateVolumetricWeight(
                                      2,
                                      // data?.serviceTypeOpt,
                                      row
                                    )}
                                    //  disabled
                                    readOnly
                                    placeholder=" Volumetric Weight"
                                  />
                                </div>
                              </StyledCol>
                              <StyledCol
                                style={{
                                  marginTop: "25px",
                                  marginLeft: "15px",
                                }}
                              >
                                <LabelTitleBlue>Palletized</LabelTitleBlue>

                                <Form.Item
                                  name={`packageType[${index}]`}
                                  rules={[{}]}
                                >
                                  <ToggleButton
                                    packageButton={true}
                                    setFunction={handleRowChange}
                                    index={index}
                                  />
                                </Form.Item>
                              </StyledCol>

                              <StyledCol
                                style={{
                                  marginTop: "25px",
                                  marginLeft: "15px",
                                }}
                              >
                                <LabelTitleBlue>Stackable</LabelTitleBlue>

                                <Form.Item
                                  name={`natureOfPackage[${index}]`}
                                  value={row?.natureOfPackage}
                                >
                                  <ToggleButton
                                    packageButton={false}
                                    setFunction={handleRowChange}
                                    index={index}
                                  />
                                </Form.Item>
                              </StyledCol>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                      <MWButton
                        onClick={handleAddRow}
                        icon={<PlusCircleOutlined />}
                        style={{
                          borderRadius: "20px",
                          background: "#E30022",
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                          position: "relative",
                        }}
                      >
                        Add Row
                      </MWButton>
                      <Col span={24}>
                        <Row
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <MWButton
                            style={{
                              borderRadius: "20px",
                              background: "#E30022",
                              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                              position: "relative",
                              width: "180px",
                            }}
                            onClick={() => setCurrent(3)}
                          >
                            <AiOutlineArrowLeft
                              style={{ marginRight: "5px" }}
                            />
                            Back
                          </MWButton>
                          <MWButton
                            htmlType="submit"
                            style={{
                              borderRadius: "20px",
                              background: "#E30022",
                              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                              position: "relative",
                              width: "180px",
                            }}
                          >
                            Request Quote
                            <AiOutlineArrowRight
                              style={{ marginLeft: "5px" }}
                            />
                          </MWButton>
                        </Row>
                      </Col>
                    </>
                  </Col>
                </FormBackground>
              </Form>
            </Col>
          </Row>
        </Row>
      </BackgroundCol>
    </>
  );
};

export default Details;
