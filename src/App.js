import React, { Component } from "react";
import "./App.css";
import ThreeRender from "./utils/three-render";
import WaveGlb from './assets/glbs/wave.glb'

class App extends Component {
  componentDidMount() {
    const threeRender = new ThreeRender();
    threeRender.load(WaveGlb)
  }
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
