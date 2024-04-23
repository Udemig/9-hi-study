const initialState = {
  isLoading: false,
  error: null,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'X AKSİYONU':
      return state;

    case 'Y AKİSYONU':
      return state;

    case 'Z AKsiyonu':
      return state;

    default:
      return state;
  }
};

export default productReducer;
