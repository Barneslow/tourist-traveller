import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CountryStatistics from "../CountryStatistics";
import Recommendations from "../tourist/Recommendations";

import styles from "./Layout.module.css";
import NavBar from "./Navbar";

const Layout = ({ mapRef }) => {
  const [view, setView] = useState(true);

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
