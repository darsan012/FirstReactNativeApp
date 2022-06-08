import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: AsyncStorage.getItem('user')
    ? JSON.parse(AsyncStorage.getItem('user'))
    : null,
  isLoggedn: localStorage.getItem('user') ? true : false,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = {...action.payload};
      state.isLoggedn = true;
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
