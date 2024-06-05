/* eslint-disable react-hooks/rules-of-hooks */
import { Row, Col, Result, Input } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { Radio, Select } from "antd";
import { CustInput, LabelTitleBlue } from "./globalStyle";
import axios from "axios";

import {
  StyledButton,
  StyledBox,
  PrimaryText,
  SecondaryText,
  SelectionBox,
} from "../common/globalStyle";
import { updateData } from "../redux/DataRedux";
import { useDispatch, useSelector } from "react-redux";
import NewMap from "./NewMap";
import { getGeocode, getLatLng } from "use-places-autocomplete";

const Button = (props) => {
  // const APIKey = "talal22";
  const InitialData = useSelector((state) => state.data.data);
  const [originCity, setOriginCity] = useState(
    InitialData.shipmentDetails?.pickupCity
  );
  const [pickUp, setPickUp] = useState("Door");
  const [dropOff, setdropOff] = useState("Door");
  const [destCity, setDestCity] = useState(
    InitialData.shipmentDetails?.dropoffCity
  );
  const [destAddress, setDestAddress] = useState("");
  const [originCityAddresss, setOriginCityAddresss] = useState("");
  const [originCitySeaport, setOriginCitySeaport] = useState();
  const [destCitySeaport, setDestCitySeaport] = useState();
  const [originCitySeaportData, setOriginCitySeaportData] = useState([]);
  const [destCitySeaportData, setDestCitySeaportData] = useState([]);
  const [originGeoCode, setOriginGeoCode] = useState("");
  const [destGeoCode, setDestGeoCode] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .post(`${process.env.REACT_APP_CALCULATOR}users/countries/ports/`, {
  //       country: props.fromCountry,
  //     })
  //     .then((res) => {
  //       console.log("response", res);

  //       setOriginCitiesData(() =>
  //         res.data.map((e, i) => ({
  //           value: e,
  //           label: e,
  //         }))
  //       );
  //     })

  //     .catch((err) => console.log(err));

  //   axios
  //     .post(`${process.env.REACT_APP_CALCULATOR}users/countries/ports/`, {
  //       country: props.toCountry,
  //     })
  //     .then((res) => {
  //       setDestCitiesData(() =>
  //         res.data.map((e, i) => ({
  //           value: e,
  //           label: e,
  //         }))
  //       );
  //     })
  //     .catch((err) => console.log(err));
  // }, [pickUp, dropOff, props.toCountry, props.fromCountry]);

  // To call Origin City Postal Code Api

  const FetchOriginCityPort = async () => {
    console.log("of all hello");
    await axios
      .get(`${process.env.REACT_APP_CALCULATOR}users/getAllPorts/`, {
        params: { city: originCity, country: props.fromCountry },
      })
      .then((res) => {
        console.log(res, "y e dekf res");
        setOriginCitySeaportData(() =>
          res?.data?.data?.map((e, i) => ({
            value: e.Name,
            label: e.Name,
          }))
        );
      })
      .catch((err) => console.log(err, "heheh"));
  };

  const FetchDestCityPort = async () => {
    await axios
      .get(`${process.env.REACT_APP_CALCULATOR}users/getAllPorts/`, {
        params: { country: props.toCountry, city: destCity },
      })
      .then((res) => {
        console.log(res, "asdases");

        setDestCitySeaportData(() =>
          res?.data?.data?.map((e, i) => ({
            value: e.Name,
            label: e.Name,
          }))
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setOriginCity(InitialData.shipmentDetails?.pickupCity);
    setDestCity(InitialData.shipmentDetails?.dropoffCity);
    setOriginCitySeaport(InitialData.shipmentDetails?.pickupSeaport);
    setDestCitySeaport(InitialData.shipmentDetails?.dropoffSeaport);
    if (InitialData.shipmentDetails?.termofshipment == 4) {
      setPickUp("Seaport");
      setdropOff("Seaport");
    } else if (InitialData.shipmentDetails?.termofshipment == 3) {
      setPickUp("Door");
      setdropOff("Seaport");
    } else if (InitialData.shipmentDetails?.termofshipment == 2) {
      setPickUp("Seaport");
      setdropOff("Door");
    } else if (InitialData.shipmentDetails?.termofshipment == 1) {
      setPickUp("Door");
      setdropOff("Door");
    } else {
      console.log("heheh");
    }
    console.log(originCity);

    getGeocode({ address: destCity })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setDestGeoCode(latLng));
    getGeocode({ address: originCity })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setOriginGeoCode(latLng));
  }, []);

  useEffect(() => {
    dispatch(
      updateData({
        shipmentDetails: {
          ...InitialData.shipmentDetails,
          termofshipment:
            pickUp == "Seaport" && dropOff == "Seaport"
              ? 4
              : pickUp == "Door" && dropOff == "Seaport"
              ? 3
              : pickUp == "Seaport" && dropOff == "Door"
              ? 2
              : pickUp == "Door" && dropOff == "Door"
              ? 1
              : 0,
          pickupAddress: pickUp == "Door" ? originCityAddresss : null,
          dropoffAddress: dropOff == "Door" ? destAddress : null,

          pickupSeaport: pickUp == "Seaport" ? originCitySeaport : null,
          dropoffSeaport: dropOff == "Seaport" ? destCitySeaport : null,
        },
      })
    );
  }, [
    pickUp,
    dropOff,
    originCitySeaport,
    destCitySeaport,
    originCityAddresss,
    destAddress,
  ]);

  useEffect(() => {
    FetchOriginCityPort();
    FetchDestCityPort();
  }, []);

  const DetailBox = ({
    first_title,
    first_value,
    second_title,
    second_value,
    second_options,
    second_function,
    prediction = false,
  }) => {
    const [originPredictionText, setOriginPredictionText] = useState();
    const [destPredictionText, setDestPredictionText] = useState();
    const [destAddressPredictions, setDestAddressPredictions] = useState([]);
    const [originAddressPredictions, setOriginAddressPredictions] = useState(
      []
    );

    const FetchPredictions = async (cordinates, text) => {
      const { data } = await axios.post(
        `${process.env.REACT_APP_CALCULATOR}place/address`,
        {
          lat: cordinates.lat,
          long: cordinates.lng,
          value: text,
        }
      );

      return data;
    };

    useEffect(() => {
      const fetchData = async () => {
        let data = await FetchPredictions(originGeoCode, originPredictionText);
        console.log(data, "jkjk");
        setOriginAddressPredictions(
          () =>
            data.length > 0 &&
            data?.map((e, i) => ({
              value: e.fulladdress,
              label: e.address,
            }))
        );
      };

      fetchData();
    }, [originPredictionText]);

    useEffect(() => {
      const fetchData = async () => {
        let data = await FetchPredictions(destGeoCode, destPredictionText);
        setDestAddressPredictions(
          () =>
            data.length > 0 &&
            data?.map((e, i) => ({
              value: e.fulladdress,
              label: e.address,
            }))
        );
      };

      fetchData();
    }, [destPredictionText]);
    return (
      <>
        <SelectionBox>
          <SecondaryText>{first_title}</SecondaryText>

          <Input
            readOnly
            required={true}
            size="large"
            value={first_value}
            style={{ width: "100%", textAlign: "left" }}
          />
          {/* <Select
            required={true}
            size="large"
            value={first_value}
            style={{ width: "100%", textAlign: "left" }}
            onChange={(value) => {
              first_function(value);
            }}
            options={first_options}
          ></Select> */}
        </SelectionBox>

        <SelectionBox>
          <SecondaryText>{second_title}</SecondaryText>
          <Select
            showSearch={prediction ? true : false}
            required={true}
            size="large"
            value={second_value}
            style={{ width: "100%", textAlign: "left", color: "black" }}
            options={
              second_function == setOriginCityAddresss
                ? originAddressPredictions
                : second_function == setDestAddress
                ? destAddressPredictions
                : second_options
            }
            onChange={(value) => {
              second_function(value);
            }}
            onSearch={(value) => {
              if (prediction) {
                second_function == setOriginCityAddresss
                  ? setOriginPredictionText(value)
                  : setDestPredictionText(value);
              }
            }}
            notFoundContent={
              <div
                style={{
                  padding: 10,
                  textAlign: "center",
                  color: "black",
                  fontWeight: "50px",
                }}
              >
                Ahh, No Ports Available for this region,
                <br /> You may Opt Door
              </div>
            }
          ></Select>
        </SelectionBox>
      </>
    );
  };
  console.log(originCitySeaportData, "asdas12");
  return (
    <div>
      <Row gutter={[80, 80]}>
        <Col
          xs={24}
          md={12}
          justify={"center"}
          style={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <LabelTitleBlue>Origin</LabelTitleBlue>

          <StyledBox>
            <SelectionBox style={{ marginTop: 0 }}>
              <PrimaryText>MWL Picks Up From</PrimaryText>
              <Radio.Group
                onChange={(e) => {
                  setPickUp(e.target.value);
                  props.setbtn1(e.target.value);
                }}
                value={pickUp}
                buttonStyle="solid"
                style={{ textAlign: "center", display: "flex" }}
              >
                <StyledButton
                  style={{
                    boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",

                    borderTopLeftRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: pickUp == "Door" ? "#E30022" : "white",
                    backgroundColor: pickUp == "Door" ? "#E30022" : "white",
                    color: pickUp == "Door" ? "white" : "#E30022",
                  }}
                  value="Door"
                >
                  Door
                </StyledButton>
                <StyledButton
                  style={{
                    boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",
                    textAlign: "center",
                    borderTopRightRadius: "100px",
                    borderBottomRightRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: pickUp == "Seaport" ? "#E30022" : "white",
                    backgroundColor: pickUp == "Seaport" ? "#E30022" : "white",
                    color: pickUp == "Seaport" ? "white" : "#E30022",
                  }}
                  value="Seaport"
                >
                  Seaport
                </StyledButton>
              </Radio.Group>
            </SelectionBox>
            {pickUp == "Door" ? (
              <DetailBox
                prediction={true}
                first_title="Ship From City"
                first_value={originCity}
                second_title="From Address"
                second_value={originCityAddresss}
                // second_options={originAddressPredictions}
                second_function={setOriginCityAddresss}
              />
            ) : (
              <DetailBox
                first_title="Ship From City"
                first_value={originCity}
                second_title="Select Seaport"
                second_value={originCitySeaport}
                second_options={originCitySeaportData}
                second_function={setOriginCitySeaport}
              />
            )}
          </StyledBox>
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            textAlign: "left",
          }}
        >
          <LabelTitleBlue>Destination</LabelTitleBlue>

          <StyledBox>
            <SelectionBox style={{ marginTop: 0 }}>
              <PrimaryText>MWL Delivers To</PrimaryText>
              <Radio.Group
                onChange={(e) => {
                  console.log("f2", e.target.value);
                  setdropOff(e.target.value);
                  props.setbtn2(e.target.value);
                }}
                value={dropOff}
                buttonStyle="solid"
                style={{ textAlign: "center", width: "100%", display: "flex" }}
              >
                <StyledButton
                  style={{
                    boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",

                    borderTopLeftRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: dropOff == "Door" ? "#E30022" : "white",
                    backgroundColor: dropOff == "Door" ? "#E30022" : "white",
                    color: dropOff == "Door" ? "white" : "#E30022",
                  }}
                  value="Door"
                >
                  Door
                </StyledButton>
                <StyledButton
                  style={{
                    boxShadow: "0px 7px 20px -8px rgba(0,0,0,0.75)",

                    textAlign: "center",
                    borderTopRightRadius: "100px",
                    borderBottomRightRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: dropOff == "Seaport" ? "#E30022" : "white",
                    backgroundColor: dropOff == "Seaport" ? "#E30022" : "white",
                    color: dropOff == "Seaport" ? "white" : "#E30022",
                  }}
                  value="Seaport"
                >
                  Seaport
                </StyledButton>
              </Radio.Group>
            </SelectionBox>
            {dropOff == "Door" ? (
              <DetailBox
                prediction={true}
                first_title="Ship To City"
                first_value={destCity}
                second_title="To Address"
                second_value={destAddress}
                // second_options={destAddressPredictions}
                second_function={setDestAddress}
              />
            ) : (
              <DetailBox
                first_title="Ship To City"
                first_value={destCity}
                second_title="Select Seaport"
                second_value={destCitySeaport}
                second_options={destCitySeaportData}
                second_function={setDestCitySeaport}
              />
            )}
          </StyledBox>
        </Col>
      </Row>
      <NewMap
        pickUp={pickUp == "Seaport" ? originCitySeaport : originCityAddresss}
        dropOff={dropOff == "Seaport" ? destCitySeaport : destAddress}
        isPickupPort={pickUp == "Seaport" ? 1 : 0}
        isDropOffPort={pickUp == "Seaport" ? 1 : 0}
      />
    </div>
  );
};
export default Button;
