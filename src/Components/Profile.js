import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../store/slices/userSlice';

const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    console.log('hello');
    // Alert.alert('yeah');

    AsyncStorage.clear();
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Welcome</Text>
          <Button title="Logout" onPress={() => logoutHandler()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
