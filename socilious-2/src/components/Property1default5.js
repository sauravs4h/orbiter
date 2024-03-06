import { useMemo } from "react";
import "./Property1default5.css";

const Property1default5 = ({
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
  communityPosition,
  communityTop,
  communityLeft,
  communityMargin,
  communityFontWeight,
}) => {
  const property1default3Style = useMemo(() => {
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

  const ellipseDiv3Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const communityStyle = useMemo(() => {
    return {
      position: communityPosition,
      top: communityTop,
      left: communityLeft,
      margin: communityMargin,
      fontWeight: communityFontWeight,
    };
  }, [
    communityPosition,
    communityTop,
    communityLeft,
    communityMargin,
    communityFontWeight,
  ]);

  return (
    <div className="property-1default5" style={property1default3Style}>
      <div className="property-1default-child3" style={ellipseDiv3Style} />
      <div className="community1" style={communityStyle}>
        Community
      </div>
    </div>
  );
};

export default Property1default5;
