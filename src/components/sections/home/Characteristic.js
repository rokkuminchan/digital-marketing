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
                        <div className ="characteristic__wrap">
                            <div className = "characteristic__title">
                                <Title data={item.title}/>
                            </div>
                            <div className="characteristic__card">
                                <div className="characteristic__cardBx">
                                    <figure>
                                        <Image {...item.image}/>
                                        <figcaption>
                                            <Description data={item.description}/>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
            })}
        </section>
    )
}
export default Characteristic;