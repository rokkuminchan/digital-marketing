import React from 'react';
import './Recruit.css'
import Title from '../../common/Title';
import Description from '../../common/Description';
import Image from '../../common/Image';


const Recruit = ({data}) => {
    console.log(data.items)
    return (
        <section className = "recruit">
            <div className="recruit__title">
                <Title data={data.title} />
            </div>
            <div className="recruit__subtitle">
                <Description data={data.subtitle} />
            </div>
                <Image className="recruit__image" {...data.image} />

                
            <div className = "recruit-items">
                    {data.items.map((item,index)=>(
                        <div className = "recruit-items-box" key = {index}>
                        <Image className ="item-icon" {...item.image} />
                        <Title className ="item-title" data={item.title} />
                        <Description className ="item-description" data={item.description} />
                        <hr width="50%" size="5px" color="#78acfd"/>
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default Recruit;