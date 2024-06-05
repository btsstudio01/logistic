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
import { updateCompletedRequestsData } from "../../../redux/DataRedux";

const CompletedRequests = () => {
  const InitialData = useSelector((state) => state?.data.data);
  let [Data, setData] = useState([]);
  const CompletedData = useSelector(
    (state) => state?.dashboardData.completedRequests
  );
  const dispatch = useDispatch();
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [loading, setloading] = useState(false);
  const [selectedCat, setSelectedCat] = useState("All");
  const [all, setAll] = useState(CompletedData.all);
  const [sea, setSea] = useState(CompletedData.sea);
  const [air, setAir] = useState(CompletedData.air);

  const fetchData = async () => {
    setloading(true);
    const response = await axios.post(
      `${process.env.REACT_APP_CALCULATOR}userDashboard/GetAllCompletedBookingDetails`,
      {
        userId: InitialData.userId,
      }
    );
    setData(response.data.trades);
    setAll(response.data.trades.length);
    setAir(response.data.trades.filter((e) => e?.serviceType == 1).length);
    setSea(response.data.trades.filter((e) => e?.serviceType == 2).length);
    dispatch(
      updateCompletedRequestsData({
        data: response.data.trades,
        refetch: false,
        all: response.data.trades.length,
        air: response.data.trades.filter((e) => e?.serviceType == 1).length,
        sea: response.data.trades.filter((e) => e?.serviceType == 2).length,
      })
    );
    setloading(false);
  };

  useEffect(() => {
    if (CompletedData?.refetch) {
      fetchData();
    } else {
      setData(CompletedData?.data);
    }
  }, []);
  const { Search } = Input;
  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox>
        <h1 style={{ color: "#041c5c" }}>Completed Requests</h1>
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
            Air {air}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "Pending")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("Pending")}
          >
            Sea {sea}
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
        Data.map(
          (item, ind) =>
            (selectedCat == "All" ||
              (selectedCat == "Pending" && item.serviceType == 2) ||
              (selectedCat == "Active" && item.serviceType == 1)) && (
              <TradeCard
                selectedCat={selectedCat}
                item={item}
                ind={ind}
                completed={true}
              />
            )
        )
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
          <h1 style={{ color: "#041c5c" }}> No Completed Requests</h1>
        </div>
      )}
    </div>
  );
};

export default CompletedRequests;
