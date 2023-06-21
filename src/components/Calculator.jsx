import React, { useState } from "react";
import "./calculator.css";
import { evaluate } from "mathjs";

function Calculator() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearHandler = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      const calculatedResult = evaluate(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="Calc">
        <input type="text" placeholder="0" id="answer" value={result} />
        <input
          type="button"
          value="9"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="+"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="-"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="*"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="/"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="Clear"
          className="button button1"
          onClick={clearHandler}
        />
        <input
          type="button"
          value="="
          className="button button1"
          onClick={calculate}
        />
      </div>
    </div>
  );
}

export default Calculator;
