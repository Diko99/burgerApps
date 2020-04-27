import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ForgotPassword from './src/screens/forgotPasswordScreen'
import OnBoardingScreen from './src/screens/onBoardingScreen'
import LoginScreen from './src/screens/loginScreen'
import SignUpScreen from './src/screens/signUpScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='onBoardingScreen'
        screenOptions={{ headerShown: false }} // hide title header default reactnavigatior
      >
        <Stack.Screen
          name='onBoardingScreen'
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPassword}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
