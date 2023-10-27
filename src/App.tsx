import 'react-native-gesture-handler';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Tasks } from './screens';
import { SCREENS } from './constants';
import {
  styles,
  stackNavigatorStyles,
  tabNavigatorStyles,
  drawerNavigatorStyles,
} from './App.styles';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const heightStatusBar = Platform.OS === 'ios' ? 38 : 0;

const profileStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171d31',
  },
});

function Profile() {
  return (
    <View style={profileStyle.container}>
      <Text>Profile</Text>
    </View>
  );
}

// const MyStatusBar = ({
//   backgroundColor,
//   barStyle,
// }: {
//   backgroundColor: string;
//   barStyle: 'light-content' | 'dark-content';
// }) => (
//   <View style={[{ height: StatusBar.currentHeight }, { backgroundColor }]}>
//     <SafeAreaView>
//       <StatusBar
//         translucent
//         backgroundColor={backgroundColor}
//         barStyle={barStyle}
//       />
//     </SafeAreaView>
//   </View>
// );

export function App(): JSX.Element {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer theme={DarkTheme}>
      <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
      <View style={styles.statusBariOSPadding} />
      <Stack.Navigator
        screenOptions={{
          ...stackNavigatorStyles,
          headerTintColor: stackNavigatorStyles.headerTintColor.color,
        }}>
        <Stack.Screen
          name={SCREENS.Home}
          component={Home}
          options={{ title: 'Home title' }}
        />
        <Stack.Screen
          name={SCREENS.Tasks}
          component={Tasks}
          options={{ title: 'Tasks title' }}
        />
      </Stack.Navigator>

      {/* <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
      <View style={styles.statusBariOSPadding} />
      <Tab.Navigator
      screenOptions={{
        ...tabNavigatorStyles,
        tabBarActiveTintColor: tabNavigatorStyles.tabBarActiveTintColor.color,
      }}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Tasks' component={Tasks} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator> */}

      {/* <StatusBar backgroundColor={styles.statusBar.backgroundColor} />
      <View style={styles.statusBariOSPadding} />
      <Drawer.Navigator
      screenOptions={{
        ...drawerNavigatorStyles,
        drawerActiveTintColor:
        drawerNavigatorStyles.drawerActiveTintColor.backgroundColor,
      }}>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Tasks' component={Tasks} />
      <Drawer.Screen name='Profile' component={Profile} />
    </Drawer.Navigator> */}
    </NavigationContainer>
    // </SafeAreaView>
  );
}
