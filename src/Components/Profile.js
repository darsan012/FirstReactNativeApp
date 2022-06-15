import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyGetUserDetailsQuery} from '../services/employeeApi';
import {logout} from '../store/slices/authSlice';
import {getUserData} from '../store/slices/userSlice';
import ListItem from './ListItem';

const Profile = ({navigation, route}) => {
  const [getUserDetails, response] = useLazyGetUserDetailsQuery();
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.authDetails.user);
  const userData = useSelector(state => state.userDetails.userData);
  useEffect(() => {
    const getUser = async () => {
      try {
        await getUserDetails({id: loginData.id, token: loginData.accessToken});
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [getUserDetails]);

  const data = response.data && response.data.payload.data;
  useEffect(() => {
    const getData = async () => {
      try {
        await (data && dispatch(getUserData({...data})));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [data]);

  const about = userData && userData.about;
  about && console.log(about, 'about');

  const logoutHandler = () => {
    AsyncStorage.clear();
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      {userData && (
        <ScrollView>
          <View>
            <Image
              source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
              style={styles.img}
            />
          </View>
          <View style={styles.profileContainer}>
            <Text style={styles.welcomeText}>Welcome {about.name}</Text>
            <View>
              <Text>Email: {about.email}</Text>
              <Text>Cell No: {about.cellNo}</Text>
            </View>
            <Text>Have a nice day!</Text>
            <View>
              <Button title="Logout" onPress={() => logoutHandler()} />
            </View>
          </View>
        </ScrollView>
      )}
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
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  welcomeText: {},
});
export default Profile;
