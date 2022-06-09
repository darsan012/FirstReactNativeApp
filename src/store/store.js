import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {loginApi} from '../services/loginApi';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    userDetails: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware),
});

setupListeners(store.dispatch);
