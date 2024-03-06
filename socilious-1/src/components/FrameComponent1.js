import CallToActionButton from "./CallToActionButton";
import ProductsGroup from "./ProductsGroup";
import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="text-group">
      <div className="text7">
        <div className="frame5" />
        <h1 className="frequently-asked-questions">
          Frequently Asked Questions
        </h1>
        <div className="frame6" />
      </div>
      <div className="frame-container1">
        <div className="text-input-frame">
          <CallToActionButton whatIsOrbiter="What is orbiter" />
          <ProductsGroup howDoICreateAnAccountOnOr="How do I create an account on orbiter" />
          <CallToActionButton
            whatIsOrbiter="Is orbiter free to use"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <ProductsGroup howDoICreateAnAccountOnOr="How can I connect with others on orbiter" />
          <CallToActionButton
            whatIsOrbiter="Can I customize my orbiter profile and privacy ?"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <CallToActionButton
            whatIsOrbiter="What type of content can I share on Orbiter ?"
            propDisplay="flex"
            propWidth="577px"
          />
        </div>
        <img
          className="frame-container-child"
          loading="lazy"
          alt=""
          src="/group-1000001000.svg"
        />
        <div className="text-input-frame1">
          <CallToActionButton
            whatIsOrbiter="Is Orbiter suitable for job searches or recruiting?"
            propDisplay="inline-block"
            propWidth="unset"
          />
          <div className="text-input-frame-child">
            <div className="are-there-groups-or-communitie-parent">
              <h3 className="are-there-groups-container">
                <span className="are-there-groups-container1">
                  <p className="are-there-groups">
                    Are there groups or communities on Orbiter
                  </p>
                  <p className="that-i-can">that I can join?</p>
                </span>
              </h3>
              <div className="ellipse-group">
                <div className="frame-child36" />
                <img className="vector-icon5" alt="" src="/vector-33.svg" />
              </div>
            </div>
          </div>
          <FrameComponent2 canIUseOrbiterForBusiness="Can I use Orbiter for business networking and finding potential clients or partners?" />
          <div className="text-input-frame-inner1">
            <div className="does-orbiter-have-a-mobile-app-parent">
              <div className="does-orbiter-have">
                Does Orbiter have a mobile app for smartphones and tablets?
              </div>
              <div className="ellipse-container">
                <div className="frame-child37" />
                <img className="vector-icon6" alt="" src="/vector-33.svg" />
              </div>
            </div>
          </div>
          <FrameComponent2 canIUseOrbiterForBusiness="How can I report inappropriate content or users on Orbiter ?" />
          <FrameComponent2 canIUseOrbiterForBusiness="What measures does Socilious have in place to protect user data and privacy ?" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
