import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  markers: [],
  favourites: [],
  setMarkerHandler: () => {},
  favouritesHandler: () => {},
  removeMarkerHandler: () => {},
  removeFavouriteHandler: () => {},
});

const FavouriteContextProvider = ({ children }) => {
  const [markers, setMarkers] = useState([]);
  const [favourites, setFavourites] = useState([]);

  function removeMarkerHandler(location) {
    setMarkers((prev) => prev.filter((item) => item.name !== location.name));
  }

  function setMarkerHandler(location) {
    console.log(location);
    setMarkers((prev) => [...prev, location]);
  }

  function favouritesHandler(name) {
    setFavourites((prev) => [...prev, name]);
  }

  function removeFavouriteHandler(name) {
    setFavourites((prev) => prev.filter((item) => item !== name));
  }

  const value = {
    setMarkerHandler,
    markers,
    favourites,
    favouritesHandler,
    removeFavouriteHandler,
    removeMarkerHandler,
  };
  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContextProvider;
