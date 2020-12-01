import React from "react";
import {
  useI18next,
} from "gatsby-plugin-react-i18next";

import ALink from "../common/ALink";
import VietnameseFlag from "../../images/vn.svg";
import JapaneseFlag from "../../images/jp.svg";

import "./LanguageSwitcher.css";
import Image from "./Image";

const showMenuClass = "show";

export default function LanguageSwitcher(props) {
  const { language, languages, originalPath } = useI18next();

  function myFunction(e) {
    const menu = document.getElementById("language-menu");

    if (menu.classList.contains(showMenuClass)) {
      menu.classList.remove(showMenuClass);
    } else {
      menu.classList.add(showMenuClass);
    }

    e.stopPropagation();
  }

  // Close the dropdown if the user clicks outside of it
  typeof window !== "undefined" &&
    (window.onclick = function (event) {
      if (!event.target.matches(".language-menu__current-language")) {
        var dropdowns = document.getElementsByClassName("language-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    });

  function getImageByLanguage(language) {
    return language === "vi" ? VietnameseFlag : JapaneseFlag;
  }

  function getLanguageText(language) {
    return language === "vi" ? "Tiếng Việt" : "日本語";
  }

  function onChangeLanguage(language) {
    const currentLanguageIcon = document.getElementById(
      "current-language__icon"
    );

    currentLanguageIcon.src = getImageByLanguage(language);
    props.onAfterChangeLanguage && props.onAfterChangeLanguage();
  }

  return (
    <div className="dropdown">
      <div className="language-menu__current-language" onClick={myFunction}>
        <Image
          id="current-language__icon"
          alt="Japanese"
          src={getImageByLanguage(language)}
        />

        <span className="language-menu__current-language-jp-vi">
          {getLanguageText(language)}
        </span>
      </div>
      <div id="language-menu" className="language-menu">
        {
          languages.map((lng) => {
            return <ALink to={originalPath} language={lng} onClick={(e) => onChangeLanguage(lng)}>
              <div className="language-menu__item">
                <Image
                  className="language-menu__flag-icon"
                  alt="Japanese"
                  src={getImageByLanguage(lng)}
                />
                <span>{getLanguageText(lng)}</span>
              </div>
            </ALink>

          })
        }
      </div>
    </div>
  );
}
