import React from "react";
import "./EntryBanner.css";
import Image from "../../../common/Image";

export default function EntryBanner({ data }) {
  return (
    <section className="entry-banner">
      <div className="entry-banner__img">
        <Image className="card__img" {...data.image} />
      </div>
    </section>
  );
}
