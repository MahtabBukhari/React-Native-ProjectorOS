import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen.component';
import HomeScreen from '../screens/HomeScreen/HomeScreen.component';
import LoginScreen from '../screens/LoginScreen/LoginScreen.component';
import SignupScreen from '../screens/SignupScreen/SignupScreen.component';

const Stack = createNativeStackNavigator();

export default function AppNavigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headershown: false}}
      />
      <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headershown: false}}
    />
    <Stack.Screen
    name="LoginScreen"
    component={LoginScreen}
    options={{headershown: false}}
  />
  <Stack.Screen
  name="SignupScreen"
  component={SignupScreen}
  options={{headershown: false}}
/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};