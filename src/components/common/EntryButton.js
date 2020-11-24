import React from "react";

import "./EntryButton.css";

export default function EntryButton(props) {
    return (
        <a href={props.path} className="entrybutton">応募する</a>
    );
}