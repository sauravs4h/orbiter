import Property1Frame from "./Property1Frame";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <div className="wrapper-bg-layer-blur-group">
      <div className="wrapper-bg-layer-blur6">
        <img className="bg-layer-blur6" alt="" src="/bg-layer-blur-6.svg" />
      </div>
      <div className="map-marker-alt">
        <h1 className="news3">News</h1>
      </div>
      <div className="contact-info-frame1">
        <h3 className="stay-ahead-of">
          Stay ahead of the curve with Orbiter's curated news feature. Access
          the latest industry updates, trends, and insights directly within our
          platform. From startup success stories to industry analysis, Orbiter
          keeps you informed and empowered to make informed decisions. Dive deep
          into relevant news articles, engage with thought-provoking content,
          and share valuable insights with your network.
        </h3>
        <div className="property-1frame-3481-parent">
          <Property1Frame
            business="Business"
            paytmJumps4AfterItDiscont="Paytm Jumps 4% After It Discontinues Inter-Company Agreements With PPBL"
          />
          <Property1Frame
            business="Startup"
            paytmJumps4AfterItDiscont="Meet The 7 Semiconductor Startups Powering India’s Technological Prowess"
            propGap="139px 0px"
          />
          <Property1Frame
            business="Business"
            paytmJumps4AfterItDiscont="UPI Transactions See Marginal Dip To 1,210 Cr In February"
            propGap="164px 0px"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
