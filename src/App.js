import React from "react";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import AboutUsData from "./data/ourTeam/AboutUs";

function App() {
  return (
    <div className="App">
      <AboutUs data={{ ourTeamJson: AboutUsData }} />
    </div>
  );
}

export default App;
