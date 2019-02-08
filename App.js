import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GreetingScreen from './screens/Greeting';

export default class App extends React.Component {
  render() {
    return (
      <GreetingScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
