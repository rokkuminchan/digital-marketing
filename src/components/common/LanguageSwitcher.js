import React from "react";
import {
  Link,
  useTranslation,
  useI18next,
  I18nextContext,
} from "gatsby-plugin-react-i18next";

import ALink from "../common/ALink";
import VietnameseFlag from "../../images/vn.svg";
import JapaneseFlag from "../../images/jp.svg";

import "./LanguageSwitcher.css";
import Image from "./Image";

const showMenuClass = "show";

export default function LanguageSwitcher(props) {
  const [, i18n] = useTranslation();

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
  window.onclick = function (event) {
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
  };

  function getImageByLanguage(language) {
    return language === "vi" ? VietnameseFlag : JapaneseFlag;
  }

  function onChangeLanguage(e, language) {
    const currentLanguageIcon = document.getElementById(
      "current-language__icon"
    );

    i18n.changeLanguage(language);
    currentLanguageIcon.src = getImageByLanguage(language);
    props.onAfterChangeLanguage && props.onAfterChangeLanguage();
  }

  return (
    <div className="dropdown">
      <div className="language-menu__current-language" onClick={myFunction}>
        <Image
          id="current-language__icon"
          alt="Japanese"
          src={getImageByLanguage(i18n.language)}
        />
      </div>
      <div id="language-menu" className="language-menu">
        <ALink to="#" onClick={(e) => onChangeLanguage(e, "jp")}>
          <Image
            className="language-menu__flag-icon"
            alt="Japanese"
            src={JapaneseFlag}
          />
        </ALink>
        <ALink to="#" onClick={(e) => onChangeLanguage(e, "vi")}>
          <Image
            className="language-menu__flag-icon"
            alt="Vietnamese"
            src={VietnameseFlag}
          />
        </ALink>
      </div>
    </div>
  );
}
