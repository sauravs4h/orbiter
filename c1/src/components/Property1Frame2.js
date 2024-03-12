import { useMemo } from "react";
import "./Property1Frame2.css";

const Property1Frame2 = ({ property1Frame3502Position }) => {
  const property1Frame3502Style = useMemo(() => {
    return {
      position: property1Frame3502Position,
    };
  }, [property1Frame3502Position]);

  return (
    <div className="property-1frame-3502" style={property1Frame3502Style}>
      <div className="socivo">Socivo</div>
      <div className="property-1frame-3502-child" />
    </div>
  );
};

export default Property1Frame2;
