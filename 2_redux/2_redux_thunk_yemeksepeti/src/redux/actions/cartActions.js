import { v4 } from 'uuid';
import api from '../../utils/api';
import Actions from '../actionTypes';
import { toast } from 'react-toastify';

// 1) API'dan sepetteki verileri alıp reducer'a aktaran thunk aksiyonu
export const getCart = () => (dispatch) => {
  dispatch({ type: Actions.CART_LOADING });

  api
    .get('/cart')
    .then((res) => dispatch({ type: Actions.CART_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: Actions.CART_ERROR, payload: err.message })
    );
};

// 2) API'a ve reducer'da tutlan state'e yeni bir sepet elemanı ekler
export const addToBasket = (product, restName) => (dispatch) => {
  // a) sepete eklenicek olan ürünün bilgilerini belirle
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: restName,
    amount: 1,
  };

  // b) elemanı api'a kaydet
  api
    .post('/cart', newItem)
    // c) api'dan olumlu cevap gelirse reducer'a haber ver ve bildirim gönder
    .then(() => {
      dispatch({ type: Actions.ADD_ITEM, payload: newItem });

      toast.success(`${newItem.title} sepete eklendi`);
    })
    // d) api'dan hata gelirse  bildirim gönder
    .catch(() => toast.error('Üzgünüz bir sorun oluştu'));
};

// 3) Sepetteki Elemanı Güncelle (Miktar Arttırma | Azaltma)
export const updateItem = (id, newAmount) => (dispatch) => {
  // a) api'daki veriyi güncelle
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    // b) istek başarılı olursa reducer'a haber ver
    .then((res) => {
      dispatch({
        type: Actions.UPDATE_ITEM,
        payload: res.data,
      });

      toast.info(`Ürünün miktarı arttırıldı (${newAmount})`);
    })
    // c) istek başarısız olursa bildirim gönder
    .catch(() => toast.error('Üzgünüz bir sorun oluştu'));
};

// 4) Elmanı sepetten kaldır
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => {
      dispatch({ type: Actions.DELETE_ITEM, payload: id });
      toast.warning('Ürün sepetten kaldırıldı');
    })
    .catch(() => toast.error('Üzgünüz bir sorun oluştu'));
};
