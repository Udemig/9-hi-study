import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

// configureStore - createStore farkları
// 1- varsayılan olarak thunk kurulu gelir
// 2- verilem reducerlar otomatik olarak birleştir
// 3- devtools eklentisi kurulu gelir
export default configureStore({
  reducer: { counterReducer, userReducer },
});
