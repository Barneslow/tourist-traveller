import { motion } from "framer-motion";
import { ratingRounder } from "../../helpers/math";

import styles from "./RatingsBar.module.css";

const RatingsBar = ({ rating }) => {
  const roundedRating = ratingRounder(rating);
  const ratingArray = Array.from(Array(roundedRating).keys());
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: { scale: 0, y: 75 },
    show: { scale: 1, y: 0 },
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {ratingArray.map((star, index) => (
        <motion.div key={index} className={styles.circle} variants={child} />
      ))}
    </motion.div>
  );
};

export default RatingsBar;
