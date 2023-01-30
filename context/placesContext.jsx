import { createContext, useState } from "react";

// const initalRecommended = [
//   {
//     business_status: "OPERATIONAL",
//     formatted_address: "Saint James' (part of Phoenix Park), Dublin 8, Ireland",
//     geometry: { location: { lat: 53.3561935, lng: -6.305289800000001 } },
//     rating: 4.6,
//     user_ratings_total: 23162,
//     photos: [],
//     name: "EPIC The Irish Emigration Museum",
//   },
// ];

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

  function updatedRecommendationHandler() {
    setUpdatedRecommendations((prevState) => {
      return !prevState;
    });
  }

  console.log(updatedRecommendation);

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
