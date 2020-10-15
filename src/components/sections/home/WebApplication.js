import React from "react";
import "./WebApplication.css";
import Title from "../../common/Title";
import Description from "../../common/Description";
import Icon from "../../common/Icon";


export default function WebApplication({data}){
  return (
    <div className="web-application">
      <div className="web-application__title">
        <Title  data={data.title} />
      </div>
			<div className="web-application__desciption">
			{
        data.description.map((item, index) => (
					<div key={index}>
						<Description data={item} />
          </div>
        ))
      }  
      </div>        
      {
        data.items.map((item, index) => (
          <div key={index} className="web-application__items">              
            <span className="web-application__items-icon"><Icon {...item.icon}/></span>                          
            <span className="web-application__items-description">{item.description}</span>
          </div>
        ))
      }     
    </div>
  );
} 