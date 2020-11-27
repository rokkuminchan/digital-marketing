import React from "react";
import EntryForm from "../sections/recruit/entry/EntryForm";


export default function Entry({ data, location }) {
  return (
    <React.Fragment>
      <EntryForm data={data.EntryForm} location={location} />
    </React.Fragment>
  );
}
