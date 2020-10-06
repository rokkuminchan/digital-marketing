import React from 'react'
import DescriptiveIcon from '../../common/DescriptiveIcon';
import "./TeamChracteristic.css"
import Title from "../../common/Title"

const TeamCharacteristic = ({data}) => {

    return (
        <div className ="team-characteristic">
            <div className ="team-characteristic__imgbg">
                <div className ="team-characteristic__title">
                    <Title data={data.title}/>
                </div>
                <br/><p className = "team-characteristic__description">{data.description}</p>
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