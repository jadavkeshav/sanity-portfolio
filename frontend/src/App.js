/* eslint-disable require-jsdoc */
import "./App.scss";
import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, NavigationDots, SocialMedia } from "./components";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
      <NavigationDots />
      <SocialMedia />
    </div>
  );
}

export default App;