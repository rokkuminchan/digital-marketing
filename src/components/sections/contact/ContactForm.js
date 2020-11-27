import React from "react";
import { useTranslation } from "react-i18next";

import "./ContactForm.css";

const ContactForm = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <h3 className="contact_title">{t(data.title)}</h3>
      <p className="contact_description">{t(data.description)}</p>
      <form action={data.action} className="contact__form">
        {data.items.map((item, index) => {
          return (
            <div>
              <input
                className="contact__field"
                key={index}
                type={item.type}
                name={item.name}
                placeholder={t(item.placeholder)}
              />
            </div>
          );
        })}
        <input type="submit" value={t(data.submit)} className="contact__btn" />
      </form>
    </section>
  );
};
export default ContactForm;
