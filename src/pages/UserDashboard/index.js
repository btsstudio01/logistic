import React, { Component, useState, useLayoutEffect, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import SideBar from "../../components/UserDashboard/SideBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AppBar } from "../../common/globalStyle";
import Dashboard from "../../components/UserDashboard/Dashboard";
import Profile from "../../components/UserDashboard/Profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import AirSection from "../../components/UserDashboard/AirSection";
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Button, Col, Dropdown, Grid, Row, Space } from "antd";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import CompletedRequests from "../../components/UserDashboard/Completed";
import CancelRequests from "../../components/UserDashboard/CancelRequests";
import TransactionHistory from "../../components/UserDashboard/TransactionHistory";
import Payment from "../../components/Quote/Payment";
import SeaSection from "../../components/UserDashboard/SeaSection";
import axios from "axios";
import {
  updateAirRequestsData,
  updateCancelledRequestsData,
  updateCompletedRequestsData,
  updateDashboardData,
  updateSeaRequestsData,
} from "../../redux/DataRedux";

const { useBreakpoint } = Grid;

const UserDashboard = ({ userData }) => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [refetch, setRefetch] = useState(false);
  const [data, setData] = useState({});
  const urlData = useSelector((state) => state.counter.credentials);
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/GetProfileInfo/${urlData._id}`
    );
    if (response?.data?.data) {
      setData(response.data.data);
    }
  };
  useLayoutEffect(() => {
    navigate(`/user/${urlData?._id}/dashboard`);
  }, []);

  const ReftchAllData = () => {
    dispatch(
      updateDashboardData({
        refetch: true,
      })
    );
    dispatch(
      updateAirRequestsData({
        refetch: true,
      })
    );
    dispatch(
      updateSeaRequestsData({
        refetch: true,
      })
    );
    dispatch(
      updateCancelledRequestsData({
        refetch: true,
      })
    );
    dispatch(
      updateCompletedRequestsData({
        refetch: true,
      })
    );
  };

  useEffect(() => {
    fetchData();
    ReftchAllData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [refetch]);
  const handleMenuClick = (e) => {
    if (e.keyPath[0] == 1) {
      navigate(`/user/${urlData?._id}/dashboard`);
    } else if (e.keyPath[0] == 2) {
      navigate(`/user/${urlData?._id}/profile`);
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
    <Row style={{ height: "100vh", width: "100vw" }}>
      {screens.lg && (
        <SideBar
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          userName={data?.username}
          userId={urlData?._id}
        />
      )}
      <Col
        xxl={20}
        xl={19}
        lg={17}
        md={24}
        sm={24}
        xs={24}
        style={{ backgroundColor: "#F7F8FD" }}>
        <AppBar screens={screens}>
          {!screens.lg ? (
            <SideBar
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              userName={data?.username}
              userId={urlData?._id}
            />
          ) : (
            ""
          )}
          <div
            style={{ display: "flex", gap: "50px" }}>
            <IoMdNotificationsOutline size={35} color="gray" />
            <Dropdown menu={menuProps}>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                  paddingTop: 0
                }}>
                <Space>
                  <AiOutlineUser size={35} color="gray" />
                </Space>
              </Button>
            </Dropdown>
          </div>
        </AppBar>
        <Routes>
          <Route
            path="dashboard"
            element={
              <Dashboard
                userName={data?.username?.replace(/([A-Z])/g, " $1")}
                userId={urlData?._id}
              />
            }
          />
          <Route
            path="profile"
            element={<Profile setRefetch={setRefetch} refetch={refetch} />}
          />
          <Route path="airrequests" element={<AirSection />} />
          <Route path="searequests" element={<SeaSection />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="make-payment/*" element={<Payment />} />
          <Route path="completed-requests" element={<CompletedRequests />} />
          <Route path="cancel-requests" element={<CancelRequests />} />
        </Routes>
      </Col>
    </Row>
  );
};

export default UserDashboard;
