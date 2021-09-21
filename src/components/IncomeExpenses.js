import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

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
          <p className="money plus">+₹{income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-₹{expense.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}
