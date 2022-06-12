import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'userDetails',
  initialState: null,
  reducers: {
    getUserData(state, actions) {
      state.user = {...actions.payload};
      console.log(state);
    },
  },
});

export const {getUserData} = userSlice.actions;
export default userSlice.reducer;
