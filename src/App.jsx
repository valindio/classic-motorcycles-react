import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Blog from "./components/Blog/Blog";

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
      <Feature />
      <Section forSection={"blog__container"}>
        <Blog />
      </Section>
    </>
  );
}

export default App;
