import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import ALink from "../../common/ALink";

const Contact = ({ data }) => {
  const { t } = useTranslation();
  return (
    <section className="button-contain">
      <button className="button">
        <ALink to={data.link.src} className="button__link">
          {t(data.link.title)}
        </ALink>
      </button>
    </section>
  );
};
export default Contact;
