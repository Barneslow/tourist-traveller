import axios from "axios";
import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    async function fetchInitialCountry() {
      const { data } = await axios(
        `https://restcountries.com/v3.1/name/ireland`
      );
      setCountryData(...data);
    }

    fetchInitialCountry();
  }, []);

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
  };
  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
};

export default CountryContextProvider;
