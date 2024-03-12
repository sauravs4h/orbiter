import "./Section.css";

const Section = () => {
  return (
    <section className="frame-group">
      <div className="frame-line-parent">
        <div className="frame-line">
          <div className="frameset1" />
        </div>
        <h1 className="how-it-works1">How it works ?</h1>
        <div className="frame-line1">
          <div className="frame-line-child" />
        </div>
      </div>
      <div className="orbiter-is-a-social-profession-wrapper">
        <h2 className="orbiter-is-a">
          Orbiter is a social professional networking app for professionals,
          startups, investors, and entrepreneurs, it is a platform where users
          can connect with investors, mentors, entrepreneurs, founders,
          incubators, business schools, and organizations and can discuss ideas,
          share thoughts, and grow professionally
        </h2>
      </div>
    </section>
  );
};

export default Section;
