import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({ property1DefaultPosition }) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="property-1default-child" />
      <div className="property-1default-item" />
      <b className="apply-for-investment">Apply for Investment</b>
    </div>
  );
};

export default Property1Default;
