/*
 * reducer: useReducer ile yönteilen state'in aldığı aksiyonlara göre nasıl değişceğine karar veren fonksiyon

 * aldığı parametreler
 * >> state'in son hali
 * >> aldığı action
  
 * reducer fonksiyonu gelen aksiyona göre state'İn nasıl değişeceğine karar verer

 *  askiyonları bileşenlerde dispatch methodu yardımıyla reducer'a gönderebiliyoruz

 * reducer fonksişşyonun return etttiği değer state'in son hali oluır
 */

const reducer = (state, action) => {
  if (action === 'ARTTIR') return state + 1;
  if (action === 'AZALT') return state - 1;
  if (action === 'SIFIRLA') return 0;
};

export default reducer;
