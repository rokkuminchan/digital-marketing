import React from "react";
import "./EntryButton.css";

export default function RecruitHomeEntryButton(props) {
    return (
        <a href={props.path} className="entrybutton">応募!</a>
    );
}