import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Technology from "./components/pages/Technology";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
// Data
import ourTeamJsonData from "./data/ourTeam/ourTeamData.json";
import technologyJsonData from "./data/technology/technologyData.json";
import serviceJsonData from "./data/service/serviceData.json";
import homeJsonData from "./data/home/homeData.json";
import contactJsonData from "./data/contact/contactData.json";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home data={homeJsonData} />
            </Route>
            <Route exact path="/services">
              <Services data={serviceJsonData} />
            </Route>
            <Route exact path="/technology">
              <Technology data={technologyJsonData} />
            </Route>
            <Route exact path="/about-us">
              <AboutUs data={ourTeamJsonData} />
            </Route>
            <Route exact path="/contact">
              <Contact data={contactJsonData} />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
