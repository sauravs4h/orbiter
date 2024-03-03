import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  image40,
  uIUXDesigner,
  fullTime,
  propLeft,
  propTop,
  propPadding,
  propGap,
  propHeight,
  propPadding1,
  propPadding2,
  propMarginBottom,
}) => {
  const textFieldStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      padding: propPadding,
    };
  }, [propTop, propPadding]);

  const groupDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const groupDiv2Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding1,
    };
  }, [propHeight, propPadding1]);

  const groupDiv3Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const rs2Style = useMemo(() => {
    return {
      marginBottom: propMarginBottom,
    };
  }, [propMarginBottom]);

  return (
    <div className="frame-parent49">
      <div className="text-field-wrapper">
        <div className="text-field" style={textFieldStyle} />
      </div>
      <div className="frame-parent50">
        <div className="frame-wrapper35">
          <div className="frame-wrapper36">
            <div className="name-email-container-parent">
              <div className="name-email-container" />
              <div className="frame-wrapper37">
                <div className="frame-wrapper38">
                  <div className="frame-wrapper39">
                    <div className="frame-wrapper40">
                      <div className="image-40-parent" style={groupDivStyle}>
                        <img className="image-40-icon" alt="" src={image40} />
                        <div className="socilious2">
                          <span>Soci</span>
                          <span className="lious">lious</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent51" style={groupDiv1Style}>
          <div className="frame-wrapper41">
            <div className="uiux-designer-parent">
              <b className="uiux-designer">{uIUXDesigner}</b>
              <div className="socilious3">Socilious</div>
              <div className="full-time">{fullTime}</div>
            </div>
          </div>
          <div className="frame-parent52" style={groupDiv2Style}>
            <div className="follow-us-group-parent" style={groupDiv3Style}>
              <div className="follow-us-group" />
              <div className="active">Active</div>
            </div>
            <b className="rs-2-" style={rs2Style}>
              Rs. 2 - 5 LPA
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
