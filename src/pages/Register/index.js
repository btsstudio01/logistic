import React, { useState, useLayoutEffect } from "react";
import { Row, Col, Input, Form, Modal, Grid, Checkbox, Upload } from "antd";
import apiRequest from "../../common/apiRequest";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import BackImg from "../../assets/loginBg.png";

import {
  Wrapper,
  SubHeading,
  CustInputPassword,
  MWButton,
  MWButtonTwo,
  LabelTitle,
  CustSelectCountry,
  CustSelectCity,
  CustSelectRegion,
} from "../../common/globalStyle";

import { MailOutlined } from "@ant-design/icons";
import {
  UploadOutlined,
  UserOutlined,
  BankOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import MainLayout from "../../common/Layout";

const StyledBox = styled(Col)`
  padding: 3.2rem;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  box-shadow: 10px 10px 18px -2px rgba(255, 255, 255, 0.75);
  @media (max-width: 467px) {
    padding: 1.6rem;
  }
`;

const NormalText = styled.p`
color:black;
font-size:1.9rem;
font-weight:300;
@media (max-width:1278px){
  font-size:1.6rem
}`;
const MainHeading = styled.h1`
  color: black;
  font-size: 4.8rem;

  @media (max-width: 1278px) {
    font-size: 3.2rem;
  }
`;

export const CustInput = styled(Input)`
  height: 45px;
  padding-left: 10px;
  width: 90%;
  border-radius: 4px;

  background: #fff;
  box-shadow: 0px 0px 1px 1px rgba(9, 45, 86, 0.25),
    0px -1px 1px 0px rgba(0, 0, 0, 0.25) inset;
  &::placeholder {
    color: #bfbfbf; /* Change this to the desired placeholder color */
  }
  .ant-select-selector {
    border: 0px !important;
  }
  $:hover {
    border-color: white;
  }
`;

const { useBreakpoint } = Grid;

const Register = () => {
  const screens = useBreakpoint();

  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [tradefile, setTradeFile] = useState(null);
  const [vatfile, setVatFile] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [temp, setTemp] = useState(0);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (localStorage.getItem("access-token") != null) {
      navigate("/");
    }
  }, []);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleFileChange = async (fieldName, { fileList }) => {
    if (fileList.length > 0) {
      const uploadedFile = fileList[0];
      if (uploadedFile.originFileObj) {
        const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();

        if (fieldName === "vat") {
          setVatFile(uploadedFile.originFileObj);
          form.setFieldsValue({ vat: uploadedFile.originFileObj });
        } else if (fieldName === "trade") {
          setTradeFile(uploadedFile.originFileObj);
          form.setFieldsValue({ trade: uploadedFile.originFileObj });
        }
      } else {
        Modal.error({
          title: "Error",
          content: "File upload failed.",
          onOk: handleModalClose,
        });
      }
    }
  };
  const onFinish = async (val) => {
    const fname = form.getFieldValue("fname");
    const lname = form.getFieldValue("lname");
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");

    try {
      const regUser = {
        email: email,
        username: fname + " " + lname,
        password: password,
        companyname: val?.companyname,
        companyaddress: val?.companyaddress,
        country: val?.country,
        city: val?.city,
        // vat_certificate: vatfile,
        // trade_certificate: tradefile,

        // trade: tradefile,
        phonenumber: val?.phonenumber.toString(),
      };
      const res = await apiRequest(process.env.REACT_APP_CALCULATOR, {
        url: "users/register",
        method: "post",
        data: regUser,
        headers: { "Content-Type": "application/json" },
      });

      if (res) {
        if (res.status === 200 || res.status === 201) {
          Modal.success({
            title: "success",
            content: "Registered Successfully,Kinfly verify your Email address",
            onOk: handleModalClose,
          });

          navigate("/login");
        } else {
          Modal.error({
            title: "Error",
            content: "Registration failed. Please try again.",
            onOk: handleModalClose,
          });
        }
      }
    } catch (error) {
      Modal.error({
        title: "Error",
        content: "Registration failed. Please try again.",
        onOk: handleModalClose,
      });
    }
  };
  const handleUserData = () => {
    const fname = form.getFieldValue("fname");
    const lname = form.getFieldValue("lname");
    const email = form.getFieldValue("email");
    const password = form.getFieldValue("password");
    const cpassword = form.getFieldValue("cpassword");

    if (
      fname !== undefined &&
      fname !== "" &&
      lname !== undefined &&
      lname !== "" &&
      email !== undefined &&
      email !== "" &&
      password !== undefined &&
      password !== "" &&
      cpassword !== undefined &&
      cpassword !== ""
    ) {
      if (password === cpassword) {
        setTemp(1);
      } else {
        Modal.error({
          title: "Error",
          content: "Password is not equal to Confirm password",
          onOk: handleModalClose,
        });
      }
    } else {
      Modal.error({
        title: "Error",
        content: "Input All Field Values",
        onOk: handleModalClose,
      });
    }
  };
  return (
    <MainLayout removeSpace={true}>
      <Wrapper
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          height: screens?.xs ? "auto" : "100vh",
          marginTop: "0px",
          paddingTop: "0px",
          paddingBottom: "0px",
          marginBottom: "0px",
          // opacity: 0.9,
          background: ` url(${BackImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // brightness: 0.8,
        }}
        align={"middle"}
      >
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22}>
              <Row justify={"center"}>
                <StyledBox
                  xs={23}
                  md={14}
                  // lg={14}
                  xl={10}
                  style={{
                    marginTop: screens?.xs ? "3.2rem" : "",
                    marginBottom: screens?.xs ? "3.2rem" : "",
                  }}
                >
                  <Row align={"middle"} justify={"center"}>
                    <Col>
                      <Row
                        style={{
                          marginBottom: "0px",
                          textAlign: screens?.lg ? "center" : "",
                        }}
                      >
                        <MainHeading>Create an Account</MainHeading>
                      </Row>
                      <Row>
                        {temp === 0 ? (
                          <SubHeading
                            style={{
                              color: "black",
                              letterSpacing: "1px",
                            
                              marginTop: "0rem",
                            }}
                          >
                            To keep connected with us please register with your
                            personal information by email address and password
                          </SubHeading>
                        ) : (
                          <SubHeading
                            style={{
                              color: "black",
                              letterSpacing: "1px",
                              fontSize: "1.6rem",
                              marginTop: "0rem",
                            }}
                          >
                            Help us understand your logistics needs by providing
                            your company information. We look forward to
                            partnering with you for seamless operations.
                          </SubHeading>
                        )}
                      </Row>
                      <Form
                        form={form}
                        name="basic"
                        onFinish={onFinish}
                        autoComplete="off"
                      >
                        {temp === 0 ? (
                          <Row
                            gutter={[20, 0]}
                            align={"middle"}
                            justify={"center"}
                          >
                            <Col span={24}>
                              <Row gutter={[10, 0]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>First Name</LabelTitle>
                                  <Form.Item
                                    name="fname"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your First Name",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      prefix={
                                        <UserOutlined
                                          style={{
                                            width: "100%",
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      style={{ border: "0px", width: "100%" }}
                                      placeholder="First Name"
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
                                >
                                  <LabelTitle>Last Name</LabelTitle>
                                  <Form.Item
                                    name="lname"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your Last Name",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      prefix={
                                        <UserOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      style={{ border: "0px", width: "100%" }}
                                      placeholder="Last Name"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={24}>
                              <Row gutter={[10, 0]}>
                                <Col span={24}>
                                  <LabelTitle>Email Address</LabelTitle>
                                  <Form.Item
                                    name="email"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your Email Address",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      prefix={
                                        <MailOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      style={{ border: "0px", width: "100%" }}
                                      placeholder="Email Address"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={24}>
                              <Row gutter={[10, 0]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>Password</LabelTitle>
                                  <Form.Item
                                    min={8}
                                    name="password"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your Password",
                                      },
                                    ]}
                                  >
                                    <CustInputPassword placeholder="Password" />
                                  </Form.Item>
                                </Col>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>Confirm Password</LabelTitle>
                                  <Form.Item
                                    min={8}
                                    name="cpassword"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your Confirm Password",
                                      },
                                    ]}
                                  >
                                    <CustInputPassword placeholder="Confirm Password" />
                                  </Form.Item>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={24}>
                              <Row>
                                <MWButton
                                  style={{ width: "100%", padding: "2.4rem" }}
                                  type="primary"
                                  onClick={() => handleUserData()}
                                >
                                  Continue
                                </MWButton>
                              </Row>
                              <Row justify={"center"}>
                                <Col
                                  span={24}
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                  }}
                                >
                                  <NormalText style={{fontSize:14}}>Already have an account?</NormalText>
                                  <a
                                    href="/login"
                                    style={{ marginLeft: "1rem" }}
                                  >
                                    Login Now
                                  </a>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        ) : (
                          <Row
                            gutter={[20, 0]}
                            align={"middle"}
                            justify={"center"}
                          >
                            <Col span={24}>
                              <Row gutter={[10, 20]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>Company Name</LabelTitle>
                                  <Form.Item
                                    name="companyname"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your Company Name",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      style={{
                                        width: "100%",
                                      }}
                                      prefix={
                                        <BankOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      placeholder="Company Name"
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
                                >
                                  <LabelTitle>Company Address</LabelTitle>
                                  <Form.Item
                                    name="companyaddress"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your Address",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      style={{
                                        width: "100%",
                                      }}
                                      prefix={
                                        <EnvironmentOutlined
                                          style={{
                                            fontSize: "18px",

                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      placeholder="Company Address"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <Row gutter={[10, 20]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>Country</LabelTitle>
                                  <Form.Item
                                    name="country"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your Country",
                                      },
                                    ]}
                                  >
                                    <CustSelectCountry
                                      placeholder="Country Name"
                                      value={selectedCountry}
                                      onChange={(country) =>
                                        setSelectedCountry(country)
                                      }
                                      style={{
                                        width: "100%",
                                        border: "0px",
                                        boxShadow:
                                          "0px 0px 2px 2px rgba(9, 45, 86, 0.25)",
                                      }}
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
                                >
                                  <LabelTitle>City</LabelTitle>
                                  <Form.Item
                                    name="city"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your City",
                                      },
                                    ]}
                                  >
                                    <CustSelectRegion
                                      country={selectedCountry}
                                      value={selectedCity}
                                      onChange={(city) => setSelectedCity(city)}
                                      style={{
                                        border: "0px",
                                        boxShadow:
                                          "0px 0px 2px 2px rgba(9, 45, 86, 0.25)",
                                      }}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              <Row gutter={[20, 20]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <LabelTitle>Zip Code</LabelTitle>
                                  <Form.Item
                                    name="zipcode"
                                    rules={[
                                      {
                                        required: true,
                                        message: "Please input your Zip code",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      style={{ width: "100%" }}
                                      prefix={
                                        <EnvironmentOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      placeholder="Zip Code"
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
                                >
                                  <LabelTitle>Phone Number</LabelTitle>
                                  <Form.Item
                                    name="phonenumber"
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          "Please input your Phone number",
                                      },
                                    ]}
                                  >
                                    <CustInput
                                      style={{ width: "100%" }}
                                      prefix={
                                        <PhoneOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                      }
                                      placeholder="Phone Number"
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>

                              {/* <Row gutter={[20, 0]}>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <Row>
                                    <Col span={24}>
                                      <LabelTitle style={{ color: "black" }}>
                                        {" "}
                                        UPLOAD VAT CERTIFICATE
                                      </LabelTitle>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col
                                      span={22}
                                      style={{
                                        height: "45px",
                                        border: "1px solid rgb(147, 147, 147)",
                                        borderRadius: "5px",
                                        paddingTop: "0.75rem",
                                        paddingLeft: "1rem",
                                      }}
                                    >
                                      <Upload
                                        name="pdfFile"
                                        beforeUpload={() => false}
                                        onChange={(fileList) =>
                                          handleFileChange("vat", fileList)
                                        }
                                      >
                                        <UploadOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                        <span
                                          style={{
                                            marginRight: "0.25rem",
                                            color: "#bfbfbf",
                                          }}
                                        >
                                          {" "}
                                          Upload
                                        </span>
                                      </Upload>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col
                                  xs={24}
                                  sm={24}
                                  md={12}
                                  lg={12}
                                  xl={12}
                                  xxl={12}
                                >
                                  <Row>
                                    <Col span={24}>
                                      <LabelTitle style={{ color: "black" }}>
                                        {" "}
                                        UPLOAD TRADE LICENSE
                                      </LabelTitle>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col
                                      span={22}
                                      style={{
                                        height: "45px",
                                        border: "1px solid rgb(147, 147, 147)",
                                        borderRadius: "5px",
                                        paddingTop: "0.75rem",
                                        paddingLeft: "1rem",
                                        marginBottom: "1rem",
                                      }}
                                    >
                                      <Upload
                                        name="pdfFile"
                                        beforeUpload={() => false} // Prevent automatic file upload
                                        onChange={(fileList) =>
                                          handleFileChange("trade", fileList)
                                        }
                                      >
                                        {" "}
                                        <UploadOutlined
                                          style={{
                                            fontSize: "18px",
                                            color: "#aeb1b6",
                                          }}
                                        />
                                        <span
                                          style={{
                                            marginRight: "0.25rem",
                                            color: "#bfbfbf",
                                          }}
                                        >
                                          {" "}
                                          Upload
                                        </span>
                                      </Upload>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row> */}
                            </Col>
                            <Col span={24}>
                              <Checkbox
                                checked={checked}
                                onChange={handleCheckboxChange}
                                style={{fontSize:"1.6rem" ,fontWeight:"300"}}
                              >
                                By signing in or creating an account, you agree
                                with our Terms & conditions
                              </Checkbox>
                            </Col>

                            <Col span={24}>
                              <Row
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  marginTop: "1.6rem",
                                  width: "100%",
                                  // background: "black",
                                  // marginRight: "2rem",
                                }}
                              >
                                <Col span={8}>
                                  <MWButtonTwo
                                    type="primary"
                                    style={{ borderRadius: "10px" }}
                                    onClick={() => setTemp(0)}
                                  >
                                    Go back
                                  </MWButtonTwo>
                                </Col>
                                <Col
                                  xs={10}
                                  md={8}
                                  style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                  }}
                                >
                                  <MWButton type="primary" htmlType="submit">
                                    Register Now
                                  </MWButton>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        )}
                      </Form>
                    </Col>
                  </Row>
                </StyledBox>
              </Row>
            </Col>
          </Row>
        </Col>
      </Wrapper>
    </MainLayout>
  );
};

export default Register;
