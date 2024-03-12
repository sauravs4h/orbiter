import { useMemo } from "react";
import "./Property1Frame5.css";

const Property1Frame5 = ({ property1Frame3508Position }) => {
  const property1Frame3508Style = useMemo(() => {
    return {
      position: property1Frame3508Position,
    };
  }, [property1Frame3508Position]);

  return (
    <div className="property-1frame-3508" style={property1Frame3508Style}>
      <div className="community">Community</div>
      <img className="property-1frame-3508-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame5;
