import { useContext } from "react";
import { motion } from "framer-motion";

import TouristAttraction from "./TouristAttraction";
import { PlacesContext } from "../../context/placesContext";

import styles from "./Recommendations.module.css";
import TempRecommendation from "./TempRecommendation";

const Recommendations = () => {
  const placesCtx = useContext(PlacesContext);

  const { recommendedPlaces, updatedRecommendation } = placesCtx;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  };

  console.log(updatedRecommendation);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        key={updatedRecommendation}
        className={styles.container}
      >
        {recommendedPlaces.length > 0 ? (
          <>
            {recommendedPlaces.map((place, i) => (
              <motion.div
                className={styles["inner-container"]}
                variants={child}
                key={i}
              >
                <TouristAttraction recommendation={place} />
              </motion.div>
            ))}
          </>
        ) : (
          <TempRecommendation />
        )}
      </motion.div>
    </div>
  );
};

export default Recommendations;
