import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'

const TeamCharacteristic = ({data}) => {
    return(
        <section className = "team-characteristics">
            <div className = "team-characteristics__title">
                <Title data = {data.title} />
            </div>
            <div className = "team-characteristics__description">
                <Description data = {data.description} />
            </div>
            <div className = "team-characteristics__image">
                <Image {...data.image}/>
            </div>
        </section>
    )
}
export default TeamCharacteristic;