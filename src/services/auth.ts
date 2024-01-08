import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../types/user';
import { Platform } from 'react-native';

// const ENDPOINT = `http:/localhost:8000/api/auth`;
const ENDPOINT =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:8000/api/auth'
    : 'http://localhost:8000/api/auth';

const authApi: any = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    signUp: builder.mutation<IUser, IUser>({
      query: (data) => ({
        url: `${ENDPOINT}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation<IUser, IUser>({
      query: (data) => ({
        url: `${ENDPOINT}/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
export default authApi;
