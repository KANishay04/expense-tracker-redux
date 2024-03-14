// redux/actions.js
export function addTransaction(transaction) {
  return {
    type: 'ADD_TRANSACTION', // Use string directly instead of constant
    payload: transaction
  };
}

export function deleteTransaction(id) {
  return {
    type: 'DELETE_TRANSACTION', // Use string directly instead of constant
    payload: id
  };
}

export function editTransaction(transaction) {
  return {
    type: 'EDIT_TRANSACTION', // Use string directly instead of constant
    payload: transaction
  };
}

export function setFilter(filter) {
  return {
    type: 'SET_FILTER', // Use string directly instead of constant
    payload: filter
  };
}

export function setSort(sort) {
  return {
    type: 'SET_SORT', // Use string directly instead of constant
    payload: sort
  };
}
