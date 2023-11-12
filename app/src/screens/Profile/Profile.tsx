import React, { useCallback } from 'react';
import { Text, Button, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { Stack } from '../../App';
import { Camera, Profile as ProfileInfo } from '../../components';
import { styles } from './Profile.styles';
import { SCREENS } from '../../constants';

export function Profile(
  props: ScreenProps & { navigation: { navigate: (arg0: string) => void } },
): JSX.Element {
  // const { navigation } = props;

  // const handleNavigation = useCallback(() => {
  //   navigation.navigate(SCREENS.Tasks);
  // }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Camera'
        component={Camera}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name='ProfileInfo' component={ProfileInfo} /> */}
      {/* <Stack.Screen name='Settings' component={Settings} /> */}
    </Stack.Navigator>
  );
}
