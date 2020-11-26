import React from "react";
import {useTranslation} from 'react-i18next';
import "./EntryButton.css";

export default function EntryButton(props) {
    const {t} = useTranslation();
    return (
      <a href={props.path} className="entrybutton">
        {t('recruit-entry__button')}
      </a>
    );
}