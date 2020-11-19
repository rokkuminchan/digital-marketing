import React from "react";
import EntryBanner from "../sections/recruit/entry/EntryBanner";
import EntryForm from "../sections/recruit/entry/EntryForm";

export default function Entry({ data }) {
  return (
    <React.Fragment>
      <EntryBanner data={data.Banner} />
      <EntryForm data={data.EntryForm} />
    </React.Fragment>
  );
}
