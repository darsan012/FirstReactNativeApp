import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {loginApi} from '../services/loginApi';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    userDetails: userReducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);
