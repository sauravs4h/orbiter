import { useMemo } from "react";
import "./CallToActionButton.css";

const CallToActionButton = ({ whatIsOrbiter, propDisplay, propWidth }) => {
  const whatIsOrbiterStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth,
    };
  }, [propDisplay, propWidth]);

  return (
    <div className="call-to-action-button1">
      <div className="logo-image-frame">
        <div className="what-is-orbiter" style={whatIsOrbiterStyle}>
          {whatIsOrbiter}
        </div>
        <div className="contact-us-section">
          <div className="social-media-icons" />
          <img className="footer-frame-icon" alt="" src="/vector-33.svg" />
        </div>
      </div>
    </div>
  );
};

export default CallToActionButton;
