import CountryStatistics from "../CountryStatistics";
import Recommendations from "../tourist/Recommendations";

import styles from "./Layout.module.css";
import NavBar from "./Navbar";

const Layout = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles["inner-container"]}>
        <CountryStatistics />
        <Recommendations />
      </div>
    </div>
  );
};

export default Layout;
