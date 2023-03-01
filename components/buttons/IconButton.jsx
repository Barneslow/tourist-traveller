import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ onClick, icon, className, buttonClass, text }) => {
  return (
    <button className={buttonClass} onClick={onClick}>
      <FontAwesomeIcon icon={icon} onClick={onClick} className={className} />
      <span>{text}</span>
    </button>
  );
};

export default IconButton;
