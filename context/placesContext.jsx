import { createContext, useState } from "react";

export const PlacesContext = createContext({
  recommendedPlaces: [],
  updatedRecommendation: false,
  setRecommendedPlacesHandler: () => {},
  updatedRecommendationHandler: () => {},
});

const PlacesContextProvider = ({ children }) => {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const [updatedRecommendation, setUpdatedRecommendations] = useState(false);

  function setRecommendedPlacesHandler(places) {
    setRecommendedPlaces((prev) => places);
  }

  function updatedRecommendationHandler(boolean) {
    setUpdatedRecommendations(boolean);
  }

  const value = {
    recommendedPlaces,
    setRecommendedPlacesHandler,
    updatedRecommendation,
    updatedRecommendationHandler,
  };
  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  );
};

export default PlacesContextProvider;
