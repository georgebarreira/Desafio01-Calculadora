import { useState } from "react";
import "./App.css";
import { Container, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");

  const [fristNumber, setFristNumber] = useState("0");

  const [operation, setOperation] = useState("");

  const [secOperation, setsecOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFristNumber("0");
    setOperation("");
    setsecOperation("");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(fristNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber("0");
      setOperation("");
    }
  };

  const handleMinusNumbers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(fristNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber("0");
      setOperation("");
    }
  };

  const handleMultiNumbers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("x");
    } else {
      const sum = Number(fristNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber("0");
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (fristNumber === "0") {
      setFristNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else if (currentNumber !== "0") {
      const sum = Number(fristNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setFristNumber("0");
      setOperation("");
    }
  };

  const handleSqrtNumbers = () => {
    if (currentNumber !== "0") {
      setCurrentNumber(String(Math.sqrt(Number(currentNumber))));
    }
  };

  const handlePowNumbers = () => {
    if (currentNumber !== "0") {
      setCurrentNumber(String(Math.pow(Number(currentNumber), 2)));
    }
  };

  const handlePercentNumbers = () => {
    if (fristNumber === "0") {
      const perc = Number(currentNumber) / 100;
      setCurrentNumber(String(perc));
    } else {
      setsecOperation("%");
      switch (operation) {
        case "+":
          const soma =
            Number(fristNumber) +
            (Number(fristNumber) * Number(currentNumber)) / 100;
          setCurrentNumber(String(soma));
          setFristNumber("0");
          setOperation("");
          setsecOperation("");
          break;
        case "-":
          const subtracao =
            Number(fristNumber) -
            (Number(fristNumber) * Number(currentNumber)) / 100;
          setCurrentNumber(String(subtracao));
          setFristNumber("0");
          setOperation("");
          setsecOperation("");
          break;
        case "x":
          const multiplica =
            Number(fristNumber) *
            ((Number(fristNumber) * Number(currentNumber)) / 100);
          setCurrentNumber(String(multiplica));
          setFristNumber("0");
          setOperation("");
          setsecOperation("");
          break;
        case "/":
          const divisao =
            Number(fristNumber) /
            ((Number(fristNumber) * Number(currentNumber)) / 100);
          setCurrentNumber(String(divisao));
          setFristNumber("0");
          setOperation("");
          setsecOperation("");
          break;
        default:
          break;
      }
    }
  };
  const handleEquals = () => {
    if (fristNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "x":
          handleMultiNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;

        default:
          break;
      }
    }
  };

  return (
    <>
      <h1>Desafio Calculadora React</h1>
      <Container>
        <Content>
          <Input value={currentNumber} />
          <Row>
            <Button label="√" onClick={handleSqrtNumbers} />
            <Button label="x²" onClick={handlePowNumbers} />
            <Button label="%" onClick={handlePercentNumbers} />
            <Button label="C" onClick={handleOnClear} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="/" onClick={handleDivNumbers} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="x" onClick={handleMultiNumbers} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="-" onClick={handleMinusNumbers} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="," onClick={() => handleAddNumber(".")} />
            <Button label="=" onClick={handleEquals} />
            <Button label="+" onClick={handleSumNumbers} />
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default App;
