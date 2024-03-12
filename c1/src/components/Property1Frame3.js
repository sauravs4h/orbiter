import { useMemo } from "react";
import "./Property1Frame3.css";

const Property1Frame3 = ({ property1Frame3504Position }) => {
  const property1Frame3504Style = useMemo(() => {
    return {
      position: property1Frame3504Position,
    };
  }, [property1Frame3504Position]);

  return (
    <div className="property-1frame-3504" style={property1Frame3504Style}>
      <div className="networking">Networking</div>
      <img className="property-1frame-3504-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame3;
