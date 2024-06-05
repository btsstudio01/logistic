import React, { useState } from "react";
import { Wrapper } from "../../../common/globalStyle";
import { Col, Row, Grid, Button, Spin } from "antd";

import tickGif from "../../../assets/payment/images/tick3.gif";

import "./style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateAirRequestsData,
  updateCancelledRequestsData,
  updateCompletedRequestsData,
  updateDashboardData,
  updateSeaRequestsData,
} from "../../../redux/DataRedux";
const { useBreakpoint } = Grid;

const PaymentSuccess = ({ setCurrent }) => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const InitialData = useSelector((state) => state?.data.data);
  const move = () => {
    setLoading(true);
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
    setCurrent(7);
    // navigate(`/user/${InitialData.userId}/dashboard`);
    setLoading(false);
  };
  return (
    <Wrapper
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        backgroundColor: "#F0F0F0",
      }}
    >
      <div className="main-container">
        <div className=" container">
          <div className="container-inner ">
            <div className="inner-texts">
              <h2>Payment Successful</h2>
              <p>Your Booking has been made</p>
              <p style={{ fontSize: "16px", marginBottom: "25px" }}>
                Got to Dashboard and track it
              </p>
            </div>
            <div>
              <img src={tickGif} alt="" />
            </div>
          </div>
          <div>
            <Spin spinning={loading}>
              <button onClick={move}>
                Go
                <FaArrowRightLong />
              </button>
            </Spin>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PaymentSuccess;
