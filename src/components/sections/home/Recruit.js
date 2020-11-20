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
                        <Title data={item.title} />
                        <Description data={item.description} />
                        <hr width="80%" size="2px" color="#373F41" />
                        </div>
                    ))}
            </div>
        </section>
    )
}
export default Recruit;