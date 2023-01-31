import { useCallback } from "react";
import styles from "./AddressLink.module.css";

const AddressLink = ({ formatted_address, location, name, mapRef }) => {
  const moveToLocationHandler = useCallback(() => {
    mapRef.flyTo(location, 7);
  }, [mapRef]);

  return (
    <address className={styles.address} onClick={moveToLocationHandler}>
      {formatted_address}
    </address>
  );
};

export default AddressLink;
