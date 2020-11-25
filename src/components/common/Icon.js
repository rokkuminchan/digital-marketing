import React from "react";
import {FiCircle, FiSquare, FiTriangle, FiHexagon} from "react-icons/fi";
import { IoIosSwitch, IoIosTime } from "react-icons/io";
import { BsLightningFill, BsCircleFill, BsBookHalf } from "react-icons/bs";
import { MdHighQuality, MdLocationOn } from "react-icons/md";
import { BiYen } from "react-icons/bi";
import { RiUserFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

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
        case "BsCircleFill":
            return <BsCircleFill/>
        case "BsBookHalf":
            return <BsBookHalf/>        
        case "MdHighQuality":
            return <MdHighQuality/>
        case "IoIosTime":
            return <IoIosTime/>
        case "MdLocationOn":
            return <MdLocationOn/>
        case "BiYen":
            return <BiYen/>
        case "RiUserFill":
            return <RiUserFill/>
        case "AiTwotoneHome":
            return <AiTwotoneHome/>  
        case "HiLocationMarker":
            return <HiLocationMarker/>          
        default:
            return "";
    }
}
