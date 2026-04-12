"use client";

import { useEffect, useState } from "react";

function Advice() {
  const [advice, setAdvice] = useState("");
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCounter((counter) => counter + 1);
  }

  useEffect(function () {
    async function fetch() {
      await getAdvice();
    }
    fetch();
    console.log("console called");
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <div>You have read {counter} Advices</div>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default Advice;
