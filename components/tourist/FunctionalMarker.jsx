import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useContext } from "react";
import { PlacesContext } from "../../context/placesContext";

const redMarker = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const FunctionalMarker = (props) => {
  const placesCtx = useContext(PlacesContext);
  const { locationFly, index, marker } = props;
  return (
    <Marker
      eventHandlers={{
        click: () => {
          locationFly();
          placesCtx.setRecommendedPlacesHandler([marker]);
        },
      }}
      key={index}
      position={marker.geometry.location}
      icon={redMarker}
    >
      <Popup>
        <span>{marker.name}</span>
      </Popup>
    </Marker>
  );
};

export default FunctionalMarker;
