import "./Section.css";

/* eslint-disable react/prop-types */
const Section = ({ children, forSection }) => {
  return (
    <section className={"section__container " + forSection}>{children}</section>
  );
};

export default Section;
