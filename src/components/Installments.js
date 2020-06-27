import React from "react";
//import Installment from "./Installment";

import { formatMoney, formatPercentage } from "../helpers/formatters";

export default function Installments({ capital, interestRate, period }) {
  const getInstallments = () => {
    const instalmments = Array.from({ length: period }).map((_, index) => {
      const parcelNumber = index + 1;
      const ammount = capital * (1 + interestRate / 100) ** parcelNumber;
      const accumulatedValue = ammount - capital;
      const accruedInterest = (accumulatedValue / capital) * 100;

      return {
        parcelNumber,
        ammount,
        accumulatedValue,
        accruedInterest,
      };
    });

    return instalmments;
  };

  return (
    <div>
      {/* <ul className="row">
        {getInstallments().map(
          ({ parcelNumber, ammount, accumulatedValue, accruedInterest }) => {
            return (
              <Installment
                key={parcelNumber}
                parcelNumber={parcelNumber}
                ammount={ammount}
                accumulatedValue={accumulatedValue}
                accruedInterest={accruedInterest}
              />
            );
          }
        )}
      </ul> */}

      <table className="responsive-table centered striped">
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Total Acumulado</th>
            <th>Rendimento</th>
            <th>Juros Acumulado</th>
          </tr>
        </thead>
        <tbody>
          {getInstallments().map(
            ({ parcelNumber, ammount, accumulatedValue, accruedInterest }) => {
              return (
                <tr key={parcelNumber}>
                  <td>{parcelNumber}</td>
                  <td>{formatMoney(ammount)}</td>
                  <td>{formatMoney(accumulatedValue)}</td>
                  <td>{formatPercentage(accruedInterest)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
