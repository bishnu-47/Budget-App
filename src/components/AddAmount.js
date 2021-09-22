import React, { useState, useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

export default function AddAmount() {
  const { addTransaction } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmitHandler(e) {
    e.preventDefault();
    const newTransaction = {
      text: title,
      amount: Number(amount),
    };

    addTransaction(newTransaction);
    setTitle("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
