import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TUser } from '../types/user';

const ENDPOINT = `http://localhost:8000/api/auth`;

const authApi: any = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: ENDPOINT }),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    signup: builder.mutation<TUser, TUser>({
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

export const { useSignupMutation } = authApi;
export default authApi;
