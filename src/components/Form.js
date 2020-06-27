import React from "react";
import Input from "./Input";

export default function Form({
  capital,
  handleCapitalChange,
  interestRate,
  handleInterestRateChange,
  period,
  handlePeriodChange,
}) {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4">
            <Input
              label={"Montante inicial"}
              id="montante-inicial"
              type="number"
              value={capital}
              onChange={handleCapitalChange}
            />
          </div>
          <div className="input-field col s4">
            <Input
              label={"Taxa de juros mensal"}
              id="taxa-juros-mensal"
              type="number"
              min={"-12"}
              max={"12"}
              step={".1"}
              value={interestRate}
              onChange={handleInterestRateChange}
            />
          </div>
          <div className="input-field col s4">
            <Input
              label={"Período (meses)"}
              id="period"
              type="number"
              min={"1"}
              step={"1"}
              value={period}
              onChange={handlePeriodChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
