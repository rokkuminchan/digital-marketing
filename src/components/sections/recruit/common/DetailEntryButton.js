import React from "react";
import ALink from "../../../common/ALink";
import {useTranslation} from 'react-i18next';
import "./DetailEntryButton.css";

export default function DetailEntryButton(props) {
    const {t} = useTranslation();
    return (
    <ALink
      className="recruit-detail__entry" to={props.path}>
      {t('recruit-entry__button')}
    </ALink>
    );
}