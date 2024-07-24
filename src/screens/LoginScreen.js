// screens/LoginScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import styles from './../Styles/AuthStyles';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    // Validation checks
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Please enter your email.');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Validation Error', 'Please enter your password.');
      return;
    }

    try {
      const storedCredentials = await AsyncStorage.getItem('credentials');
      const credentials = storedCredentials
        ? JSON.parse(storedCredentials)
        : {};

      if (credentials.email === email && credentials.password === password) {
        // Resetting the navigation stack
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}],
          }),
        );
      } else {
        Alert.alert('Login Error', 'Invalid email or password.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while logging in.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 0.5, alignItems: 'center', marginVertical: 25}}>
          <Image
            source={require('./../assets/images/logo.png')}
            style={{width: 200, height: 200}}
            resizeMode={'contain'}
          />
        </View>
        <View style={{flex: 0.6, marginHorizontal: 20}}>
          <Text style={styles.welcomeText}>
            Welcome To Expense Tracker {'\n'}
            <Text style={{fontSize: 16}}>Login to your Account</Text>
          </Text>
          <Text style={styles.textHead}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
            value={email}
            placeholderTextColor={'grey'}
          />
          <Text style={styles.textHead}>Password</Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder="Enter your Password"
            onChangeText={text => setPassword(text)}
            value={password}
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity style={styles.buttonDark} onPress={handleSubmit}>
            <Text style={styles.buttonTextDark}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontWeight: '900', color: 'grey', margin: 10}}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
