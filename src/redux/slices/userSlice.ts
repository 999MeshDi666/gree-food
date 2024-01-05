import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

const userSlice = createSlice({
  name: 'user',
  initialState: { token: '' },
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      SecureStore.setItemAsync('token', action.payload);
      state.token = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
