import React, { useState, useEffect } from "react";
import Map from "../../../common/Map";

import { Col, Row, Form, Select, Modal, Grid, notification } from "antd";
import { getAbbr } from "countries";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import apiRequest from "../../../common/apiRequest";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "../../../App.css";

import {
  MailOutlined,
  UserOutlined,
  EnvironmentOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  CustInput,
  CustSelectCountry,
  CustSelectCity,
  MWButton,
  BackgroundCol,
  CustPhoneInput,
  CircleContainer,
  HeadingDiv,
  Wrapper,
} from "../../../common/globalStyle";
import bgImg from "../../../assets/receiverBg.png";
import { FormBackground } from "../../../common/globalStyle";
import SeaBgImg from "../../../bg/sea1.png";

import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../redux/DataRedux";
import axios from "axios";
import { Option } from "antd/es/mentions";

const { useBreakpoint } = Grid;

const ReceiverDetail = ({ setCurrent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityData, setCityData] = useState([]);

  const InitialData = useSelector((state) => state.data).data;
  const dispatch = useDispatch();
  const showModalMap = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    form.setFieldsValue({ receivernearestLandmark: selectedPlaceName1 });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedPlaceName1, setSelectedPlaceName1] = useState("");

  const [form] = Form.useForm();
  const screens = useBreakpoint();
  const [phone1, setphone1] = useState("");

  const [phone2, setphone2] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalClose = () => {
    setModalVisible(false);
  };
  // console.log(InitialData);

  // for settinng previos user detials

  useEffect(() => {
    form.setFields([
      {
        name: "receivername",
        value: InitialData.recieverDetails?.rec_companyName,
      },
      {
        name: "receiveremail",
        value: InitialData.recieverDetails?.rec_companyEmail,
      },
      {
        name: "receivercontactpersonname",
        value: InitialData.recieverDetails?.rec_contactPersonName,
      },
      {
        name: "receivercountry",
        value:
          InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 1
            ? "United Arab Emirates"
            : InitialData.recieverDetails?.rec_country,
      },

      {
        name: "receiverarea",
        value: InitialData.recieverDetails?.rec_districtArea,
      },
      {
        name: "receiverbuildingName",
        value: InitialData.recieverDetails?.rec_buildingName,
      },
    ]);
    setSelectedPlaceName1(InitialData.recieverDetails?.rec_nearestLandmark);
    form.setFieldsValue({
      receivernearestLandmark: InitialData.recieverDetails?.rec_nearestLandmark,
    });
    setSelectedCity(InitialData.recieverDetails?.rec_city);
    form.setFieldsValue({
      receivercity: InitialData.recieverDetails?.rec_city,
    });

    setphone1(InitialData.recieverDetails?.rec_contactPersonNumber);
    setphone2(InitialData.recieverDetails?.rec_phoneNumber);
  }, []);
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

          dropoffCity: val?.receivercity,
          dropoff:
            InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 1
              ? "United Arab Emirates"
              : val?.receivercountry,
        },
        receiverData: {
          rec_companyName: val?.receivername,
          rec_companyEmail: val?.receiveremail,
          rec_contactPersonName: val?.receivercontactpersonname,
          rec_contactPersonNumber: phone1,
          rec_country:
            InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 1
              ? "United Arab Emirates"
              : val?.receivercountry,
          rec_city: val?.receivercity,
          rec_phoneNumber: phone2,
          rec_districtArea: val?.receiverarea,
          rec_buildingName: val?.receiverbuildingName,
          rec_nearestLandmark: selectedPlaceName1,
        },
      };
      dispatch(
        updateData({
          recieverDetails: payload.receiverData,
          shipmentDetails: payload.shipmentDetails,
        })
      );

      // const response = await apiRequest(
      //   process.env.REACT_APP_CALCULATOR,

      //   {
      //     url: "/trade/stepThree",
      //     method: "post",
      //     data: payload,
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      // .then((response) => {
      //   console.log("anything", response);
      //   if (response.status === 200 || response.status === 201) {
      setCurrent(4);
      //   } else {
      //     Modal.error({
      //       title: "Error",
      //       content: "Receiver Details failed. Please try again.",
      //       onOk: handleModalClose,
      //     });
      //   }
      // });

      // if (response) {
      //   if (response.status === 200 || response.status === 201) {
      //     setCurrent(4);
      //   } else {
      //     Modal.error({
      //       title: "Error",
      //       content: "Receiver Details failed. Please try again.",
      //       onOk: handleModalClose,
      //     });
      //   }
      // }
    } catch (err) {
      Modal.error({
        title: "Error",
        content: err,
        onOk: handleModalClose,
      });
    }
  };
  const handlePlaceName = (placeName) => {
    setSelectedPlaceName1(placeName);
    // You can perform further actions with the selected place name here
  };
  const fetchCitiesData = async (country) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}users/cities`,
      {
        country: country,
      }
    );
    if (data.length > 0) {
      setCityData(data);
    }
  };
  useEffect(() => {
    fetchCitiesData(InitialData?.recieverDetails?.rec_country);
  }, []);
  useEffect(() => {
    fetchCitiesData(
      InitialData?.serviceTypeOpt == 2 && InitialData.tradeType == 1
        ? "United Arab Emirates"
        : selectedCountry
    );
  }, [selectedCountry]);

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
                autoComplete="off"
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
                      <HeadingDiv>Receiver Details</HeadingDiv>
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
                          name={"receivername"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your Name",
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
                            placeholder="Company name "
                            // defaultValue={InitialData.rec_companyName}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Item
                          name={"receiveremail"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email",
                            },
                          ]}
                        >
                          <CustInput
                            style={{ width: "90%" }}
                            prefix={
                              <MailOutlined
                                style={{ fontSize: "18px", color: "#aeb1b6" }}
                              />
                            }
                            // defaultValue={InitialData.rec_companyEmail}
                            placeholder="Email Address"
                            type="email"
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={[20, 20]}>
                      <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                        <Form.Item
                          name={"receivercontactpersonname"}
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
                        <Form.Item
                          name="receivercountry"
                          rules={[
                            {
                              required: InitialData?.tradeType !== 2,
                              message: "Please input your Country",
                            },
                          ]}
                        >
                          {InitialData?.serviceTypeOpt == 2 &&
                          InitialData.tradeType == 1 ? (
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
                        <Form.Item name={"receivercontactpersonnumber"}>
                          <CustPhoneInput
                            international={true}
                            countryCallingCodeEditable={false}
                            defaultCountry={
                              InitialData?.tradeType === 2
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
                        <Form.Item
                          name={"receivercity"}
                          rules={[
                            {
                              required: true,
                              message: "Please input City Name",
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
                              InitialData.tradeType == 1
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
                        <Form.Item name={"receiverphonenumber"}>
                          <CustPhoneInput
                            international={true}
                            countryCallingCodeEditable={false}
                            defaultCountry={
                              InitialData?.tradeType === 2
                                ? "AE"
                                : getAbbr(selectedCountry)
                            }
                            className="Contact"
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
                        <Form.Item
                          name={"receiverarea"}
                          rules={[
                            {
                              required: true,
                              message: "Please input your District",
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
                        <Form.Item
                          name={"receiverbuildingName"}
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
                        onClick={showModalMap}
                      >
                        <Form.Item
                          name={"receivernearestLandmark"}
                          onClick={() => {
                            setShowModal(true);
                          }}
                          rules={[
                            {
                              message:
                                "Please input Nearest landmark and additional instructions",
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
                            onClick={() => setCurrent(2)}
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
              country={getAbbr(selectedCountry)}
              onSelectPlace={handlePlaceName}
            />
          </Modal>
        </div>
      </Wrapper>
    </>
  );
};

export default ReceiverDetail;
