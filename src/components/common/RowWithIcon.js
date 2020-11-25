import React from 'react';
import './RowWithIcon.css'
import { BsFillCircleFill } from "react-icons/bs";
import {useTranslation} from 'react-i18next';

const RowWithIcon = ({data}) => {
    const {t} = useTranslation();
    return (
      <div className="row">
        <div className="row__icon">
          <BsFillCircleFill />
        </div>
        <div className="row__description">
          <p>{t(data)}</p>
        </div>
      </div>
    );
}
export default RowWithIcon; 