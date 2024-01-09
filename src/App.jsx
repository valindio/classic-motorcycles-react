import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Section forSection={"banner__container"}>
        <Banner />
      </Section>
      <Section forSection={"about__container"}>
        <About />
      </Section>
    </>
  );
}

export default App;
