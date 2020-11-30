import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ALink from "../common/ALink";
import "./EntryButton.css";

// import "./EntryButtonAnimation";

export default function EntryButton(props) {
  var [showEntryButton, setShowEntryButton] = useState("");

  const { t } = useTranslation();

  useEffect(() => {
    const entryButtonElement = document.getElementById(props.detailEntryButtonId);

    typeof window !== undefined && (window.addEventListener('scroll', function () {
      setShowEntryButton(isScrolledIntoView(entryButtonElement) ? "" : "entry-button__show")
    }, false));
  }, [])

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  return (
    <ALink to={props.path} id="entrybutton" className={`entrybutton ${showEntryButton}`}>
      {t("recruit-entry__button")}
    </ALink>
  );
}
