import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;

  transactions.forEach((t) => {
    balance += t.amount;
  });

  return (
    <>
      <h4>Your Balance</h4>
      <h1>₹{balance.toFixed(2)}</h1>
    </>
  );
}
