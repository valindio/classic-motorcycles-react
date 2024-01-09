import "./Section.css";

/* eslint-disable react/prop-types */
const Section = ({ children, forSection }) => {
  return (
    <section
      className={
        forSection ? "section__container " + forSection : "section__container"
      }
    >
      {children}
    </section>
  );
};

export default Section;
