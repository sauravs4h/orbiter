import { useMemo } from "react";
import "./Group.css";

const Group = ({
  group1000000978,
  createProfile,
  propHeight,
  propGap,
  propWidth,
  propTransform,
}) => {
  const groupStyle = useMemo(() => {
    return {
      height: propHeight,
      gap: propGap,
    };
  }, [propHeight, propGap]);

  const wrapperGroup1000000978Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  return (
    <div className="group1" style={groupStyle}>
      <div
        className="wrapper-group-1000000978"
        style={wrapperGroup1000000978Style}
      >
        <img
          className="wrapper-group-1000000978-child"
          loading="lazy"
          alt=""
          src={group1000000978}
          style={groupIconStyle}
        />
      </div>
      <div className="text">
        <div className="create-profile">{createProfile}</div>
        <div className="connect-and-follow">
          Connect and follow similar interest professional and make your network
          strong
        </div>
      </div>
    </div>
  );
};

export default Group;
