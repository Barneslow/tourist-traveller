import styles from "./App.module.css";
import CountryMap from "../components/map/CountryMap";
import CountryContextProvider from "../context/countryContext";
import FavouriteContextProvider from "../context/favouriteContext";
import PlacesContextProvider from "../context/placesContext";
import Layout from "../components/layout/Layout";

function App() {
  return (
    <PlacesContextProvider>
      <CountryContextProvider>
        <FavouriteContextProvider>
          <div className={styles.app}>
            <CountryMap zoom={7} />
            <Layout />
          </div>
        </FavouriteContextProvider>
      </CountryContextProvider>
    </PlacesContextProvider>
  );
}

export default App;
