import React from "react";
import "./JobPageHeader.css";



function getUrl(src) {
  const results = src.split("/");
  const imgFileName = results[results.length - 1];
      return require("../../../../images/" + imgFileName)
}

export default function JobPageHeader(data) {
  return (
    <section className="job-page-header"
      style={{
        background: ` url(${getUrl(data.data.image.src)})`
    }}
    >
        <div className="job-page-header__content">
          <div className ="job-page-header__content-text">
            <h2 className = "job-page-header__title">{data.data.title}</h2><br/>
            <p className="job-page-header__description">{data.data.description}</p>
          </div>
        </div>
    </section>
  );
}
