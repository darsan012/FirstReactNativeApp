import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {apiRoutes, BASE_URL} from '../config/configRoute';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
