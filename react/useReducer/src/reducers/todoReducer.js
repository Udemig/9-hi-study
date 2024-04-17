const todoReducer = (state, action) => {
  // Change theme aksiyonu dispatch edilince state'in nasıl değişceğine karar verdik
  // Dikkat etmemiz gereken nokta değiştirmiyeceğiz değerlerin return edilen mevcut state içerisinde kalmaya devam etmesi. Bunuda spread opertor ile state'in son halinin değerlerini dağıtarak elde ediyoruz.
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };

    case 'CREATE':
      //1) kaydedilecke olan todo nesnensini hazırla
      const newTodo = { id: new Date().getTime(), text: action.payload };

      //2) yeni todoyu önceki todoların arasına ekle (yeni dizi gerekiyor)
      const updated = state.todos.concat(newTodo);

      //3) state'in güncel halini belirle
      return { ...state, todos: updated };

    case 'DELETE':
      //1) aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtred = state.todos.filter((i) => i.id !== action.payload);

      //2) state'i güncelle
      return { ...state, todos: filtred };

    default:
      return state;
  }
};

export default todoReducer;
