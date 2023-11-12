import React, { useCallback } from 'react';
import { Text, Button, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
// import { Stack } from '../../App';
import { styles } from './Profile.styles';
import { SCREENS } from '../../constants';

export function Profile(
  props: ScreenProps & { navigation: { navigate: (arg0: string) => void } },
): JSX.Element {
  const { navigation } = props;

  const handleNavigation = useCallback(() => {
    navigation.navigate(SCREENS.Camera);
  }, [navigation]);

  return (
    <View>
      <Button title='Open Camera' onPress={handleNavigation} />
    </View>
  );
}
