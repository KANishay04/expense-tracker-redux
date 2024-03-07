import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, deleteTransaction, editTransaction }) {
  transactions = transactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div>
      <h3>Транзакция</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  );
}
