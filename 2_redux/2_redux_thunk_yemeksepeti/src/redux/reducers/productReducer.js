import Actions from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  restaurant: null,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.PROD_LOADING:
      return { ...state, isLoading: true };

    case Actions.PROD_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case Actions.PROD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurant: action.payload[0].data,
        products: action.payload[1].data,
      };

    default:
      return state;
  }
};

export default productReducer;
