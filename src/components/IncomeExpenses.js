import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import { convertToCommaSeperatedCurrency } from "../utils/format";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  let income = 0,
    expense = 0;

  transactions.forEach((t) => {
    if (t.amount > 0) income += t.amount;
    else expense += Math.abs(t.amount);
  });
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            +₹{convertToCommaSeperatedCurrency(income)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            -₹{convertToCommaSeperatedCurrency(expense)}
          </p>
        </div>
      </div>
    </>
  );
}
