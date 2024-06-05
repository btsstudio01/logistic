import React, { useState } from "react";
import { Row, Col, notification, Spin } from "antd";

import styled from "styled-components";

import Background from "../../../assets/Background/Background1.jpg";
import axios from "axios";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { PaymentButton } from "../../../common/globalStyle";
import { Colors } from "../../../constant/theme/theme";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  updateAirRequestsData,
  updateDashboardData,
  updateSeaRequestsData,
} from "../../../redux/DataRedux";

const TradeTypeDiv = styled.div`
  color: white;
  width: 297px;
  font-family: Inter;
  height: 60px;
  border-radius: 15px;
  background: #E30022;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const Heading = styled.div`
  font-size: 36px;
  color: white;
  width: 297px;
  font-family: Inter;
  height: 60px;
  border-radius: 15px;
  background: #E30022;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const Container = styled.div`
  margin-left: 90px;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 768px) {
    margin-left: unset;
    margin-top: -50px;
    font-size: 16px;
  }
`;
const PaymentComponent = ({ setCurrent }) => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const InitialData = useSelector((state) => state?.data.data);
  const [url] = useSearchParams();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let tradeId = url?.get("tradeId")?.replace("_", "#");
  const onFinish = async (values) => {
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required",
      confirmParams: {},
    });

    if (result.error) {
      console.log(result);
      await axios.post(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/SaveTransaction`,
        {
          transactionDetails: {
            ...result.error.payment_intent,
            created: new Date(result.error.payment_intent.created * 1000),
            userId: InitialData.userId,
            tradeId: tradeId ? tradeId : InitialData.tradeId,
          },
        }
      );
      setLoading(false);

      return notification.error({
        message: "Error",
        description: result.error.message,
      });
    } else {
      const response = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}trade/paymentSuccessfull`,
        {
          UserId: InitialData.userId,
          TradeId: tradeId ? tradeId : InitialData.tradeId,
          transactionDetails: {
            ...result.paymentIntent,
            created: new Date(result.paymentIntent.created * 1000),
            userId: InitialData.userId,
            tradeId: tradeId ? tradeId : InitialData.tradeId,
          },
        }
      );
      if (!response) {
        console.log(response);
        setLoading(false);
      }

      console.log("changes", result.paymentIntent);
      if (tradeId) {
        setLoading(false);

        notification.success({
          message: "Payment Successs",
          description: "Successfully paid",
        });
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
        navigate(-1);
      } else {
        setLoading(false);

        setCurrent(8);
      }
    }
  };
  return (
    <>
      <Container backgroundImage={Background}>
        <Row justify={"center"}>
          <Col span={20}>
            <Row justify={"center"}>
              <Col span={24}>
                <Row
                  justify="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TradeTypeDiv
                    style={{
                      marginTop: "3rem",
                    }}
                  >
                    <Col span={24}>
                      <Heading>Payment</Heading>
                    </Col>
                  </TradeTypeDiv>
                </Row>
                <div
                  style={{
                    maxWidth: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                >
                  <h1>
                    Amout to be Charged :{" "}
                    {InitialData?.selectedService?.totalCharges} USD
                  </h1>
                </div>
                <div
                  style={{
                    maxWidth: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                >
                  <PaymentElement />
                </div>
                <div
                  style={{
                    maxWidth: "500px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "80px",
                  }}
                >
                  <Spin spinning={loading} delay={500}>
                    <PaymentButton
                      disabled={!stripe}
                      type="primary"
                      htmlType="submit"
                      onClick={onFinish}
                      style={{
                        backgroundColor: Colors.main,
                        color: "white",
                        padding: "10px 24px ",
                        width: "200px",
                      }}
                    >
                      Pay
                    </PaymentButton>
                  </Spin>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentComponent;
