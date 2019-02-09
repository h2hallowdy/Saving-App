import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GreetingScreen from './screens/Greeting';
// import { createAppContainer } from 'react-navigation';
// import AppNavigator from './AppNavigator';

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
    this.onDone = this.onDone.bind(this);
  }
  onDone() {
    this.setState({ showRealApp: true });
  }
  render() {
    console.log(this.state.showRealApp);
    if (this.state.showRealApp) {
      return (
        <View>
          <Text style={{ fontSize: 20 }}>Main app is now coming</Text>
        </View>
      )
    } else {
      return (
        <GreetingScreen onDone={this.onDone} />
      );
    }
  }
}

