/*
 * createSlice methodu import edilir
 * createSlice'in istedği parametreler
 * - - name: slice ismi > string
 * - - initialState: başlangıç state'i
 * - - reducers: aksiyonların görevlerini tanımladığımız fonksiyonlar
 */

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, isDarkTheme: true },
  // state'in nasıl değişiceğine karar veren fonksiyonları tanımalama
  reducers: {
    // 1.aksiyon
    increase: (state) => {
      state.count++;
    },

    // 2.aksiyon
    decrease: (state) => {
      state.count--;
    },

    // 3.aksiyon
    setCount: (state, action) => {
      state.count = action.payload;
    },

    // 4.aksiyon
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// slice'İn oluşturduğu reducer fonksiyonunu store'a tanıtmak için export edelim
export default counterSlice.reducer;

// sliice'in oluşturduğu aksiyon oluşturan fonksiyonları bileşenlerde kullanabilmek için export edelim
export const { decrease, increase, setCount, toggleTheme } =
  counterSlice.actions;
