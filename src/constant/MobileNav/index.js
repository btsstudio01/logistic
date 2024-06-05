import React, { useState } from "react";
import { Drawer, Menu, Collapse, Row, Col, Image, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../theme/theme";
import Logo from "../../assets/aboutlogo.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import useScreenWidth from "../../hooks/useScreenWidth";
import "./styles.css";

const { SubMenu } = Menu;
const MWButton = styled(Button)`
  && {
    background-color: ${Colors?.main};
    border: 0;
    color: white;
    width: 100%;

    margin-inline: 1rem;
    height: 40px;

    &:hover {
      color: white;
    }
  }
`;

const MobileNav = ({ userId }) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { screenWidth } = useScreenWidth();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    if (e.keyPath[0] == 1) {
      navigate(`/user/${userId}/dashboard`);
    } else if (e.keyPath[0] == 2) {
      navigate(`/user/${userId}/profile`);
    } else {
      localStorage.clear();
      navigate(`/`);
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
        justify={"end"}
        align={"middle"}
        style={{ height: "75px", paddingInline: "2rem" }}
      >
        <MenuOutlined
          onClick={showDrawer}
          style={{ fontSize: "28px", color: Colors?.primary }}
        />
      </Row>
      <Drawer
        title={""}
        closable={true}
        onClose={onClose}
        visible={visible}
        contentWrapperStyle={{ width: screenWidth }}
      >
        <Menu mode="inline" id="menu-section" style={{ border: 0 }}>
          <Row justify={"center"}>
            <Col style={{ backgroundColor: "white", paddingInline: "1rem" }}>
              <a href={"/"}>
                <img src={Logo} alt="logo" height={60} />
              </a>
            </Col>
          </Row>

          <Menu.Item key="1">
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/about"}>About</Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title="What we do"
            style={{ backgroundColor: "white" }}
          >
            <Menu.Item key="1">
              <Link to={"/airfreight"}>Air Freight</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={"/oceanfreight"}>Sea Freight</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={"/landfreight"}>Land Freight</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/warehousing-and-distribution"}>
                Warehousing & Distributions
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/reloaction"}>Relocation</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/projectcargo"}>Project Cargo</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={"/contract-logistic"}>Contract Logistics</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="4">
            <Link to={"/tracking"}>Tracking</Link>
          </Menu.Item>

          {/* <Menu.Item key="5">
            <Link to={"/news-and-events"}>News & Event</Link>
          </Menu.Item> */}
          {/* <Menu.Item key="6">
            <Link to={"/careers"}>Careers</Link>
          </Menu.Item> */}
          <SubMenu key="sub2" title="Career">
            <Menu.Item key="1">
              <a href={"/career/findajob"}>Find a Job</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href={"/career/findajob/candidateprofile"}>
                - My Candidate Profile
              </a>
            </Menu.Item>

            <Menu.Item key="3">
              <a href={"/career/findajob/signupforalerts"}>
                - Sign up for Job Alerts
              </a>
            </Menu.Item>

            <Menu.Item key="4">
              <a href={"/career/lifeatmwl"}>Life @ logistic</a>
            </Menu.Item>

            <Menu.Item key="5">
              <a href={"/career/lifeatmwl/talentsapproach"}>
                -Talents Approach
              </a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href={"/career/lifeatmwl/diversityinclusion"}>
                - Diversity & Inclusion
              </a>
            </Menu.Item>

            <Menu.Item key="4">
              <a href={"/career/leadershipmwl"}>Leader Ship @ Logistic</a>
            </Menu.Item>

            <Menu.Item key="5">
              <a href={"/career/leadershipmwl/leadingbusiness"}>
                - Leading Business
              </a>
            </Menu.Item>
            <Menu.Item key="6">
              <a href={"/career/leadershipmwl/leadingteam"}>- Leading Team</a>
            </Menu.Item>
          </SubMenu>
          {/* <Menu.Item key="7">
            <Link to={"/online-inquiry"}>Online Inquiry</Link>
          </Menu.Item> */}
          <Menu.Item key="8">
            <Link to={"/contact"}>Find Us</Link>
          </Menu.Item>

          {localStorage.getItem("access-token") ? (
            <SubMenu
              key="sub2"
              title="Accounts"
              style={{ backgroundColor: "white" }}
            >
              <Menu.Item key="1">
                <Link to={`/user/${userId}/dashboard`}>Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={`/user/${userId}/profile`}>Profile</Link>
              </Menu.Item>
              <Menu.Item key="3" style={{ color: "red" }}>
                <MWButton
                  key="login"
                  onClick={() => localStorage.clear()}
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    margin: 0,
                    width: "90%",
                  }}
                >
                  <a
                    style={{
                      fontSize: 14,
                    }}
                    href="/"
                  >
                    Sign Out
                  </a>
                </MWButton>
              </Menu.Item>
            </SubMenu>
          ) : (
            // <Menu.Item key="userModal">
            //   <Dropdown menu={menuProps}>
            //     <Button
            //       style={{
            //         backgroundColor: "transparent",
            //         border: "none",
            //         boxShadow: "none",
            //       }}
            //     >
            //       <Space>
            //         <AiOutlineUser size={20} color="gray" />
            //       </Space>
            //     </Button>
            //   </Dropdown>
            // </Menu.Item>
            <MWButton
              key="login"
              style={{
                color: "white",
                backgroundColor: Colors.secondry,
              }}
            >
              <a href="/login">Login</a>
            </MWButton>
          )}

          <Row
            gutter={[30, 30]}
            style={{ textAlign: "start", marginTop: "1rem" }}
            justify={"space-evenly"}
          >
            <Col span={24} style={{ marginLeft: "10px" }}>
              <MWButton style={{ margin: 0 }}>
                <a href="/quote">Get a Quote</a>
              </MWButton>
            </Col>
          </Row>
        </Menu>
      </Drawer>
    </>
  );
};

export default MobileNav;
