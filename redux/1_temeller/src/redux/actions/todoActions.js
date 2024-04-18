import ActionTypes from '../actionTypes';

// Action tanımları bileşen içerisnde çok fazla kod tekrarına ve kod kalabılıına sebep olduğundan kaynaklı olarak aksiyonları ayrı bir bileşende tanımlamaya karar verdik. aksiyonlar sonuç oalrak birer  nesne ama payload değerleri belli olmaıdığı için parametre alabıldğinden kaynaklı olarak bir fonskyionu yazmayı tercih ettik bu gonksiyon aldığı payloada göre bir aksiyon oluşturup return eder

export const addTodo = (payload) => {
  return { type: ActionTypes.ADD, payload };
};

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE,
  payload,
});
