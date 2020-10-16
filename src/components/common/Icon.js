import React from "react";
import {FiCircle, FiSquare, FiTriangle, FiHexagon} from "react-icons/fi";
import { IoIosSwitch } from "react-icons/io";
import { BsLightningFill } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";

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
        case "IoIosSwitch":
            return <IoIosSwitch/>
        case "BsLightningFill":
            return <BsLightningFill/>
        case "MdHighQuality":
            return <MdHighQuality/>
        default:
            return "";
    }
}
