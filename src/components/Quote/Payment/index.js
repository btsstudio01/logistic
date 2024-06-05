import React, { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentComponent from "./paymentComponent";
import axios from "axios";
import { Colors } from "../../../constant/theme/theme";

import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Wrapper } from "../../../common/globalStyle";
import { Button, Grid, Row } from "antd";
import Loader from "../../../common/Loader";

const { useBreakpoint } = Grid;

const Payment = ({ setCurrent }) => {
  const InitialData = useSelector((state) => state?.data.data);
  const screens = useBreakpoint();
  const [loading, setloading] = useState(false);

  const User = useSelector((state) => state?.counter.credentials);
  const [url] = useSearchParams();
  let amount = url?.get("amount");
  // loading stripe
  let [clientSecret, setClientSecret] = useState("");
  let stripePromise = loadStripe(
    "pk_test_51O6nYhItZ2KKNkEezJsFn7hhiDXNIGIGO5aJg6lTXxMa0mIWrSXGSmYGpzzaUPpaocm9FXKMwmiVHl3NEvUKe0uq00ytYHZL5N"
  );

  // Fetching Payment Intent
  const fetchPaymentIntentClientSecret = async () => {
    setloading(true);
    const response = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}trade/createPaymentIntent`,
      {
        amount: amount ? amount : InitialData?.selectedService?.totalCharges,
        cust_strip_id: User.cust_stripeId,
      }
    );
    if (response.error) {
      return;
    }
    setClientSecret(response.data.paymentIntent);
    setloading(false);
    return response.data.paymentIntent;
  };
  useEffect(() => {
    fetchPaymentIntentClientSecret();
  }, []);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  };
  if (loading) {
    return (
      <Wrapper
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          backgroundColor: "#F0F0F0",
        }}
      >
        <Row
          justify={"center"}
          style={{
            width: "100%",
            backgroundColor: "#F0F0F0	",
            color: "green",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          <div
            style={{
              height: "300px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
          Processing Payment
        </Row>
      </Wrapper>
    );
  }
  const ErrorDisplayer = () => {
    return (
      <Wrapper
        style={{
          marginLeft: screens?.lg ? "90px" : "0px",
          backgroundColor: "#F0F0F0",
        }}
      >
        <Row
          justify={"center"}
          style={{
            width: "100%",
            backgroundColor: "#F0F0F0	",
            color: "red",
            fontWeight: "bold",
            fontSize: 18,
            alignItems: "center",
            display: "flex",
            gap: 6,
            flexDirection: "column ",
          }}
        >
          <div
            style={{
              height: "300px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
          <div>Error in Processing Payment.. Please Try Again</div>
          <div>
            <Button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: Colors.main,
                color: "white",
              }}
            >
              Try Again
            </Button>
          </div>
        </Row>
      </Wrapper>
    );
  };
  return (
    <>
      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <PaymentComponent setCurrent={amount ? "" : setCurrent} />
        </Elements>
      ) : (
        <ErrorDisplayer />
      )}
    </>
  );
};

export default Payment;
