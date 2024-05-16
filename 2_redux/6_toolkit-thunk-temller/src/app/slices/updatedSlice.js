import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../actions/userActions';

const initialState = {
  isLoading: false,
  isError: false,
  users: [],
};

const updatedSlice = createSlice({
  name: 'updated',
  initialState,
  reducers: {},
  // thunk aksiyonun "pending" / "rejected" / "fulfilled" aksiyonlarını tetiklendiğinde store'u nasıl etkileyeceğini söyleyebilmek için extraReducers kullanılır
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.users = payload;
    });

    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default updatedSlice.reducer;
