// import { useState } from "react";
import "./Button.css";

function Button({ dice, handleClick }) {
  return (
    <button
      type="submit"
      id="cardBtn"
      className="card__btn"
      onClick={handleClick}
    >
      <img alt="dice button" src={dice} />
    </button>
  );
}

export default Button;
