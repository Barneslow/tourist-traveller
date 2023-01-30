import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ onClick, icon, className, buttonClass }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <FontAwesomeIcon icon={icon} onClick={onClick} className={className} />
    </button>
  );
};

export default IconButton;
