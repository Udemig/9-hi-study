import { useReducer } from 'react';
import reducer from '../reducers/counterReducer';

const Counter = () => {
  /*
   * useReducer:
   * Bir bileşenin state yönetimini useState ile birlikte zor bir hale geldiği zaman useState yerine tercih ettiğimiz reat hooku.
    
   * Bizden istediği argümanlar:
   * reducer >> state'in nasıl değişeceğine karar veren fonksiyon
   * initialState >> tutucağımız state'in ilk değeri 
   
   * Bize döndürdüğü değerler:
   * count >> state'in güncel hali
   * dispatch >> state'i güncellemek için kullanılan method 
   */
  const [state, dispatch] = useReducer(reducer, 10);

  return (
    <div className="d-flex gap-4 align-items-center">
      <button onClick={() => dispatch('SIFIRLA')}>Sıfırla</button>
      <button onClick={() => dispatch('AZALT')}>-</button>
      <span className="fs-1 lead">{state}</span>
      <button onClick={() => dispatch('ARTTIR')}>+</button>
    </div>
  );
};

export default Counter;
