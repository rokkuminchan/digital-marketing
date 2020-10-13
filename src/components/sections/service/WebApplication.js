import React from "react";
import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Image from "../../common/Image";


export default function WebApplication({data}){
    return (
      <div className="web-application">
        <div className="web-application__title">
          <Title  data={data.title} />
        </div>
        <div className="web-application__desciption">
          <Description data={data.description} />
        </div>        
        {
          data.items.map((item, index) => (
            <div key={index} className="web-application__items">
              <div className="web-application__items-icon" >
                <Image {...item.icon} />
              </div>              
              <p className="web-application__items-description">{item.description}</p>
            </div>
          ))
        }
        <div className="web-application__sub-description">
          <Description data={data.subDescription} />
        </div>
        <div className="web-application__image">
          <Image {...data.image}/>
        </div>             
      </div>
    );
} 