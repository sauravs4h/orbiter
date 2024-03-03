import "./FrameComponent2.css";

const FrameComponent2 = ({ canIUseOrbiterForBusiness }) => {
  return (
    <div className="text-input-frame-inner">
      <div className="can-i-use-orbiter-for-business-parent">
        <h3 className="can-i-use">{canIUseOrbiterForBusiness}</h3>
        <div className="ellipse-parent">
          <div className="ellipse-div" />
          <img className="vector-icon4" alt="" src="/vector-33.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
