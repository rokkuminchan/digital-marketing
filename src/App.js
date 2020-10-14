import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import AboutUs from "./components/pages/AboutUs";
import Technology from "./components/pages/Technology";
import Services from "./components/pages/Services"

// Data
import ServiceData from "./data/service/Service";

import ourTeamJsonData from "./data/ourTeam/ourTeamData.json";
import technologyJsonData from "./data/technology/technologyData.json"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about-us">
            <AboutUs data={ourTeamJsonData} />
          </Route>
          <Route path="/technology">
            <Technology data={technologyJsonData} />
          </Route>
          <Route path="/services">
            <Services data={{ servicesJson: ServiceData }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
