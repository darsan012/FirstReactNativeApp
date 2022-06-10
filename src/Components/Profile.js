import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store/slices/userSlice';

const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.userDetails.user.accessToken);
  console.log(typeof loginData, 'hahajjaja');
  const items = [
    {
      text: 'Milk',
    },
    {
      text: 'Eggs',
    },
    {
      text: 'Juice',
    },
    {
      text: 'Cheese',
    },
  ];

  const logoutHandler = () => {
    AsyncStorage.clear();
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.profileContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <View>
            <Text>Name</Text>
            <Text>Email</Text>
          </View>
          {/* <FlatList
            data={items}
            renderItem={({item}) => <Text>{item.text}</Text>}
          /> */}
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
    marginHorizontal: 16,
    paddingTop: 10,
    width: width,
    height: height,
  },
  welcomeText: {},
});
export default Profile;
