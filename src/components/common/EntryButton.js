import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ALink from "../common/ALink";
import "./EntryButton.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GiEntryDoor } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);
// import "./EntryButtonAnimation";

export default function EntryButton(props) {
  // var [showEntryButton, setShowEntryButton] = useState("");

  const { t } = useTranslation();
  
  const fadeIn = () => {
    return gsap.to("#entrybutton", {
      duration: 0.7,
      autoAlpha: 0.5,
      y: 0,
      ease: 'power4.out'
    })
  }
  const fadeOut = () => {
    return gsap.to("#entrybutton", {
      duration: 0.7,
      autoAlpha: 0,
      y: 0,
      ease: 'power4.out'
    })
  }
  
  useEffect (() => {
    ScrollTrigger.create({
      trigger: '.entry-button-js',
      start: 100,
      end: 'bottom-=50 bottom',
      onEnter: () => fadeIn(),
      onEnterBack: () => fadeIn(),
      onLeave: () => fadeOut(),
      onLeaveBack: () => fadeOut(),
    })
  },[])
  // useEffect(() => {
  //   const entryButtonElement = document.getElementById(props.detailEntryButtonId);

  //   typeof window !== undefined && (window.addEventListener('scroll', function () {
  //     setShowEntryButton(isScrolledIntoView(entryButtonElement) ? "" : "entry-button__show")
  //   }, false));
  // }, [])

  // function isScrolledIntoView(el) {
  //   var rect = el.getBoundingClientRect();
  //   var elemTop = rect.top;
  //   var elemBottom = rect.bottom;

  //   // Only completely visible elements return true:
  //   var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  //   // Partially visible elements return true:
  //   //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  //   return isVisible;
  // }

  return (
    <ALink to={props.path} id="entrybutton" className="entrybutton">
      <GiEntryDoor />{t("recruit-entry__button")}
    </ALink>
  );
}
