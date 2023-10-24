import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Lists } from './screens';
// import { styles } from './App.styles';

// const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

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
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home title' }}
        />
        <Stack.Screen
          name='Lists'
          component={Lists}
          options={{ title: 'Lists title' }}
        />
      </Stack.Navigator> */}
      {/* <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: '#821109',
                tabBarLabelStyle: { fontSize: 16, color: '#fff' },
                tabBarStyle: { backgroundColor: '#f4511e' },
              }}>
              <Tab.Screen name='Home' component={Home} />
              <Tab.Screen name='Lists' component={Lists} />
              <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator> */}
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#821109',
          drawerLabelStyle: { fontSize: 16, color: '#fff' },
          drawerStyle: { backgroundColor: '#f4511e' },
        }}>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Lists' component={Lists} />
        <Drawer.Screen name='Profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
