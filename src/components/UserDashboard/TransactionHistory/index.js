import React, { useEffect } from "react";
import { Col, Row, Space, Card, Input, Table, notification } from "antd";

import { StyledUserDashBox } from "../../../common/globalStyle";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const calculateDate = (item) => {
  if (item) {
    let date = new Date(item).getDate();
    let year = new Date(item).getFullYear();
    let monthy = new Date(item).getMonth();
    return `${date}/ ${monthy}/ ${year}`;
  } else {
    return "-";
  }
};
const calculateTime = (item) => {
  if (item) {
    let hours = new Date(item).getHours();
    let minute = new Date(item).getMinutes();
    let seconds = new Date(item).getSeconds();
    return `${hours} : ${minute} : ${seconds}`;
  } else {
    return "-";
  }
};

const columns = [
  {
    title: "S.No",
    dataIndex: "no",
    key: "no",
    render: (_, record, ind) => {
      return <span>{ind + 1}</span>;
    },
  },
  {
    title: "Transaction Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "Trade Id",
    dataIndex: "tradeId",
    key: "tradeId",
  },

  {
    title: "Date",
    dataIndex: "created",
    key: "created",
    render: (val) => {
      return <span>{calculateDate(val)}</span>;
    },
  },
  {
    title: "Time",
    dataIndex: "created",
    key: "created",
    render: (val) => {
      return <span>{calculateTime(val)}</span>;
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (val) => {
      return (
        <span
          style={{
            color: val == "succeeded" ? "green" : "red",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {val}
        </span>
      );
    },
  },
];

const TransactionHistory = () => {
  const InitialData = useSelector((state) => state?.data.data);
  const [dataSource, setDataSource] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/getAllTransaction/${InitialData.userId}`
      );
      setDataSource(response.data.data);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox>
        <h1 style={{ color: "#041c5c" }}>Transaction History</h1>
      </StyledUserDashBox>
      <StyledUserDashBox
        style={{ marginTop: "20px", width: "100%", padding: "30px" }}
      >
        <Table
          style={{ width: "100%" }}
          dataSource={dataSource}
          bordered={true}
          columns={columns}
        />
        ;
      </StyledUserDashBox>
    </div>
  );
};

export default TransactionHistory;
