import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [currentOperand, setCurrentOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num) => {
    if (result === "0") {
      setResult(num.toString());
    } else {
      setResult(result + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (currentOperand !== "") {
      calculate();
    }
    setCurrentOperand(result);
    setResult("0");
    setOperator(op);
  };

  const calculate = () => {
    const num1 = parseFloat(currentOperand);
    const num2 = parseFloat(result);

    switch (operator) {
      case "+":
        setResult((num1 + num2).toString());
        break;
      case "-":
        setResult((num1 - num2).toString());
        break;
      case "*":
        setResult((num1 * num2).toString());
        break;
      case "/":
        setResult((num1 / num2).toString());
        break;
      default:
        break;
    }
    setCurrentOperand("");
    setOperator("");
  };

  const handleEqualsClick = () => {
    if (currentOperand !== "") {
      calculate();
    }
  };

  const handleClear = () => {
    setResult("0");
    setCurrentOperand("");
    setOperator("");
  };

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleClear()}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
