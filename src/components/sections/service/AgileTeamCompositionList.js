import React from "react";
import "./AgileTeamCompositionList.css";
import Image from '../../common/Image'

export default function AgileTeamCompositionList ({ data }) {
   console.log(data);
    return (
      <div className="AgileTeamComposition-List">
        <div className="AgileTeamComposition-List__img">
            <Image className="items-img"{...data.image}/>
        </div>
        <div className="AgileTeamComposition-List__text">
            <h1>{data.title}</h1><br/>
            <p>{data.description}</p>
        </div>
    </div>
    );
}