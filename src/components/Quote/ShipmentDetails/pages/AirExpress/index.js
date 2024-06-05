import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateData, dhlcharges } from "../../../../../redux/DataRedux";

import {
  Col,
  Row,
  Form,
  Select,
  Divider,
  InputNumber,
  Modal,
  Grid,
  notification,
} from "antd";
import {
  FaWeightHanging,
  FaSortNumericDown,
  FaBoxOpen,
  FaTextHeight,
  FaTextWidth,
} from "react-icons/fa";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import apiRequest from "../../../../../common/apiRequest";
import PackageType from "../../../../../common/PackageType";
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
import TimeBoundButton from "../../../../../common/SlidingButton1";
import Loader from "../../../../Loader";

import bgImg from "../../../../../bg/details1.jpg";
import SeaBgImg from "../../../../../bg/sea1.png";

import ToggleButton from "../../../../../common/toggleButton";
import NewMap from "../../../../../common/NewMap";
import axios from "axios";

const { useBreakpoint } = Grid;

const { Option } = Select;

const StyledCol = styled(Col)`
  margin-inline: 0.4rem;
`;

const Details = ({ setCurrent }) => {
  const InitialData = useSelector((state) => state.data).data;
  const dispatch = useDispatch();
  const [loader, SetLoader] = useState(false);

  const screens = useBreakpoint();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [commoditiesData, setCommoditiesData] = useState([]);
  const [Type, setType] = useState("");
  const [subType, setSubType] = useState(null);
  const [timebound, setTimebound] = useState(
    InitialData?.shipmentDetails?.timebound || false
  );
  const [timeboundDate, setTimeboundDate] = useState(
    InitialData?.shipmentDetails?.timeboundDate || ""
  );
  const [selectedCountryfrom, setSelectedCountryfrom] = useState("");
  const [selectedCountryto, setSelectedCountryto] = useState("");
  const [timeboundPickUpDate, setTimeboundPickUpDate] = useState(
    InitialData?.shipmentDetails?.timeboundPickUpDate || ""
  );
  const [timeboundDropOffDate, setTimeboundDropOffDate] = useState(
    InitialData?.shipmentDetails?.timeboundDropOffDate || ""
  );
  const [form] = Form.useForm();

  const [rows, setRows] = useState([
    {
      weight: 0,
      length: 0,
      width: 0,
      height: 0,
      packageType: null,
      natureOfPackage: true,
    },
  ]);
  
  const extractPackageTypes = () => {
    return rows?.map((row) => row.packageType);
  };
  const fetchCommoditiesData = async () => {
    let res = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}trade/getExpressCommodities`
    );
    console.log(res.data.data);
    setCommoditiesData(res.data.data);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiRequest(process.env.REACT_APP_CALCULATOR, {
          url: "trade/getAirExpressCountries",
          method: "get",
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data);
        setCountryData(response?.data?.data?.countries);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
    fetchCommoditiesData();
  }, []);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleAddRow = () => {

    const size = rows?.length;

    setRows((prevRows) =>
      prevRows?.length > 0
        ? [
            ...prevRows,
            {
              weight: 0,
              length: 0,
              width: 0,
              height: 0,
              packageType: null,
              natureOfPackage: true,
            },
          ]
        : [
            {
              weight: 0,
              length: 0,
              width: 0,
              height: 0,
              packageType: null,
              natureOfPackage: true,
            },
          ]
    );
   
  };
  const handleRowChange = (index, fieldName, value) => {
    // Update the specific field in the row
    const updatedRows = [...rows];
    updatedRows[index] = {
      ...updatedRows[index],
      [fieldName]: value,
    };

    // Recalculate CBM and Volumetric Weight based on the updated values
    const cbm = calculateCBM(2, updatedRows[index]);
    const vw = calculateVolumetricWeight(2, updatedRows[index]);

    // Update CBM and Volumetric Weight in the row
    updatedRows[index] = {
      ...updatedRows[index],
      cbm: cbm,
      volumetricWeight: vw,
    };

    // Set the state once with the updated rows
    setRows(updatedRows);
    console.log("anas", updatedRows);
  };
  const calculateTotalWeight = () => {
    let totalWeight = 0;
    rows?.forEach((row) => {
      totalWeight += row.weight;
    });
    form.setFieldsValue({
      totalweight: totalWeight,
    });
    return totalWeight;
  };
  const calculateTotalCBM = () => {
    let totalCBM = 0;
    rows?.forEach((row) => {
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
      rows?.forEach((row) => {
        const VolWeightValue = (row.length * row.width * row.height) / 5000;
        totalVolWeight += VolWeightValue;
      });
      form.setFieldsValue({
        totalVolumetricWeight: totalVolWeight,
      });

      return totalVolWeight;
    }
    return 0;
  };
  const handleRemoveRow = (index) => {
    if (rows?.length > 1) {
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

  // Setting Previous Values
  useEffect(() => {
    const tradeItemsRow = InitialData?.shipmentDetails?.tradeItem;
    setTimebound(InitialData?.shipmentDetails?.timebound);
    setTimeboundDate(InitialData?.shipmentDetails?.timeboundDate);
    setType(InitialData?.shipmentDetails?.commodity?.type);
    setSubType(InitialData?.shipmentDetails?.commodity?.subtype);
    setSelectedCountryfrom(InitialData?.shipmentDetails.pickup);
    setSelectedCountryto(InitialData?.shipmentDetails.dropoff);
    setRows(tradeItemsRow?.length > 0 ? tradeItemsRow : rows);
  }, []);

  // On Submit
  const onFinish = async (val) => {
    if (!(Type && subType && rows.length > 0)) {
      return notification.error({
        message: "Unfilled Fields",
        description: "Please Fill all Fields.",
      });
    } else {
      const weight = Math.ceil(
        form.getFieldValue("totalweight") >
          form.getFieldValue("totalVolumetricWeight")
          ? form.getFieldValue("totalweight")
          : form.getFieldValue("totalVolumetricWeight")
      );
      const modal = {
        shipmentDetails: {
          ...InitialData.shipmentDetails,

          dropoff:
            InitialData?.tradeType === 1
              ? "United Arab Emirates"
              : selectedCountryto,
          pickup:
            InitialData?.tradeType === 2
              ? "United Arab Emirates"
              : selectedCountryfrom,
          noofpackages: rows?.length,
          commodity: { type: Type, subtype: subType },
          timebound: timebound,
          timeboundPickUpDate: timeboundPickUpDate,
          timeboundDropOffDate: timeboundDropOffDate,
          totalweight: form.getFieldValue("totalweight"),
          totalcbm: form.getFieldValue("totalCbm"),
          totalVolumetricWeight: form.getFieldValue("totalVolumetricWeight"),
          tradeItem: rows,
          chargeableWeight: weight,
        },
      };
      dispatch(updateData(modal));
      try {
        dispatch(
          dhlcharges({
            tradetype: InitialData?.tradeType,
            pickup: selectedCountryfrom,
            dropoff: selectedCountryto,
            items: rows,
            chargeableWeight: weight,
            isInsurance: false,
            cargoValue: 0,
            insuranceCompany: null,
            insuranceType: null,
          })
        );

        dispatch(updateData({ selectedService: "" }));
        // SetLoader(false);
        setCurrent(5);
      } catch (err) { }
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
        <Loader loading={loader} />
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
                padding: "3.2rem",
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
                      paddingLeft: "50px",
                      paddingRight: "50px",
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
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <LabelTitleBlue>From:</LabelTitleBlue>
                        {/* {InitialData?.tradeType === 2 ? ( */}
                        <CustInput
                          // style={{ width: "90%", height: "37px" }}
                          defaultValue={
                            InitialData?.shipperDetails?.sen_country
                          }
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
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <LabelTitleBlue>To:</LabelTitleBlue>
                        {/* {InitialData?.tradeType === 1 ? ( */}
                        <CustInput
                          // style={{ width: "100%", height: "37px" }}
                          defaultValue={
                            InitialData?.recieverDetails?.rec_country
                          }
                          readOnly
                        />
                      </Col>
                    </Row>
                    <NewMap
                      pickUp={InitialData?.shipperDetails?.sen_country}
                      dropOff={InitialData?.recieverDetails?.rec_country}
                    />
                    <Row gutter={[80, 20]} style={{ marginTop: "3.2rem" }}>
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
                          value={Type}
                          onChange={(val) => setType(val)}
                        >
                          <Option value="">Select a type</Option>
                          {commoditiesData?.map((commodity) => (
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

                            <CustSelect
                              showSearch
                              value={subType}
                              onChange={(val) => setSubType(val)}
                            >
                              {commoditiesData
                                ?.find((commodity) => commodity?.type === Type)
                                ?.subtypes.map((subtype) => (
                                  <Option key={subtype} value={subtype}>
                                    {subtype}
                                  </Option>
                                ))}
                            </CustSelect>
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row
                      justify={"center"}
                      gutter={[20, 20]}
                      style={{ paddingTop: "1.6rem" }}
                    >
                      <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
                        <LabelTitleBlue>Time bound</LabelTitleBlue>

                        <Form.Item
                          name={"timebound"}
                          rules={[
                            {
                              // required: true,
                              message: "Please input your time bound",
                            },
                          ]}
                          initialValue={InitialData?.shipmentDetials?.timebound}
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
                      <Col span={24}>
                        <Row justify={"center"} gutter={[20, 0]}>
                          <Col>
                            <LabelTitleBlue>Pieces</LabelTitleBlue>
                            <Form.Item name={"noofpackage"}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <FaBoxOpen
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
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
                                <FaWeightHanging
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />

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
                            <LabelTitleBlue>Total CBM</LabelTitleBlue>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <FaSortNumericDown
                                style={{
                                  fontSize: "18px",
                                  color: "#aeb1b6",
                                }}
                              />
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
                              <FaWeightHanging
                                style={{
                                  fontSize: "18px",
                                  color: "#aeb1b6",
                                }}
                              />
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
                            <LabelTitleBlue>Chargeable Weight</LabelTitleBlue>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <FaWeightHanging
                                style={{
                                  fontSize: "18px",
                                  color: "#aeb1b6",
                                }}
                              />

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
                            {calculateTotalVolWeight().toFixed(0) > 999 && (
                              <Row>
                                <LabelTitleBlue
                                  style={{
                                    color: "red",
                                    position: "absolute",
                                    width: "max-content",
                                    marginTop: "0rem",
                                  }}
                                >
                                  Max Weight Exceeded
                                </LabelTitleBlue>
                              </Row>
                            )}
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
                        marginLeft: screens?.lg ? "4.8rem" : "0px",
                      }}
                    >
                      Enter the weight and dimensions of your parcels
                    </Heading>

                    <Row justify={"center"}>
                      <Col span={24}>
                        {rows?.map((row, index) => (
                          <Row
                            style={{
                              marginTop: index === 0 ? "0px" : "-25px",
                              display: "flex",
                              alignItems: "center",
                            }}
                            key={index}
                            justify={"center"}
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
                                <FaWeightHanging
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
                                <CustInputNumber
                                  min={0}
                                  max={300}
                                  value={row.weight}
                                  onChange={(value) => {
                                    handleRowChange(index, "weight", value);
                                  }}
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
                                <FaTextHeight
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
                                <CustInputNumber
                                  min={0}
                                  max={300}
                                  value={row.length}
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
                                <FaTextWidth
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
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
                                <FaTextHeight
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
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
                                <FaTextHeight
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />

                                <CustInputNumber
                                  value={calculateCBM(2, row).toFixed(2)}
                                  onChange={(value) =>
                                    handleRowChange(index, "cbm", value)
                                  }
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
                                <FaTextHeight
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
                                <CustInputNumber
                                  value={calculateVolumetricWeight(
                                    2,
                                    row
                                  ).toFixed(2)}
                                  placeholder="Volumetric Weight"
                                  onChange={(value) =>
                                    handleRowChange(
                                      index,
                                      "volumetricWeight",
                                      value
                                    )
                                  }
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

                            <StyledCol>
                              <PackageType
                                desc={extractPackageTypes()}
                                index={index}
                              />
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
                          <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
                          Back
                        </MWButton>
                        <MWButton
                          disabled={calculateTotalVolWeight().toFixed(0) > 999}
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
                          <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                        </MWButton>
                      </Row>
                    </Col>
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
