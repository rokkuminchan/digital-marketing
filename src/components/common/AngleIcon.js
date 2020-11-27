import React from 'react';
import './RowWithIcon.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const AngleIcon = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="row">
      <div className="row__icon angle">
        <FaAngleDoubleRight />
      </div>
      <div className="row__description">
        <p>{t(data)}</p>
      </div>
    </div>
  );
}
export default AngleIcon;

