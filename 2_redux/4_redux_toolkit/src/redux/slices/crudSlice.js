import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  tasks: [
    {
      title: 'Navbar',
      author: 'Ali',
      assigned_to: 'Ahmet',
      end_date: '1212-12-12',
      id: '400840aa-e73e-4544-aa64-93827b4a7e82',
    },
    {
      title: 'Footer',
      author: 'Ayşe',
      assigned_to: 'Fatma',
      end_date: '3233-02-23',
      id: '0789a975-c4ac-43ac-af5d-42f17b708911',
    },
    {
      title: 'Home',
      author: 'Ahmet',
      assigned_to: 'Ali',
      end_date: '1243-12-12',
      id: '2777f9cd-6407-4584-9dcb-b1d6abd0835a',
    },
  ],
};

// toolkit ile birlikte slice'daki state'de tutulan herhangi bir veriyi doğrudan güncelleyebiliyoruz. burda örneğin bir dizideki elemeanı güncellemesi gerektiğinde map yerine splice eklenmesi gerektiğinde concat yerine push kullanmamızın önünü açar

const crudSlice = createSlice({
  name: 'crud',
  initialState,
  reducers: {
    // 1) yeni görev ekle
    addTask: (state, { payload }) => {
      // a) göreve id değeri ekle
      payload.id = v4();

      // b) görevi state'deki tasks dizisine ekle
      state.tasks.push(payload);
    },

    // 2) görevi kaldır
    deleteTask: (state, { payload }) => {
      // 1. Yöntem: Filter
      //   const filtred = state.tasks.filter((task) => task.id !== payload);

      //   state.tasks = filtred;

      // 2. Yöntem:
      // a) kaldırılıcak elemanın diizdeki sırasını bul
      const index = state.tasks.findIndex((i) => i.id === payload);

      // b) elemanı sil
      state.tasks.splice(index, 1);
    },

    // 3) görevi düzenle
    editTask: (state, { payload }) => {
      // düzenlenicek elemanın sırsasını bul
      const index = state.tasks.findIndex((i) => i.id === payload.id);

      // dizideki elemanı güncelle
      state.tasks.splice(index, 1, payload);
    },
  },
});

// store'a tanıtmak için reducer export edilir
export default crudSlice.reducer;

// projede kullanabilmek için aksiyonları export edicez
export const { addTask, deleteTask, editTask } = crudSlice.actions;
