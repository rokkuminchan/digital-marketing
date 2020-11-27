import React from "react";
import "./JobPageHeader.css";
import { useTranslation } from "react-i18next";

function getUrl(src) {
  if (src.childImageSharp !== undefined) {
    src = src.childImageSharp.fluid.srcSet.split(" ")[0];
  }
  const results = src.split("/");
  const imgFileName = results[results.length - 1];
  return require("../../../../images/" + imgFileName);
}

export default function JobPageHeader(data) {
  const { t } = useTranslation();
  return (
    <section
      className="job-page-header"
      style={{
        background: ` url(${getUrl(data.data.image.src)})`,
        "background-size": `cover`,
        "background-repeat": `no-repeat`,
        "background-position": `center center`,
      }}
    >
      <div className="job-page-header__content">
        <div className="job-page-header__content-text">
          <h2 className="job-page-header__title">{t(data.data.title)}</h2>
          <br />
          <p className="job-page-header__description">
            {t(data.data.description)}
          </p>
        </div>
      </div>
    </section>
  );
}
