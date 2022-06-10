import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'userDetails',
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
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
