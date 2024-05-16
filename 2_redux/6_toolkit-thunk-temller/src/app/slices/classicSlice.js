import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const classicSlice = createSlice({
  name: 'Classic',
  initialState: initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setUsers: (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.users = payload;
    },

    setError: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default classicSlice.reducer;
export const { setError, setUsers, setLoading } = classicSlice.actions;
