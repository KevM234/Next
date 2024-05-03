import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sezione1 from "./components/Sezione1";
import Sezione2 from "./components/Sezione2";
import Sezione3 from "./components/Sezione3";
import Sezione4 from "./components/Sezione4";
import Sezione5 from "./components/Sezione5";
import Sezione6 from "./components/Sezione6";
import Sezione7 from "./components/Sezione7";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Sezione1 />
      <Sezione2 />
      <Sezione3 />
      <Sezione4 />
      <Sezione5 />
      <Sezione6 />
      <Sezione7 />
    </div>
  );
};

export default App;
