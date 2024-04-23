import { Suspense, useState, useEffect } from "react";
import fetchData from "./useFetchData";
import mobileDivider from "./assets/pattern-divider-mobile.svg";
import diceBtn from "./assets/icon-dice.svg";
import Title from "./Title";
import Quote from "./Quote";
import Button from "./Button";

import "./App.css";

const initialData = {
  id: "",
  advice: "",
};

function App() {
  const [info, setInfo] = useState(initialData);

  const updateAdvice = () => {
    fetchData().then((data) => {
      setInfo(data.slip);
    });
  };

  useEffect(() => {
    updateAdvice();
  }, []);

  return (
    <div id="card">
      <Suspense fallback={<Title>Loading...</Title>}>
        <Title>{info?.id}</Title>
        <Quote>{info?.advice}</Quote>
      </Suspense>
      <img className="card__divider" src={mobileDivider} alt="mobile divider" />
      <Button dice={diceBtn} handleClick={() => updateAdvice()} />
    </div>
  );
}

export default App;
