import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Home, Lists } from './screens';
import { styles } from './App.styles';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

function Profile() {
  return (
    <View style={profileStyle.container}>
      <Text>Profile</Text>
    </View>
  );
}

export function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#821109',
          tabBarLabelStyle: { fontSize: 16, color: '#fff' },
          tabBarStyle: { backgroundColor: '#f4511e' },
        }}>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Lists' component={Lists} />
        <Tab.Screen name='Profile' component={Profile} />
      </Tab.Navigator>
      {/* <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Screen
          name='Home'
          component={Home}
          options={{ title: 'Home title' }}
        />
        <Screen
          name='List'
          component={List}
          options={{ title: 'List title' }}
        />
      </Navigator> */}
    </NavigationContainer>
  );
}
