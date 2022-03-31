import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div className="app">
      <h1>Welcome to Reack Hooks!</h1>
      <ColorBox />
    </div>
  );
}
export default App;
