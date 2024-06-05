import React from "react";
import { Col, Row, Space, Card, Input } from "antd";
import { RiBarcodeLine, RiArrowRightSLine } from "react-icons/ri";

import {
  StyledFilterBox,
  SelectedFilterText,
  StyledUserDashBox,
  CusstomButton,
  FieldData,
  FieldName,
  CardColumn,
  HeadingMain,
  CustomCard,
  Subheading,
} from "../../../common/globalStyle";
import { useState } from "react";

const LandSection = () => {
  const Data = [
    {
      id: 236786,
      ticketName: "FCL 1 * 20'st",
      shippingLine: "Maersk",
      from: "Port Qasim, PK",
      to: "Jebel Ali, AE",
      productName: "Animal & Animal Products",
      cargoReady: "06 Sept,2023",
      status: "Pending",
      price: 6,
    },
    {
      id: 236786,
      ticketName: "LMS 2 * 22'AB",
      shippingLine: "Alpha",
      from: "Habib Metro, PK",
      to: "Dubai, AE",
      productName: "Furniture",
      cargoReady: "20 Dec,2023",
      status: "Active",
      price: 20,
    },
    {
      id: 236786,
      ticketName: "FCL 1 * 20'st",
      shippingLine: "Maersk",
      from: "Port Qasim, PK",
      to: "Jebel Ali, AE",
      productName: "Animal & Animal Products",
      cargoReady: "06 Sept,2023",
      status: "Rejected",
      price: 6,
    },
    {
      id: 236786,
      ticketName: "FCL 1 * 20'st",
      shippingLine: "Maersk",
      from: "Port Qasim, PK",
      to: "Jebel Ali, AE",
      productName: "Animal & Animal Products",
      cargoReady: "06 Sept,2023",
      status: "Pending",
      price: 6,
    },
    {
      id: 236786,
      ticketName: "LMS 2 * 22'AB",
      shippingLine: "Alpha",
      from: "Habib Metro, PK",
      to: "Dubai, AE",
      productName: "Furniture",
      cargoReady: "20 Dec,2023",
      status: "Active",
      price: 20,
    },
    {
      id: 236786,
      ticketName: "FCL 1 * 20'st",
      shippingLine: "Maersk",
      from: "Port Qasim, PK",
      to: "Jebel Ali, AE",
      productName: "Animal & Animal Products",
      cargoReady: "06 Sept,2023",
      status: "Pending",
      price: 6,
    },
    {
      id: 236786,
      ticketName: "FCL 1 * 20'st",
      shippingLine: "Maersk",
      from: "Port Qasim, PK",
      to: "Jebel Ali, AE",
      productName: "Animal & Animal Products",
      cargoReady: "06 Sept,2023",
      status: "Rejected",
      price: 6,
    },

  ];
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [selectedCat, setSelectedCat] = useState("All");
  const [all, setAll] = useState(Data.length);
  const [pending, setPending] = useState(
    Data.filter((e, i) => e.status == "Pending").length
  );
  const [active, setActive] = useState(
    Data.filter((e, i) => e.status == "Active").length
  );
  const [rejected, setRejected] = useState(
    Data.filter((e, i) => e.status == "Rejected").length
  );
  const { Search } = Input;

  return (
    <div style={{ padding: "30px" }}>
      <StyledUserDashBox>
        <h1 style={{ color: "#041c5c" }}>Land Requests</h1>
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
              !(selectedCat === "Pending")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("Pending")}
          >
            Pending {pending}
          </SelectedFilterText>
          <SelectedFilterText
            style={
              !(selectedCat === "Rejected")
                ? { color: "gray", border: 0, fontWeight: "normal" }
                : {}
            }
            onClick={() => setSelectedCat("Rejected")}
          >
            Rejected {rejected}
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
      {Data.length > 0 &&
        Data.map(
          (item, ind) =>
            (selectedCat == "All" || selectedCat == item.status) && (
              <CustomCard key={ind}>
                <Row gutter={[20, 20]}>
                  <CardColumn span={24} md={4} justify="center">
                    <HeadingMain style={{ marginBottom: "1rem" }}>
                      {item.id}
                    </HeadingMain>
                    <RiBarcodeLine size={60} color={"gray"} />
                    <Subheading>{item.ticketName}</Subheading>
                  </CardColumn>
                  <Col span={24} md={13} justify={"center"}>
                    <HeadingMain style={{ marginBottom: "2rem" }}>
                      {item.from} &gt; {item.to}
                    </HeadingMain>
                    <Row>
                      <Col span={9} sm={9} xl={6}>
                        <FieldName>Product name: </FieldName>
                        <FieldName>Cargo ready: </FieldName>
                        <FieldName>Shipping line: </FieldName>
                      </Col>
                      <Col>
                        <FieldData>{item.productName}</FieldData>
                        <FieldData>{item.cargoReady}</FieldData>
                        <FieldData>{item.shippingLine}</FieldData>
                      </Col>
                    </Row>
                  </Col>
                  <CardColumn span={18} md={4} style={{ alignItems: "center" }}>
                    <CusstomButton type="primary" active={item.status}>
                      {item.status}
                    </CusstomButton>
                    <HeadingMain>USD {item.price}</HeadingMain>
                  </CardColumn>
                  <CardColumn
                    span={6}
                    md={3}
                    style={{
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                    }}
                  >
                    <RiArrowRightSLine size={40} />
                  </CardColumn>
                </Row>
              </CustomCard>
            )
        )}
    </div>
  );
};

export default LandSection;
