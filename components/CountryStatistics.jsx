import { motion } from "framer-motion";
import { useContext } from "react";
import { CountryContext } from "../context/countryContext";
import { numberWithCommas } from "../helpers/text";
import BorderingCountries from "./BorderingCountries";

import styles from "./CountryStatistics.module.css";
import Languages from "./Languages";
import Statistic from "./Statistic";

const CountryStatistics = () => {
  const countryCtx = useContext(CountryContext);

  const { countryData } = countryCtx;
  if (Object.keys(countryData).length === 0) {
    return <h1>Loading</h1>;
  }

  const { name, population, region, capital, borders, languages, flags } =
    countryCtx.countryData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  };

  const languageArray = Object.values(languages);

  return (
    <div className={styles.container}>
      <motion.div
        key={name.common}
        animate={{ opacity: 1, scale: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: 25, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={styles["image-container"]}
      >
        <img className={styles.flag} src={flags?.svg} alt="My SVG Image" />
      </motion.div>
      <motion.div
        className={styles["list-container"]}
        variants={container}
        initial="hidden"
        animate="show"
        key={population}
      >
        <motion.div variants={child}>
          <Statistic text={name?.common} title="Country" />
        </motion.div>
        <motion.div variants={child}>
          <Statistic title="Population" text={numberWithCommas(population)} />
        </motion.div>
        <motion.div variants={child}>
          <Statistic title="Region" text={region} />
        </motion.div>
        <motion.div variants={child}>
          <Languages languages={languageArray} />
        </motion.div>
        <BorderingCountries borders={borders} />
      </motion.div>
    </div>
  );
};

export default CountryStatistics;

// <motion.p className={styles.statistic} variants={child}>
// <span style={{ fontWeight: 800 }}>Capital:</span> {capital}
// </motion.p>
// <motion.p
// className={styles.statistic}
// variants={child}
// style={{ display: "flex", gap: 10 }}
// >
// <span style={{ fontWeight: 800 }}>Population:</span>{" "}
// {numberWithCommas(population)}
// </motion.p>
// <motion.p className={styles.statistic} variants={child}>
// <span style={{ fontWeight: 800 }}>Region:</span> {region}
// </motion.p>
// <motion.span
// variants={child}
// className={styles.statistic}
// style={{ fontWeight: 800 }}
// >
// Languages:{" "}
// </motion.span>
//
// <BorderingCountries borders={borders} />
// </motion.div>
