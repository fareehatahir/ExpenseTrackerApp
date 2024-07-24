// screens/SignupScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './../Styles/AuthStyles';

export default function SignupScreen({ navigation }) {
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
      const existingCredentials = await AsyncStorage.getItem('credentials');
      const credentials = existingCredentials ? JSON.parse(existingCredentials) : {};

      if (credentials.email) {
        Alert.alert('Signup Error', 'An account with this email already exists.');
        return;
      }

      await AsyncStorage.setItem('credentials', JSON.stringify({ email, password }));
      Alert.alert('Signup Success', 'Account created successfully!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'An error occurred while signing up.');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 0.4, alignItems: 'center', marginVertical: 25 }}>
          <Image
            source={require('./../assets/images/logo.png')}
            style={{ width: 200, height: 200 }}
            resizeMode={'contain'}
          />
        </View>
        <View style={{ flex: 0.6, marginHorizontal: 20 }}>
          <Text
            style={styles.welcomeText}
          >
            Welcome To Expense Tracker {'\n'}
            <Text style={{ fontSize: 16 }}>Create a new account</Text>
          </Text>
          <Text style={styles.textHead}>
            Email
          </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
            value={email}
            placeholderTextColor={'grey'}
          />
          <Text style={styles.textHead}>
            Password
          </Text>
          <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            placeholder="Enter your Password"
            onChangeText={text => setPassword(text)}
            value={password}
            placeholderTextColor={'grey'}
          />
          <TouchableOpacity style={styles.buttonDark} onPress={handleSubmit}>
            <Text style={styles.buttonTextDark}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: 'grey',fontWeight:'900', margin: 10 }}>Already have an account? Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
