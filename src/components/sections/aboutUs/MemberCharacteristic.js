import React from 'react';
import './MemberCharacteristic.css';
import Title from "../../common/Title.js";
import '../../common/Title.css';

export default function MemberCharacteristic({data}) {

    return (
        <div className="member-characteristic">
            <Title data={data.title} />
            <p className="member-characteristic__description">{data.description}</p>
            {
                data.items.map((item, index) => 
                <div className="member-characterstic__items" key={index}>
                    <div>
                        <p>{item.title}</p>
                    </div>
                    <p>{item.description}</p>                                
                </div>
                )
            }
        </div>    
    );
}