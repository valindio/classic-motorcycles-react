import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Section forSection={"banner__container"}>
        <Banner/>
      </Section>
    </>
  );
}

export default App;
