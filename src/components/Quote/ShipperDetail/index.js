import React, { useState, useEffect, useRef } from "react";
import Map from "../../../common/Map";
import { getAbbr } from "countries";

import { Col, Row, Form, Modal, Grid, notification } from "antd";
import SeaBgImg from "../../../bg/sea1.png";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import bgImg from "../../../assets/shipperBg.png";
import {
  CustInput,
  CustSelectCountry,
  CustSelectCity,
  MWButton,
  BackgroundCol,
  CustPhoneInput,
  CircleContainer,
  FormBackground,
  HeadingDiv,
  Wrapper,
  CustSelect,
} from "../../../common/globalStyle";
import {
  MailOutlined,
  UserOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import "../../../common/PhoneNumber.css";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../redux/DataRedux";
import axios from "axios";
import { Option } from "antd/es/mentions";

const { useBreakpoint } = Grid;

const ShipperDetail = ({ setCurrent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const InitialData = useSelector((state) => state.data).data;
  const dispatch = useDispatch();
  const [selectedPlaceName, setSelectedPlaceName] = useState("");
  const [cityData, setCityData] = useState([]);
  const [phone1, setphone1] = useState("");

  const [phone2, setphone2] = useState("");

  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const screens = useBreakpoint();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  function getValueByName(variableName, data) {
    if (data.hasOwnProperty(variableName)) {
      return data[variableName];
    } else {
      // Handle the case where the variable name is not found
      return null; // You can return any default value or handle the error accordingly
    }
  }
  const fetchCitiesData = async (country) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}users/cities`,
      {
        country: country,
      }
    );
    console.log("data,data".data);
    if (data.length > 0) {
      setCityData(data);
    }
  };
  useEffect(() => {
    fetchCitiesData(InitialData?.shipperDetails?.sen_country);
  }, []);
  useEffect(() => {
    fetchCitiesData(
      InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 2
        ? "United Arab Emirates"
        : selectedCountry
    );
  }, [selectedCountry]);
  // useEffect for setting previos values
  useEffect(() => {
    form.setFields([
      {
        name: "shippername",
        value: InitialData?.shipperDetails?.sen_companyName,
      },
      {
        name: "shipperemail",
        value: InitialData?.shipperDetails?.sen_companyEmail,
      },
      {
        name: "shippercontactpersonname",
        value: InitialData?.shipperDetails?.sen_contactPersonName,
      },
      {
        name: "shippercountry",
        value:
          InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 2
            ? "United Arab Emirates"
            : InitialData?.shipperDetails?.sen_country,
      },
      { name: "shippercity", value: InitialData?.shipperDetails?.sen_city },
      {
        name: "shipperarea",
        value: InitialData?.shipperDetails?.sen_districtArea,
      },
      {
        name: "shipperbuildingName",
        value: InitialData?.shipperDetails?.sen_buildingName,
      },
    ]);

    setSelectedPlaceName(InitialData?.shipperDetails?.sen_nearestLandmark);
    form.setFieldsValue({
      shippernearestLandmark: InitialData?.shipperDetails?.sen_nearestLandmark,
    });
    setphone1(InitialData?.shipperDetails?.sen_contactPersonNumber);
    setphone2(InitialData?.shipperDetails?.sen_phoneNumber);
    setSelectedCity(InitialData?.shipperDetails?.sen_city);
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form.setFieldsValue({ shippernearestLandmark: selectedPlaceName });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (val) => {
    if (!isValidPhoneNumber(phone1) || !isValidPhoneNumber(phone2)) {
      return notification.error({
        message: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
      });
    }

    try {
      const payload = {
        shipmentDetails: {
          ...InitialData.shipmentDetails,

          pickupCity: val?.shippercity,
          pickup:
            InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 2
              ? "United Arab Emirates"
              : val?.shippercountry,
        },
        shipperData: {
          sen_companyName: val?.shippername,
          sen_companyEmail: val?.shipperemail,
          sen_contactPersonName: val?.shippercontactpersonname,
          sen_contactPersonNumber: phone1,
          sen_country:
            InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 2
              ? "United Arab Emirates"
              : val?.shippercountry,
          sen_city: val?.shippercity,
          sen_phoneNumber: phone2,
          sen_districtArea: val?.shipperarea,
          sen_buildingName: val?.shipperbuildingName,
          sen_nearestLandmark: selectedPlaceName,
        },
      };
      dispatch(
        updateData({
          shipperDetails: payload.shipperData,
          shipmentDetails: payload.shipmentDetails,
        })
      );

      // const response = await apiRequest(process.env.REACT_APP_CALCULATOR, {
      //   url: "/trade/stepTwo",
      //   method: "post",
      //   data: payload,
      //   headers: { "Content-Type": "application/json" },
      // });

      setCurrent(3);
      // if (response) {
      //   console.log("first");
      //   if (
      //     response.status === 200 ||
      //     response.status === 201 ||
      //     response.status === 204
      //   ) {
      //     console.log("second");
      //   } else {
      //     Modal.error({
      //       title: "Error",
      //       content: "Shipment Details failed. Please try again.",
      //       onOk: handleModalClose,
      //     });
      //   }
      // }
    } catch (err) {
      console.log(err);
      Modal.error({
        title: "Error",
        content: err,
        onOk: handleModalClose,
      });
    }
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  // Callback function to receive selected place name from Map
  const handlePlaceName = (placeName) => {
    setSelectedPlaceName(placeName);
    // You can perform further actions with the selected place name here
  };

  // useEffect(() => {
  //   // Define the add function here
  //   const add = () => {
  //     const element = document.getElementById("shippernearestLandmark");
  //     if (element) {
  //       // ol?.current.state.value = `${selectedPlaceName},${selectedCountry}`;
  //       element.value = `${selectedPlaceName},${selectedCountry}`;
  //     }
  //   };

  //   // Call the add function whenever selectedPlaceName changes
  //   add();
  // }, [selectedPlaceName]);
  console.log(InitialData);
  return (
    <>
      <Wrapper
        justify={"center"}
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
        }}
      >
        <BackgroundCol
          span={24}
          style={{
            backgroundPosition: "center",
            backgroundSize: InitialData?.serviceType === 1 ? "cover" : "auto",
          }}
          imagePath={InitialData?.serviceType === 1 ? bgImg : SeaBgImg}
        >
          <Row style={{}}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                autoComplete="on"
              >
                <FormBackground
                  style={{
                    marginTop: "3.2rem",
                    padding: "1.6rem",
                  }}
                >
                  <Col span={24}>
                    <Row justify={"space-between"}>
                      <Col>
                        <CircleContainer />
                      </Col>

                      <HeadingDiv style={{ fontFamily: "Inter" }}>
                        Shipper Details
                      </HeadingDiv>
                      <Col>
                        <CircleContainer />
                      </Col>
                    </Row>
                  </Col>

                  <div
                    style={{
                      marginLeft: screens?.lg ? "5rem" : "15px",
                      marginTop: "2rem",
                    }}
                  >
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Item
                          name={"shippername"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your Company name",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            value={InitialData?.userId?.displayName}
                            prefix={
                              <UserOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            placeholder="Company name"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Item
                          name={"shipperemail"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            type="email"
                            prefix={
                              <MailOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            placeholder="Email Address"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>Contact Person Name</LabelTitle> */}

                        <Form.Item
                          name={"shippercontactpersonname"}
                          rules={[
                            {
                              required: true,
                              message: "Please input Contact Person",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            prefix={
                              <UserOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            placeholder="Contact Person Name"
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>Country</LabelTitle> */}

                        <Form.Item
                          name="shippercountry"
                          rules={[
                            {
                              required: InitialData?.tradeType !== 1,
                              message: "Please select your Country",
                            },
                          ]}
                        >
                          {InitialData?.serviceTypeOpt == 2 &&
                          InitialData.tradeType == 2 ? (
                            <CustInput
                              style={{ width: "90%" }}
                              defaultValue={"United Arab Emirates"}
                              readOnly
                            />
                          ) : (
                            <CustSelectCountry
                              value={selectedCountry}
                              onChange={(country) =>
                                setSelectedCountry(country)
                              }
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>Contact Person Number</LabelTitle> */}

                        <Form.Item name={"shippercontactpersonnumber"}>
                          <CustPhoneInput
                            international={true}
                            countryCallingCodeEditable={false}
                            defaultCountry={
                              InitialData?.tradeType === 1
                                ? "AE"
                                : getAbbr(selectedCountry)
                            }
                            className="Contact"
                            placeholder="Enter phone number"
                            value={phone1}
                            onChange={(phone1) => setphone1(phone1)}
                            autoComplete={false}
                          />
                          {phone1 ? (
                            isValidPhoneNumber(phone1) ? (
                              <span style={{ color: "green" }}>Valid</span>
                            ) : (
                              <span style={{ color: "red" }}>Invalid</span>
                            )
                          ) : (
                            ""
                          )}
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>City</LabelTitle> */}

                        <Form.Item
                          name={"shippercity"}
                          rules={[
                            {
                              required: true,
                              message: "Please select City",
                            },
                          ]}
                        >
                          <CustSelectCity
                            showSearch
                            style={{
                              width: "90%",
                            }}
                            size="large"
                            value={selectedCity}
                            onChange={(city) => setSelectedCity(city)}
                          >
                            {cityData?.map((city) => (
                              <Option key={city.id} value={city.name}>
                                {city.name}
                              </Option>
                            ))}
                          </CustSelectCity>
                          {/* <CustSelectCity
                            country={
                              InitialData?.serviceTypeOpt == 2 &&
                              InitialData.tradeType == 2
                                ? "United Arab Emirates"
                                : selectedCountry
                            }
                            value={selectedCity}
                            onChange={(city) => setSelectedCity(city)}
                          /> */}
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>Phone Number</LabelTitle> */}

                        <Form.Item name={"shipperphonenumber"}>
                          <CustPhoneInput
                            international={true}
                            countryCallingCodeEditable={false}
                            defaultCountry={
                              InitialData?.tradeType === 1
                                ? "AE"
                                : getAbbr(selectedCountry)
                            }
                            value={phone2}
                            onChange={(phone2) => setphone2(phone2)}
                          />
                          {phone2 ? (
                            isValidPhoneNumber(phone2) ? (
                              <span style={{ color: "green" }}>Valid</span>
                            ) : (
                              <span style={{ color: "red" }}>Invalid</span>
                            )
                          ) : (
                            ""
                          )}
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>District / Area</LabelTitle> */}

                        <Form.Item
                          name={"shipperarea"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your distric Name",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            prefix={
                              <EnvironmentOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            placeholder="District / Area"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        {/* <LabelTitle>Building Name or Number</LabelTitle> */}

                        <Form.Item
                          name={"shipperbuildingName"}
                          rules={[
                            {
                              required: true,
                              message:
                                "Please input your Building Name or number",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            prefix={
                              <HomeOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            placeholder="Building Name or Number"
                          />
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={12}
                        lg={12}
                        xl={12}
                        xxl={12}
                        onClick={showModal}
                      >
                        {/* <LabelTitle> */}
                        {/* Nearest landmark and additional instructions */}
                        {/* </LabelTitle> */}

                        <Form.Item
                          style={{ backgroundColor: "white" }}
                          name={"shippernearestLandmark"}
                          rules={[
                            {
                              message:
                                "Please input Nearest landmark and additional instructions",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            id={"shippernearestLandmark"}
                            value={selectedPlaceName}
                            prefix={
                              <HomeOutlined
                                style={{
                                  fontSize: "18px",
                                  color: "#aeb1b6",
                                }}
                              />
                            }
                            placeholder="Nearest landmark and additional instructions"
                          />
                        </Form.Item>
                      </Col>

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
                            onClick={() => {
                              dispatch(
                                updateData({
                                  ...InitialData,
                                  shipmentDetails: {},
                                })
                              );
                              if (InitialData.serviceType === 1) {
                                if (InitialData.serviceTypeOpt === 1) {
                                  setCurrent(0);
                                  dispatch(
                                    updateData({
                                      tradeType: 0, // Import & Export
                                      serviceType: 1, // Air land
                                      serviceTypeOpt: null,
                                    })
                                  );
                                } else {
                                  setCurrent(1);
                                  dispatch(
                                    updateData({
                                      tradeType: 0, // Import & Export
                                    })
                                  );
                                }
                              } else if (InitialData.serviceType === 2) {
                                setCurrent(0);
                              } else if (InitialData.serviceType === 3) {
                                setCurrent(
                                  InitialData.serviceTypeOpt === 1 ? 1 : 0
                                );
                              }
                            }}
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
                            Next
                            <AiOutlineArrowRight
                              style={{ marginLeft: "5px" }}
                            />
                          </MWButton>
                        </Row>
                      </Col>
                      <Col span={24}>
                        <Row justify={"space-between"}>
                          <Col>
                            <CircleContainer style={{ marginBottom: "0px" }} />
                          </Col>
                          <Col>
                            <CircleContainer style={{ marginBottom: "0px" }} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </FormBackground>
              </Form>
            </Col>
          </Row>
        </BackgroundCol>

        <div>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={350}
          >
            <Map
              country={
                InitialData?.tradeType === 1 ? "AE" : getAbbr(selectedCountry)
              }
              onSelectPlace={handlePlaceName}
            />
          </Modal>
        </div>
      </Wrapper>
    </>
  );
};

export default ShipperDetail;
