import { useMemo } from "react";
import "./Property1Frame7.css";

const Property1Frame7 = ({ property1Frame3512Position }) => {
  const property1Frame3512Style = useMemo(() => {
    return {
      position: property1Frame3512Position,
    };
  }, [property1Frame3512Position]);

  return (
    <div className="property-1frame-3512" style={property1Frame3512Style}>
      <div className="about-us">About Us</div>
      <img className="property-1frame-3512-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame7;
