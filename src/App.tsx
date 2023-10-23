import React, { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, List } from './screens';
import { styles } from './App.styles';

const { Navigator, Screen } = createNativeStackNavigator();

export function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' component={Home} />
        <Screen name='List' component={List} />
      </Navigator>
    </NavigationContainer>
  );
}
