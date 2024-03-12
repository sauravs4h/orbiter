import { useMemo } from "react";
import "./Property1Frame8.css";

const Property1Frame8 = ({ property1Frame3514Position }) => {
  const property1Frame3514Style = useMemo(() => {
    return {
      position: property1Frame3514Position,
    };
  }, [property1Frame3514Position]);

  return (
    <div className="property-1frame-3514" style={property1Frame3514Style}>
      <div className="contact-us">Contact Us</div>
      <img className="property-1frame-3514-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame8;
