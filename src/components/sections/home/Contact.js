import React from "react";
import { Link } from "react-router-dom";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="button-contain">
      <button className="button">
        <Link to="/contact" className="button__link">
          お問い合わせ
        </Link>
      </button>
    </section>
  );
};
export default Contact;
