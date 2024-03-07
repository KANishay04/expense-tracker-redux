// Import the action types
import { ADD_TRANSACTION, DELETE_TRANSACTION, EDIT_TRANSACTION } from "./actions";

// Initial state
const initialState = {
    transactions: []
};

// Reducer function
const expenseTrackerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
            };
        case EDIT_TRANSACTION: // Добавляем обработку действия редактирования транзакции
            return {
                ...state,
                transactions: state.transactions.map(transaction =>
                    transaction.id === action.payload.id ? action.payload : transaction
                )
            };
        default:
            return state;
    }
};

export default expenseTrackerReducer;
