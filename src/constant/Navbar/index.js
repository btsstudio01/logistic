import React from "react";
import { Menu } from "antd";
import Logo from "../../assets/aboutlogo.png";
import { Colors } from "../theme/theme";
import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import MobileNav from "../MobileNav";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  Button,
  Col,
  Dropdown,
  Grid,
  message,
  Row,
  Space,
  Tooltip,
} from "antd";
import { FiLogOut } from "react-icons/fi";
import AnimatedText from "../AnimatedBannerText";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookFilled,
  LinkedinFilled,
  WhatsAppOutlined,
  TwitterSquareFilled,
  YoutubeFilled,
  InstagramFilled,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const StyledMenu = styled(Menu)`
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 1.7rem;
  border-bottom-color: transparent;

  &&& .ant-menu-item:hover {
    background-color: "transparent";
    color: black;
  }
  .ant-menu > .ant-menu-item:hover {
    border-bottom-color: red !important
    ;
  }

  @media (max-width: 1150px) {
    font-size: 0.85rem;
  }
`;
const StyledSubMenu = styled(SubMenu)`
  background-color: transparent;
  color: black;
  font-weight: 600;
  font-size: 1.7rem;
  border-bottom-color: transparent;

  .antd-menu-submenu-title:hover {
    color: white; /* Change to desired hover color */
  }
  &.ant-menu-submenu-active .ant-menu-submenu-title {
    color: black !important;
    border-bottom-color: red !important;
  }
  && .ant-menu-item:hover {
    border-bottom: 2px solid #659e38 !important;
  }
  @media (max-width: 1150px) {
    font-size: 0.85rem;
  }
`;

const MWButton = styled(Button)`
  && {
    background-color: ${Colors?.secondry};
    border: 0;
    color: white;
    margin-inline: 1rem;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;

const Navbar = ({ userId }) => {
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    if (e.keyPath[0] == 1) {
      navigate(`/user/${userId}/dashboard`);
    } else if (e.keyPath[0] == 2) {
      navigate(`/user/${userId}/profile`);
    } else {
      localStorage.clear();
      navigate(`/`);
      window.location.reload();
    }
  };
  const items = [
    {
      label: "Dashboard",
      key: "1",
      icon: <AiOutlineDashboard />,
    },
    {
      label: "Profile",
      key: "2",
      icon: <CgProfile />,
    },
    {
      label: "Log Out",
      key: "3",
      icon: <FiLogOut />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <Row
        align={"middle"}
        style={{
          backgroundColor: "transparent",
          width: "100%",
          padding: 0,
          margin: 0,
          lineHeight: 2,
        }}
      >
        <Col
          xs={0}
          sm={0}
          md={0}
          lg={24}
          xl={24}
          xxl={24}
          style={{ border: "0px solid red", height: "100%" }}
        >
          <Row
            style={{ backgroundColor: "transparent", border: "0px solid red" }}
            justify={"start"}
            align={"middle"}
          >
            <Col span={24} style={{ border: "0px solid red" }}>
              <Row
                justify={"space-between"}
                style={{ border: "0px solid red" }}
                align={"middle"}
              >
                <Col
                  style={{ backgroundColor: "white", paddingInline: "1rem" }}
                >
                  <a href={"/"}>
                    <img src={Logo} alt="logo" height={50} />
                  </a>
                </Col>
                <Col style={{ border: "0px solid red" }}>
                  <Row align={"middle"}>
                    <Col span={24}>
                      <StyledMenu
                        mode="horizontal"
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          borderBottom: "none",
                        }}
                      >
                        <Menu.Item key="home">
                          <a href="/home">HOME</a>
                        </Menu.Item>
                        <StyledSubMenu key="sub1" title="WHAT WE DO">
                          <Menu.Item key="1">
                            <a href={"/airfreight"}>Air Freight</a>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <a href={"/oceanfreight"}>Ocean Freight</a>
                          </Menu.Item>

                          <Menu.Item key="3">
                            <a href={"/landfreight"}>Land Freight</a>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <a href={"/contract-logistic"}>
                              Contract Logistics
                            </a>
                          </Menu.Item>
                          <Menu.Item key="5">
                            <a href={"/warehousing-and-distribution"}>
                              Warehousing & Distributions
                            </a>
                          </Menu.Item>
                          <Menu.Item key="6">
                            <a href={"/reloaction"}>Relocation</a>
                          </Menu.Item>
                          <Menu.Item key="7">
                            <a href={"/projectcargo"}>Project Cargo</a>
                          </Menu.Item>
                        </StyledSubMenu>
                        <Menu.Item key="about">
                          <a href="/about">WHO WE ARE</a>
                        </Menu.Item>

                        <Menu.Item key="contact">
                          <a href="/contact">FIND US</a>
                        </Menu.Item>
                        
                        <StyledSubMenu key="sub2" title="CAREER">
                          <Menu.Item key="1">
                            <a href={"/career/findajob"}>Find a Job</a>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <a href={"/career/findajob/candidateprofile"}>
                              - My Candidate Profile
                            </a>
                          </Menu.Item>

                          <Menu.Item key="3">
                            <a href={"/career/findajob/signupforalerts"}>- Sign up for Job Alerts</a>
                          </Menu.Item>

                          <Menu.Item key="4">
                            <a href={"/career/lifeatmwl"}>Life @ MWL</a>
                          </Menu.Item>

                          <Menu.Item key="5">
                            <a href={"/career/lifeatmwl/talentsapproach"}>
                              - MWL Talents Approach
                            </a>
                          </Menu.Item>
                          <Menu.Item key="6">
                            <a href={"/career/lifeatmwl/diversityinclusion"}>
                              - Diversity & Inclusion
                            </a>
                          </Menu.Item>

                          <Menu.Item key="4">
                            <a href={"/career/leadershipmwl"}>Leader Ship @ MWL</a>
                          </Menu.Item>

                          <Menu.Item key="5">
                            <a href={"/career/leadershipmwl/leadingbusiness"}>
                              - Leading Business
                            </a>
                          </Menu.Item>
                          <Menu.Item key="6">
                            <a href={"/career/leadershipmwl/leadingteam"}>
                              - Leading Team
                            </a>
                          </Menu.Item>
                          <Menu.Item key="5">
                            <a href={"/leadershipmwl"}>
                              Leadership at MWL
                            </a>
                          </Menu.Item>
                        </StyledSubMenu>
                        {/* <Menu.Item key="career">
                          <a href="/careers">CAREER</a>
                        </Menu.Item> */}
                        {/* <StyledSubMenu key="sub2" title="YOUR INDUSTRY">
                          <Menu.Item key="1">
                            <a href={"/automotive"}>Automotive</a>
                          </Menu.Item>
                          <Menu.Item key="2">
                            <a href={"/consumer-and-retails"}>
                              Consumers & Retail
                            </a>
                          </Menu.Item>

                          <Menu.Item key="3">
                            <a href={"/healthcare"}>Healthcare</a>
                          </Menu.Item>
                          <Menu.Item key="4">
                            <a href={"/industrial-aerospace"}>
                              Industrial & Aerospace
                            </a>
                          </Menu.Item>
                          <Menu.Item key="5">
                            <a href={"/e-commerce"}>e-Commerce</a>
                          </Menu.Item>
                          <Menu.Item key="6">
                            <a href={"/technology"}>Technology</a>
                          </Menu.Item>
                          <Menu.Item key="7">
                            <a href={"/energy"}>Enery</a>
                          </Menu.Item>
                          <Menu.Item key="7">
                            <a href={"/show-freight"}>Show freight</a>
                          </Menu.Item>
                        </StyledSubMenu> */}

                        {localStorage.getItem("access-token") ? (
                          <Menu.Item key="userModal">
                            <Dropdown menu={menuProps}>
                              <Button
                                style={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  boxShadow: "none",
                                }}
                              >
                                <Space>
                                  <AiOutlineUser size={20} color="gray" />
                                </Space>
                              </Button>
                            </Dropdown>
                          </Menu.Item>
                        ) : (
                          <Menu.Item key="login" style={{ color: "red" }}>
                            <a href="/login">Login</a>
                          </Menu.Item>
                        )}
                      </StyledMenu>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Navbar;
