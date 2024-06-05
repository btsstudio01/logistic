import React, { useEffect } from "react";
import Loader from "../../common/Loader";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  let [url] = useSearchParams();
  let token = url?.get("token");
  const navigate = useNavigate();
  const VerifyUser = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_CALCULATOR}users/verify?token=${token}`
      );
      if (response.status == 200) {
        console.log(response, "we are good");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      console.log("error", response);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(() => {
    VerifyUser();
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Loader />
      <p>Verfying...</p>
    </div>
  );
};

export default Verify;
