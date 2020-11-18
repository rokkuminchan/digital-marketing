import React from "react";
import Image from "../../../common/Image";

export default function GraduateHeader({data}){
    return(
        <section className="graduate-header">
            <Image className="graduate-header__img" {...data.image} />
            <h1 className="graduate-header__title">{data.title} </h1>
            <p className="graduate-header__description">{data.description}</p>
        </section>

    );
}