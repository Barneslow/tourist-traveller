import { useContext } from "react";
import axios from "axios";
import { CountryDropdown } from "react-country-region-selector";
import { CountryContext } from "../context/countryContext";

import styles from "./CountrySelector.module.css";

const CountrySelector = ({ mapRef }) => {
  const countryCtx = useContext(CountryContext);

  async function fetchCountryData(name) {
    const { data } = await axios.get(`
    https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    countryCtx.setCountryDataHandler(...data);
    countryCtx.setSelectedCountryHandler(name);

    const location = data[0].latlng;

    mapRef.flyTo(location, 5);
  }

  return (
    <CountryDropdown
      value={countryCtx.selectedCountry}
      className={styles.selector}
      onChange={fetchCountryData}
    />
  );
};

export default CountrySelector;
