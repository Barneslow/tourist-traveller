import styles from "./CheckFlights.module.css";

const CheckBooking = ({ address }) => {
  const searchTerm = encodeURIComponent(address);

  return (
    <a
      className={styles.button}
      style={{ background: " #4270e3" }}
      target="_blank"
      href={`https://www.google.com/search?q=booking+${searchTerm}`}
    >
      Check Bookings
    </a>
  );
};

export default CheckBooking;
