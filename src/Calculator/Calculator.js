import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./style/Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [num, setNum] = useState("");
  //   const [result, setResult] = useState(0);

  const handleInput = (input) => {
    if (["+", "-", "*", "/"].includes(input)) {
      // Si le dernier caractère de `display` est déjà un opérateur, ne pas en ajouter un autre

      setPreviousValue(num);
      //   setOperator(null);
      setOperator(input);
      setDisplay(display + input);
      clearNumber();
      //   setDisplay("");
    } else if (input === "=") {
      calculateResult();
    } else if (input === "C") {
      clearDisplay();
    } else {
      setNum(num + input);
      setDisplay(display + input);
    }
  };

  const clearNumber = () => {
    setNum("");
  };
  const clearDisplay = () => {
    setNum("");
    setDisplay("");
    setPreviousValue(null);
    setOperator(null);
  };

  const calculateResult = () => {
    if (previousValue && operator) {
      let result;
      let previousVal = parseFloat(previousValue);
      let number = parseFloat(num);
      switch (operator) {
        case "+":
          result = previousVal + number;

          console.log("additon", result, previousVal, num);
          break;
        case "-":
          result = previousVal - number;
          console.log("soustraction", result, previousVal, num);
          break;
        case "*":
          result = previousVal * number;
          console.log("multiplication", result, previousVal, num);
          break;
        case "/":
          if (parseFloat(num) !== 0) {
            result = previousVal / number;
            console.log("division", result, previousVal, num);
          } else {
            result = "Erreur: Division par zéro";
          }
          break;
        default:
          break;
      }
      setDisplay(result);
      setNum(result);
      if (result === "Erreur: Division par zéro") {
        setNum(0);
      }

      setPreviousValue(null);
      setOperator(null);
    }
  };

  return (
    <div className="calculator">
      <section>
        <Display value={display} />
        <div className="buttons">
          <div>
            {["7", "8", "9", "+"].map((label) => (
              <Button key={label} label={label} onClick={handleInput} />
            ))}
          </div>
          <div>
            {["4", "5", "6", "-"].map((label) => (
              <Button key={label} label={label} onClick={handleInput} />
            ))}
          </div>
          <div>
            {["1", "2", "3", "*"].map((label) => (
              <Button key={label} label={label} onClick={handleInput} />
            ))}
          </div>
          <div>
            {["C", "0", "=", "/"].map((label) => (
              <Button key={label} label={label} onClick={handleInput} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
