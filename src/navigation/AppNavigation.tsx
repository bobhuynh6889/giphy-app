import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './index';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Routes from './Routes';

//screen
import Home from '../views/Home';
import Feedback from '../views/Feedback';

export default function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.HOME}
      >
        <Stack.Screen name={Routes.HOME} component={Home} />
        <Stack.Screen name={Routes.FEEDBACK} component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();