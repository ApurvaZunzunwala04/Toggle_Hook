import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToggleButton from "./ToggleButton";

function App() {
  const [toggleValue, setToggleValue] = useState(false);
  return (
    <div className="app">
      <ToggleButton
        isOn={toggleValue}
        onColor="#EF476F"
        handleToggle={() => setToggleValue(!toggleValue)}
      />
    </div>
  );
}

export default App;
