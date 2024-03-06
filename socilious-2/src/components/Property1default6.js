import { useMemo } from "react";
import "./Property1default6.css";

const Property1default6 = ({
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
  newsPosition,
  newsTop,
  newsLeft,
  newsMargin,
  newsFontWeight,
}) => {
  const property1default4Style = useMemo(() => {
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

  const ellipseDiv4Style = useMemo(() => {
    return {
      position: ellipseDivPosition,
      top: ellipseDivTop,
      left: ellipseDivLeft,
    };
  }, [ellipseDivPosition, ellipseDivTop, ellipseDivLeft]);

  const newsStyle = useMemo(() => {
    return {
      position: newsPosition,
      top: newsTop,
      left: newsLeft,
      margin: newsMargin,
      fontWeight: newsFontWeight,
    };
  }, [newsPosition, newsTop, newsLeft, newsMargin, newsFontWeight]);

  return (
    <div className="property-1default6" style={property1default4Style}>
      <div className="property-1default-child4" style={ellipseDiv4Style} />
      <div className="news" style={newsStyle}>
        News
      </div>
    </div>
  );
};

export default Property1default6;
