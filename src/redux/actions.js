// actions.js
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const EDIT_TRANSACTION = 'EDIT_TRANSACTION'; // Новое действие для редактирования транзакции

export function addTransaction(transaction) {
  return {
    type: ADD_TRANSACTION,
    payload: transaction
  };
}

export function deleteTransaction(id) {
  return {
    type: DELETE_TRANSACTION,
    payload: id
  };
}

export function editTransaction(transaction) {
  return {
    type: EDIT_TRANSACTION,
    payload: transaction
  };
}
