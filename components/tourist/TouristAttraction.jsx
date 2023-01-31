import CheckBooking from "../buttons/CheckBooking";
import CheckFlights from "../buttons/CheckFlights";
import HeartIcon from "../buttons/HeartIcon";
import RatingsBar from "../buttons/RatingsBar";
import AddressLink from "./AddressLink";
import styles from "./TouristAttraction.module.css";

const TouristAttraction = ({ recommendation, mapRef }) => {
  const APIKEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

  const {
    name,
    photos,
    rating,
    formatted_address,
    user_ratings_total,
    geometry: { location },
  } = recommendation;

  const photoRef = photos[0]?.photo_reference;

  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <img
          className={styles.image}
          // src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400
          // &photoreference=${photoRef}&key=${APIKEY}`}
          src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
        />
        <HeartIcon recommendation={recommendation} mapRef={mapRef} />
      </div>

      <div className={styles["info-container"]}>
        <div style={{ display: "flex" }}>
          <h3 className={styles.name}>{name}</h3>
          <RatingsBar rating={rating} />
        </div>
        <p className={styles.rating}>
          Rating: {rating} /{" "}
          <span className={styles.text}>
            <i className="fa-regular fa-user"></i>
            {user_ratings_total}
          </span>
        </p>
        <AddressLink
          formatted_address={formatted_address}
          location={location}
          name={name}
          mapRef={mapRef}
        />

        <div className={styles["button-container"]}>
          <CheckFlights />
          <CheckBooking />
        </div>
      </div>
    </div>
  );
};

export default TouristAttraction;
