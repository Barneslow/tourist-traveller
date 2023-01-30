import { useContext, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { CountryContext } from "../../context/countryContext";

import styles from "./CountryMap.module.css";
import { FavouriteContext } from "../../context/favouriteContext";
import FunctionalMarker from "../tourist/FunctionalMarker";

const CountryMap = ({ zoom }) => {
  const countryCtx = useContext(CountryContext);
  const favouriteCtx = useContext(FavouriteContext);

  const { countryData } = countryCtx;

  if (Object.keys(countryData).length === 0) return <h1>Loading</h1>;

  const coords = countryData?.latlng;
  const name = countryData?.name?.common;

  function FlyMapTo() {
    const map = useMap();
    useEffect(() => {
      map.flyTo(coords, zoom);
    }, [coords]);

    return null;
  }

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

  return (
    <MapContainer
      center={coords}
      zoom={5}
      scrollWheelZoom={true}
      className={styles["map-container"]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FlyMapTo />
      <Marker position={coords}>
        <Popup>
          {name}
          <br />
        </Popup>
      </Marker>
      <Markers />
    </MapContainer>
  );
};

export default CountryMap;
