import React, { useState } from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";

export default function App() {
  const [capital, setCapital] = useState(5900);
  const [interestRate, setInterestRate] = useState(0.8);
  const [period, setPeriod] = useState(12);

  const handleCapitalChange = (event) => {
    setCapital(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div className="container center">
      <h1>React - Juros Compostos</h1>
      <Form
        capital={capital}
        interestRate={interestRate}
        period={period}
        handleCapitalChange={handleCapitalChange}
        handleInterestRateChange={handleInterestRateChange}
        handlePeriodChange={handlePeriodChange}
      />
      <Installments
        capital={capital}
        interestRate={interestRate}
        period={period}
      />
    </div>
  );
}
