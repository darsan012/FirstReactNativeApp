import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query';

import {apiRoutes, BASE_URL} from '../config/configRoute';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async headers => {
      try {
        const token = useSelector(state => state.userDetails.user.accessToken);
        console.log(token, 'Token');
        headers.set('Authorization', `Bearer ${token}`);
        return headers;
      } catch (error) {
        console.log(error, 'error');
      }
    },
  }),
  endpoints: builder => ({
    getEmployee: builder.query({
      query: id => apiRoutes.getEmployee + id,
    }),
  }),
});

export const {useGetEmployeeQuery} = employeeApi;
