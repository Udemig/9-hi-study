import { createSlice } from '@reduxjs/toolkit';
import { translateText } from '../actions';

const initialState = {
  isLoading: false,
  isError: false,
  answer: '',
};

const translateSlice = createSlice({
  name: 'translate',
  initialState,
  reducers: {
    setAnswer: (state, { payload }) => {
      state.answer = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
      state.answer = '';
    });
    builder.addCase(translateText.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isError = false;
      state.answer = payload;
    });
    builder.addCase(translateText.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default translateSlice.reducer;

export const { setAnswer } = translateSlice.actions;
