import React from 'react';
import Icon from "../../../common/Icon"
import RowWithIcon from "../../../common/RowWithIcon"
import "./PolicyItem.css"
import {useTranslation} from 'react-i18next';

const Policy = ({data}) => {
    const {t} = useTranslation();
    return (
      <section className="policy-item">
        <div className="policy-item__icon">
          <Icon {...data.icon} />
        </div>
        <div className="policy-item__title">
          <h2>{t(data.title)}</h2>
        </div>
        <div className="policy-item__description">
          {data.description.map((item, index) => {
            return <RowWithIcon key={index} data={item} />;
          })}
        </div>
      </section>
    );
}
export default Policy;