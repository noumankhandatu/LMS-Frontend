"use client";

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import api from "./feature/auth/authApi";
import authReducer from "./feature/auth/authSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Add the auth slice to the reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in non-production environments
});

setupListeners(store.dispatch);

export default store;
