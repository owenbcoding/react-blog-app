import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import 'tachyons';
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  // const link = "https://github.com/owenbcoding";

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit}/>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
