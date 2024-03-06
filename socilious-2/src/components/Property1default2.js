import { useMemo } from "react";
import "./Property1default2.css";

const Property1default2 = ({
  property1defaultPosition,
  property1defaultWidth,
  property1defaultHeight,
  property1defaultMargin,
  property1defaultTop,
  property1defaultLeft,
  property1defaultDisplay,
  property1defaultFlexDirection,
  property1defaultPadding,
  ellipseDivPosition,
  ellipseDivTop,
  ellipseDivLeft,
  socivoPosition,
  socivoTop,
  socivoLeft,
  socivoMargin,
  socivoFontWeight,
}) => {
  const property1defaultStyle = useMemo(() => {
    return {
      position: property1defaultPosition,
      width: property1defaultWidth,
      height: property1defaultHeight,
      margin: property1defaultMargin,
      top: property1defaultTop,
      left: property1defaultLeft,
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
    property1defaultLeft,
    property1defaultDisplay,
    property1defaultFlexDirection,
    property1defaultPadding,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const socivoStyle = useMemo(() => {
    return {
      position: socivoPosition,
      top: socivoTop,
      left: socivoLeft,
      margin: socivoMargin,
      fontWeight: socivoFontWeight,
    };
  }, [socivoPosition, socivoTop, socivoLeft, socivoMargin, socivoFontWeight]);

  return (
    <div className="property-1default2" style={property1defaultStyle}>
      <div className="ellipse-div" style={ellipseDivStyle} />
      <div className="socivo" style={socivoStyle}>
        Socivo
      </div>
    </div>
  );
};

export default Property1default2;
