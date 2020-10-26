import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = () => {
  return (
    <div className="button-contain">
      <button className="button">
        <Link to="/contact" className="button__link">
          お問い合わせ
        </Link>
      </button>
    </div>
  );
};
export default Button;
