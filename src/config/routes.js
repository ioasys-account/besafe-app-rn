import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { IdentificationScreen } from 'screens/Identification';
import { Profile as ProfileScreen, SuccessScreen } from 'screens/Profile';
import { PreConditionsScreen } from 'screens/PreConditions';
import { RiskScreen } from 'screens/Risk';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const Navigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName='Identification'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Identification' component={IdentificationScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='PreConditions' component={PreConditionsScreen} />
      <Stack.Screen name='Success' component={SuccessScreen} />
      <Stack.Screen name='Risk' component={RiskScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
