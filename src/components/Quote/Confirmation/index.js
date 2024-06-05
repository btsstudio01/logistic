import React, { useState, useEffect } from "react";
import { Col, Row, Grid, Spin } from "antd";
import { Space, Table, Tag } from "antd";
import "jspdf-autotable";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { AirExpressServiceTable, AirFreightServiceTable } from "../Tables";
import {
  Con_MWButton,
  Con_Heading,
  Wrapper,
  MWButton,
} from "../../../common/globalStyle";
import SecondDetailBox from "../../ConfirmationPage/SecondDetailBox";
import GeneratePdf from "../../ConfirmationPage/GeneratePdf";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  updateAirRequestsData,
  updateCancelledRequestsData,
  updateCompletedRequestsData,
  updateDashboardData,
  updateSeaRequestsData,
} from "../../../redux/DataRedux";

const { useBreakpoint } = Grid;

const Confirmation = ({ setCurrent, data }) => {
  const dispatch = useDispatch();
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const InitialData = useSelector((state) => state.data).data;
  const [AirExpressServiceData, setAirExpressServiceData] = useState([]);
  const [AirFreightServiceData, setAirFreightServiceData] = useState([]);

  useEffect(() => {
    if (InitialData.serviceTypeOpt == 2) {
      setAirExpressServiceData(InitialData?.selectedService);
    } else {
      setAirFreightServiceData(InitialData?.selectedService);
    }
  }, [InitialData]);

  const confirmBooking = async () => {
    setCurrent(7);
  };
  console.log("confirmation", InitialData);
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
    navigate(`/user/${InitialData.userId}/dashboard`);
    setLoading(false);
  };
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
        }}
      >
        <Row
          justify={"center"}
          style={{
            backgroundColor: "#F0F0F0	",
            paddingTop: "1rem",
            width: "100%",
          }}
        >
          <Col span={22}>
            <SecondDetailBox
              InitialData={InitialData}
              setCurrent={setCurrent}
              confirmation={true}
            />
            <Row
              justify={"center"}
              style={{
                width: "100%",
                backgroundColor: "#F0F0F0	",
              }}
            >
              <GeneratePdf showButton={true} InitialData={InitialData} />
            </Row>

            <Row
              justify={"center"}
              style={{
                backgroundColor: "white",
                padding: "2rem",
              }}
            >
              <MWButton
                onClick={move}
                style={{
                  borderRadius: "20px",
                  background: "#E30022",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  width: "260px",
                }}
              >
                <Spin spinning={loading}>
                  Go To Dashboard
                  <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                </Spin>
              </MWButton>
            </Row>
          </Col>
        </Row>
      </Row>
    </Wrapper>
  );
};

export default Confirmation;
