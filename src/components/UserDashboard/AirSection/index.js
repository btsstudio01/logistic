import React, { useEffect } from "react";
import { Col, Row, Space, Card, Input } from "antd";

import {
  StyledFilterBox,
  SelectedFilterText,
  StyledUserDashBox,
} from "../../../common/globalStyle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import TradeCard from "../TradeCard";
import Loader from "../../../common/Loader";
import { updateAirRequestsData } from "../../../redux/DataRedux";
const AirSection = () => {
  const InitialData = useSelector((state) => state?.data.data);
  const AirData = useSelector((state) => state?.dashboardData.airRequests);
  let [Data, setData] = useState([]);
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState("All");
  const [all, setAll] = useState(AirData.all);
  const [active, setActive] = useState(AirData.active);
  const [unPaid, setUnPaid] = useState(AirData.unpaid);
  const [paid, setPaid] = useState(AirData.paid);
  const [timeBounded, setTimeBounded] = useState(AirData.timebound);
  const fetchData = async () => {
    setloading(true);
    const response = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/GetAllAirBookingDetails`,
      {
        userId: InitialData.userId,
      }
    );
    setloading(false);

    setData(response.data.trades);

    setAll(response.data.trades.length);
    setPaid(response.data.trades.filter((e) => e.paymentStatus == true).length);
    setActive(
      response.data.trades.filter((e) => e.activeStatus == true).length
    );
    setUnPaid(
      response.data.trades.filter((e) => e.paymentStatus == false).length
    );
    setTimeBounded(
      response.data.trades.filter((e) => e.shipmentDetails.timebound == true)
        .length
    );
    console.log(paid);
    dispatch(
      updateAirRequestsData({
        data: response.data.trades,
        refetch: false,
        unpaid: response.data.trades.filter((e) => e.paymentStatus == false)
          .length,
        paid: response.data.trades.filter((e) => e.paymentStatus == true)
          .length,
        all: response.data.trades.length,
        active: response.data.trades.filter((e) => e.activeStatus == true)
          .length,
        timebound: response.data.trades.filter(
          (e) => e.shipmentDetails.timebound == true
        ).length,
      })
    );
  };
  useEffect(() => {
    if (AirData?.refetch) {
      fetchData();
    } else {
      setData(AirData?.data);
    }
  }, []);
  const { Search } = Input;

  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox>
        <h1 style={{ color: "#041c5c" }}>Air Requests</h1>
      </StyledUserDashBox>
      <StyledFilterBox gutter={[0, 0]}>
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <SelectedFilterText
            style={
              !(selectedCat === "All")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("All")}
          >
            All {all}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "Active")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("Active")}
          >
            Active {active}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "Paid")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("Paid")}
          >
            Paid {paid}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "unPaid")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("unPaid")}
          >
            Unpaid {unPaid}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "time")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("time")}
          >
            Time Bounded {timeBounded}
          </SelectedFilterText>
        </div>
        <Space direction="vertical">
          <Search
            placeholder="Search with id"
            onSearch={onSearch}
            style={{
              width: 300,
            }}
          />
        </Space>
      </StyledFilterBox>
      {loading ? (
        <div
          style={{
            height: "400px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : Data.length > 0 ? (
        Data.map((item, ind) => {
          return (
            (selectedCat == "All" ||
              (selectedCat == "Active" && item.activeStatus) ||
              (selectedCat == "time" && item.shipmentDetails.timebound) ||
              (selectedCat == "unPaid" && !item.paymentStatus) ||
              (selectedCat == "Paid" && item.paymentStatus)) && (
              <TradeCard selectedCat={selectedCat} item={item} ind={ind} />
            )
          );
        })
      ) : (
        <div
          style={{
            height: "400px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "#041c5c" }}> No Requests</h1>
        </div>
      )}
    </div>
  );
};

export default AirSection;
