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

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  // action'ın tipine göre state'in nasıl değişeceğine switch case ile karar veririz
  switch (action.type) {
    case 'EKLE':
      return state;

    case 'SİL':
      return state;

    default:
      return state;
  }
};

export default todoReducer;
