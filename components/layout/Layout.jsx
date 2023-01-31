import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CountryStatistics from "../CountryStatistics";
import Recommendations from "../tourist/Recommendations";

import styles from "./Layout.module.css";
import NavBar from "./Navbar";

const Layout = ({ mapRef }) => {
  const [view, setView] = useState(true);

  console.log(view);

  return (
    <div className={styles.container}>
      <NavBar mapRef={mapRef} setView={setView} />
      <div className={styles["inner-container"]}>
        {view ? <CountryStatistics /> : <Recommendations mapRef={mapRef} />}
      </div>
    </div>
  );
};

export default Layout;

{
  /* <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100vw" }}
              transition={{ duration: 3 }}
            ></motion.div> */
}
