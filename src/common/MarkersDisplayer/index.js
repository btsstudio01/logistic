import React from "react";
import PlaneMarker from "../../assets/Markers/Plane.png";
import AddressMarker from "../../assets/Markers/Building.png";
import ShipMarker from "../../assets/Markers/boating_7561220.png";
import LandMarker from "../../assets/Markers/Truck.png";
import { Marker } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";

import { useSelector } from "react-redux";

export const DisplayOriginMarker = ({ marker1Position }) => {
  const InitialData = useSelector((state) => state.data.data);
  return (
    <>
      {InitialData.shipmentDetails.termofshipment == 4 ||
      InitialData.shipmentDetails.termofshipment == 2 ? (
        <Marker
          position={marker1Position}
          animation={window.google.maps.Animation.DROP}
          icon={{
            url:
              InitialData.serviceType == 1
                ? PlaneMarker
                : InitialData.serviceType == 2
                ? ShipMarker
                : LandMarker,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
          draggable={false}
        />
      ) : (
        <Marker
          icon={{
            url: AddressMarker,

            scaledSize: new window.google.maps.Size(60, 60),
          }}
          animation={window.google.maps.Animation.DROP}
          position={marker1Position}
          draggable={false}
        />
      )}
    </>
  );
};
export const DisplayDestMarker = ({ marker2Position }) => {
  const InitialData = useSelector((state) => state.data.data);

  return (
    <>
      {InitialData.shipmentDetails.termofshipment == 4 ||
      InitialData.shipmentDetails.termofshipment == 3 ? (
        <Marker
          position={marker2Position}
          animation={window.google.maps.Animation.DROP}
          icon={{
            url:
              InitialData.serviceType == 1
                ? PlaneMarker
                : InitialData.serviceType == 2
                ? ShipMarker
                : LandMarker,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
          draggable={false}
        />
      ) : (
        <Marker
          icon={{
            url: AddressMarker,
            scaledSize: new window.google.maps.Size(60, 60),
          }}
          animation={window.google.maps.Animation.DROP}
          position={marker2Position}
          draggable={false}
        />
      )}
    </>
  );
};
