import { useContext, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { CountryContext } from "../../context/countryContext";

import styles from "./CountryMap.module.css";
import { FavouriteContext } from "../../context/favouriteContext";
import FunctionalMarker from "../tourist/FunctionalMarker";

const CountryMap = ({ zoom, setMapRef }) => {
  const favouriteCtx = useContext(FavouriteContext);

  function Markers() {
    const map = useMap();

    return (
      favouriteCtx.markers.length > 0 &&
      favouriteCtx.markers.map((marker, index) => {
        return (
          <FunctionalMarker
            key={index}
            locationFly={() => map.flyTo(marker.geometry.location, 7)}
            marker={marker}
          />
        );
      })
    );
  }

  const displayMap = useMemo(
    () => (
      <MapContainer
        className={styles["map-container"]}
        center={[54, -2]}
        zoom={7}
        scrollWheelZoom={false}
        ref={setMapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
      </MapContainer>
    ),
    [favouriteCtx.markers]
  );

  return <div>{displayMap}</div>;
};

export default CountryMap;
