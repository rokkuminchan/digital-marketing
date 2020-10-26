import React from "react";
import { Link } from "gatsby";

export default function ALink(props){
    return <Link {...props}>{props.children}</Link>
}