import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
const CartWidgetComponent = () => {
  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
    color: "red",
  };
  return (
    <div>
      <FontAwesomeIcon style={iconStyles} icon={faMotorcycle} />
      <span style={{ fontSize: "1.3rem" }}>7</span>
    </div>
  );
};

export default CartWidgetComponent;
