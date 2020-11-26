import React from "react";
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import "./DetailEntryButton.css";

export default function DetailEntryButton(props) {
    const {t} = useTranslation();
    return (
      // <a href={props.path} className="recruit-detail__entry">
      //   {t('recruit-entry__button')}
      // </a>
      <Link to={props.path} className="recruit-detail__entry">
      {t('recruit-entry__button')}
    </Link>
    );
}