import React from "react";
import "./Button.css";
const Button = () => {
  return (
    <div className="button-contain">
      <button className="button">
        <a href="../contact/" className="button__link">
          お問い合わせ
        </a>
      </button>
    </div>
  );
};
export default Button;
