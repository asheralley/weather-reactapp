import React from "react";
import WeatherEngine from "./components/WeatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location={"Auckland, nz"} />
      <WeatherEngine location={"Sydney, au"} />
      <WeatherEngine location={"Melbourne, au"} />
    </div>
  );
}

export default App;
