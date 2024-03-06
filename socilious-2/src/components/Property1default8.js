import { useMemo } from "react";
import "./Property1default8.css";

const Property1default8 = ({
  property1defaultPosition,
  property1defaultWidth,
  property1defaultHeight,
  property1defaultMargin,
  property1defaultTop,
  property1defaultRight,
  property1defaultDisplay,
  property1defaultFlexDirection,
  property1defaultPadding,
  ellipseDivPosition,
  ellipseDivTop,
  ellipseDivLeft,
  contactUsPosition,
  contactUsTop,
  contactUsLeft,
  contactUsMargin,
  contactUsFontWeight,
}) => {
  const property1default6Style = useMemo(() => {
    return {
      position: property1defaultPosition,
      width: property1defaultWidth,
      height: property1defaultHeight,
      margin: property1defaultMargin,
      top: property1defaultTop,
      right: property1defaultRight,
      display: property1defaultDisplay,
      flexDirection: property1defaultFlexDirection,
      padding: property1defaultPadding,
    };
  }, [
    property1defaultPosition,
    property1defaultWidth,
    property1defaultHeight,
    property1defaultMargin,
    property1defaultTop,
    property1defaultRight,
    property1defaultDisplay,
    property1defaultFlexDirection,
    property1defaultPadding,
  ]);

  const ellipseDiv6Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const contactUsStyle = useMemo(() => {
    return {
      position: contactUsPosition,
      top: contactUsTop,
      left: contactUsLeft,
      margin: contactUsMargin,
      fontWeight: contactUsFontWeight,
    };
  }, [
    contactUsPosition,
    contactUsTop,
    contactUsLeft,
    contactUsMargin,
    contactUsFontWeight,
  ]);

  return (
    <div className="property-1default8" style={property1default6Style}>
      <div className="property-1default-child6" style={ellipseDiv6Style} />
      <div className="contact-us" style={contactUsStyle}>
        Contact Us
      </div>
    </div>
  );
};

export default Property1default8;
