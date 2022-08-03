import "./App.css";
import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <>
      <Header setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
