import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../store/slices/userSlice';

const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    AsyncStorage.clear();
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text>Welcome</Text>
          <View>
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
          <Text>Have a nice day!</Text>
          <View>
            <Button title="Logout" onPress={() => logoutHandler()} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  profileContainer: {
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    width: width,
    height: height,
  },
});
export default Profile;
