import React from 'react';
import Title from '../../common/Title'
import Description from '../../common/Description'
import Image from '../../common/Image'
import "./Characteristic.css"

const Characteristic = ({data}) => {
    
    return(
        <section className = "characteristic">
            {data.map((item,index) => {
            return <div className="characteristic__container" data={item} key={index} >
                        <div className = "characteristic__title">
                            <Title data={item.title}/>
                        </div>
                        <div className = "characteristic__description">
                            <Description data={item.description}/>
                        </div>
                        <div className = "characteristic__image">
                            <Image {...item.image}/>
                        </div>
                    </div>
            })}
            
        </section>
    )
}
export default Characteristic;