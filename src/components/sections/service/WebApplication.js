import React from "react";
import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";


export default function WebApplication({data}){
    return (
      <div className="web-application">
        <Title className="web-application__title" data={data.title} />
        <Description data={data.description} />
        {
          data.items.map((item, index) => (
            <div key={index} className="web-application__items">
              <Image className="web-application__items-icon" {...item.icon} />
              <p className="web-application__items-description">{item.description}</p>
            </div>
          ))
        }
        <Description className="web-application__sub-description" data={data.subDescription} />
        <Image className="web-application__image" {...data.image}/>
      </div>
    );
} 