import React from "react";
import AirExpress from "./pages/AirExpress/index";
import Details from "./pages/Details/index";
import { useSelector } from "react-redux";
const ShipmentDetails = ({ setCurrent }) => {
  const InitialData = useSelector((state) => state?.data);

  return InitialData.data.serviceType === 1 &&
    InitialData.data.serviceTypeOpt === 2 ? (
    <AirExpress setCurrent={setCurrent} />
  ) : (
    <Details setCurrent={setCurrent} />
  );
};

export default ShipmentDetails;
