import React from "react";
import { useNavigate } from "react-router";
import QuoteReq from "../assets/quote-request.png";
import Cust from "../assets/customer-service.png";
import TrackingImg from "../assets/tracking.png";
import JoinUs from "../assets/collaboration.png";
import MobileNav from "../constant/MobileNav";
import { Layout, Menu, Row, Col, Image, Button } from "antd";
// import Navbar from "./constan";
import Navbar from "../constant/Navbar";
// import { useSelector, useDispatch } from "react-redux";

// import {
//   FacebookFilled,
//   LinkedinFilled,
//   WhatsAppOutlined,
//   TwitterSquareFilled,
//   YoutubeFilled,
//   InstagramFilled,
// } from "@ant-design/icons";
import { Grid } from "antd";
// import { Colors } from "../constant/theme/theme";
// import styled from "styled-components";
import Footer from "./Footer";
// import SocialBar from "./SocialBar";
// import { useNavigate } from "react-router";

const { useBreakpoint } = Grid;

const { Header, Content, Sider } = Layout;
// const MWButton = styled(Button)`
//   && {
//     background-color: ${Colors?.secondry};
//     border: 0;
//     color: white;
//     margin-inline: 1rem;
//     height: 40px;

//     &:hover {
//       color: white;
//     }
//   }
// `;
const MainLayout = ({ userId, children, removeSpace }) => {
  const screens = useBreakpoint();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        overflow: "hidden",
      }}>
      {screens.lg ? (
        <Sider
          width={90}
          style={{
            backgroundColor: "white",
            paddingTop: "0px",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: 10,
          }}>
          <Menu
            theme="dark"
            mode="inline"
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#E30022",
            }}>
            <Row>
              <Menu.Item key="1" style={{ height: 80 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}>
                  <a href={"/tracking"} onClick={() => navigate("/tracking")}>
                    <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                      <Row justify={"center"}>
                        <Image
                          src={TrackingImg}
                          width={38}
                          height={38}
                          preview={false}
                        />
                      </Row>
                    </div>
                    <div style={{ flex: 1 }}>
                      <Row justify={"center"}>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Track &
                        </p>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Tract
                        </p>
                      </Row>
                    </div>
                  </a>
                </div>
              </Menu.Item>
              <Menu.Item
                key="2"
                style={{ height: 80 }}
                onClick={() => {
                  //       if (!tokenUser) {
                  //         console.log('hitttttttt');

                  navigate("/quote");
                  //       } else {
                  //         dispatch(setFlagAction(0))
                  //       navigate('/quote')
                  //       }
                }}>
                <a href={"/quote"}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                    <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                      <Row justify={"center"}>
                        <Image
                          src={QuoteReq}
                          width={28}
                          height={28}
                          preview={false}
                        />
                      </Row>
                    </div>
                    <div style={{ flex: 1 }}>
                      <Row justify={"center"}>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Quote a
                        </p>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Service
                        </p>
                      </Row>
                    </div>
                  </div>
                </a>
              </Menu.Item>

              <Menu.Item key="3" style={{ height: 80 }}>
                <a href={"/contact"} onClick={() => navigate("/contact")}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                    <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                      <Row justify={"center"}>
                        <Image
                          src={Cust}
                          width={38}
                          height={38}
                          preview={false}
                        />
                      </Row>
                    </div>
                    <div style={{ flex: 1 }}>
                      <Row justify={"center"}>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Customer
                        </p>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          resources
                        </p>
                      </Row>
                    </div>
                  </div>
                </a>
              </Menu.Item>
              <Menu.Item key="4" style={{ height: 80 }}>
                <a href={"/careers"} onClick={() => navigate("/careers")}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}>
                    <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                      <Row justify={"center"}>
                        <Image
                          src={JoinUs}
                          width={38}
                          height={38}
                          preview={false}
                        />
                      </Row>
                    </div>
                    <div style={{ flex: 1 }}>
                      <Row justify={"center"}>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          Join
                        </p>
                        <p style={{ padding: 0, margin: 0, lineHeight: "1.2" }}>
                          us
                        </p>
                      </Row>
                    </div>
                  </div>
                </a>
              </Menu.Item>
            </Row>
          </Menu>
        </Sider>
      ) : (
        <>
          <Row
            style={{
              position: "fixed",
              zIndex: 10,
              background: "#fff",
              width: "100%",
            }}>
            <Col span={24}>
              <MobileNav userId={userId} />
            </Col>
            <Col span={24}>
              <Menu
                theme="dark"
                mode="horizontal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Menu.Item key="1">
                  <a href={"tracking"}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}>
                      <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                        <Row justify={"center"}>
                          <Image
                            src={TrackingImg}
                            width={30}
                            height={30}
                            preview={false}
                          />
                        </Row>
                      </div>
                      <div style={{ flex: 1, marginTop: "0.5rem" }}>
                        <Row justify={"center"}>
                          <p
                            style={{
                              padding: 0,
                              margin: 0,
                              lineHeight: "1.2",
                            }}>
                            Track
                          </p>
                        </Row>
                      </div>
                    </div>
                  </a>
                </Menu.Item>
                <Menu.Item key="2">
                  <a href={"quote"}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}>
                      <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                        <Row justify={"center"}>
                          <Image
                            src={QuoteReq}
                            width={30}
                            height={30}
                            preview={false}
                          />
                        </Row>
                      </div>
                      <div style={{ flex: 1, marginTop: "0.5rem" }}>
                        <Row justify={"center"}>
                          <p
                            style={{
                              padding: 0,
                              margin: 0,
                              lineHeight: "1.2",
                            }}>
                            Quote
                          </p>
                        </Row>
                      </div>
                    </div>
                  </a>
                </Menu.Item>

                <Menu.Item key="3">
                  <a href={"contact"}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}>
                      <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                        <Row justify={"center"}>
                          <Image
                            src={Cust}
                            width={30}
                            height={30}
                            preview={false}
                          />
                        </Row>
                      </div>
                      <div style={{ flex: 1, marginTop: "0.5rem" }}>
                        <Row justify={"center"}>
                          <p
                            style={{
                              padding: 0,
                              margin: 0,
                              lineHeight: "1.2",
                            }}>
                            Customer
                          </p>
                        </Row>
                      </div>
                    </div>
                  </a>
                </Menu.Item>
                <Menu.Item key="4">
                  <a href={"careers"}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}>
                      <div style={{ flex: 1, marginBottom: "0.5rem" }}>
                        <Row justify={"center"}>
                          <Image
                            src={JoinUs}
                            width={38}
                            height={38}
                            preview={false}
                          />
                        </Row>
                      </div>
                      <div style={{ flex: 1, marginTop: "0.5rem" }}>
                        <Row justify={"center"}>
                          <p
                            style={{
                              padding: 0,
                              margin: 0,
                              lineHeight: "1.2",
                            }}>
                            Join us
                          </p>
                        </Row>
                      </div>
                    </div>
                  </a>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </>
      )}
      <Layout className="site-layout" style={{ backgroundColor: "white" }}>
        {screens.lg ? (
          <Header
            style={{
              padding: 0,
              backgroundColor: "#E30022",
              position: "fixed",
              zIndex: 2,
              width: "100%",
            }}>
            <Row
              justify={"start"}
              style={{
                marginLeft: "90px",
                backgroundColor: "white",
                height: "100%",
              }}
              align={"middle"}
              gutter={24}>
              <Navbar userId={userId} />
            </Row>
          </Header>
        ) : null}
        <div style={{ height: 70 }}></div>
        <Content>{children}</Content>
        <Footer removeSpace={removeSpace} />
        {/* <SocialBar screens={screens} /> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
