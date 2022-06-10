import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {apiRoutes, BASE_URL} from '../config/configRoute';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async headers => {
      try {
        const token = JSON.parse(await AsyncStorage.getItem('user'));
        console.log(token, 'token');
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      } catch (error) {
        console.log('some error', error);
      }
    },
  }),
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
