import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutUs from "./components/pages/AboutUs";
import AboutUsData from "./data/ourTeam/AboutUs";
import Technology from "./components/pages/Technology";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about-us">
            <AboutUs data={{ ourTeamJson: AboutUsData }} />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
