{
  /* <MapContainer
      center={coords}
      zoom={5}
      scrollWheelZoom={true}
      className={styles["map-container"]}
      ref={setMap}
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
    </MapContainer> */
}

// function FlyMapTo() {
//     const map = useMap();
//     useEffect(() => {
//       map.flyTo(coords, zoom);
//     }, [coords]);

//     return null;
//   }

// const { countryData, setMapHandler } = countryCtx;

// if (Object.keys(countryData).length === 0) return <h1>Loading</h1>;

// const coords = countryData?.latlng;
// const name = countryData?.name?.common;
