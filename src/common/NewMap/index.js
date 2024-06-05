import React, { useCallback, useEffect, useState, useRef } from "react";
import numeric from "numeric";

import { GoogleMap, Marker, Polyline } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { DisplayDestMarker, DisplayOriginMarker } from "../MarkersDisplayer";
import icon from "../../assets/ship.png";

const containerStyle = {
  width: "100%",
  height: "30vh",

  marginTop: "30px",
  borderRadius: "10px",
  boxShadow: "1px 1px 7px 0px rgba(0,0,0,0.75)",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map_style = [
  {
    featureType: "poi.attraction",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.government",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.medical",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.place_of_worship",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.school",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
const options = {
  disableDefaultUI: true,
  zoomControl: false,
  styles: Map_style,
  controls: false,
};
function NewMap({ pickUp, dropOff, isPickupPort, isDropOffPort }) {
  const [offsetPercentage, setOffsetPercentage] = useState(0);
  const [map, setMap] = useState(null);
  const [marker1Position, setMarker1Position] = useState({
    lat: -4.945,
    lng: -27.523,
  });
  const [marker2Position, setMarker2Position] = useState({
    lat: -4.945,
    lng: -27.593,
  });

  const fitBounds = () => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(marker1Position);
      bounds.extend(marker2Position);
      map.fitBounds(bounds);
    }
  };

  useEffect(() => {
    fitBounds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker1Position, marker2Position]);

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };
  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const lineSymbol = {
    path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    strokeColor: "#E30022",
    fillColor: "#E30022",
    fillOpacity: 1,
    scale: 2,
  };
  // Fetching lon and lat of selected location
  useEffect(() => {
    getGeocode({ address: isPickupPort === 1 ? `${pickUp} port` : pickUp })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setMarker1Position(latLng))
      .catch((error) => console.error("Error getting location details", error));
    getGeocode({ address: isDropOffPort === 1 ? `${dropOff} port` : dropOff })
      .then((results) => getLatLng(results[0]))
      .then((latLng) => setMarker2Position(latLng))
      .catch((error) => console.error("Error getting location details", error));

    const interval = setInterval(() => {
      setOffsetPercentage((prevOffset) => {
        // Increment offset by 1%
        const newOffset = prevOffset + 1;
        // Reset offset to 0% after reaching 100%
        return newOffset > 100 ? 0 : newOffset;
      });
    }, 30); // Update every 30 milliseconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [dropOff, pickUp]);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      options={options}
      onLoad={onLoad}
      onUnmount={onUnmount}
      mapTypeId="satellite"
      tilt={45}
    >
      {pickUp && <DisplayOriginMarker marker1Position={marker1Position} />}
      {dropOff && <DisplayDestMarker marker2Position={marker2Position} />}
      {pickUp && dropOff && (
        <Polyline
          path={[marker1Position, marker2Position]}
          options={{
            geodesic: true,

            strokeColor: "#0000", // Set the color of the polyline
            strokeOpacity: 1,
            strokeWeight: 3, // Set the width of the polyline
            icons: [
              {
                icon: lineSymbol,
                offset: `${offsetPercentage}%`, // Dynamic offset
              },
              {
                icon: lineSymbol,
                offset: `${offsetPercentage + 20}%`, // Dynamic offset
              },
              {
                icon: lineSymbol,
                offset: `${offsetPercentage + 40}%`, // Dynamic offset
              },
              {
                icon: lineSymbol,
                offset: `${offsetPercentage + 60}%`, // Dynamic offset
              },
              {
                icon: lineSymbol,
                offset: `${offsetPercentage + 80}%`, // Dynamic offset
              },
            ],
          }}
        />
      )}
    </GoogleMap>
  );
}

export default NewMap;
