import Property1Frame from "../components/Property1Frame";
import TopNavigation from "../components/TopNavigation";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="welcome-to-orbiter">Welcome to Orbiter</div>
      <div className="connect-with-parent">
        <div className="connect-with">Connect with</div>
        <Property1Frame
          property1Frame8Width="206px"
          property1Frame8Position="absolute"
          property1Frame8Top="0px"
          property1Frame8Left="341px"
        />
      </div>
      <div className="funded-by-rajasthan-goverment-parent">
        <div className="funded-by-rajasthan-container">
          <span>{`Funded by `}</span>
          <b>Rajasthan Goverment</b>
        </div>
        <img className="frame-inner" alt="" src="/line-23.svg" />
        <div className="incubated-in-iit-container">
          <span>{`Incubated in `}</span>
          <b>IIT, Mandi</b>
        </div>
      </div>
      <div className="wrapper-hero-image">
        <img className="hero-image-icon" alt="" src="/hero-image.svg" />
      </div>
      <img
        className="calender-dynamic-color-icon"
        alt=""
        src="/calenderdynamiccolor@2x.png"
      />
      <TopNavigation />
    </div>
  );
};

export default HeroSection;
