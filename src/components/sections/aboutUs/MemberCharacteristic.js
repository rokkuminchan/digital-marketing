import React from 'react';
import './MemberCharacteristic.css';
import Title from "../../common/Title.js";

export default function MemberCharacteristic({data}) {
    return (
        <div className="member-characteristic">
            <Title title={data.title} />
            <p className="member-characteristic__description">{data.description}</p>
            <div className="member-characterstic__items">
                <div>
                    <p>{data.items.title}</p>
                </div>
                <p>{data.items.description}</p>                                
            </div>
        </div>
    );
}