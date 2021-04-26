import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider, withTranslation } from "react-i18next";

// Components
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Technology from "./components/pages/Technology";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import Layout from "./components/layout";
import RecruitHome from "./components/pages/RecruitHome";
import Director from "./components/pages/Director";
import Designer from "./components/pages/Designer";
import Frontend from "./components/pages/Frontend";
import Backend from "./components/pages/Backend";
import Entry from "./components/pages/Entry";
import BlogDetail from "./components/blog/pageContents/BlogDetail";
import TagsPage from "./components/blog/pageContents/TagsPage";
import BlogNews from "./components/blog/pageContents/BlogNews";

// Data
import ourTeamJsonData from "./data/ourTeam/ourTeamData.json";
import technologyJsonData from "./data/technology/technologyData.json";
import serviceJsonData from "./data/service/serviceData.json";
import homeJsonData from "./data/home/homeData.json";
import contactJsonData from "./data/contact/contactData.json";
import ScrollToTop from "./components/common/ScrollToTop";
import recruitHomeJsonData from "./data/recruit__home/recruitHome.json";
import recruitDirector from "./data/recruit__director/recruitDirector.json";
import recruitDesigner from "./data/recruit__designer/recruitDesigner.json";
import recruitNewGraduate from "./data/recruit__new-graduate/recruitNewGraduate.json";
import recruitBackend from "./data/recruit__backend/recruitBackend.json";
import recruitFontend from "./data/recruit__frontend/recruit_Front.json";
import Graduate from "./components/pages/Graduate";
import recruitEntry from "./data/recruit__entry/recruitEntry.json";
var JSONData = {
  blogNews: [],
  isLoaded: false,
};
function readJsonFilesInFolder() {
  for (let index = 7; index >= 1; index--) {
    JSONData.blogNews.push(require(`./data/blog/blog_news${index}.json`));
  }
}
// function BlogDetailWrapper(props) {
//   let { blogId } = useParams();
//   let blogDetailData = props.data.find((x) => x.id === blogId);
//   let tagsData = [];
//   props.data.forEach((i) => {
//     if (i.id !== blogDetailData.id) {
//       for (let item of blogDetailData.tags) {
//         if (i.tags.indexOf(item) !== -1) {
//           if (tagsData.indexOf(i) === -1) {
//             tagsData.push(i);
//             break;
//           }
//         }
//       }
//     }
//   });
//   return <BlogDetail data={blogDetailData} otherNews={tagsData} />;
// }

// function BlogTagName(props) {
//   let { tagName } = useParams();
//   let tag;
//   let tagData = [];
//   props.data.filter((item) => {
//     item.tags.map((tagItem) => {
//       const value = tagItem
//         .normalize("NFD")
//         .replace(/[\u0300-\u036f]/g, "")
//         .replace(/ /g, "-")
//         .replace(/Đ/g, "D")
//         .replace(/đ/g, "d")
//         .toLowerCase();
//       if (value === tagName) {
//         tagData.push(item);
//         tag = tagItem;
//       }
//     });
//   });

//   return <TagsPage data={tagData} tags={tag} />;
// }

i18next.init({
  lng: "jp",
  fallbackLng: "jp",
  resources: {
    jp: {
      translations: require("./locales/jp/translation.json"),
    },
    vi: {
      translations: require("./locales/vi/translation.json"),
    },
  },
  ns: ["translations"],
  languages: ["jp", "vi"],
  supportedLngs: ["jp", "vi"],
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
  readJsonFilesInFolder();
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
                <RecruitHome data={recruitHomeJsonData} />
              </Route>
              <Route exact path="/recruit/director">
                <Director data={recruitDirector} />
              </Route>
              <Route exact path="/recruit/designer">
                <Designer data={recruitDesigner} />
              </Route>
              <Route exact path="/recruit/frontend">
                <Frontend data={recruitFontend} />
              </Route>
              <Route exact path="/recruit/backend">
                <Backend data={recruitBackend} />
              </Route>
              <Route exact path="/recruit/new-graduate">
                <Graduate data={recruitNewGraduate} />
              </Route>
              <Route exact path="/recruit/:job/entry">
                <Entry data={recruitEntry} location={window.location} />
              </Route>
              <Route exact path="/contact">
                <Contact data={contactJsonData} />
              </Route>
              <Route exact path="/blog">
                <BlogNews data={JSONData.blogNews} />
              </Route>
              {/* <Route exact path="/blog/:blogId">
                <BlogDetailWrapper data={JSONData.blogNews} />
              </Route>
              <Route exact path="/blog/tag/:tagName">
                <BlogTagName data={JSONData.blogNews} />
              </Route> */}
            </Switch>
          </LanguageSupportLayout>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
