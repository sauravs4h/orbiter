import { useMemo } from "react";
import "./Property1Frame1.css";

const Property1Frame1 = ({ property1Frame3500Position }) => {
  const property1Frame3500Style = useMemo(() => {
    return {
      position: property1Frame3500Position,
    };
  }, [property1Frame3500Position]);

  return (
    <div className="property-1frame-3500" style={property1Frame3500Style}>
      <div className="home">Home</div>
      <div className="property-1frame-3500-child" />
    </div>
  );
};

export default Property1Frame1;
