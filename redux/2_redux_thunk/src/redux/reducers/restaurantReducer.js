import Actions from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.REST_LOADING:
      return { ...state, isLoading: true };

    case Actions.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case Actions.REST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        restaurants: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
