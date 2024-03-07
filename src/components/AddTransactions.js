import React, { useState } from "react";

export default function AddTransactions({id, addTransaction}) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const onSubmit = (event) => {
      event.preventDefault()
      const newTransaction = {
          id: id,
          text: text,
          amount: amount,
          date: date
      }
      addTransaction(newTransaction)
      setText("")
      setAmount(0)
      setDate("")
  }
  return (
    <div>
      <h3>Транзакция қосу</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Текст</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        <div className="form-control">
          <label>Сумма</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
          <label>Дата</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Amount..." type="date" />
        </div>
        <button className="btn">Транзакция қосу</button>
      </form>
    </div>
  );
}