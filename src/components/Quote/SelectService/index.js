import React, { useState, useEffect } from "react";
import {
  Col,
  Row,
  Grid,
  notification,
  Input,
  Form,
  Radio,
  Div,
  Image,
} from "antd";
import { Space, Table, Tag } from "antd";
import { updateData } from "../../../redux/DataRedux";
import styled, { keyframes } from "styled-components";
import { dhlcharges } from "../../../redux/DataRedux";
import insurance from "../../../assets/insurance-svgrepo-com.svg";
import toggleButton from "../../../common/toggleButtonInsurance";
import "./currencyChange.css";

// import { useDispatch } from "react-redux";

import "jspdf-autotable";

import { useSelector, useDispatch } from "react-redux";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  AirExpressServiceTable,
  PackageDetailsColumns,
  AirFreightServiceTable,
  AdditionalDataColumn,
  EXWSTable,
  DestinationTable,
  InsuranceTableColumns,
} from "../Tables";
import FirstDetailBox from "../../ConfirmationPage/FirstDetailBox";
import { Con_Heading, Wrapper, NavButton } from "../../../common/globalStyle";
import SecondDetailBox from "../../ConfirmationPage/SecondDetailBox";
import Loader from "../../Loader";
import ToggleButton from "../../../common/toggleButtonInsurance";
import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  CopyrightCircleFilled,
} from "@ant-design/icons";
import { BsShieldCheck, BsShieldFillCheck } from "react-icons/bs";
import axios from "axios";

const { Column, ColumnGroup } = Table;

const { useBreakpoint } = Grid;

const SelectService = ({ setCurrent, data }) => {
  const [selectedrow, setSelectedrow] = useState();
  const [Cargo, setCargo] = useState(500);

  const [selectedInsurance, setSelectedInsurance] = useState(3);
  const [insuranceInput, setInsuranceInput] = useState(0);
  const [open, isOpen] = useState(false);
  const [noService, setNoService] = useState(Math.random() * 1000);
  const [currency, setCurrency] = useState("USD");
  const [suffix, setSuffix] = useState("$");
  const [charge, setCharge] = useState();
  // ----------------------------States-----------------------------------------
  const InitialData = useSelector((state) => state.data).data;
  const [blurEXW, setBlurEXW] = useState(false);
  const [blurDES, setBlurDES] = useState(false);
  const screens = useBreakpoint();
  const [PackagesColumnsData, setPackagesColumnsData] = useState([]);
  const [AirExpressServiceData, setAirExpressServiceData] = useState([]);
  const [AirFreightServiceData, setAirFreightServiceData] = useState([]);

  const [SeaFreightAdditionalData, setSeaFreightAdditionalData] = useState([]);
  const [EXWSData, setEXWSData] = useState([]);
  const [DestinationData, setDestinationData] = useState([]);
  const dispatch = useDispatch();

  const RadioInputsContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 0.5rem;
    background-color: #eee;
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 0.25rem;
    width: 300px;
    font-size: 14px;
  `;

  const Radio = styled.div`
    flex: 1 1 auto;
    text-align: center;
  `;

  const RadioInput = styled.input`
    display: none;
  `;

  const RadioName = styled.label`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    padding: 0.5rem 0;
    color: rgba(51, 65, 85, 1);
    transition: all 0.15s ease-in-out;
    background-color: ${({ isChecked }) => (isChecked ? "#fff" : "initial")};
    font-weight: ${({ isChecked }) => (isChecked ? "600" : "initial")};
  `;

  const StyledCol = styled(Col)`
    margin-inline: 0.4rem;
  `;

  const StyledRadioInput = ({ name, checked, onChange }) => (
    <Radio>
      <RadioInput
        type="radio"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <RadioName htmlFor={name} isChecked={checked}>
        {name}
      </RadioName>
    </Radio>
  );

  // ---------------------------------------------------------------------------

  const HandleCurrencyChange = (currency) => {
    dispatch(updateData({ loader: true }));
    if (currency === "USD") {
      console.log("USD");
      setCurrency("USD");
      setSuffix("$");
    } else if (currency === "EUR") {
      console.log("EUR");
      setCurrency("EUR");
      setSuffix("€");
    } else if (currency === "GBP") {
      console.log("GBP");
      setCurrency("GBP");
      setSuffix("£");
    } else if (currency === "CNY") {
      console.log("CNY");
      setCurrency("CNY");
      setSuffix("¥");
    } else if (currency === "AED") {
      console.log("AED");
      setCurrency("AED");
      setSuffix("د.إ");
    }

    dispatch(
      dhlcharges({
        tradetype: InitialData?.tradeType,
        pickup: InitialData?.shipmentDetails?.pickup,
        dropoff: InitialData?.shipmentDetails?.dropoff,
        items: InitialData?.shipmentDetails?.tradeItem,
        chargeableWeight: InitialData?.shipmentDetails?.chargeableWeight,
        isInsurance: true,
        cargoValue: Cargo,
        insuranceType: selectedInsurance,
        currency: currency,
      })
    );
  };

  const HandleCargo = (e) => {
    const { value } = e.target;
    const reg = /^[\d.\b]*$/; // Regular expression for positive integers

    if (reg.test(value)) {
      dispatch(updateData({ loader: true }));
      setCargo(value);
      setNoService(Math.random() * 1000);
      dispatch(
        dhlcharges({
          tradetype: InitialData?.tradeType,
          pickup: InitialData?.shipmentDetails?.pickup,
          dropoff: InitialData?.shipmentDetails?.dropoff,
          items: InitialData?.shipmentDetails?.tradeItem,
          chargeableWeight: InitialData?.shipmentDetails?.chargeableWeight,
          isInsurance: true,
          cargoValue: value,
          insuranceType: selectedInsurance,
          currency: currency,
        })
      );
    } else {
      setCargo(value);
      setCargo((item) => item.slice(0, -1));
    }
  };

  const HandleComprehensiveInsurance = () => {
    dispatch(
      dhlcharges({
        tradetype: InitialData?.tradeType,
        pickup: InitialData?.shipmentDetails?.pickup,
        dropoff: InitialData?.shipmentDetails?.dropoff,
        items: InitialData?.shipmentDetails?.tradeItem,
        chargeableWeight: InitialData?.shipmentDetails?.chargeableWeight,
        isInsurance: true,
        cargoValue: Cargo,
        insuranceType: 1,
        currency: currency,
      })
    );
    setSelectedInsurance(1);
    setInsuranceInput(1);
    dispatch(updateData({ loader: true }));
    setNoService(Math.random() * 1000);
  };
  const HandleSimpleInsurance = () => {
    dispatch(
      dhlcharges({
        tradetype: InitialData?.tradeType,
        pickup: InitialData?.shipmentDetails?.pickup,
        dropoff: InitialData?.shipmentDetails?.dropoff,
        items: InitialData?.shipmentDetails?.tradeItem,
        chargeableWeight: InitialData?.shipmentDetails?.chargeableWeight,
        isInsurance: true,
        cargoValue: Cargo,
        insuranceType: 2,
      })
    );
    setSelectedInsurance(2);
    setInsuranceInput(1);
    dispatch(updateData({ loader: true }));
    setNoService(Math.random() * 1000);
  };
  const HandleNoInsurance = () => {
    dispatch(
      dhlcharges({
        tradetype: InitialData?.tradeType,
        pickup: InitialData?.shipmentDetails?.pickup,
        dropoff: InitialData?.shipmentDetails?.dropoff,
        items: InitialData?.shipmentDetails?.tradeItem,
        chargeableWeight: InitialData?.shipmentDetails?.chargeableWeight,
        isInsurance: false,
        cargoValue: 0,
        insuranceType: null,
      })
    );

    setSelectedInsurance(3);
    setInsuranceInput(0);
    dispatch(updateData({ loader: true }));
    setNoService(Math.random() * 1000);
  };

  const handleBlurToggle = () => {
    const ship = InitialData.shipmentDetails.termofshipment;
    if (ship == 4) {
      setBlurDES(true);
      setBlurEXW(true);
      dispatch(
        updateData({
          shipmentDetails: {
            ...InitialData.shipmentDetails,
            termofshipment: ship,
          },
        })
      );
    } else if (ship == 2) {
      setBlurEXW(true);
      setBlurDES(false);
      dispatch(
        updateData({
          shipmentDetails: {
            ...InitialData.shipmentDetails,
            termofshipment: ship,
          },
        })
      );
    } else if (ship == 3) {
      setBlurDES(true);
      setBlurEXW(false);
      dispatch(
        updateData({
          shipmentDetails: {
            ...InitialData.shipmentDetails,
            termofshipment: ship,
          },
        })
      );
    } else {
      setBlurDES(false);
      setBlurEXW(false);
      dispatch(
        updateData({
          shipmentDetails: {
            ...InitialData.shipmentDetails,
            termofshipment: ship,
          },
        })
      );
    }
  };
  useEffect(() => {
    console.log("anas", InitialData.shipmentDetails.totalVolumetricWeight);
  }, [InitialData.shipmentDetails.totalVolumetricWeight]);

  useEffect(() => {
    handleBlurToggle();
    console.log("agya", InitialData);
    if (InitialData.serviceType === 2 && InitialData.serviceTypeOpt === 2) {
      setCharge("Chargeable Cbm");
    } else {
      setCharge("Chargeable Weight");
    }
  }, []);

  useEffect(() => {
    let TotalVoluemtricWeight = 0;
    InitialData?.shipmentDetails?.tradeItem?.map(
      (e) => (TotalVoluemtricWeight += e.volumetricWeight)
    );
    let TotalGrossWeight = 0;
    InitialData?.shipmentDetails?.tradeItem?.map(
      (e) => (TotalGrossWeight += e.weight)
    );
    // --------------------------------------Setting AirExpress Data------------------------------------
    if (InitialData.serviceType == 1 && InitialData.serviceTypeOpt == 2) {
      setAirExpressServiceData(() => {
        return InitialData?.charges[0]?.charges.map((e, i) => {
          return {
            key: i,
            name: e?.name,
            rate: e?.rate,
            chargeablerates: e?.chargeableRates || 0,
            stackable: e?.stackable || 0,
            chargeableWeight: e?.chargeableWeight || 0,
            fuelSurcharge: e?.fuelSurcharge || 0,
            emergency: e.emergency || 0,
            noofpackage: InitialData.shipmentDetails.tradeItem.length || 0,
            oversize: e.oversize,
            overweight: e.overweight,
            totalCharges: e?.totalCharges,
            insuranceCharges: e?.insuranceCharges,
          };
        });
      });
      setPackagesColumnsData(() => {
        let list1 = [];
        InitialData?.charges[0]?.items.map((e, i) => {
          list1.push({
            key: i,
            cbm: e?.cbm,
            height: e?.height,
            length: e?.length,
            natureOfPackage: e?.natureOfPackage,
            packageType: e?.packageType,
            volumetricWeight: e?.volumetricWeight,
            weight: e?.weight,
            width: e?.width,
            oversize: e?.oversize,
            overweight: e?.overweight,
            chargeableWeight: e?.chargeableWeight,
          });
        });
        const weight = InitialData?.charges[0]?.items[0]?.chargeableWeight;
        list1.push(
          {
            id: "Total Weight",
            volumetricWeight:
              InitialData?.shipmentDetails?.totalVolumetricWeight.toFixed(2),
            weight: TotalGrossWeight.toFixed(2),
          },
          {
            id: "Chargeable Weight",
            volumetricWeight: weight,
          }
        );
        return list1;
      });
    }
    // --------------------------------------Setting Other Freight and Sea Data------------------------------------
    else {
      let freight;
      if (InitialData.serviceType === 1) {
        freight = InitialData?.airfreightcharges;
      } else if (
        InitialData.serviceType === 2 &&
        InitialData.serviceTypeOpt === 1
      ) {
        freight = InitialData?.seafreightcharges;
        console.log("8989", InitialData?.seafreightcharges);
      } else if (
        InitialData.serviceType === 2 &&
        InitialData.serviceTypeOpt === 2
      ) {
        freight = InitialData?.seafreightlclcharges;
        console.log("checking LCL", InitialData?.seafreightlclcharges);
      }

      setAirFreightServiceData(freight?.serviceCharges);
      setEXWSData(freight?.exwCharges?.chargeDescription);
      setSeaFreightAdditionalData(
        freight?.additionalCharges?.chargeDescription
      );
      setDestinationData(freight?.destCharges?.chargeDescription);
      if (
        InitialData?.seafreightlclcharges.items &&
        InitialData.serviceType === 2 &&
        InitialData.serviceTypeOpt === 2
      ) {
        console.log(
          InitialData?.seafreightlclcharges?.serviceCharges?.minCharge
        );
        setPackagesColumnsData([
          ...InitialData?.seafreightlclcharges?.items,
          {
            id: "Total Weight",
            volumetricWeight: TotalVoluemtricWeight.toFixed(2),
            weight: TotalGrossWeight,
          },
          {
            id: "Chargeable CBM",
            chargeableWeight:
              InitialData?.seafreightlclcharges?.serviceCharges[0]
                ?.chargeableWeight,
          },
        ]);
      } else {
        setPackagesColumnsData([
          ...InitialData?.shipmentDetails?.tradeItem,
          {
            id: "Total Weight",
            volumetricWeight: TotalVoluemtricWeight.toFixed(2),
            weight: TotalGrossWeight,
          },
          {
            id: "Chargeable Weight",
            volumetricWeight:
              InitialData?.shipmentDetails?.chargeableWeight.toFixed(2),
          },
        ]);
      }
    }
  }, [InitialData]);

  const handleProceed = async () => {
    console.log(InitialData.selectedService);
    if (!Object.keys(InitialData.selectedService)?.length) {
      return notification.error({
        message: "In Valid",
        description: "Please Select Service",
      });
    }

    setCurrent(6);
  };
  const handleBack = () => {
    console.log("deleting");
    dispatch(
      updateData({
        ...InitialData,
        selectedService: {},
        charges: [],
        airfreightcharges: {},
        seafreightcharges: {},
        seafreightlclcharges: {},
      })
    );
    console.log("confirmation", InitialData);

    setCurrent(4);
  };
  function GenerateQutationNuymber() {
    const currentTimeMilliseconds = new Date().getTime();
    const currentTimeInSeconds = Math.floor(currentTimeMilliseconds / 1000);
    const uniqueId = Math.floor(Math.random() * 1000000)
      .toString()
      .padStart(4, "0");

    const quotationNumber = `TD#${currentTimeInSeconds}-${uniqueId}`;
    dispatch(
      updateData({
        tradeId: quotationNumber,
      })
    );
  }
  useEffect(() => {
    GenerateQutationNuymber();
  }, []);

  return (
    <Wrapper
      style={{
        marginLeft: screens?.lg ? "90px" : "0px",
        backgroundColor: "#F0F0F0",
      }}
    >
      <Loader loading={InitialData.loader} />
      <Row
        justify={"center"}
        style={{
          width: "100%",
          backgroundColor: "#F0F0F0	",
        }}
      >
        <FirstDetailBox
          InitialData={InitialData}
          AirExpressServiceData={AirExpressServiceData}
        />
      </Row>

      <Row
        justify={"center"}
        style={{
          backgroundColor: "#F0F0F0	",
          paddingTop: "0.5rem",
        }}
      >
        <Col span={22}>
          <SecondDetailBox InitialData={InitialData} setCurrent={setCurrent} />

          <Row
            style={{
              backgroundColor: "white",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <Con_Heading>Package Details</Con_Heading>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{overflowX: 'auto'}}>
              {/* ----------------------------Packages table for All----------------------------  */}
              <Table
                bordered={true}
                dataSource={PackagesColumnsData}
                pagination={false}
                columns={PackageDetailsColumns()}
              />
            </Col>

            <Con_Heading>Select Your Service</Con_Heading>
            <Col span={24} style={{overflowX: 'auto'}}>
              {/* ----------------------------Service table for Sea Only---------------------------- */}

              {InitialData?.serviceType === 2 && (
                <>
                  <Table
                    bordered={true}
                    dataSource={AirFreightServiceData}
                    columns={AirFreightServiceTable()}
                    pagination={false}
                  />
                </>
              )}

              {/* ----------------------------Addditional Charges table for Sea Only---------------------------- */}

              {InitialData?.serviceType === 2 &&
                // InitialData.serviceTypeOpt === 2 &&
                InitialData.shipmentDetails.termofshipment === 4 && (
                  <>
                    <Con_Heading>Additional Charges</Con_Heading>

                    <Table
                      bordered={true}
                      dataSource={SeaFreightAdditionalData}
                      columns={AdditionalDataColumn()}
                      pagination={false}
                    />
                  </>
                )}

              {/*---------------------------- Service table for Air Freigt Only ----------------------------*/}

              {InitialData?.serviceType === 1 &&
                InitialData?.serviceTypeOpt === 1 && (
                  <>
                    <Table
                      bordered={true}
                      dataSource={AirFreightServiceData}
                      columns={AirFreightServiceTable()}
                      pagination={false}
                    />
                  </>
                )}

              {/*---------------------------- Service table for Air Express Only ----------------------------*/}

              {InitialData?.serviceType === 1 &&
                InitialData.serviceTypeOpt === 2 && (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Table
                      bordered={true}
                      dataSource={AirExpressServiceData}
                      pagination={false}
                      columns={AirExpressServiceTable(noService)}
                    />

                    {
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "start",
                          marginTop: "10px",
                        }}
                      >
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {
                            <Input
                              disabled={insuranceInput === 0 ? true : false}
                              prefix={
                                <p style={{ fontWeight: "bold" }}>
                                  Cargo Value :{" "}
                                </p>
                              }
                              placeholder="500"
                              onChange={(e) => {
                                HandleCargo(e);
                              }}
                              value={Cargo}
                              suffix={suffix}
                              style={{ width: "250px" }}
                            />
                          }
                          {insuranceInput === 1 ? (
                            <RadioInputsContainer>
                              <StyledRadioInput
                                name="USD"
                                checked={currency === "USD" ? true : false}
                                onChange={() => {
                                  HandleCurrencyChange("USD");
                                }}
                              />
                              <StyledRadioInput
                                name="CNY"
                                checked={currency === "CNY" ? true : false}
                                onChange={() => {
                                  HandleCurrencyChange("CNY");
                                }}
                              />
                              <StyledRadioInput
                                name="GBP"
                                checked={currency === "GBP" ? true : false}
                                onChange={() => {
                                  HandleCurrencyChange("GBP");
                                }}
                              />
                              <StyledRadioInput
                                name="AED"
                                checked={currency === "AED" ? true : false}
                                onChange={() => {
                                  HandleCurrencyChange("AED");
                                }}
                              />
                              <StyledRadioInput
                                name="EUR"
                                checked={currency === "EUR" ? true : false}
                                onChange={() => {
                                  HandleCurrencyChange("EUR");
                                }}
                              />
                            </RadioInputsContainer>
                          ) : null}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "start",
                            marginLeft: "50px",
                            columnGap: "60px",
                            marginTop: "2px",
                          }}
                        >
                          <StyledCol
                            style={{
                              marginTop: "25px",
                              marginLeft: "15px",
                            }}
                          >
                            <span style={{ font: "icon", fontWeight: "bold" }}>
                              {open === true
                                ? `Comprehensive Insurance `
                                : "Want Comprehensive Insurance ?"}
                            </span>
                            {open && (
                              <span>
                                <CheckCircleTwoTone twoToneColor={"green"} />
                              </span>
                            )}
                            <Form.Item name={`packageType`} rules={[{}]}>
                              <ToggleButton
                                open={open}
                                isOpen={isOpen}
                                HandleNoInsurance={HandleNoInsurance}
                                HandleComprehensiveInsurance={
                                  HandleComprehensiveInsurance
                                }
                              />
                            </Form.Item>
                          </StyledCol>
                        </div>
                      </div>
                    }

                    {/* <Con_Heading>Pick Insurance Company</Con_Heading>
                    <>
                      <Table
                        bordered={true}
                        dataSource={InsuranceData}
                        columns={InsuranceTableColumns()}
                        pagination={false}
                      />
                    </> */}
                  </div>
                )}
            </Col>

            {/*============================ Insurance for Air Express ======================================*/}

            <Col span={24}>
              {/* ----------------------------InsuranceData table for Sea Only---------------------------- */}

              {/* ----------------------------InsuranceData table for Sea Only---------------------------- */}

              {InitialData?.serviceType === 2 &&
                // InitialData.serviceTypeOpt === 2 &&
                InitialData.shipmentDetails.termofshipment === 4 && (
                  <>
                    <Con_Heading>Additional Charges</Con_Heading>
                    {/* <Table
                      bordered={true}
                      dataSource={InsuranceData}
                      columns={InsuranceTableColumns()}
                      pagination={false}
                    /> */}
                  </>
                )}
            </Col>

            {/*============================ Insurance details information area end ======================================*/}

            {/*---------------------------- Exw and Dest tables for Air Freight and Sea Only ----------------------------*/}

            {((InitialData?.serviceType === 1 &&
              InitialData?.serviceTypeOpt === 1) ||
              InitialData?.serviceType === 2) && (
              <Row
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Col
                  style={{
                    filter:
                      InitialData?.serviceType == 2 && blurEXW
                        ? "blur(2px)"
                        : "none",
                  }}
                  span={24}
                >
                  <Con_Heading>EXW Charges</Con_Heading>

                  <Table
                    bordered={true}
                    dataSource={EXWSData}
                    columns={EXWSTable()}
                    pagination={false}
                    style={{overflowX: 'auto'}}
                  />
                </Col>
                <Col
                  style={{
                    filter:
                      InitialData?.serviceType == 2 && blurDES
                        ? "blur(2px)"
                        : "none",
                  }}
                  span={24}
                >
                  <Con_Heading>Destination Charges</Con_Heading>

                  <Table
                    bordered={true}
                    dataSource={DestinationData}
                    columns={DestinationTable()}
                    pagination={false}
                    style={{overflowX: 'auto'}}
                  />
                </Col>
              </Row>
            )}

            <Col span={24}>
              <Row
                style={{
                  marginTop: "20px",
                  display: "flex",
                  marginBottom: "10px",
                  justifyContent: "space-between",
                }}
              >
                <NavButton onClick={handleBack} style={{marginBottom: '5px'}}>
                  <AiOutlineArrowLeft style={{ marginRight: "5px" }} />
                  Back
                </NavButton>

                <NavButton onClick={handleProceed} style={{marginBottom: '5px'}}>
                  Proceed
                  <AiOutlineArrowRight style={{ marginLeft: "5px" }} />
                </NavButton>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SelectService;
