import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {apiRoutes} from '../config/configRoute';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: apiRoutes.BASE_URL,
  }),
  endpoints: builder => ({
    getUserDetails: builder.query({
      query: ({id, token}) => {
        console.log('hello');
        return {
          url: apiRoutes.getUser + id,
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const {useLazyGetUserDetailsQuery} = employeeApi;
