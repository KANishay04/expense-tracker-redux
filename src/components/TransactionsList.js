import React, { useState } from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, deleteTransaction, editTransaction }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("date");
  const [selectedType, setSelectedType] = useState("All");

  // Функция для фильтрации транзакций по выбранной категории и типу
  const filteredTransactions = transactions.filter(transaction => {
    if (selectedCategory !== "All" && selectedCategory !== transaction.category) {
      return false;
    }
    if (selectedType !== "All" && selectedType !== transaction.type) {
      return false;
    }
    return true;
  });

  // Функция для сортировки транзакций
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === "expense" ? -1 : 1; // Сначала сортируем по типу (расход/доход)
    } else {
      if (sortBy === "date") {
        return new Date(b.date) - new Date(a.date); // Сортировка по дате
      } else {
        return a.amount - b.amount; // Сортировка по сумме
      }
    }
  });

  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <h3>Транзакция</h3>
      <div>
        <label htmlFor="categorySelect">Выберите категорию:</label>
        <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Все</option>
          <option value="Еда">Еда</option>
          <option value="Транспорт">Транспорт</option>
          <option value="Коммунальные услуги">Коммунальные услуги</option>
          {/* Добавьте здесь другие категории */}
        </select>
      </div>
      
      <div>
        <label>Сортировать по:</label>
        <div>
          <label>
            <input type="radio" value="date" checked={sortBy === "date"} onChange={handleSortChange} />
            Дате
          </label>
          <label>
            <input type="radio" value="amount" checked={sortBy === "amount"} onChange={handleSortChange} />
            Сумме
          </label>
        </div>
      </div>
      <ul className="list">
        {sortedTransactions.map((transaction) => (
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
