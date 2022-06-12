import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'authDetails',
  initialState,
  reducers: {
    login: (state, action) => {
      try {
        state.user = {...action.payload};
        state.isLoggedIn = true;
      } catch (error) {
        console.log(error, 'Error inside user slice');
      }
    },
    logout: (state, action) => {
      try {
        state.isLoggedIn = false;
      } catch (error) {
        console.log(error, 'Error inside user slice');
      }
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
