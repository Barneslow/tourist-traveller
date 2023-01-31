import axios from "axios";
import { useContext } from "react";
import { CountryContext } from "../../context/countryContext";
import { FavouriteContext } from "../../context/favouriteContext";
import { PlacesContext } from "../../context/placesContext";
import IconButton from "../buttons/IconButton";
import CountrySelector from "../CountrySelector";
import { faHeart, faFlag, faEarth } from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.css";

const NavBar = ({ mapRef, setView }) => {
  const countryCtx = useContext(CountryContext);
  const favouriteCtx = useContext(FavouriteContext);
  const placesCtx = useContext(PlacesContext);

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

    placesCtx.updatedRecommendationHandler(!placesCtx.updatedRecommendation);

    placesCtx.setRecommendedPlacesHandler(data);
    setView(false);
  }

  function setFavouritesRecommendation() {
    placesCtx.updatedRecommendationHandler(!placesCtx.updatedRecommendation);
    placesCtx.setRecommendedPlacesHandler(favouriteCtx.markers);
    setView(false);
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
          onClick={() => setView(true)}
          icon={faFlag}
          className={styles.flag}
          buttonClass={styles.button}
          text="Country"
        />
        <IconButton
          onClick={fetchGoogleAPIHandler}
          icon={faEarth}
          className={styles.globe}
          buttonClass={styles.button}
          text="Places"
        />
        <IconButton
          onClick={setFavouritesRecommendation}
          icon={faHeart}
          className={styles.heart}
          buttonClass={styles.button}
          text="Favourites"
        />
      </div>
    </div>
  );
};

export default NavBar;
