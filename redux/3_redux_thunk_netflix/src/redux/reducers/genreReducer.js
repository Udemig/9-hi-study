import Actions from '../actionTypes';

const initialState = {
  isLoading: false,
  error: null,
  genres: [],
};

const genreReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.GENRES_LOADING:
      return state;

    case Actions.GENRES_ERROR:
      return state;

    case Actions.GENRES_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default genreReducer;
