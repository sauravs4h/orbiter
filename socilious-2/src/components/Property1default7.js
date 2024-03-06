import { useMemo } from "react";
import "./Property1default7.css";

const Property1default7 = ({
  property1defaultPosition,
  property1defaultHeight,
  property1defaultMargin,
  property1defaultTop,
  property1defaultRight,
  property1defaultDisplay,
  property1defaultFlexDirection,
  ellipseDivPosition,
  ellipseDivTop,
  ellipseDivLeft,
  aboutUsTop,
  aboutUsLeft,
  aboutUsMargin,
  aboutUsRight,
  aboutUsBottom,
  aboutUsFontWeight,
}) => {
  const property1default5Style = useMemo(() => {
    return {
      position: property1defaultPosition,
      height: property1defaultHeight,
      margin: property1defaultMargin,
      top: property1defaultTop,
      right: property1defaultRight,
      display: property1defaultDisplay,
      flexDirection: property1defaultFlexDirection,
    };
  }, [
    property1defaultPosition,
    property1defaultHeight,
    property1defaultMargin,
    property1defaultTop,
    property1defaultRight,
    property1defaultDisplay,
    property1defaultFlexDirection,
  ]);

  const ellipseDiv5Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const aboutUsStyle = useMemo(() => {
    return {
      top: aboutUsTop,
      left: aboutUsLeft,
      margin: aboutUsMargin,
      right: aboutUsRight,
      bottom: aboutUsBottom,
      fontWeight: aboutUsFontWeight,
    };
  }, [
    aboutUsTop,
    aboutUsLeft,
    aboutUsMargin,
    aboutUsRight,
    aboutUsBottom,
    aboutUsFontWeight,
  ]);

  return (
    <div className="property-1default7" style={property1default5Style}>
      <div className="property-1default-child5" style={ellipseDiv5Style} />
      <div className="about-us" style={aboutUsStyle}>
        About Us
      </div>
    </div>
  );
};

export default Property1default7;
