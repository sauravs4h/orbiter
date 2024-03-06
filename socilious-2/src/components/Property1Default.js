import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  property1DefaultPosition,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultDisplay,
  property1DefaultFlexDirection,
  property1DefaultPadding,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivMargin,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
  applyForInvestmentPosition,
  applyForInvestmentTop,
  applyForInvestmentLeft,
  applyForInvestmentMarginLeft,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      display: property1DefaultDisplay,
      flexDirection: property1DefaultFlexDirection,
      padding: property1DefaultPadding,
    };
  }, [
    property1DefaultPosition,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultDisplay,
    property1DefaultFlexDirection,
    property1DefaultPadding,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      margin: rectangleDivMargin,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
    };
  }, [
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivMargin,
    rectangleDivRight,
    rectangleDivBottom,
  ]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivPosition, rectangleDivTop, rectangleDivLeft]);

  const applyForInvestmentStyle = useMemo(() => {
    return {
      position: applyForInvestmentPosition,
      top: applyForInvestmentTop,
      left: applyForInvestmentLeft,
      marginLeft: applyForInvestmentMarginLeft,
    };
  }, [
    applyForInvestmentPosition,
    applyForInvestmentTop,
    applyForInvestmentLeft,
    applyForInvestmentMarginLeft,
  ]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="property-1default-child" style={rectangleDivStyle} />
      <div className="property-1default-item" style={rectangleDiv1Style} />
      <b className="apply-for-investment" style={applyForInvestmentStyle}>
        Apply for Investment
      </b>
    </div>
  );
};

export default Property1Default;
