import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'

const Technology = ({data}) => {
    return(
        <section className = "technology">
            <div className = "technology__title">
                <Title data = {data.title} />
            </div>
            <div className = "technology__image">
                <Image {...data.image}/>
            </div>
            <div className = "technology__description">
                <Description data = {data.description} />
            </div>
        </section>
    )
}
export default Technology;