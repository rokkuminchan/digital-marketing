import React from "react";
import "./Breadcrumb.css";
import {Link } from "react-router-dom";


export default function Breadcrumb() {
  return (
        <ul className="breadcrumb">
            <li className ="breadcrumb__list"><Link href="#">採用情報</Link></li>
            <li className ="breadcrumb__list">デイレクター</li>     
        </ul> 
  );
}
