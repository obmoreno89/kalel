import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { loginApi } from './apis/authenticationApi/loginApi';
import { logoutApi } from './apis/authenticationApi/logoutApi';

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([loginApi.middleware, logoutApi.middleware]),
});

setupListeners(store.dispatch);
