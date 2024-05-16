const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KAYDOL':
      return state;

    case 'GİRİŞYAP':
      return state;

    default:
      return state;
  }
};

export default userReducer;
