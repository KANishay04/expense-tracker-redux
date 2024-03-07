import React from "react";

export default function Transaction({ transaction, deleteTransaction, editTransaction }) {
  let sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="edit-btn"
        onClick={() => editTransaction(transaction)}
      >
        Edit
      </button>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}
