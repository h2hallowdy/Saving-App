import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GreetingScreen1 from './screens/Greeting';
import GreetingScreen2 from './screens/Greeting2';
const AppNavigator = createStackNavigator({
    GreetingScreen1: {
        screen: GreetingScreen1
    },
    GreetingScreen2: {
        screen: GreetingScreen2
    }
});

export default AppNavigator;