/*
 ! reducer
 * state'in nasıl değişeveğine karar verir.
 * reducer normal bir fonksiyondur.
 * ve bu fonksiyon iki parametre alır
 * > state: reducer'tutulan state'in son durumu
 * > action: state'in nasıl değişceğini ifade edn bileşenlerden gönderilen nesne
  
 * not: reducer fonksiyonundan return edilen veri reducer'da tutulan state'in son hali olur
 
 * not-2: useReducer'dan farklı olarak initialState'i state parametresine varsayılan değer olarak atarız
*/

import ActionTypes from '../actionTypes';
import { toast } from 'react-toastify';

const initialState = {
  todos: [
    {
      id: '0b3c3963-a7b0-42d0-9c35-464f72d70d37',
      text: 'javascript öğren',
      is_done: true,
      created_at: '18.04.2024',
    },
    {
      id: '87a6dece-3862-4e5c-9a8d-3f57d06fea6a',
      text: 'react projesi yap',
      is_done: false,
      created_at: '18.04.2024',
    },
    {
      id: 'd89679bd-a2c9-4b65-b914-a818a5cc0459',
      text: 'typescript çalış',
      is_done: false,
      created_at: '18.04.2024',
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  // action'ın tipine göre state'in nasıl değişeceğine switch case ile karar veririz
  switch (action.type) {
    case ActionTypes.ADD:
      toast.success('Görev başarıyla eklendi');

      return { todos: state.todos.concat(action.payload) };

    case ActionTypes.DELETE:
      // payload ile gelen id'deki elemanın diziden kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      toast.error('Görev listeden kaldırıldı');

      return { todos: filtred };

    case ActionTypes.UPDATE:
      // dizideki id'si ve güncel değerleri bilenen elemanı güncelleme
      // map ile yeni bir dizi oluşturduk ve mevcut dizideki elemaların arasından id 'si güncellenicek olan elemanın id'sine eşit olan elemanın yerine güncel değerine yeni diziye eklerken id si eşit olamayan elemanların mevuct değerlerini yeni diziye ekledik
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      toast.info('Görev başarıyla güncellendi');

      return { todos: updated };

    default:
      return state;
  }
};

export default todoReducer;
