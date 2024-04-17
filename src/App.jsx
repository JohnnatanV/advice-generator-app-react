import { Suspense } from "react";
import fetchData from "./useFetchData";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import diceBtn from "./assets/icon-dice.svg";
import Title from "./Title";
import Quote from "./Quote";
import Button from "./Button";

import "./App.css";

const apiData = fetchData("https://api.adviceslip.com/advice");
function App() {
  const data = apiData.read();
  return (
    <div id="card">
      <Suspense fallback={<Title>Loading..</Title>}>
        <Title>{data.id}</Title>
        <Quote>{data.advice}</Quote>
      </Suspense>
      <img className="card__divider" src={mobileDivider} alt="mobile divider" />
      <Button dice={diceBtn} />
    </div>
  );
}

export default App;
