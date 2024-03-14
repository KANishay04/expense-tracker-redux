// store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Correct import of thunk middleware
import Reducer from './reducers'; // Corrected import
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) 
);
const persistor = persistStore(store);

export { store, persistor };
