import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userData: null,
  },
  reducers: {
    getUserData(state, actions) {
      try {
        state.userData = actions.payload;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const {getUserData} = userSlice.actions;
export default userSlice.reducer;
