import { useContext } from "react";
import { CountryContext } from "../../context/countryContext";

import styles from "./CheckFlights.module.css";

const CheckFlights = () => {
  const countryCtx = useContext(CountryContext);

  const { selectedCountry } = countryCtx;
  return (
    <a
      className={styles.button}
      target="_blank"
      href={`https://www.google.com/search?q=flights+${selectedCountry}`}
    >
      Check Flights
    </a>
  );
};

export default CheckFlights;
