import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Blog from "./components/Blog/Blog";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";

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
      <Section forSection={"instagram__container"}>
        <SocialMedia />
      </Section>
      <Footer />
    </>
  );
}

export default App;
