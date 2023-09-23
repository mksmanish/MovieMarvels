import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import {StripeProvider} from '@stripe/stripe-react-native';

import {MovieContext} from './Context';

const App = () => {
  return (
    <StripeProvider publishableKey="getting from the stripe website">
      <MovieContext>
        <StackNavigator />
      </MovieContext>
    </StripeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
