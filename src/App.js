import React from "react";
import "./App.css";
import Header from "./Component/Header";
import About from "./Component/About";
import Services from "./Component/Services";
import Portfolio from "./Component/Projects";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
