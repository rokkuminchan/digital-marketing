import React from "react";
import { useTranslation } from "react-i18next";

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

        <span className="language-menu__current-language-jp-vi">
          {i18n.language === "jp" ? "日本語" : "VN"}
        </span>
      </div>
      <div id="language-menu" className="language-menu">
        <ALink to="#" onClick={(e) => onChangeLanguage(e, "jp")}>
          <div className="language-menu__item">
            <Image
              className="language-menu__flag-icon"
              alt="Japanese"
              src={JapaneseFlag}
            />
            <span>日本語</span>
          </div>
        </ALink>
        <ALink to="#" onClick={(e) => onChangeLanguage(e, "vi")}>
          <div className="language-menu__item">
            <Image
              className="language-menu__flag-icon"
              alt="Vietnamese"
              src={VietnameseFlag}
            />
            <span>VN</span>
          </div>
        </ALink>
      </div>
    </div>
  );
}
