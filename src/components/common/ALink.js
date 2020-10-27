import React from "react";
import { NavLink } from "react-router-dom";

export default function ALink(props){
    return <NavLink {...props}>{props.children}</NavLink>
}