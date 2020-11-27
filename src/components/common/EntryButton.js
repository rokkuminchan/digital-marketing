import React from "react";
import { useTranslation } from 'react-i18next';
import ALink from "../common/ALink";
import "./EntryButton.css";

// import "./EntryButtonAnimation";

export default function EntryButton(props) {
  const { t } = useTranslation();
  return (
    <ALink exact to={props.path} className="entrybutton">
      {t('recruit-entry__button')}
    </ALink>
  );
}