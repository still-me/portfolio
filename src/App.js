import "./App.scss";

import Navbar from "./Components/Navbar";
import Section from "./Components/Section/Section";
import Hello from "./Components/Hello";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import CV from "./Components/CV";
import Footer from "./Components/Footer";

export default function Component() {
  return (
    <div>
      <Navbar />
      <Section title="Hello!" id="section1">
        <Hello />
      </Section>
      <Section title="Skills" id="section2">
        <Skills />
      </Section>
      <Section title="Portfolio" id="section3">
        <Projects />
      </Section>
      <Section title="CV" id="section4">
        <CV />
      </Section>
      <Footer />
    </div>
  );
}
