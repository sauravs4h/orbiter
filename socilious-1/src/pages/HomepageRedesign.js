import MainNav from "../components/MainNav";
import FrameComponent7 from "../components/FrameComponent7";
import ConnectingWorld from "../components/ConnectingWorld";
import FrameComponent6 from "../components/FrameComponent6";
import NameEmailInputGroup from "../components/NameEmailInputGroup";
import FrameComponent5 from "../components/FrameComponent5";
import CallToActionFrame from "../components/CallToActionFrame";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import Footericonlocation from "../components/Footericonlocation";
import FrameComponent from "../components/FrameComponent";
import FacebookLinkedinInstagramLi from "../components/FacebookLinkedinInstagramLi";
import "./HomepageRedesign.css";

const HomepageRedesign = () => {
  return (
    <div className="homepage-redesign">
      <div className="landing-page">
        <MainNav />
        <FrameComponent7 />
      </div>
      <main className="hero-section">
        <ConnectingWorld />
        <FrameComponent6 />
        <section className="bhamashah-text">
          <h1 className="community">Community</h1>
          <h3 className="join-a-thriving">
            Join a thriving community of professionals, startups, and industry
            leaders united by a passion for innovation and collaboration.
            Orbiter's dynamic community forums provide a platform for
            thought-provoking discussions, knowledge sharing, and peer-to-peer
            support. Dive into topical conversations, ask questions, share
            insights, and connect with fellow members who share your interests
            and aspirations. Cultivate relationships, expand your horizons, and
            be part of a supportive community dedicated to mutual growth and
            success.
          </h3>
        </section>
        <NameEmailInputGroup />
        <FrameComponent5 />
        <CallToActionFrame />
        <FrameComponent4 />
        <section className="facebook-linked-in-instagram-t">
          <FrameComponent3 />
          <FrameComponent1 />
        </section>
        <section className="footericonlocation-parent">
          <Footericonlocation />
          <FrameComponent />
        </section>
        <FacebookLinkedinInstagramLi />
      </main>
    </div>
  );
};

export default HomepageRedesign;
