import Section from "../components/Section";
import Buttom from "../components/Buttom";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Section />
      <section className="buttom-parent">
        <Buttom
          o1="O1"
          writerMale="/writer-male@2x.png"
          createProfile="Create Profile"
          connectAndFollowSimilarIn="Connect and follow similar interest professional and make your network strong"
        />
        <Buttom
          o1="O2"
          writerMale="/briefcase@2x.png"
          createProfile="Connect with Professionals"
          connectAndFollowSimilarIn="Connect with professionals worldwide for networking and collaboration."
          propWidth="154px"
          propLeft="-3px"
          propWidth1="382px"
          propPadding="var(--padding-3xs) var(--padding-mini)"
          propWidth2="50px"
          propMinWidth="189px"
        />
        <Buttom
          o1="O3"
          writerMale="/looking-through-resumes@2x.png"
          createProfile="Explore Job Opportunity"
          connectAndFollowSimilarIn="Discover exciting job opportunities tailored to your skills and interests."
          propWidth="153px"
          propLeft="-2px"
          propWidth1="370px"
          propPadding="var(--padding-4xs) var(--padding-mini) 9.299999999999995px"
          propWidth2="50px"
          propMinWidth="174px"
        />
        <Buttom
          o1="O4"
          writerMale="/screenshot-20240302-161355-1@2x.png"
          createProfile="Stay Informed with Newsfeed"
          connectAndFollowSimilarIn="Stay updated with the latest news and industry insights on your personalized newsfeed."
          propWidth="155px"
          propLeft="-3px"
          propWidth1="408px"
          propPadding="var(--padding-4xs) 13px 9.800000000000011px"
          propWidth2="54px"
          propMinWidth="206px"
        />
        <Buttom
          o1="O5"
          writerMale="/three-men@2x.png"
          createProfile="Join Community"
          connectAndFollowSimilarIn="Join a vibrant community of professionals for engaging discussions and networking."
          propWidth="149px"
          propLeft="0px"
          propWidth1="274px"
          propPadding="var(--padding-3xs) var(--padding-mini)"
          propWidth2="50px"
          propMinWidth="unset"
        />
        <div className="frameset">
          <div className="o6-parent">
            <b className="o6">O6</b>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="frame-parent">
                <button className="rectangle-group">
                  <div className="frame-item" />
                  <img className="cinema-icon" alt="" src="/cinema@2x.png" />
                </button>
                <div className="explore-socivo-wrapper">
                  <b className="explore-socivo">Explore Socivo</b>
                </div>
              </div>
              <div className="discover-short-insightful-vid-wrapper">
                <div className="discover-short-insightful">
                  Discover short, insightful videos to inspire your professional
                  journey.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
