import React from "react";
import {FiCircle, FiSquare, FiTriangle, FiHexagon} from "react-icons/fi";
import Image from "./Image";

export default function Icon(props){
    switch (props.type) {
        case "svg":
            return <Image src={require("../../images/" + [props.name, props.type].join(".") )} 
                            alt={props.alt} 
                            classname={props.className} 
                            id={props.id}/>
        case "FiCircle":
            return <FiCircle/>
        case "FiSquare":
            return <FiSquare/>
        case "FiTriangle":
            return <FiTriangle/>
        case "FiHexagon":
            return <FiHexagon/>
        default:
            return "";
    }
}
