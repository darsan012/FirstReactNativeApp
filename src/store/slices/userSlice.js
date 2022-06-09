import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: AsyncStorage.getItem('user') ? AsyncStorage.getItem('user') : null,
  isLoggedIn: AsyncStorage.getItem('user') ? true : false,
};

export const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    login: async (state, action) => {
      state.user = {...action.payload};
      state.isLoggedIn = true;
      data = await AsyncStorage.setItem('user', JSON.stringify(action.payload));
      console.log(data, 'setTokenData');
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
