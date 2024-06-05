import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BgMap from "../../../assets/DashboardAssets/MapBg.png";
import { CaretRightOutlined } from "@ant-design/icons";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, message, Row, Space, Tooltip } from "antd";

import {
  StyledUserDashBox,
  StyledPara,
  RequestQuoteBox,
  RequestButton,
  SimpleButton,
  MapBg,
  MapCenterBox,
  Box,
} from "../../../common/globalStyle";
import axios from "axios";
import Loader from "../../../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { updateDashboardData } from "../../../redux/DataRedux";
import { Link } from "react-router-dom";

const Dashboard = ({ userName, userId }) => {
  console.log(userId);
  const Data = useSelector((state) => state.dashboardData.data);

  console.log(Data, "askdg");
  const dispatch = useDispatch();
  let [totalBookings, setTotalBookings] = useState(0);
  const [loading, setloading] = useState(false);
  let [activeBookings, setActiveBookings] = useState(0);
  let [unpaidBookings, setUnpaidBookings] = useState(0);
  let fetchData = async () => {
    setloading(true);
    let unpaid = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/getUnPaidBookings/${userId}`
    );
    let all = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/getAllBookings/${userId}`
    );
    let active = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/getActiveBookings/${userId}`
    );
    dispatch(
      updateDashboardData({
        active: active.data.trades,
        unpaid: unpaid.data.trades,
        all: all.data.trades,
        refetch: false,
      })
    );
    setTotalBookings(all.data.trades);
    setUnpaidBookings(unpaid.data.trades);
    setActiveBookings(active.data.trades);
    setloading(false);
  };
  useEffect(() => {
    console.log("found", userId);
    if (Data.refetch) {
      fetchData();
    } else {
      setTotalBookings(Data.all);
      setUnpaidBookings(Data.unpaid);
      setActiveBookings(Data.active);
    }
  }, []);
  const handleMenuClick = (e) => {
    message.info(`Click on menu item.`);
    console.log("click", e);
  };
  const items = [
    {
      label: "Last 7 days",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Last 14 days",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "Last  month",
      key: "3",
      icon: <UserOutlined />,
    },
    {
      label: "Last year",
      key: "4",
      icon: <UserOutlined />,
    },
    {
      label: "Lifetime",
      key: "4",
      icon: <UserOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Loader />
      </div>
    );
  }
  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox gutter={[30, 0]}>
        <Col>
          <h1>Hello, {userName}</h1>
        </Col>
        <Col>
          <Dropdown menu={menuProps}>
            <Button style={{ width: "200px" }}>
              <Space>
                Last 7 days
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
      </StyledUserDashBox>
      <StyledUserDashBox
        gutter={[20, 20]}
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          justifyContent: "center",
        }}>
        <Col>
          <Box>
            <StyledPara>Total Bookings</StyledPara>
            <h1>{totalBookings}</h1>
          </Box>
        </Col>
        <Col>
          <Box>
            <StyledPara>Active Bookings</StyledPara>
            <h1>{activeBookings}</h1>
          </Box>
        </Col>

        <Col>
          <Box>
            <StyledPara>Unpaid Bookings</StyledPara>
            <h1>{unpaidBookings}</h1>
          </Box>
        </Col>

        <Col>
          <RequestQuoteBox>
            <StyledPara>
              Get instant, competitive rates for you shipments.
            </StyledPara>
            <Link to="/quote">
              <RequestButton>Request a Quote</RequestButton>
            </Link>
          </RequestQuoteBox>
        </Col>
      </StyledUserDashBox>
      <StyledUserDashBox
        style={{
          marginTop: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
        }}>
        <SimpleButton>Requests</SimpleButton>
        <MapBg image={BgMap}>
          <MapCenterBox>
            <p>Make a shipment</p>
            <Link to="/quote">
              <Button style={{ color: "white" }} ghost>
                {" "}
                Search tariff <CaretRightOutlined />
              </Button>
            </Link>
          </MapCenterBox>
        </MapBg>
      </StyledUserDashBox>
    </div>
  );
};

export default Dashboard;
