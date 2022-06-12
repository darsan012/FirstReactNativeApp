import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {loginApi} from '../services/loginApi';
import {employeeApi} from '../services/employeeApi';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [employeeApi.reducerPath]: employeeApi.reducer,
    authDetails: authReducer,
    userDetails: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loginApi.middleware, employeeApi.middleware),
});

setupListeners(store.dispatch);
