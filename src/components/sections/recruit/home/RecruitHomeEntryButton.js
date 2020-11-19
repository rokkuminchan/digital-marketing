import React from "react";
import "./RecruitHomeEntryButton.css";

export default function RecruitHomeEntryButton(props) {
    return (
        <a href={props.path} className="entrybutton">応募!</a>
    );
}