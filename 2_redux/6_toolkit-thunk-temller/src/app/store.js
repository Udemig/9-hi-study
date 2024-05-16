import { configureStore } from '@reduxjs/toolkit';
import classic from './slices/classicSlice';
import updated from './slices/updatedSlice';

export default configureStore({
  reducer: { classic, updated },
});
