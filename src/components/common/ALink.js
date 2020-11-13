import React from "react";
import { Link } from 'gatsby-plugin-react-i18next';

export default function ALink(props) {
    return <Link {...props}>{props.children}</Link>
}