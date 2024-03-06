import { useMemo } from "react";
import "./Property1default3.css";

const Property1default3 = ({
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
  networkingPosition,
  networkingTop,
  networkingLeft,
  networkingMargin,
  networkingFontWeight,
}) => {
  const property1default1Style = useMemo(() => {
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

  const ellipseDiv1Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const networkingStyle = useMemo(() => {
    return {
      position: networkingPosition,
      top: networkingTop,
      left: networkingLeft,
      margin: networkingMargin,
      fontWeight: networkingFontWeight,
    };
  }, [
    networkingPosition,
    networkingTop,
    networkingLeft,
    networkingMargin,
    networkingFontWeight,
  ]);

  return (
    <div className="property-1default3" style={property1default1Style}>
      <div className="property-1default-child1" style={ellipseDiv1Style} />
      <div className="networking" style={networkingStyle}>
        Networking
      </div>
    </div>
  );
};

export default Property1default3;
