// Değer tanımsızsa bilinmiyor tanımlıysa değeri döndüren bit fonksiyon
const checkValid = (value) => {
  return !value ? 'Bilinmiyor' : value;
};

export default checkValid;
