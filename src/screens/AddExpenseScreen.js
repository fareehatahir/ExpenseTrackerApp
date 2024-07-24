// screens/AddExpenseScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './../Styles/AddExpenseScreenStyles';

const AddExpenseScreen = ({navigation}) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const validateDate = date => {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(date);
  };

  const validateAmount = amount => {
    return !isNaN(amount) && amount > 0;
  };

  const validateCategory = category => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(category);
  };

  const saveExpense = async () => {
    if (!date || !amount || !category) {
      Alert.alert('Missing Fields', 'Please fill all fields');
      return;
    }

    if (!validateDate(date)) {
      Alert.alert('Invalid Date', 'Date must be in the format DD_MM_YYYY');
      return;
    }

    if (!validateAmount(amount)) {
      Alert.alert('Invalid Amount', 'Amount must be a positive number');
      return;
    }

    if (!validateCategory(category)) {
      Alert.alert('Invalid Category', 'Category must only contain letters');
      return;
    }

    const newExpense = {date, amount: parseFloat(amount), category};
    const storedExpenses = await AsyncStorage.getItem('expenses');
    const expenses = storedExpenses ? JSON.parse(storedExpenses) : [];
    expenses.push(newExpense);
    await AsyncStorage.setItem('expenses', JSON.stringify(expenses));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SAVE YOUR EXPENSE HERE!!</Text>
      <Text style={styles.text}>Date:</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="DD-MM-YYYY"
        placeholderTextColor={'black'}
        style={styles.inputField}
      />
      <Text style={styles.text}>Amount:</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Amount"
        placeholderTextColor={'black'}
        style={styles.inputField}
      />
      <Text style={styles.text}>Category:</Text>
      <TextInput
        value={category}
        onChangeText={setCategory}
        placeholder="Category"
        placeholderTextColor={'black'}
        style={styles.inputField}
      />
      <TouchableOpacity onPress={saveExpense} style={styles.button}>
        <Text style={styles.buttonText}>SAVE EXPENSE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpenseScreen;
