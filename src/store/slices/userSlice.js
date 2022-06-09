import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: AsyncStorage.getItem('user')
    ? JSON.parse(AsyncStorage.getItem('user'))
    : null,
  isLoggedIn: AsyncStorage.getItem('user') ? true : false,
};

const userSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    login: async (state, action) => {
      try {
        state.user = {...action.payload};
        state.isLoggedIn = true;
        data = await AsyncStorage.setItem(
          'user',
          JSON.stringify(action.payload),
        );
      } catch (error) {
        console.log(error, 'k vayo k vayo');
      }
    },
  },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;
