import React, { useState } from "react";

export default function EditTransactionForm({ transaction, editTransactionAction, cancelEdit }) {
  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(transaction.date);

  const onSubmit = (event) => {
    event.preventDefault();
    const updatedTransaction = {
      id: transaction.id,
      text: text,
      amount: amount,
      date: date
    };
    editTransactionAction(updatedTransaction);
    cancelEdit(); // Закрываем форму редактирования после обновления транзакции
  };

  return (
    <div>
      <h3>Транзакцияны өзгерту</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Текст</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter Text..."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Сумма</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Дата</label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Enter Date..."
            type="date"
          />
        </div>
        <button className="bttn">Транзакцияны жаңарту</button>
        <button className="btttn" onClick={cancelEdit}>Болдырмау</button>
      </form>
    </div>
  );
}
