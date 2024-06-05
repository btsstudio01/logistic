import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { LabelTitleBlue, CustAuto } from "../../common/globalStyle";
import { Row, Col } from "antd";
import axios from "axios";
import { updateData } from "../../redux/DataRedux";
import { useDispatch, useSelector } from "react-redux";
const MapComponent = (props) => {
  const dispatch = useDispatch();
  const center = {
    lat: 0,
    lng: 0,
  };
  const [map, setMap] = useState(null);
  const [marker1Position, setMarker1Position] = useState(null);
  const [marker2Position, setMarker2Position] = useState(null);
  const [lineCoordinates, setLineCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);
  const [mapCenter, setMapCenter] = useState(center);
  const mapContainerStyle = {
    width: "100%",
    height: "500px",
    marginTop: "-8px",
    borderRadius: "10px",
    marginBottom: "50px",
    boxShadow: "1px 1px 7px 0px rgba(0,0,0,0.75)",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  useEffect(() => {
    if (marker1Position && marker2Position) {
      const coordinates = [marker1Position, marker2Position];
      setLineCoordinates(coordinates);
      const distanceInMeters = calculateDistance(
        marker1Position,
        marker2Position
      );
      setDistance(distanceInMeters);
    } else {
      setLineCoordinates([]); // Reset line coordinates if markers are not both set
      setDistance(0); // Reset distance as well
    }
  }, [marker1Position, marker2Position]);
  const calculateDistance = (position1, position2) => {
    const { lat: lat1, lng: lng1 } = position1;
    const { lat: lat2, lng: lng2 } = position2;
    const R = 6371000; // Radius of the Earth in meters
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert latitude difference to radians
    const dLng = (lng2 - lng1) * (Math.PI / 180); // Convert longitude difference to radians

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters
    return distance;
  };

  const handleMapLoad = (mapInstance) => {
    setLineCoordinates([]); // Reset line coordinates if markers are not both set
    setDistance(0);
    setMap(mapInstance);
  };

  const handleMarkerDrag = (position, markerNumber) => {
    if (markerNumber === 1) {
      setMarker1Position(position);
    } else if (markerNumber === 2) {
      setMarker2Position(position);
    }
  };

  const {
    ready: ready1,
    value: value1,
    suggestions: { status: status1, data: data1 },
    setValue: setValue1,
    clearSuggestions: clearSuggestions1,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define any additional options here if needed */
      types: ["(regions)"], // Restrict results to regions (countries)
    },
  });

  const {
    ready: ready2,
    value: value2,
    suggestions: { status: status2, data: data2 },
    setValue: setValue2,
    clearSuggestions: clearSuggestions2,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(regions)"], // Restrict results to regions (countries)
    },
  });

  const resetLine = () => {
    setLineCoordinates([]);
    setDistance(0);
  };

  const handleInput1Change = async (e) => {
    setValue1(e.target.value);
    // props.fromCountry = e.target.value;
    const description = e.target.value;
    try {
      const results = await getGeocode({ address: description });
      const latLng = await getLatLng(results[0]);
      setMarker1Position(latLng);
      setMapCenter(latLng); // Set map center to the entered location
      setLineCoordinates([]); // Reset line coordinates
    } catch (error) {
      console.error("Error getting location details", error);
    }
  };

  const handleInput2Change = async (e) => {
    setValue2(e.target.value);
    // props.fromCountry = e.target.value;

    const description = e.target.value;
    try {
      const results = await getGeocode({ address: description });
      const latLng = await getLatLng(results[0]);
      setMarker2Position(latLng);
      setMapCenter(latLng); // Set map center to the entered location
      setLineCoordinates([]); // Reset line coordinates
    } catch (error) {
      console.error("Error getting location details", error);
    }
  };
  const handleInput1Select = (description) => {
    resetLine();
    setValue1(description, false);
    // dispatch(updateData({ pickup: description }));
    props.fromCountry(description);

    clearSuggestions1();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setMarker1Position(latLng))
      .catch((error) => console.error("Error getting location details", error));
  };
  const [desc, setDesc] = useState("");
  const handleInput2Select = (description) => {
    setValue2(description, false);
    // dispatch(updateData({ dropoff: description }));

    props.toCountry(description);
    clearSuggestions2();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setMarker2Position(latLng))
      .catch((error) => console.error("Error getting location details", error));
  };
  const [response, setResponse] = useState([]);
  console.log(props);
  useEffect(() => {
    // if (props?.serviceType === 2) {
    //   axios
    //     .get(`${process.env.REACT_APP_CALCULATOR}/users/getallcountries`)
    //     .then((res) => {
    //       setResponse(res?.data?.data);
    //     });
    // } else {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setResponse(res.data.map((country) => country.name.common));
    });
    // }
  }, []);
  const InitialData = useSelector((state) => state.data.data);
  const [fromValue, setFromValue] = useState("");
  const [options1, setOptions1] = useState([]);
  const [toValue, setToValue] = useState("");
  const [options2, setOptions2] = useState([]);
  useEffect(() => {
    setFromValue(InitialData.shipmentDetails?.pickup);
    setToValue(InitialData.shipmentDetails?.dropoff);
  }, []);
  const filterOptions = (searchText) => {
    console.log(response, searchText);
    const filteredOptions = response
      .filter((option) =>
        option.toLowerCase().startsWith(searchText.toLowerCase())
      )
      .map((option) => ({ value: option }));
    return filteredOptions;
  };

  const onSearch1 = (text) => {
    setOptions1(filterOptions(text));
  };
  const onSearch2 = (text) => {
    setOptions2(filterOptions(text));
  };

  const onChange1 = (data) => {
    setFromValue(data);
    console.log("from", data);
  };
  const onChange2 = (data) => {
    setToValue(data);
  };
  console.log(options1, "options1");
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
          {/* Input field for location 1 */}
          <LabelTitleBlue>From:</LabelTitleBlue>
          <CustAuto
            value={fromValue}
            options={options1}
            onSelect={handleInput1Select}
            onSearch={onSearch1}
            onChange={onChange1}
            placeholder="Select Country"
          />
        </Col>
        <Col span={12} style={{ display: "flex", flexDirection: "column" }}>
          {/* Input field for location 2 */}
          <LabelTitleBlue>To:</LabelTitleBlue>
          <CustAuto
            value={toValue}
            options={options2}
            onSelect={handleInput2Select}
            onSearch={onSearch2}
            onChange={onChange2}
            placeholder="Select Country"
          />
        </Col>
      </Row>
      <div>{<p>Distance: {(distance / 1000).toFixed(2)} km</p>}</div>
      {value1 || value2 ? (
        <>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={{ lat: marker1Position?.lat, lng: marker1Position?.lng }}
            zoom={2}
            options={options}
            onLoad={handleMapLoad}
          >
            {marker1Position && (
              <Marker
                position={marker1Position}
                draggable={true}
                onDragEnd={(e) => handleMarkerDrag(e.latLng, 1)}
              />
            )}
            {marker2Position && (
              <Marker
                position={marker2Position}
                draggable={true}
                onDragEnd={(e) => handleMarkerDrag(e.latLng, 2)}
              />
            )}
            {/* Line */}
            {/* {lineCoordinates.length === 2 && <Polyline path={lineCoordinates} />} */}

            {/* {lineCoordinates.length === 2 && <Polyline path={lineCoordinates} />} */}
          </GoogleMap>
        </>
      ) : null}
    </div>
  );
};

export default MapComponent;
