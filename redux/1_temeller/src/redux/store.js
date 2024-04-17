/*
 ! store oluşturma
 * 1. redux kütüphanesinden "createStore" methodu import edilir
 * 2. tutulacak olan farklı türlerdeki veriler için reducerlar oluşturulur
 * 3. oluşturlan reducer "combineReducers" ile birleştirilir
 * 4. store'a birleştirilen reducerlar tanıtılır
*/

import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import todoReducer from './reducers/todoReducer';

// birden fazla reducer varsa bunları birleştiririz
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluşturma
const store = createStore(rootReducer);

// projeye tanıtmak için export
export default store;
