import React, { useState } from "react";
import { notification } from "antd";
import axios from "axios";
import { HiDotsVertical } from "react-icons/hi";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import {
  CardColumn,
  CusstomActiveButton,
  CusstomCancelledButton,
  CusstomTimeButton,
  CustomCard,
  FieldData,
  FieldName,
  HeadingMain,
  Subheading,
} from "../../../common/globalStyle";
import { Row, Col } from "antd";
import {
  GiAirplaneDeparture,
  GiCargoShip,
  GiCommercialAirplane,
} from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { select } from "countries";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiShip2Fill } from "react-icons/ri";
import {
  updateAirRequestsData,
  updateCancelledRequestsData,
  updateCompletedRequestsData,
  updateDashboardData,
  updateSeaRequestsData,
} from "../../../redux/DataRedux";
export default function TradeCard({
  item,
  ind,
  cancelled = false,
  completed = false,
}) {
  const [selected, setselected] = useState(false);
  const InitialData = useSelector((state) => state?.data.data);
  const dispatch = useDispatch();
  const calculatePickupDate = (item) => {
    if (item.pickupDate) {
      let date = new Date(item.pickupDate).getDate();
      let year = new Date(item.pickupDate).getFullYear();
      let monthy = new Date(item.pickupDate).getMonth();
      return `${date}/ ${monthy}/ ${year}`;
    } else {
      return "-";
    }
  };
  const calculateDropOffDate = (item) => {
    if (item.dropoffDate) {
      let date = new Date(item.dropoffDate).getDate();
      let year = new Date(item.dropoffDate).getFullYear();
      let monthy = new Date(item.dropoffDate).getMonth();
      return `${date}/ ${monthy}/ ${year}`;
    } else {
      return "-";
    }
  };

  const deleteTrade = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}userDashboard/CancelBooking`,
        {
          UserId: InitialData?.userId,
          TradeId: item?.tradeId,
        }
      );

      if (res.error) {
        console.log(res.error);
        return;
      }
      if (res.status === 200) {
        notification.success({
          message: "Success",
          description: res.data.message,
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
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          to={`/user/${
            InitialData.userId
          }/make-payment?tradeId=${item.tradeId.replace("#", "_")}&amount=${
            item?.selectedService?.totalCharges
          }`}
        >
          Pay
        </Link>
      ),
    },
    {
      key: "4",
      danger: true,
      label: <span onClick={() => deleteTrade()}>Cancel</span>,
    },
  ];

  return (
    <CustomCard key={ind}>
      <Row gutter={[20, 20]}>
        <CardColumn span={24} md={4} justify="center">
          <HeadingMain style={{ marginBottom: "1rem", fontSize: "16px" }}>
            {item.tradeId}
          </HeadingMain>
          {item.serviceType == 1 ? (
            <>
              {item.serviceTypeOpt == 1 ? (
                <GiCommercialAirplane size={60} color={"gray"} />
              ) : (
                <GiAirplaneDeparture size={60} color={"gray"} />
              )}
            </>
          ) : (
            <>
              {item.serviceTypeOpt == 1 ? (
                <GiCargoShip size={60} color={"gray"} />
              ) : (
                <RiShip2Fill size={60} color={"gray"} />
              )}
            </>
          )}

          <Subheading>
            {item.serviceType == 1 ? (
              <>{item.serviceTypeOpt == 1 ? "Air Freight" : "Air Express"}</>
            ) : (
              <>{item.serviceTypeOpt == 1 ? "FCL" : "LCL"}</>
            )}
          </Subheading>
        </CardColumn>
        <Col
          style={{
            transitionDuration: "2s",
            transitionEvent: "height",
            transition: "height 2s ease", // Add transition for max-height property
            height: "max-content",
            overflow: "hidden", // Hide overflow content
          }}
          span={24}
          md={13}
          justify={"center"}
        >
          <Row>
            <Col span={9} sm={9} xl={6}>
              <HeadingMain>From:</HeadingMain>
              <HeadingMain>To:</HeadingMain>
            </Col>
            <Col>
              <HeadingMain>
                <span style={{ fontWeight: "lighter", color: "gray" }}>
                  {item.shipperDetails.sen_city},{" "}
                  {item.shipperDetails.sen_country}
                </span>
              </HeadingMain>
              <HeadingMain style={{ marginBottom: "2rem" }}>
                <span style={{ fontWeight: "lighter", color: "gray" }}>
                  {item.recieverDetails.rec_city},{" "}
                  {item.recieverDetails.rec_country}
                </span>
              </HeadingMain>
            </Col>
          </Row>
          <Row>
            <Col span={9} sm={9} xl={6}>
              <FieldName>
                {item.serviceType == 1 ? "Air line: " : "Ship line: "}
              </FieldName>
              <FieldName>PickUp Date: </FieldName>
              <FieldName>Drop Off Date: </FieldName>
            </Col>
            <Col>
              <FieldData>
                {item.selectedService.companyname || item.selectedService.name}
              </FieldData>
              <FieldData>{calculatePickupDate(item)}</FieldData>

              <FieldData>{calculateDropOffDate(item)} </FieldData>
            </Col>
          </Row>
          {selected && (
            <>
              <Row>
                <Col span={9} sm={9} xl={6}>
                  <FieldName>Booking Status: </FieldName>
                  <FieldName>Number of Packages: </FieldName>
                  <FieldName>Sender Name: </FieldName>
                  <FieldName>Sender Number: </FieldName>
                  <FieldName>Reciever Name: </FieldName>
                  <FieldName>Reciever Number: </FieldName>
                  <FieldName>Shipment Type: </FieldName>
                  <FieldName>PickUp:</FieldName>
                </Col>
                <Col>
                  <FieldData>{item.tradeStatus} </FieldData>
                  <FieldData>{item.shipmentDetails.noofpackages} </FieldData>
                  <FieldData>
                    {item.shipperDetails.sen_contactPersonName}{" "}
                  </FieldData>
                  <FieldData>
                    {item.shipperDetails.sen_contactPersonNumber}{" "}
                  </FieldData>
                  <FieldData>
                    {item.recieverDetails.rec_contactPersonName}{" "}
                  </FieldData>
                  <FieldData>
                    {item.recieverDetails.rec_contactPersonNumber}{" "}
                  </FieldData>

                  <FieldData>
                    {item.shipmentDetails.termofshipment == 1
                      ? "Door -> Door"
                      : item.shipmentDetails.termofshipment == 2
                      ? "Airport -> Door"
                      : item.shipmentDetails.termofshipment == 3
                      ? "Door -> Airport"
                      : "Airport -> Airport"}
                  </FieldData>

                  <FieldData>
                    <div style={{ maxWidth: "300px" }}>
                      {item.shipmentDetails.termofshipment == 1 ||
                      item.shipmentDetails.termofshipment == 3
                        ? item.shipmentDetails.pickupAdd
                        : item.shipmentDetails.termofshipment == 2
                        ? item.shipmentDetails.pickupPort
                        : item.shipmentDetails.pickupPort}
                    </div>
                  </FieldData>
                </Col>
              </Row>
              <Row>
                <Col span={9} sm={9} xl={6}>
                  <FieldName>DropOff: </FieldName>
                </Col>
                <Col>
                  <FieldData>
                    <div style={{ maxWidth: "300px" }}>
                      {item.shipmentDetails.termofshipment == 1 ||
                      item.shipmentDetails.termofshipment == 2
                        ? item.shipmentDetails.dropoffAdd
                        : item.shipmentDetails.termofshipment == 3
                        ? item.shipmentDetails.dropoffPort
                        : item.shipmentDetails.dropoffPort}
                    </div>
                  </FieldData>
                </Col>
              </Row>
            </>
          )}
        </Col>
        <CardColumn span={18} md={4} style={{ alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {cancelled ? (
              <CusstomCancelledButton type="primary">
                Cancelled
              </CusstomCancelledButton>
            ) : completed ? (
              <CusstomActiveButton active={true}>Completed</CusstomActiveButton>
            ) : (
              <>
                <CusstomActiveButton type="primary" active={item.activeStatus}>
                  {item.activeStatus ? "Active" : "Un-Active"}
                </CusstomActiveButton>
                <CusstomActiveButton type="primary" active={item.paymentStatus}>
                  {item.paymentStatus ? "Paid" : "Un-Paid"}
                </CusstomActiveButton>
                {item.shipmentDetails.timebound && (
                  <CusstomTimeButton type="primary">
                    {item.shipmentDetails.timebound && "TimeBound"}
                  </CusstomTimeButton>
                )}
              </>
            )}
          </div>
          <HeadingMain>USD {item?.selectedService?.totalCharges}</HeadingMain>
        </CardColumn>
        <CardColumn
          span={6}
          md={3}
          style={{
            alignItems: "flex-end",
            justifyContent:
              cancelled || item.paymentStatus ? "flex-end" : "space-between",
          }}
        >
          {!item.paymentStatus && !cancelled && !completed && (
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <p style={{ display: "none" }}>.</p>
                <HiDotsVertical size={23} color={"black"} />
              </a>
            </Dropdown>
          )}
          {!selected ? (
            <IoIosArrowDown
              style={{ cursor: "pointer" }}
              onClick={() => setselected(!selected)}
              size={40}
            />
          ) : (
            <IoIosArrowUp
              style={{ cursor: "pointer" }}
              onClick={() => setselected(!selected)}
              size={40}
            />
          )}
        </CardColumn>
      </Row>
    </CustomCard>
  );
}
