// AddTransaction.js
import React, { useState } from "react";

export default function AddTransaction({ id, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(""); 
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
      date: date,
      category: category 
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
    setCategory(""); 
  };

  return (
    <div>
      <h3>Добавить транзакцию</h3>
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
        <div className="form-control">
          <label>Категория</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Выберите категорию</option>
            <option value="Еда">Еда</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Коммунальные услуги">Коммунальные услуги</option>
            {/* Добавьте здесь другие категории */}
          </select>
        </div>
        <button className="btn">Добавить транзакцию</button>
      </form>
    </div>
  );
}
