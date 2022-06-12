import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL, apiRoutes} from '../config/configRoute';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getUserDetails: builder.query({
      query: ({id, token}) => {
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
