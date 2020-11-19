import React from "react";
import "./RecruitHomeReason.css";
import Title from "../../../common/Title";
import Image from "../../../common/Image";

export default function RecruitHomeReason({data}){
    return(
        <section className="recruit-home-reason">
            <Title data={data.title}/>
            <div className="recruit-home-reason__items">
                {data.items.map((item, index) => (
                    <div key={index} className="recruit-home-reason__card">
                        <Image className="recruit-home-reason__card-image" {...item.image}/>
                        <div className="recruit-home-reason__card-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>  
                ))}
            </div>
        </section>
    )
}