import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { count: 0, isDarkTheme: false },
  reducers: {}, //todo
});

// slice'İn oluşturduğu reducer fonksiyonunu store'a tanıtmak için export edelim
export default userSlice.reducer;
