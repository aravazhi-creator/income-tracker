import React, { useState } from "react";

const AddIncome = ({ addIncome }) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !amount) return;

    addIncome({ id: Date.now(), source, amount: Number(amount) });
    setSource("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Income Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddIncome;