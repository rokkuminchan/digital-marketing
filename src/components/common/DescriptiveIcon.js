import React from "react";
import "./DesciptiveIcon.css";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";

export default function DecriptiveIcon({ data }) {
  const { t } = useTranslation();

  return (
    <div className="descriptive-icon">
      <div className="descriptive-icon__wrap">
        <Icon {...data.icon} />
      </div>
      <br /><p className="descriptive-icon__description">{t(data.description)}</p>
    </div>
  );
}
