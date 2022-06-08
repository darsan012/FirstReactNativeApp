import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Alert,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = () => {
    if (!email || !password) {
      return Alert.alert(`Please provide all the fields`);
    }
    return navigation.navigate('Profile', {name: {email}});
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>LOGIN</Text>

          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <Text
            style={{
              textAlign: 'right',
              fontStyle: 'italic',
              paddingTop: 20,
              paddingBottom: 60,
            }}>
            Forgot Password?
          </Text>

          <Button title="Login" onPress={() => submitHandler()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingTop: 120,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 25,
    paddingBottom: 60,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontSize: 18,
  },
});

export default Login;
