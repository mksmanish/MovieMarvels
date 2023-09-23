import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import {StripeProvider} from '@stripe/stripe-react-native';

import {MovieContext} from './Context';

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51Ns2dOSJwOwrFd1LKWnUcnOB4Snuq35c2eNNZE2bs6fdeq0fI220Eu5h59NHm4VOZDYqyHXQcPXZD9G2BJ3GE5ZG00gihX0ecg">
      <MovieContext>
        <StackNavigator />
      </MovieContext>
    </StripeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
