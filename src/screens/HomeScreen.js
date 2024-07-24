// screens/HomeScreen.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart} from 'react-native-gifted-charts';
import styles from './../Styles/HomeScreenStyles';

LogBox.ignoreAllLogs(); // Ignore all log notifications

const HomeScreen = ({navigation}) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const loadExpenses = async () => {
        const storedExpenses = await AsyncStorage.getItem('expenses');
        if (storedExpenses) {
          setExpenses(JSON.parse(storedExpenses));
        }
      };
      loadExpenses();
    });
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item.date} {item.category} ${item.amount}
      </Text>
    </View>
  );

  const chartData = expenses
    .map((expense, index) => ({
      value: expense.amount,
      label: expense.date,
    }))
    .filter(data => data.value !== undefined && data.label);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome to Expense Tracker - your go-to app for effortlessly logging and
        managing your daily expenses, complete with insightful charts to help
        you visualize your spending habits!
      </Text>
      <Text
        style={{margin: 10, fontSize: 16, color: 'black', fontWeight: 'bold'}}>
        EXPENSE LIST ---
      </Text>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {chartData.length > 0 ? (
        <LineChart
          data={chartData}
          height={200}
          width={270}
          thickness={3}
          color="#72BB53"
          backgroundColor={'transparent'}
          hideYAxisText
          xAxisLabelTextStyle={styles.xAxisLabel}
        />
      ) : (
        <Text style={styles.noDataText}>No data available</Text>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('AddExpense')}
        style={styles.button}>
        <Text style={styles.buttonText}>ADD EXPENSE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
