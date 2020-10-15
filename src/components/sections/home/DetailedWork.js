import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'

const DetailedWork = ({data}) => {
    return(
        <section className = "technology">
            <div className = "technology__title">
                <Title data = {data.title} />
            </div>
            <div className = "technology__image">
                <Image {...data.image}/>
            </div>
            <div className = "technology__description">
                {
                    data.descriptions.map((item,index) => {
                        return (
                            <Description key = {index} data = {item} />
                        )
                    })
                }
                
            </div>
        </section>
    )
}
export default DetailedWork;