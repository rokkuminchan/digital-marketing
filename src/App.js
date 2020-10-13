import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import AboutUs from "./components/pages/AboutUs";
import Technology from "./components/pages/Technology";
import Services from "./components/pages/Services"

// Data
import AboutUsData from "./data/ourTeam/AboutUs";
import TechnologyData from "./data/technology/Technology";
import ServiceData from "./data/service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about-us">
            <AboutUs data={{ ourTeamJson: AboutUsData }} />
          </Route>
          <Route path="/technology">
            <Technology data={{ technologyJson: TechnologyData }} />
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
