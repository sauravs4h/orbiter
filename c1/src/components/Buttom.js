import { useMemo } from "react";
import "./Buttom.css";

const Buttom = ({
  o1,
  writerMale,
  createProfile,
  connectAndFollowSimilarIn,
  propWidth,
  propLeft,
  propWidth1,
  propPadding,
  propWidth2,
  propMinWidth,
}) => {
  const o1Style = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft,
    };
  }, [propWidth, propLeft]);

  const framesetStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const writerMaleIconStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const textAreaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="buttom">
      <div className="o1-parent">
        <b className="o1" style={o1Style}>
          {o1}
        </b>
        <div className="text">
          <div className="text-child" />
          <div className="frameset2" style={framesetStyle}>
            <button className="rectangle-container" style={frameButtonStyle}>
              <div className="rectangle-div" />
              <img
                className="writer-male-icon"
                alt=""
                src={writerMale}
                style={writerMaleIconStyle}
              />
            </button>
            <div className="text-area" style={textAreaStyle}>
              <h3 className="create-profile">{createProfile}</h3>
            </div>
          </div>
          <div className="frameset3">
            <div className="connect-and-follow">
              {connectAndFollowSimilarIn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttom;
