import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchBorderingCountries } from "../utils/api";

import styles from "./BorderingCountries.module.css";
import axios from "axios";
import { CountryContext } from "../context/countryContext";

const BorderingCountries = ({ borders, setCountryData }) => {
  if (!borders) return;
  const countryCtx = useContext(CountryContext);
  const [borderingCountries, setBorderingCountries] = useState();
  useEffect(() => {
    async function fetchCountriesBordering() {
      if (!borders) return;

      const data = await fetchBorderingCountries(borders);

      setBorderingCountries(data);
    }

    fetchCountriesBordering();
  }, [borders]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  async function fetchCountryData(name) {
    const { data } = await axios.get(`
    https://restcountries.com/v3.1/name/${name.toLowerCase()}`);

    countryCtx.setCountryDataHandler(...data);
    countryCtx.setSelectedCountryHandler(name);
  }

  return (
    <div>
      <span className={styles.title}>Borders</span>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
        key={borderingCountries}
      >
        {borderingCountries?.map((country, i) => {
          return (
            <motion.div
              key={i}
              variants={child}
              className={styles.borders}
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => fetchCountryData(country.name.common)}
            >
              <img src={country.flags.svg} className={styles.flag} />
              <span className={styles.tooltip}>{country.name.common}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BorderingCountries;
