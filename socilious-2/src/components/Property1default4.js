import { useMemo } from "react";
import "./Property1default4.css";

const Property1default4 = ({
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
  entrechatPosition,
  entrechatTop,
  entrechatLeft,
  entrechatMargin,
  entrechatFontWeight,
}) => {
  const property1default2Style = useMemo(() => {
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

  const ellipseDiv2Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const entrechatStyle = useMemo(() => {
    return {
      position: entrechatPosition,
      top: entrechatTop,
      left: entrechatLeft,
      margin: entrechatMargin,
      fontWeight: entrechatFontWeight,
    };
  }, [
    entrechatPosition,
    entrechatTop,
    entrechatLeft,
    entrechatMargin,
    entrechatFontWeight,
  ]);

  return (
    <div className="property-1default4" style={property1default2Style}>
      <div className="property-1default-child2" style={ellipseDiv2Style} />
      <div className="entrechat" style={entrechatStyle}>
        Entrechat
      </div>
    </div>
  );
};

export default Property1default4;
