import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {apiRoutes, BASE_URL} from '../config/configRoute';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: headers => {
      const token = AsyncStorage.getItem('token');
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getLogin: builder.mutation({
      query: data => {
        return {
          url: apiRoutes.getLogin,
          method: 'POST',
          body: {...data},
        };
      },
    }),
  }),
});

export const {useGetLoginMutation} = loginApi;
