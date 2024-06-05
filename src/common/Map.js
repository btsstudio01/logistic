import { useState, useRef, useEffect } from "react";

import _ from "lodash";

import { SearchOutlined } from "@ant-design/icons";

import React from "react";
import Geocode from "react-geocode";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
} from "@react-google-maps/api";
import { Input } from "antd";

const Map_style = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        invert_lightness: true,
      },
      {
        saturation: 10,
      },
      {
        lightness: 30,
      },
      {
        gamma: 0.5,
      },
      {
        hue: "#435158",
      },
    ],
  },
];

const libraries = ["places"];
const mapContainerStyle = {
  width: "300px",
  height: "300px",
};

const options = {
  styles: Map_style,
  disableDefaultUI: true,
};

let Markerlatitude = 0;
let Markerlongtitude = 0;

const Map = ({ country, onSelectPlace }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA",
    libraries,
  });

  const [centerlat, setcenterlat] = useState(25.276987);
  const [centerlng, setcenterlng] = useState(55.296249);

  const updateMapCenter = (lat, lng) => {
    setcenterlat(lat);
    setcenterlng(lng);
  };

  const [markers, setMarkers] = useState([]);

  if (loadError) return "Error Loading Maps";
  if (!isLoaded) return "Loading";

  return (
    <div>
      {/* <AutoComplete1 country={country} mapRef={mapRef} /> */}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={{ lat: centerlat, lng: centerlng }}
        options={options}
        onClick={(event) => {
          setMarkers((current) => [
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
        {markers.map((marker) => [
          (Markerlatitude = marker.lat),
          (Markerlongtitude = marker.lng),
        ])}
      </GoogleMap>
      <SB
        updateMapCenter={updateMapCenter}
        country={country}
        onSelectPlace={onSelectPlace}
        setMarkers={setMarkers}
      />
    </div>
  );
};
function SB({ updateMapCenter, country, onSelectPlace, setMarkers }) {
  const [getcountry, setcountry] = useState("AE");
  useEffect(() => {
    // Update the country value whenever the 'country' prop changes
    setcountry(country);
  }, [country]);

  Geocode.setApiKey("AIzaSyCN5_vVFCU-LZ2sQHmUzch_-fXkJq2THjA");
  let autocomplete;

  autocomplete = new window.google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    {
      types: ["establishment"],
      componentRestrictions: { country: getcountry },
      fields: ["place_id", "geometry", "name"],
    }
  );

  autocomplete.addListener("place_changed", onPlaceChanged);

  const debouncedOnPlaceChanged = useRef(
    _.debounce((selectedPlace) => {
      if (!selectedPlace.geometry) {
        document.getElementById("autocomplete").placeholder = "Enter Place";
      } else {
        Geocode.fromAddress(selectedPlace.name).then(
          (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
            updateMapCenter(lat, lng);

            setMarkers((current) => [
              {
                lat: lat,
                lng: lng,
                time: new Date(),
                Markerlatitude: lat,
                Markerlongtitude: lng,
              },
            ]);
            onSelectPlace(selectedPlace.name);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }, 300) // Debounce delay in milliseconds
  ).current;

  function onPlaceChanged() {
    const selectedPlace = autocomplete.getPlace();
    console.log(selectedPlace.name, "nameee");
    const p = selectedPlace.formatted_address;
    onSelectPlace(p);
    debouncedOnPlaceChanged(selectedPlace);
  }

  useEffect(() => {
    Geocode.fromLatLng(Markerlatitude, Markerlongtitude)
      .then((response) => {
        const address = response.results[0].formatted_address;

        // console.log(
        //   `Lat : ${Markerlatitude} , Long : ${Markerlongtitude} Name : ${address}`
        // );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [Markerlatitude, Markerlongtitude, onSelectPlace]);

  return (
    <div>
      <SearchOutlined
        style={{ position: "absolute", marginTop: "18px", marginLeft: "10px" }}
      />
      <input
        id="autocomplete"
        style={{
          padding: "10px",
          paddingLeft: "30px",
          width: "270px",
          borderRadius: "2px",
          marginTop: "5px",
          marginBottom: "2rem",
          float: "left",
          border: "1px solid grey",
        }}
      ></input>
    </div>
  );
}

export default Map;
