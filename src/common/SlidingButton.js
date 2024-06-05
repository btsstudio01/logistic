/* eslint-disable react-hooks/rules-of-hooks */
import { Row, Col, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Radio, Select } from "antd";
import axios from "axios";
import { getGeocode, getLatLng } from "use-places-autocomplete";

import {
  StyledButton,
  StyledBox,
  PrimaryText,
  SecondaryText,
  SelectionBox,
  LabelTitleBlue,
} from "../common/globalStyle";
import { updateData } from "../redux/DataRedux";
import { useDispatch, useSelector } from "react-redux";
import NewMap from "./NewMap";

const Button = (props) => {
  const InitialData = useSelector((state) => state.data.data);
  const [originCity, setOriginCity] = useState(
    InitialData.shipmentDetails?.pickupCity
  );
  const [pickUp, setPickUp] = useState();
  const [dropOff, setdropOff] = useState();
  const [destCity, setDestCity] = useState(
    InitialData.shipmentDetails?.dropoffCity
  );
  const [destAddress, setDestAddress] = useState("");
  const [originCityAddresss, setOriginCityAddresss] = useState("");
  const [originCityAirport, setOriginCityAirport] = useState();
  const [destCityAirport, setDestCityAirport] = useState();
  const [originCityAirportData, setOriginCityAirportData] = useState([]);
  const [destCityAirportData, setDestCityAirportData] = useState([]);
  const [originGeoCode, setOriginGeoCode] = useState("");
  const [destGeoCode, setDestGeoCode] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setOriginCity(InitialData.shipmentDetails?.pickupCity);
    setDestCity(InitialData.shipmentDetails?.dropoffCity);
    setOriginCityAirport("");
    setDestCityAirport("");

    switch (InitialData.shipmentDetails?.termofshipment) {
      case 4:
        setPickUp("Airport");
        setdropOff("Airport");
        break;
      case 3:
        setPickUp("Door");
        setdropOff("Airport");
        break;
      case 2:
        setPickUp("Airport");
        setdropOff("Door");
        break;
      case 1:
        setPickUp("Door");
        setdropOff("Door");
        break;
      default:
        console.log("heheh");
        break;
    }
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
          pickupAddress: pickUp == "Door" ? originCityAddresss : null,
          dropoffAddress: dropOff == "Door" ? destAddress : null,

          pickupAirport: pickUp == "Airport" ? originCityAirport : null,
          dropoffAirport: dropOff == "Airport" ? destCityAirport : null,

          termofshipment:
            pickUp == "Airport" && dropOff == "Airport"
              ? 4
              : pickUp == "Door" && dropOff == "Airport"
              ? 3
              : pickUp == "Airport" && dropOff == "Door"
              ? 2
              : pickUp == "Door" && dropOff == "Door"
              ? 1
              : 0,
        },
      })
    );
  }, [
    pickUp,
    originCityAddresss,
    destAddress,
    dropOff,
    originCityAirport,
    destCityAirport,
  ]);

  const FetchOriginCityAirPort = () => {
    axios
      .get(
        `${process.env.REACT_APP_CALCULATOR}trade/getAirport/${props.fromCountry}/${originCity}`
      )
      .then((res) => {
        if (res.data.data.length) {
          console.log("anas", res.data.data);
          setOriginCityAirportData(() =>
            res.data.data.map((e, i) => ({
              value: e.Name,
              label: e.Name,
            }))
          );
        } else {
          setOriginCityAirportData([]);
        }
      })
      .catch((err) => console.log(err));
  };

  const FetchDestCityAirPort = () => {
    axios
      .get(
        `${process.env.REACT_APP_CALCULATOR}trade/getAirport/${props.toCountry}/${destCity}`
      )
      .then((res) => {
        if (res.data.data.length) {
          console.log("anas", res.data.data);
          setDestCityAirportData(() =>
            res.data.data.map((e, i) => ({
              value: e.Name,
              label: e.Name,
            }))
          );
        } else {
          setOriginCityAirportData([]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    FetchOriginCityAirPort();
    FetchDestCityAirPort();
    console.log("rerendered comp");
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
        </SelectionBox>

        <SelectionBox>
          <SecondaryText>{second_title}</SecondaryText>
          <Select
            showSearch={prediction ? true : false}
            required={true}
            size="large"
            value={second_value}
            style={{ width: "100%", textAlign: "left" }}
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
          ></Select>
        </SelectionBox>
      </>
    );
  };

  const OriginSection = ({ pickUp, setPickUp }) => {
    return (
      <div>
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
                  borderColor: pickUp == "Airport" ? "#E30022" : "white",
                  backgroundColor: pickUp == "Airport" ? "#E30022" : "white",
                  color: pickUp == "Airport" ? "white" : "#E30022",
                }}
                value="Airport"
              >
                Airport
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
              second_function={setOriginCityAddresss}
            />
          ) : (
            <DetailBox
              first_title="Ship From City"
              first_value={originCity}
              second_title="Select Airport"
              second_value={originCityAirport}
              second_options={originCityAirportData}
              second_function={setOriginCityAirport}
            />
          )}
        </StyledBox>
      </div>
    );
  };
  const DestinationSection = ({ dropOff, setDropOff }) => (
    <div>
      <LabelTitleBlue>Destination</LabelTitleBlue>

      <StyledBox>
        <SelectionBox style={{ marginTop: 0 }}>
          <PrimaryText>MWL Delivers To</PrimaryText>
          <Radio.Group
            onChange={(e) => {
              console.log("f2", e.target.value);
              setdropOff(e.target.value);
              props.setbtn2(e.target.value);
              FetchDestCityAirPort();
            }}
            value={dropOff}
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
                borderColor: dropOff == "Airport" ? "#E30022" : "white",
                backgroundColor: dropOff == "Airport" ? "#E30022" : "white",
                color: dropOff == "Airport" ? "white" : "#E30022",
              }}
              value="Airport"
            >
              Airport
            </StyledButton>
          </Radio.Group>
        </SelectionBox>
        {dropOff == "Door" ? (
          <DetailBox
            first_title="Ship To City"
            first_value={destCity}
            second_title="To Address"
            second_value={destAddress}
            second_function={setDestAddress}
            prediction={true}
          />
        ) : (
          <DetailBox
            first_title="Ship To City"
            first_value={destCity}
            second_title="Select Airport"
            second_value={destCityAirport}
            second_options={destCityAirportData}
            second_function={setDestCityAirport}
          />
        )}
      </StyledBox>
    </div>
  );
  return (
    <div>
      <Row gutter={[80, 30]}>
        <Col
          xs={24}
          md={12}
          justify={"center"}
          style={{
            textAlign: "left",
            width: "100%",
          }}
        >
          <OriginSection pickUp={pickUp} setPickUp={setPickUp} />
        </Col>
        <Col
          xs={24}
          md={12}
          style={{
            textAlign: "left",
          }}
        >
          <DestinationSection dropOff={dropOff} setDropOff={setdropOff} />
        </Col>
      </Row>

      <NewMap
        pickUp={pickUp == "Airport" ? originCityAirport : originCityAddresss}
        dropOff={dropOff == "Airport" ? destCityAirport : destAddress}
      />
    </div>
  );
};
export default Button;
