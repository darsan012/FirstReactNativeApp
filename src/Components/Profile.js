import * as React from 'react';
import {View, Text} from 'react-native';

const Profile = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Profile;
