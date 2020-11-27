import React from "react";
import "./AgileTeamCompositionList.css";
import Image from '../../common/Image'
import {useTranslation} from 'react-i18next';

export default function AgileTeamCompositionList ({ data }) {
    const {t} = useTranslation();
    return (
      <div className="AgileTeamComposition-List">
        <div className="AgileTeamComposition-List__img">
            <Image className="items-img"{...data.image}/>
        </div>
        <div className="AgileTeamComposition-List__text">
            <h1>{t(data.title)}</h1><br/>
            <p>{t(data.description)}</p>
        </div>
    </div>
    );
}