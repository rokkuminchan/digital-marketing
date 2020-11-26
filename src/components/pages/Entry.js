import React from "react";
import EntryForm from "../sections/recruit/entry/EntryForm";


export default function Entry({ data }) {
  return (
    <React.Fragment>
      <EntryForm data={data.EntryForm} /> 
    </React.Fragment>
  );
}
