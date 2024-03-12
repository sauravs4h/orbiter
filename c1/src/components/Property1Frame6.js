import { useMemo } from "react";
import "./Property1Frame6.css";

const Property1Frame6 = ({ property1Frame3510Position }) => {
  const property1Frame3510Style = useMemo(() => {
    return {
      position: property1Frame3510Position,
    };
  }, [property1Frame3510Position]);

  return (
    <div className="property-1frame-3510" style={property1Frame3510Style}>
      <div className="news">News</div>
      <img className="property-1frame-3510-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame6;
