import { useMemo } from "react";
import "./Property1Frame.css";

const Property1Frame = ({
  property1Frame8Width,
  property1Frame8Position,
  property1Frame8Top,
  property1Frame8Left,
}) => {
  const property1Frame8Style = useMemo(() => {
    return {
      width: property1Frame8Width,
      position: property1Frame8Position,
      top: property1Frame8Top,
      left: property1Frame8Left,
    };
  }, [
    property1Frame8Width,
    property1Frame8Position,
    property1Frame8Top,
    property1Frame8Left,
  ]);

  return (
    <div className="property-1frame-8" style={property1Frame8Style}>
      <div className="mentors">Mentors</div>
      <div className="investors">Investors</div>
      <div className="entreprenuers">Entreprenuers</div>
      <div className="startups">Startups</div>
      <div className="incubators">Incubators</div>
      <div className="b-school">B-School</div>
      <div className="companies">Companies</div>
      <div className="organization">Organization</div>
      <div className="virtual-team">Virtual Team</div>
    </div>
  );
};

export default Property1Frame;
