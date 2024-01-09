import "./Feature.css";
import Section from "../Section/Section";

const Feature = () => {
  return (
    <section className="feature" id="feature">
      <Section forSection={"feature__container"}>
        <h4>
          &quot;It&apos;s not about fitting in... It&apos;s about you, your
          ride, your journey.&quot;
        </h4>
        <div className="section__header">Featured Video</div>
        <div className="feature__grid">
          <div className="feature__content">
            <div>
              <p>
                From restoration tales to thrilling rides through scenic
                landscapes, our carefully curated videos promise an immersive
                journey for enthusiasts minds alike, delivering an authentic and
                visually stunning experience.
              </p>
              <button className="btn">View More Videos</button>
            </div>
          </div>
          <div className="feature__video">
            <video src="/src/assets/feature.mp4" muted loop autoPlay></video>
          </div>
        </div>
      </Section>
    </section>
  );
};

export default Feature;
