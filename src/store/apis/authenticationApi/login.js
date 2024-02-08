import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = 'https://apisandbox.kalel.mx';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: api,
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { usePostLoginMutation } = loginApi;
