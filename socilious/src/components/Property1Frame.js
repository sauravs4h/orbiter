import { useMemo } from "react";
import "./Property1Frame.css";

const Property1Frame = ({ business, paytmJumps4AfterItDiscont, propGap }) => {
  const rectangleStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="property-1frame-3481">
      <div className="rectangle2" style={rectangleStyle}>
        <div className="group7" />
        <div className="business-wrapper">
          <div className="business">{business}</div>
        </div>
        <div className="text4">
          <b className="paytm-jumps-4">{paytmJumps4AfterItDiscont}</b>
          <div className="read-more">Read MOre</div>
        </div>
      </div>
      <div className="rectangle-parent15">
        <div className="frame-child35" />
        <div className="text5">
          <div className="shares-of-one-container">
            <p className="shares-of-one">
              Shares of One 97 Communications, the parent company of Paytm, rose
              4% to INR 423 apiece on Friday (March 1).
            </p>
            <p className="paytm-shares-opened">{`Paytm shares opened at INR 413.55 on Friday, as compared to INR 405.2 at the previous close. `}</p>
            <p className="the-shares-were">
              The shares were trading in red for the last three consecutive
              sessions.
            </p>
          </div>
          <div className="the-rise-comes-container">
            The rise comes after Paytm said that it has 
            <a
              className="mutually-agreed-to-discontinue"
              href="https://inc42.com/buzz/paytm-discontinues-inter-company-agreements-with-ppbl-to-reduce-dependencies/"
              target="_blank"
            >
              <span className="mutually-agreed-to">
                mutually agreed to discontinue various inter-company agreements
              </span>
            </a>
             with its payments bank unit Paytm Payments Bank Limited (PPBL).
          </div>
        </div>
        <div className="group8">
          <div className="st-march2024">1st March,2024</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Frame;
