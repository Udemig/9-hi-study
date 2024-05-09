import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// asenkron thunk aksiyonu
// createAsyncThunk istediği parametreler
// 1) aksiyonun tipi
// 2) aksiyonun payload'ını return eden fonksiyon
export const getUsers = createAsyncThunk('updated/getUsers', async () => {
  // api isteğinden gelen cevabı al
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  // bu fonksiyon mutlaka aksiyonun payload'ını return etmeli
  return res.data;
});

// Asyn Thunk Aksiyonu , aksiyonu dispatch ettiğimiz zaman yaptığı isteğin durumuna göre otomatik olarak store'a aksiyonlar dispatch eder

// 1) pending: isteği yaptığı anda bu aksiyonu tetikler

// 2) fulfilled: istek barşarışı olduğu anda bu aksiyonu tetikler
// payload kısmı bizim return ettiğimiz değerdir

// 3) rejected: istekte hata olursa bu aksiyon ettiklenir
