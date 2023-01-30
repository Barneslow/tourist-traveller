import styles from "./AddressLink.module.css";

const AddressLink = ({ formatted_address, location, name }) => {
  function moveToLocationHandler(location) {
    const data = { name, location };
    // favouriteCtx.setMarkerHandler(data);
  }

  const searchTerm = encodeURIComponent(formatted_address);

  return <address className={styles.address}>{formatted_address}</address>;
};

export default AddressLink;
