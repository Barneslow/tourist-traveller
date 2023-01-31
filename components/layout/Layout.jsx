import CountryStatistics from "../CountryStatistics";
import Recommendations from "../tourist/Recommendations";

import styles from "./Layout.module.css";
import NavBar from "./Navbar";

const Layout = ({ mapRef }) => {
  return (
    <div className={styles.container}>
      <NavBar mapRef={mapRef} />
      <div className={styles["inner-container"]}>
        <CountryStatistics />
        <Recommendations mapRef={mapRef} />
      </div>
    </div>
  );
};

export default Layout;
