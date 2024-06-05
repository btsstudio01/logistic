import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Row, Col, Form, Modal, Grid, Checkbox } from "antd";
import apiRequest from "../../common/apiRequest";
import {
  removeAccessToken,
  setAccessToken,
  setRefreshToken,
  setUserRefreshToken,
} from "../../common/auth";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import {
  setToken,
  setUserCredentials,
} from "../../redux/reudcer/counterReducer";
import BackImg from "../../assets/loginBg.png";
import {
  CustInput,
  CustInputPassword,
  MWButton,
  Wrapper,
} from "../../common/globalStyle";
import { useLocation } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import MainLayout from "../../common/Layout";
import { useLayoutEffect } from "react";
import { updateData } from "../../redux/DataRedux";

const { useBreakpoint } = Grid;
const StyledBox = styled(Col)`
  padding: 3.2rem;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;

  border-radius: 4.8px;
  box-shadow: 10px 10px 18px -2px rgba(255, 255, 255, 0.75);
  @media (max-width: 467px) {
    padding: 1.6rem;
  }
`;
const MainHeading = styled.h1`
  color: black;
  font-size: 4.8rem;

  @media (max-width: 1278px) {
    font-size: 3.2rem;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || {};
  const screens = useBreakpoint();
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateScreen, setUpdateScreen] = useState(false);
  // const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const urls = window.location.href?.split("/")[3];

  useEffect(() => {
    // if (urls == "quote" && localStorage.getItem("access-token") != null) {
    //   setFlag(3);
    // } else
    if (localStorage.getItem("access-token") != null) {
      if (from) {
        navigate(`/${from}`);
      } else {
        navigate("/");
      }
    }
  }, [updateScreen, urls]);

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  const onFinish = async (values) => {
    try {
      const loginUser = { email: values?.email, password: values?.password };
      const res = await apiRequest(process.env.REACT_APP_CALCULATOR, {
        url: "users/login",
        method: "post",
        data: loginUser,
        headers: { "Content-Type": "application/json" },
      });
      if (res) {
        if (res.status === 200 || res.status === 201) {
          setAccessToken(res?.data.token);
          setRefreshToken(res?.data?.refreshToken);
          dispatch(setToken(res?.data?.token));
          dispatch(updateData({ userId: res?.data?.userId }));
          dispatch(setUserCredentials(res?.data?.credentials));
          localStorage.setItem("checkLogin", res?.data?.token);
          Modal.success({
            title: "success",
            content: "LoggedIn Successfully",
            onOk: () => {
              handleModalClose();
              setUpdateScreen((state) => !state);
            },
          });
        } else {
          Modal.error({
            title: "Error",
            content: "Registration failed. Please try again.",
            onOk: handleModalClose,
          });
        }
      }
    } catch (err) {
      Modal.error({
        title: "Error",
        content: "Login failed. Please try again.",
        onOk: handleModalClose,
      });
    }
  };

  return (
    <MainLayout removeSpace={true}>
      <Wrapper
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          height: "100vh",
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
                <StyledBox xs={23} md={14} lg={12} xl={8}>
                  <Row align={"middle"} justify={"center"}>
                    <Row
                      style={{
                        marginBottom: "0px",
                        textAlign: screens?.lg ? "center" : "",
                      }}
                    >
                      <MainHeading>Login to your Account</MainHeading>
                    </Row>
                    <Row>
                      <p
                        style={{
                          color: "black",
                          marginTop: "0px",
                          textAlign: screens?.lg ? "center" : "",
                        }}
                      >
                        Enter to continue and explore within your grasp
                      </p>
                    </Row>

                    <Form
                      form={form}
                      name="basic"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Row gutter={[20, 0]} align={"middle"} justify={"center"}>
                        <Col span={24}>
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                required: true,
                                message: "Please input your email address",
                              },
                            ]}
                          >
                            <CustInput
                              placeholder="Email Address"
                              style={{
                                border: "1px solid gray",
                                width: "100%",
                                boxShadow: "0px 7px 14px -8px rgba(0,0,0,0.75)",
                              }}
                              prefix={
                                <MailOutlined
                                  style={{
                                    fontSize: "18px",
                                    color: "#aeb1b6",
                                  }}
                                />
                              }
                            />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your Password",
                              },
                            ]}
                          >
                            <CustInputPassword
                              style={{
                                width: "100%",
                                boxShadow: "0px 7px 14px -8px rgba(0,0,0,0.75)",
                              }}
                              placeholder="Password"
                            />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Checkbox
                            checked={checked}
                            onChange={handleCheckboxChange}
                          >
                            Remember Me
                          </Checkbox>
                        </Col>
                        <Col span={12}>
                          <Row justify={"end"}>
                            <a
                              style={{
                                fontSize: "1.3rem",
                                fontFamily: 'Teko", sans-serif',
                                color: "black",
                              }}
                            >
                              Forget Password?
                            </a>
                          </Row>
                        </Col>
                        <Row
                          justify={"center"}
                          style={{ width: "100%", margin: "1.6rem" }}
                        >
                          <Col span={24}>
                            <MWButton
                              style={{ width: "100%", padding: "2.4rem" }}
                              type="primary"
                              htmlType="submit"
                            >
                              Login Now
                            </MWButton>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            span={24}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: "1.3rem",
                            }}
                          >
                            <p style={{ margin: 0 }}>Don't have an account?</p>
                            <a
                              href="/register"
                              style={{ marginLeft: "1rem" }}
                            >
                              SignUp
                            </a>
                          </Col>
                        </Row>
                      </Row>
                    </Form>
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

export default Login;
