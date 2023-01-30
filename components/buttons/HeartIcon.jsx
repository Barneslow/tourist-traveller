import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FavouriteContext } from "../../context/favouriteContext";

import styles from "./HeartIcon.module.css";

const HeartIcon = ({ recommendation }) => {
  const favouriteCtx = useContext(FavouriteContext);

  const isFavourite = favouriteCtx.favourites.find(
    (name) => name === recommendation.name
  );

  function addFavourite() {
    isFavourite
      ? favouriteCtx.removeFavouriteHandler(recommendation.name)
      : favouriteCtx.favouritesHandler(recommendation.name);

    isFavourite
      ? favouriteCtx.removeMarkerHandler(recommendation)
      : favouriteCtx.setMarkerHandler(recommendation);
  }

  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      initial={{ scale: 3, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.6, duration: 1, delay: 1.75 }}
      className={styles["icon-container"]}
    >
      <FontAwesomeIcon
        icon={faHeart}
        className={isFavourite ? styles.fav : styles.nofav}
        onClick={addFavourite}
      />
    </motion.div>
  );
};

export default HeartIcon;
