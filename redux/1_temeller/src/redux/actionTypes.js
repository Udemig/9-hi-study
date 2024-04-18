// Projede kullanılan aksiyon tipleri bileşen içerisnde string şeklinde tanımlandığında dikkat dağınıklığı sonucu oluşabilcek ve tespit etmesi zaman alan hataların önüne geçmek için tipleri bir nesne içerisnde tanımlaycağız

// Nesne şeklinde tanımladığımız için artık vscode'un oto. tamamlama özelliği sayesinde yazım hatalarının büyük oranda önüne geçicez

const ActionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE',
};

export default ActionTypes;

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
