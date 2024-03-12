import { useMemo } from "react";
import "./Property1Frame4.css";

const Property1Frame4 = ({ property1Frame3506Position }) => {
  const property1Frame3506Style = useMemo(() => {
    return {
      position: property1Frame3506Position,
    };
  }, [property1Frame3506Position]);

  return (
    <div className="property-1frame-3506" style={property1Frame3506Style}>
      <div className="entrechat">Entrechat</div>
      <img className="property-1frame-3506-child" alt="" src="/line-89.svg" />
    </div>
  );
};

export default Property1Frame4;
