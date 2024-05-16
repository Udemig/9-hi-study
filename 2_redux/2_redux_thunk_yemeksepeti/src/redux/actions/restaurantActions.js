import api from '../../utils/api';
import Actions from '../actionTypes';

//! Asenkron Thunk Akisyonu
// Normalde redux asenkron işlemler yapabilen akiyonları kabul etmez bundan kaynaklı olarak bir thunk aksiyonu oluşturucaz

//? Nasıl Tanımlarız ?
// Bir thunk fonksiyonu tanınmlamak için bir fonksiyon içerisnde ikinci fonksiyonu return ederiz ve return ettiğimiz bu fonksiyon dispatch'i parametre olarak alır
const thunkFonksiyonu = () => {
  return (dispatch) => {
    // api isteklerini burada atarız ve dispatchi parametre olarak aldığı için dispatch gerçekleştirebiliriz
  };
};

//? İlk Örnek
//* Restoran verilerini alıp store'a aktaran bir aksiyon fonksiyonu yazıcaz
export const getRestaurants = () => (dispatch) => {
  dispatch({ type: Actions.REST_LOADING });

  api
    .get('/restaurants')
    .then((res) => dispatch({ type: Actions.REST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.REST_ERROR, payload: err.message })
    );
};
