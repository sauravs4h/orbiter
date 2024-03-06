import { useMemo } from "react";
import "./Property1Frame1.css";

const Property1Frame1 = ({
  property1Frame8Width,
  property1Frame8Position,
  property1Frame8Top,
  property1Frame8Left,
  property1Frame8Display,
  property1Frame8FlexDirection,
  property1Frame8Padding,
  property1Frame8Gap,
  mentorsPosition,
  mentorsTop,
  mentorsLeft,
  mentorsMargin,
  mentorsFontWeight,
  investorsPosition,
  investorsTop,
  investorsLeft,
  investorsMarginBottom,
  investorsMargin,
  investorsWidth,
  investorsHeight,
  investorsFontWeight,
  entreprenuersPosition,
  entreprenuersTop,
  entreprenuersLeft,
  entreprenuersMarginBottom,
  entreprenuersMargin,
  entreprenuersWidth,
  entreprenuersHeight,
  entreprenuersFontWeight,
  startupsPosition,
  startupsTop,
  startupsLeft,
  startupsMarginBottom,
  startupsMargin,
  startupsAlignSelf,
  startupsHeight,
  startupsFontWeight,
  incubatorsPosition,
  incubatorsTop,
  incubatorsLeft,
  incubatorsMarginBottom,
  incubatorsMargin,
  incubatorsWidth,
  incubatorsHeight,
  incubatorsFontWeight,
  bSchoolPosition,
  bSchoolTop,
  bSchoolLeft,
  bSchoolMarginBottom,
  bSchoolMargin,
  bSchoolWidth,
  bSchoolHeight,
  bSchoolFontWeight,
  companiesPosition,
  companiesTop,
  companiesLeft,
  companiesMarginBottom,
  companiesMargin,
  companiesWidth,
  companiesHeight,
  companiesFontWeight,
  organizationPosition,
  organizationTop,
  organizationLeft,
  organizationMarginBottom,
  organizationMargin,
  organizationWidth,
  organizationHeight,
  organizationFontWeight,
  virtualTeamPosition,
  virtualTeamTop,
  virtualTeamLeft,
  virtualTeamMarginRight,
  virtualTeamMarginBottom,
  virtualTeamMargin,
  virtualTeamWidth,
  virtualTeamHeight,
  virtualTeamFontWeight,
}) => {
  const property1Frame8Style = useMemo(() => {
    return {
      width: property1Frame8Width,
      position: property1Frame8Position,
      top: property1Frame8Top,
      left: property1Frame8Left,
      display: property1Frame8Display,
      flexDirection: property1Frame8FlexDirection,
      padding: property1Frame8Padding,
      gap: property1Frame8Gap,
    };
  }, [
    property1Frame8Width,
    property1Frame8Position,
    property1Frame8Top,
    property1Frame8Left,
    property1Frame8Display,
    property1Frame8FlexDirection,
    property1Frame8Padding,
    property1Frame8Gap,
  ]);

  const mentorsStyle = useMemo(() => {
    return {
      position: mentorsPosition,
      top: mentorsTop,
      left: mentorsLeft,
      margin: mentorsMargin,
      fontWeight: mentorsFontWeight,
    };
  }, [
    mentorsPosition,
    mentorsTop,
    mentorsLeft,
    mentorsMargin,
    mentorsFontWeight,
  ]);

  const investorsStyle = useMemo(() => {
    return {
      position: investorsPosition,
      top: investorsTop,
      left: investorsLeft,
      marginBottom: investorsMarginBottom,
      margin: investorsMargin,
      width: investorsWidth,
      height: investorsHeight,
      fontWeight: investorsFontWeight,
    };
  }, [
    investorsPosition,
    investorsTop,
    investorsLeft,
    investorsMarginBottom,
    investorsMargin,
    investorsWidth,
    investorsHeight,
    investorsFontWeight,
  ]);

  const entreprenuersStyle = useMemo(() => {
    return {
      position: entreprenuersPosition,
      top: entreprenuersTop,
      left: entreprenuersLeft,
      marginBottom: entreprenuersMarginBottom,
      margin: entreprenuersMargin,
      width: entreprenuersWidth,
      height: entreprenuersHeight,
      fontWeight: entreprenuersFontWeight,
    };
  }, [
    entreprenuersPosition,
    entreprenuersTop,
    entreprenuersLeft,
    entreprenuersMarginBottom,
    entreprenuersMargin,
    entreprenuersWidth,
    entreprenuersHeight,
    entreprenuersFontWeight,
  ]);

  const startupsStyle = useMemo(() => {
    return {
      position: startupsPosition,
      top: startupsTop,
      left: startupsLeft,
      marginBottom: startupsMarginBottom,
      margin: startupsMargin,
      alignSelf: startupsAlignSelf,
      height: startupsHeight,
      fontWeight: startupsFontWeight,
    };
  }, [
    startupsPosition,
    startupsTop,
    startupsLeft,
    startupsMarginBottom,
    startupsMargin,
    startupsAlignSelf,
    startupsHeight,
    startupsFontWeight,
  ]);

  const incubatorsStyle = useMemo(() => {
    return {
      position: incubatorsPosition,
      top: incubatorsTop,
      left: incubatorsLeft,
      marginBottom: incubatorsMarginBottom,
      margin: incubatorsMargin,
      width: incubatorsWidth,
      height: incubatorsHeight,
      fontWeight: incubatorsFontWeight,
    };
  }, [
    incubatorsPosition,
    incubatorsTop,
    incubatorsLeft,
    incubatorsMarginBottom,
    incubatorsMargin,
    incubatorsWidth,
    incubatorsHeight,
    incubatorsFontWeight,
  ]);

  const bSchoolStyle = useMemo(() => {
    return {
      position: bSchoolPosition,
      top: bSchoolTop,
      left: bSchoolLeft,
      marginBottom: bSchoolMarginBottom,
      margin: bSchoolMargin,
      width: bSchoolWidth,
      height: bSchoolHeight,
      fontWeight: bSchoolFontWeight,
    };
  }, [
    bSchoolPosition,
    bSchoolTop,
    bSchoolLeft,
    bSchoolMarginBottom,
    bSchoolMargin,
    bSchoolWidth,
    bSchoolHeight,
    bSchoolFontWeight,
  ]);

  const companiesStyle = useMemo(() => {
    return {
      position: companiesPosition,
      top: companiesTop,
      left: companiesLeft,
      marginBottom: companiesMarginBottom,
      margin: companiesMargin,
      width: companiesWidth,
      height: companiesHeight,
      fontWeight: companiesFontWeight,
    };
  }, [
    companiesPosition,
    companiesTop,
    companiesLeft,
    companiesMarginBottom,
    companiesMargin,
    companiesWidth,
    companiesHeight,
    companiesFontWeight,
  ]);

  const organizationStyle = useMemo(() => {
    return {
      position: organizationPosition,
      top: organizationTop,
      left: organizationLeft,
      marginBottom: organizationMarginBottom,
      margin: organizationMargin,
      width: organizationWidth,
      height: organizationHeight,
      fontWeight: organizationFontWeight,
    };
  }, [
    organizationPosition,
    organizationTop,
    organizationLeft,
    organizationMarginBottom,
    organizationMargin,
    organizationWidth,
    organizationHeight,
    organizationFontWeight,
  ]);

  const virtualTeamStyle = useMemo(() => {
    return {
      position: virtualTeamPosition,
      top: virtualTeamTop,
      left: virtualTeamLeft,
      marginRight: virtualTeamMarginRight,
      marginBottom: virtualTeamMarginBottom,
      margin: virtualTeamMargin,
      width: virtualTeamWidth,
      height: virtualTeamHeight,
      fontWeight: virtualTeamFontWeight,
    };
  }, [
    virtualTeamPosition,
    virtualTeamTop,
    virtualTeamLeft,
    virtualTeamMarginRight,
    virtualTeamMarginBottom,
    virtualTeamMargin,
    virtualTeamWidth,
    virtualTeamHeight,
    virtualTeamFontWeight,
  ]);

  return (
    <div className="property-1frame-8" style={property1Frame8Style}>
      <div className="mentors" style={mentorsStyle}>
        Mentors
      </div>
      <div className="investors" style={investorsStyle}>
        Investors
      </div>
      <div className="entreprenuers" style={entreprenuersStyle}>
        Entreprenuers
      </div>
      <div className="startups" style={startupsStyle}>
        Startups
      </div>
      <div className="incubators" style={incubatorsStyle}>
        Incubators
      </div>
      <div className="b-school" style={bSchoolStyle}>
        B-School
      </div>
      <div className="companies" style={companiesStyle}>
        Companies
      </div>
      <div className="organization" style={organizationStyle}>
        Organization
      </div>
      <div className="virtual-team" style={virtualTeamStyle}>
        Virtual Team
      </div>
    </div>
  );
};

export default Property1Frame1;
