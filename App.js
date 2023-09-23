import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import {MovieContext} from './Context';

const App = () => {
  return (
    <MovieContext>
      <StackNavigator />
    </MovieContext>
  );
};

export default App;

const styles = StyleSheet.create({});
