import React from 'react';
import './MemberIntro.css';
import Title from '../../common/Title.js';
import Card from '../../common/Card.js';

export default function MemberIntro(props) {
    return (
        <section>
            <Title data={props.title} />
            <p className="memberIntro__description"> {props.description} </p>
            <div className="memberIntro__items">
                {props.items.map((member, index) => {
                    return <Card key={index} data={member} />;
                })}
            </div>
        </section>
    );
}
