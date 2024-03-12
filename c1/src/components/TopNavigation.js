import Property1Default from "./Property1Default";
import Property1Frame1 from "./Property1Frame1";
import Property1Frame2 from "./Property1Frame2";
import Property1Frame3 from "./Property1Frame3";
import Property1Frame4 from "./Property1Frame4";
import Property1Frame5 from "./Property1Frame5";
import Property1Frame6 from "./Property1Frame6";
import Property1Frame7 from "./Property1Frame7";
import Property1Frame8 from "./Property1Frame8";
import "./TopNavigation.css";

const TopNavigation = () => {
  return (
    <div className="top-nav">
      <div className="logo-1-1-parent">
        <img className="logo-1-1" alt="" src="/OrbiterLogo@2x.png" />
        <div className="frame-container">
          <div className="call-192-svgrepocom-parent">
            <img
              className="call-192-svgrepocom-icon"
              alt=""
              src="/phonelogo@2x.png"
            />
            <div className="div">+91 7357752376</div>
          </div>
          <div className="mail-svgrepocom-parent">
            <img
              className="mail-svgrepocom-icon"
              alt=""
              src="/mailLogo@2x.png"
            />
            <div className="ceosociliouscom">Ceo@socilious.com</div>
          </div>
          <Property1Default property1DefaultPosition="relative" />
        </div>
      </div>
      <nav className="component-26-parent">
        <Property1Frame1 property1Frame3500Position="relative" />
        <img className="star-icon" alt="" src="/star@2x.png" />
        <Property1Frame2 property1Frame3502Position="relative" />
        <img className="frame-child1" alt="" src="/star-2.svg" />
        <Property1Frame3 property1Frame3504Position="relative" />
        <img className="frame-child2" alt="" src="/star-2.svg" />
        <Property1Frame4 property1Frame3506Position="relative" />
        <img className="frame-child3" alt="" src="/star-2.svg" />
        <Property1Frame5 property1Frame3508Position="relative" />
        <img className="frame-child4" alt="" src="/star-2.svg" />
        <Property1Frame6 property1Frame3510Position="relative" />
        <img className="frame-child5" alt="" src="/star-2.svg" />
        <Property1Frame7 property1Frame3512Position="relative" />
        <img className="frame-child6" alt="" src="/star-2.svg" />
        <Property1Frame8 property1Frame3514Position="relative" />
      </nav>
    </div>
  );
};

export default TopNavigation;
