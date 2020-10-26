import React from "react";
import ALink from "../../common/ALink";

import "./Button.css";

const Button = () => {
  return (
    <div className="button-contain">
      <button className="button">
        <ALink to="/contact" className="button__link">
          お問い合わせ
        </ALink>
      </button>
    </div>
  );
};
export default Button;
