import React from "react";
import ALink from "../../common/ALink";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="button-contain">
      <button className="button">
        <ALink to="/contact" className="button__link">
          お問い合わせ
        </ALink>
      </button>
    </section>
  );
};
export default Contact;
