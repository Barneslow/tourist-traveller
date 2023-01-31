import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CountryContext = createContext({
  map: {},
  countryData: {},
  selectedCountry: "",
  setCountryDataHandler: () => {},
  setSelectedCountryHandler: () => {},
  setMapHandler: () => {},
});

const CountryContextProvider = ({ children }) => {
  const [countryData, setCountryData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("Ireland");
  const [map, setMap] = useState();

  useEffect(() => {
    async function fetchInitialCountry() {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/ireland`
      );
      setCountryData(...data);
    }

    fetchInitialCountry();
  }, []);

  function setMapHandler(map) {
    console.log(map);
    setMap(map);
  }

  function setCountryDataHandler(data) {
    setCountryData(data);
  }

  function setSelectedCountryHandler(name) {
    setSelectedCountry(name);
  }

  const value = {
    countryData,
    setCountryDataHandler,
    setSelectedCountryHandler,
    selectedCountry,
    map,
    setMapHandler,
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
