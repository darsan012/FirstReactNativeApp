import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Profile = ({route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{route.params.userName}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
