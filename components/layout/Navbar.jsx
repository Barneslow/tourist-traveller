import axios from "axios";
import { useContext } from "react";
import { CountryContext } from "../../context/countryContext";
import { FavouriteContext } from "../../context/favouriteContext";
import { PlacesContext } from "../../context/placesContext";
import IconButton from "../buttons/IconButton";
import CountrySelector from "../CountrySelector";
import { faHeart, faGlobe } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.css";

const NavBar = ({ mapRef }) => {
  const countryCtx = useContext(CountryContext);
  const favouriteCtx = useContext(FavouriteContext);
  const placesCtx = useContext(PlacesContext);

  async function fetchGoogleAPIHandler() {
    const { data } = await axios(`tourist-traveller-server-production.up.railway.app`, {
      method: "POST",
      data: {
        query: countryCtx.selectedCountry,
      },
    });

    placesCtx.updatedRecommendationHandler(!placesCtx.updatedRecommendation);

    placesCtx.setRecommendedPlacesHandler(data);
  }

  function setFavouritesRecommendation() {
    placesCtx.updatedRecommendationHandler(!placesCtx.updatedRecommendation);
    placesCtx.setRecommendedPlacesHandler(favouriteCtx.markers);
  }
  return (
    <div className={styles.nav}>
      <CountrySelector mapRef={mapRef} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          gap: 10,
        }}
      >
        <IconButton
          onClick={fetchGoogleAPIHandler}
          icon={faGlobe}
          className={styles.plane}
          buttonClass={styles.button}
        />
        <IconButton
          onClick={setFavouritesRecommendation}
          icon={faHeart}
          className={styles.heart}
          buttonClass={styles.button}
        />
      </div>
    </div>
  );
};

export default NavBar;
