import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    user: {},
  },
  reducers: {},
});

// export const {} = userSlice.actions;
export default userSlice.reducer;
