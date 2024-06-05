import React, { useState, useEffect, useLayoutEffect } from "react";
import ShipperDetail from "../../components/Quote/ShipperDetail";
import { Row, Col, Steps, Grid, Button } from "antd";
// import Details from "../../components/Quote/ShipmentDetails/pages/Details";
import SelectService from "../../components/Quote/SelectService";
import ServiceType from "../../components/Quote/ServiceType";
import ReceiverDetail from "../../components/Quote/ReceiverDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import apiRequest from "../../common/apiRequest";
import TradeType from "../../components/Quote/TradeType";
import StepProgressBar from "../../common/StepProgressBar";
import MainLayout from "../../common/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import ShipmentDetails from "../../components/Quote/ShipmentDetails";
import Confirmation from "../../components/Quote/Confirmation";
import { updateData } from "../../redux/DataRedux";
import Payment from "../../components/Quote/Payment";
import PaymentSuccess from "../../components/Quote/PaymentSuccess";
import Review from "../../components/Quote/Review";

const { useBreakpoint } = Grid;

const Quote = (props) => {
  const screens = useBreakpoint();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const userCredentials = useSelector((state) => state?.counter?.credentials);
  const InitialData = useSelector((state) => state?.data);
  const refreshToken = useSelector((state) => state?.counter?.refreshToken);
  const accessToken = useSelector((state) => state?.counter?.token);

  useEffect(() => {
    const checker = async () => {
      if (refreshToken) {
        if (accessToken) {
          const decodedToken = jwt_decode(accessToken);
          const currentTime = Math.floor(Date.now() / 1000);
          if (decodedToken.exp < currentTime) {
            try {
              const response = await apiRequest(
                process.env.REACT_APP_CALCULATOR,
                {
                  url: "users/revive",
                  method: "post",
                  headers: {
                    Authorization: `Bearer ${refreshToken}`,
                  },
                }
              );
              console.log("response", response.data);

              const { accessToken: newAccessToken, user } = response.data;

              setUserData({
                token: newAccessToken,
                user: user,
              });
              dispatch(
                updateData({
                  ...InitialData,
                  UserId: user._id,
                })
              );
            } catch (err) {
              console.log("Error refreshing access token:", err.response.data);
            }
          } else {
            try {
              const response = await apiRequest(
                process.env.REACT_APP_CALCULATOR,
                {
                  url: "users/getUser",
                  method: "get",
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );
              console.log("response", response.data?.user);

              setUserData((prevState) => ({
                ...prevState,
                user: response?.data,
              }));

              dispatch(
                updateData({
                  ...InitialData,
                  UserId: response.data?.user?._id,
                })
              );
            } catch (err) {
              console.log(err);
            }
          }
        }
      } else {
      }
    };

    checker();
  }, []);
  return (
    <>
      <MainLayout removeSpace={true}>
        {!userCredentials ? (
          // {!true ? (
          <>
            <Navigate
              to={{
                pathname: "/login",
              }}
              state={{ from: "quote" }}
              replace
            />
          </>
        ) : (
          <>
            <div
              style={{
                marginLeft: screens?.lg ? "90px" : "0px",
                backgroundColor: "#F0F0F0",
              }}
            >
              <Row justify={"center"}>
                <Col span={24} style={{ marginTop: "3rem" }}>
                  <StepProgressBar
                    activeIndex={current}
                    serviceType={InitialData.serviceType}
                  />
                </Col>
              </Row>
            </div>

            {current === 0 ? (
              <ServiceType setCurrent={setCurrent} />
            ) : current === 1 ? (
              <TradeType setCurrent={setCurrent} />
            ) : current === 2 ? (
              <ShipperDetail setCurrent={setCurrent} />
            ) : current === 3 ? (
              <ReceiverDetail setCurrent={setCurrent} />
            ) : current === 4 ? (
              <ShipmentDetails setCurrent={setCurrent} />
            ) : current === 5 ? (
              <SelectService setCurrent={setCurrent} />
            ) : current === 6 ? (
              <Review setCurrent={setCurrent} />
            ) : current === 7 ? (
              <Payment setCurrent={setCurrent} />
            ) : (
              <Confirmation setCurrent={setCurrent} />
            )}
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Quote;
