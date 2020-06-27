import React from "react";
import { formatMoney, formatPercentage } from "../helpers/formatters";

export default function Installment({
  parcelNumber,
  ammount,
  accumulatedValue,
  accruedInterest,
}) {
  return (
    <li className="card-panel default-flex-row">
      <span className="chip">{parcelNumber.toString().padStart(3, "0")}</span>
      <div
        className="default-flex-column"
        style={Number(accruedInterest) < 0 ? style.negative : style.positive}
      >
        <td>{formatMoney(ammount)}</td>
        <td>{formatMoney(accumulatedValue)}</td>
        <td>{formatPercentage(accruedInterest)}</td>
      </div>
    </li>
  );
}

const style = {
  negative: {
    color: "#d84315",
  },
  positive: {
    color: "#00838f",
    textAligne: "right",
  },
  right: {},
};
