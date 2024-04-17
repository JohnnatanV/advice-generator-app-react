// import { useState } from "react";
import "./Button.css";

export default function Button({ dice, callData }) {
  return (
    <button type="submit" id="cardBtn" className="card__btn" onClick={callData}>
      <img alt="dice button" src={dice} />
    </button>
  );
}
