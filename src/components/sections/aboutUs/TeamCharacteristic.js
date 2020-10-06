import React from 'react'
import DescriptiveIcon from '../../common/DescriptiveIcon';
import "./TeamChracteristic.css"

const TeamCharacteristic = ({data}) => {
    console.log(data);
    return (
        <div className ="team-characteristic">
            <h3 className ="team-characteristic__title">{data.title}</h3>
            <p className = "team-characteristic__description">{data.description}</p>
            <div className = "team-characteristic__img">
                <img  src={data.image.src} alt={data.image.alt}/>
            </div>
            <div className = "team-characteristic__items">
            {data.items.map((item, index) => {
                return <DescriptiveIcon key={index} data={item} />;
            })}
            </div>
        </div>
    );
        }
        export default TeamCharacteristic;