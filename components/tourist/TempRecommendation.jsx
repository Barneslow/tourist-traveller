import { motion } from "framer-motion";
import { useContext } from "react";
import { PlacesContext } from "../../context/placesContext";
import IconButton from "../buttons/IconButton";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

import styles from "./TempRecommendation.module.css";
import { CountryContext } from "../../context/countryContext";
import axios from "axios";
import { baseURL } from "../../config/baseURL";

const TempRecommendation = () => {
  const placesCtx = useContext(PlacesContext);
  const countryCtx = useContext(CountryContext);

  async function fetchGoogleAPIHandler() {
    const { data } = await axios(
      `https://tourist-traveller-server-production.up.railway.app/`,
      {
        method: "POST",
        data: {
          query: countryCtx.selectedCountry,
        },
      }
    );

    placesCtx.updatedRecommendationHandler();

    placesCtx.setRecommendedPlacesHandler(data);
  }

  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0 }}
      transition={{ delay: 1, type: "spring", bounce: 0.6, duration: 1 }}
      className={styles.container}
    >
      <h2
        style={{ fontSize: 28, color: "var(--dark-grey)", fontWeight: 900 }}
        className={styles.title}
      >
        No Destinations Saved
      </h2>
      <h3 className={styles.title}>Start searching for destinations!</h3>
      <IconButton
        onClick={fetchGoogleAPIHandler}
        icon={faPlane}
        className={styles.plane}
        buttonClass={styles.button}
      />
    </motion.div>
  );
};

export default TempRecommendation;
