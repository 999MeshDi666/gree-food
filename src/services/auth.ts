import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TUser } from '../types/user';
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
    signUp: builder.mutation<TUser, TUser>({
      query: (data) => {
        return {
          url: `${ENDPOINT}/signup`,
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useSignUpMutation } = authApi;
export default authApi;
