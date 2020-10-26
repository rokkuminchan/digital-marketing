import React from "react";
import { Link } from "react-router-dom";

export default function ALink(props){
    return <Link {...props}>{props.children}</Link>
}