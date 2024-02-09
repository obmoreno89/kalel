import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = import.meta.env.VITE_API_URL;

export const logoutApi = createApi({
  reducerPath: 'logoutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (builder) => ({
    postLogout: builder.mutation({
      query: (token) => ({
        url: '/auth/logout/',
        method: 'POST',
        body: token,
      }),
    }),
  }),
});

export const { usePostLogoutMutation } = logoutApi;
