import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import i18next from "i18next";
import {
  useTranslation,
  I18nextProvider,
  withTranslation,
} from "react-i18next";

// Styles
import "./App.css";

// Components
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Technology from "./components/pages/Technology";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Layout from "./components/layout";
import RecruitHome from "./components/pages/RecruitHome";
import Director from "./components/pages/Director";

// Data
import ourTeamJsonData from "./data/ourTeam/ourTeamData.json";
import technologyJsonData from "./data/technology/technologyData.json";
import serviceJsonData from "./data/service/serviceData.json";
import homeJsonData from "./data/home/homeData.json";
import contactJsonData from "./data/contact/contactData.json";
import ScrollToTop from "./components/common/ScrollToTop";
import recruitHome from "./data/recruit__home/recruitHome.json";
import recuitDirector from "./data/recruit__director/recuitDirector.json";

i18next.init({
  fallbackLng: "vi",
  resources: {
    jp: {
      translations: require("./locales/jp/translation.json"),
    },
    vi: {
      translations: require("./locales/vi/translation.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ["jp", "vi"];

function withTrans(WrappedComponent) {
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  };
}

const LanguageSupportLayout = withTrans(Layout);

// Recruit Dev
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <LanguageSupportLayout>
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
              <Route exact path="/recruit">
                <RecruitHome data={recruitHome} />
              </Route>
              <Route exact path="/recruit/director">
                <Director data={recuitDirector} />
              </Route>
              <Route exact path="/contact">
                <Contact data={contactJsonData} />
              </Route>
            </Switch>
          </LanguageSupportLayout>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
