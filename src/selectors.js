import { createSelector } from 'reselect';

// Селектор для выбора всех транзакций из состояния хранилища
const selectTransactions = state => state.transactions;

// Селектор для выбора выбранной категории из состояния хранилища
const selectSelectedCategory = state => state.selectedCategory;

const selectSelectedType = state => state.selectedType;

export const selectFilteredTransactions = createSelector(
  [selectTransactions, selectSelectedCategory, selectSelectedType],
  (transactions, selectedCategory, selectedType) => {
    if (selectedCategory === "All" && selectedType === "All") {
      return transactions;
    }
    if (selectedCategory === "All") {
      return transactions.filter(transaction => transaction.type === selectedType);
    }
    if (selectedType === "All") {
      return transactions.filter(transaction => transaction.category === selectedCategory);
    }
    return transactions.filter(transaction => transaction.category === selectedCategory && transaction.type === selectedType);
  }
);

export const selectSortedTransactionsByDate = createSelector(
  [selectFilteredTransactions],
  (filteredTransactions) => {
    return filteredTransactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }
);

export const selectSortedTransactionsByAmount = createSelector(
  [selectFilteredTransactions],
  (filteredTransactions) => {
    return filteredTransactions.slice().sort((a, b) => a.amount - b.amount);
  }
);
