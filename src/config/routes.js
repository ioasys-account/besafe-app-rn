import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';

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
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigator;
