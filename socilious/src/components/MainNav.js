import "./MainNav.css";

const MainNav = () => {
  return (
    <header className="main-nav">
      <img className="logo-1-1" loading="lazy" alt="" src="/logo-1-1@2x.png" />
      <div className="social-media-links">
        <div className="message-input">
          <img
            className="call-192-svgrepocom-icon"
            alt=""
            src="/call192-svgrepocom.svg"
          />
          <div className="footer">+91 7357752376</div>
        </div>
        <div className="message-input1">
          <img
            className="mail-svgrepocom-icon"
            alt=""
            src="/mail-svgrepocom.svg"
          />
          <div className="ceosociliouscom">Ceo@socilious.com</div>
        </div>
        <div className="component-1">
          <div className="line" />
          <div className="line1" />
          <b className="apply-for-investment">Apply for Investment</b>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
